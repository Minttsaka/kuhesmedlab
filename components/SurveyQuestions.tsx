'use client'

import { use, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { ChevronRightIcon, Heart } from 'lucide-react'
import { Option, Prisma, Survey, SurveyForm, User, } from '@prisma/client'
import { StarIcon } from '@radix-ui/react-icons'
import QuestionnaireGuidelines from './QuestionnaireGuidelines'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios'
import { aiSurveyAnalysis, setCookie, surveyAnalysis } from '@/lib/actions'
import Link from 'next/link'

export type ResearchWithAllRelations = Prisma.SurveyFormGetPayload<{
  include:{
    survey:true,
    questions:{
      include:{
        options:true
      }
    }
  }
}>;


export default function SurveyQuestions({ forms, sessionid ,user }: {forms:ResearchWithAllRelations, sessionid :string | undefined, user:User}) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isCompleted, setIsCompleted] = useState(false)
  const [id, setId]=useState<string>()
  const [isIntro, setIsIntro] = useState<boolean>(true)
  const [isAnswered, setIsAnswered] = useState<boolean>(false)
  const [questionTimes, setQuestionTimes] = useState<Record<string, { startTime: Date | null, endTime: Date | null }>>({});

  const getActionToken =async()=>{
    const idFromServer= await setCookie()
    setId(idFromServer)
  }

  useEffect(() => {
    const currentQuestionId = forms.questions[currentQuestionIndex]?.id;
    setQuestionTimes(prev => ({
      ...prev,
      [currentQuestionId]: {
        startTime: new Date(),
        endTime: null
      }
    }));
  }, [currentQuestionIndex]);


  useEffect(() => {
    const savedProgress = localStorage.getItem(forms.title);
    if (savedProgress !== null) {
      setCurrentQuestionIndex(parseInt(savedProgress, 10));
    }
  }, []);

  useEffect(()=>{
    if(sessionid){
      setId(sessionid)
    }
    if(!user && sessionid===undefined){
      getActionToken()
    }
    
  },[])

  const currentQuestion = forms.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / forms.questions.length) * 100


  const aiAnalysis = async ()=>{

    try {

      const {
        completionRate,
        totalResponses,
        demographicData,
        responseTrends,
        averageTimeTakenInMinutes,
        formData
      } = await surveyAnalysis(forms.survey.id)

      const data = {
        completionRate: completionRate,  
        totalResponses: totalResponses, 
        demographicData: demographicData, 
        responseTrends: responseTrends,
        averageTimeTakenInMinutes: averageTimeTakenInMinutes,
        formData: formData,
      };
      
      const inputData = JSON.stringify(data);
      await aiSurveyAnalysis(forms.survey.id, inputData )
      
      
    } catch (error) {

      console.log(error)
      
    }

  }
  const handleAnswer = async (answer: string) => {

    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }))

    const endTime = new Date();
    const currentQuestionId = currentQuestion.id;
    const startTime = questionTimes[currentQuestionId]?.startTime || new Date(); // Default to now if no start time
    const timeTaken = startTime ? (endTime.getTime() - startTime.getTime()) / 1000 : 0; // Time in seconds

    setAnswers(prev => ({ ...prev, [currentQuestionId]: answer }));

    // Update end time for the current question
    setQuestionTimes(prev => ({
      ...prev,
      [currentQuestionId]: {
        ...prev[currentQuestionId],
        endTime: endTime
      }
    }));

    try {
      await axios.post('/api/answer',{
       answer,
       userId:id,
       questionId:currentQuestion.id,
       startTime,
       endTime, 
       timeTaken 
       
      })
      aiAnalysis()
    } catch (error) {
      
    } finally{
      setIsAnswered(true)
    }
   
    localStorage.setItem(forms.title, (currentQuestionIndex + 1).toString());
    
  }

  const handleNext = () => {
    if (currentQuestionIndex < forms.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
      setIsAnswered(false)
    } else {
      setIsCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const array = Array.from({ length: currentQuestion?.rating! }, (_, i) => i + 1);
  const rating = Number(answers[currentQuestion?.id])

  const renderQuestion = () => {
    switch (currentQuestion?.type) {
      case 'Rating':
        return (
          <>
           <Label className='text-indigo-700' htmlFor="answer">{currentQuestion.title}</Label>
           <div className="flex items-center space-x-1">
            {array.map((star) => (
              <StarIcon
                key={star}
                id='answer'
                className={`w-8 h-8 cursor-pointer ${
                  star <= rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
                }`}
                onClick={() => handleAnswer(star.toString())}
              />
            ))}
          </div>
          </>
         
        )
      case 'Short_Answer':
        return (
          <div className="space-y-2">
            <Label className='text-indigo-700' htmlFor="answer">{currentQuestion.title}</Label>
            <Input
              id="answer"
              placeholder="Type your answer here"
              onChange={(e) => handleAnswer(e.target.value)}
            />
          </div>
        )
      case 'Multiple_Choice':
        return (
          <div className="space-y-2">
            <Label className='text-indigo-700'>{currentQuestion.title}</Label>
            <RadioGroup onValueChange={handleAnswer}>
              {currentQuestion.options?.map((option) => (
                <div key={option.id} className="flex items-center space-x-2">
                  <RadioGroupItem value={option.text} id={option.id} />
                  <Label htmlFor={option.id}>{option.text}</Label>
                </div>
              ))}
            </RadioGroup>
          </div>
        )
      case 'Paragraph':
        return (
          <div className="space-y-2">
            <Label className='text-indigo-700' htmlFor="answer">{currentQuestion.title}</Label>
            <Textarea
              id="answer"
              placeholder="Type your answer here"
              onChange={(e) => handleAnswer(e.target.value)}
            />
          </div>
        )
      default:
        return null
    }
  }

  const renderSummary = () => (
    <div className="flex items-center justify-center h-full">
      <div>
        {/* <div className="space-y-2">
          {forms.questions.map((question) => (
            <div key={question.id} className="bg-white bg-opacity-75 p-4 rounded-md">
              <p className="font-semibold">{question.title}</p>
              <p className="text-gray-600">{answers[question.id]}</p>
            </div>
          ))}
        </div> */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-lg max-w-md w-full text-center"
        >
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className="inline-block"
          >
            <Heart className="w-16 h-16 text-red-500 mx-auto mb-4" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Thank You!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-lg text-gray-600 mb-6"
          >
            Your participation in our survey means the world to us. Your insights will help shape a better future.
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-sm text-gray-500 italic"
          >
            &lsquo;Alone we can do so little; together we can do so much.&rsquo;- Helen Keller
          </motion.p>
        </motion.div>
        <div className='flex mt-2 justify-center'>
          <Link href={'/survey'}>
          <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>
                Exit
              </span>
              <svg
                fill="none"
                height="16"
                viewBox="0 0 24 24"
                width="16"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.75 8.75L14.25 12L10.75 15.25"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                />
              </svg>
            </div>
            <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
          </button>
          </Link>
        </div>
      </div>
      
    </div>
  )

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-100 p-4">
      <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="doodle-pattern" x="0" y="0" width="100" height="100" patternUnits="userSpaceOnUse">
            <path d="M10 10 Q 30 30, 50 10 T 90 10" fill="none" stroke="rgba(59, 130, 246, 0.2)" strokeWidth="2"/>
            <circle cx="80" cy="80" r="3" fill="rgba(167, 139, 250, 0.3)"/>
            <path d="M80 30 Q 90 40, 80 50 T 80 70" fill="none" stroke="rgba(167, 139, 250, 0.2)" strokeWidth="2"/>
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#doodle-pattern)" />
      </svg>
      <div className="max-w-2xl w-full bg-white bg-opacity-90 p-8 rounded-lg shadow-lg space-y-8 relative z-10">
        <h1 className=" font-bold text-center text-gray-800">{forms.title}</h1>
        {!isCompleted && !isIntro && (
          <Progress value={progress} className="w-full" />
        )}
        <AnimatePresence mode="wait">
            {!isCompleted ? (
              !isIntro ? (
                <motion.div
                  key={currentQuestionIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {renderQuestion()}
                  <div className="mt-6 flex justify-between">
                    <Button onClick={handlePrevious} disabled={currentQuestionIndex === 0}>
                      Previous
                    </Button>
                    <Button onClick={handleNext} disabled={!isAnswered}>Next</Button>
                  </div>
                </motion.div>
              ) : (
                <QuestionnaireGuidelines identity={forms.identity!} guides={forms.guildelines!} setIsIntro={setIsIntro!} />
              )
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                {renderSummary()}
              </motion.div>
            )}

        </AnimatePresence>
      </div>
    </div>
  )
}
