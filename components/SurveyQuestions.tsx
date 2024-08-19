'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Textarea } from "@/components/ui/textarea"
import { Progress } from "@/components/ui/progress"
import { ChevronRightIcon } from 'lucide-react'
import { Option, Survey, SurveyForm, } from '@prisma/client'
import { StarIcon } from '@radix-ui/react-icons'

interface SurveyQuestionsProps {
  forms: Forms
}

type SurveyFormQuestion = {
  id: string;
  title: string;
  image: string | null;
  type: "Paragraph" |"Multiple_Choice"|"Short_Answer"|"Rating";
  rating: number | null;
  formId: string;
  author: string;
  options: Option[]
  authorId: string;
  createdAt: Date;
}

interface Forms {
  id: string;
  title: string;
  description: string;
  recommendation: string;
  identity: boolean;
  creatorId: string;
  creatorName: string;
  questions: SurveyFormQuestion[];
  survey: Survey;
  surveyId: string;
  createdAt: Date;
}

export default function SurveyQuestions({ forms }: SurveyQuestionsProps) {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [answers, setAnswers] = useState<Record<string, string>>({})
  const [isCompleted, setIsCompleted] = useState(false)

  //const currentForm = forms.questions[currentQuestionIndex]; // Assuming you are dealing with the first form in the array.
  const currentQuestion = forms.questions[currentQuestionIndex]
  const progress = ((currentQuestionIndex + 1) / forms.questions.length) * 100

  const handleAnswer = (answer: string) => {
    setAnswers(prev => ({ ...prev, [currentQuestion.id]: answer }))
    
  }

  const handleNext = () => {
    if (currentQuestionIndex < forms.questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1)
    } else {
      setIsCompleted(true)
    }
  }

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prev => prev - 1)
    }
  }

  const array = Array.from({ length: currentQuestion.rating! }, (_, i) => i + 1);

  const renderQuestion = () => {
    switch (currentQuestion?.type) {
      case 'Rating':
        return (
          <>
           <Label className='text-black' htmlFor="answer">{currentQuestion.title}</Label>
           <div className="flex items-center space-x-1">
            {array.map((star) => (
              <StarIcon
                key={star}
                id='answer'
                className={`w-8 h-8 cursor-pointer ${
                  parseInt(answers[currentQuestionIndex]) >= star ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
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
            <Label className='text-black' htmlFor="answer">{currentQuestion.title}</Label>
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
            <Label className='text-black'>{currentQuestion.title}</Label>
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
            <Label className='text-black' htmlFor="answer">{currentQuestion.title}</Label>
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
    <div className="space-y-4">
      <h2 className=" font-bold">Survey Completed</h2>
      <div className="space-y-2">
        {forms.questions.map((question) => (
          <div key={question.id} className="bg-white bg-opacity-75 p-4 rounded-md">
            <p className="font-semibold">{question.title}</p>
            <p className="text-gray-600">{answers[question.id]}</p>
          </div>
        ))}
      </div>
      <Button onClick={() => console.log('Submit survey:', answers)}>
        Submit Survey
      </Button>
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
        {!isCompleted && (
          <Progress value={progress} className="w-full" />
        )}
        <AnimatePresence mode="wait">
          {!isCompleted ? (
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
             
                <Button onClick={handleNext}>Next</Button>
              
            </div>
            </motion.div>
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
