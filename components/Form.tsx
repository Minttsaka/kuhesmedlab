"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  setActiveQuestionIndex,
  setInitialState,
} from "@/redux/formSlice";
import Question from "./Question";
import Edit from "./Edit";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { Prisma, } from "@prisma/client";
import { Loader2, MessageCircleQuestionIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons";
import {  deleteQuestion, newSurveyQuestion, submitForm, updatedSurveyTitleAndDesc } from "@/lib/actions";
import useSWR from "swr";
import { useToast } from "./ui/use-toast";
import FunctionalShareButton from "./Share";



type SurveyFormQuestion = Prisma.SurveyFormQuestionGetPayload<{
  include:{
      choices:true,
    options:true
   }
}>;

type SurveyForm = Prisma.SurveyFormGetPayload<{
  include:{
    questions:true,
    survey:{
      include:{
        research:{
          include:{
            collaborator:{
              include:{
                user:true
              }
            }
          }
        }
      }
    }
   }

}>;

const fetcher = async (url:string) => {
  const res = await axios.get(url);

  return res.data;
};

const Form = ({ form }:{ form:SurveyForm }) => {

  const dispatch = useDispatch<AppDispatch>();
  const questionList = useSelector((state: RootState) => state.form.questionList);
  const [lastSavedQuestions, setLastSavedQuestions] = useState<SurveyFormQuestion[]>();
  const [inputValue, setInputValue] = useState({})
  const activeQuestionIndex = useSelector(
    (state: RootState) => state.form.activeQuestionIndex
  );
  const [loading, setLoading] = useState(false);
  const [submit, setSubmit] = useState(false);

  const {toast}= useToast()

  const { data, mutate, isLoading, error } = useSWR(
    `/api/question/${form.id}`,
    fetcher
  );
  
  useEffect(()=>{

    dispatch(setInitialState(data));

  },[data])

  const submitData = async () => {

  const filteredData = questionList.filter(item=>item.title!==null);

    try {
        await axios.post(`/api/question/${form.id}`,{
            questions:filteredData
        })
        setLastSavedQuestions(questionList)

    } catch (error) {
        console.log(error) 
    }
}

  useEffect(() => {
    const handler = setTimeout(() => {
      if (questionList !== lastSavedQuestions) {
        submitData();
      }
    }, 1000);

    return () => clearTimeout(handler);
  }, [questionList, lastSavedQuestions]);

  const handleAddQuestion = async() =>{

    try {
      await newSurveyQuestion(form.id)
      mutate()
    } catch (error) {
      console.log(error)
      
    }
  }


  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try{
          const response = await axios.get(`/api/question/${form.id}`);
          const formData = response.data;

          dispatch(setInitialState(formData));
        } catch (error) {
          console.error("Error fetching form data:", error);
        } finally {
          setLoading(false)
        }

      }

    fetchData();
  }, []);

  const handleQuestionClick = (index: number) => {
    dispatch(setActiveQuestionIndex(index));
  };
  
  const handleDeleteQuestion = async(id: string) => {
    try {
 
      const status =  await deleteQuestion(id)
      mutate()

      if(status===true){
        toast({
          title:'Delete Status',
          description:"Successfully deleted"
        })
      }
   
    } catch (error) {
      console.log(error)
    }
  }


  const handleInputChange = async( e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setInputValue((prev)=>({
      ...prev,
      [e.target.name]:e.target.value
    }))
    await updatedSurveyTitleAndDesc(form.id,inputValue )
    mutate()
  };

  const submitSurvey = async()=>{
    try {

      setSubmit(true)
      const res = await submitForm(form.id)

      if(res===true){

      toast({
        title:'Survey Activated',
        description:"Your survey has been put into public"
      })
    }
      
    } catch (error) {
      console.log(error)
    } finally{
      setSubmit(false)
    }
  }
 
  return (
    <div className="relative w-full">
      <header className="bg-background px-4 py-3 shadow-sm lg:rounded-se-3xl">
      <div className="lg:flex items-center justify-between">
        <div className="lg:flex items-center gap-4">
          <div className="lg:flex items-center gap-2">
            <div className="flex items-center gap-2">
              {
                form.survey?.research?.collaborator.map(collaborator=>( 
                <Avatar key={collaborator.id}>
                  <AvatarImage src={collaborator.user.image!} alt={collaborator.user.name} />
                  <AvatarFallback>{collaborator.user.name}</AvatarFallback>
                </Avatar>
                ))
              }
            </div>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MessageCircleQuestionIcon className="h-4 w-4" />
            <span>{questionList?.length} {questionList?.length<=1 ? "question" : "questions"}</span>
          </div>
        </div>
        <div className="lg:flex items-center gap-4 space-y-2 lg:space-y-0 my-2 lg:my-0 bg-gray-100 p-2 rounded-md">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <ClockIcon className="h-4 w-4" />
            <span>Estimated time: {form.estimatedTime} min</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <span>{new Date(form.createdAt).toDateString()}</span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {form.status==="active" && <FunctionalShareButton url={`https://v0.dev/chat/oo98PP_MGPc`}
          title={form.title}
          description={form.description}
          />}
          <button onClick={submitSurvey} className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block"
          disabled={submit}
          >
            <span className="absolute inset-0 overflow-hidden rounded-full">
              <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            </span>
            <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
              <span>
                {submit ? <Loader2 className="animate-spin" /> :"Submit"}
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
        </div>
      </div>
    </header>
      <div className="w-full grid mx-auto min-h-screen py-10">
        <form 
          className="w-full block mx-auto h-full px-6 md:px-0 overflow-x-hidden"
        >
          <div className="flex md:flex-row flex-col justify-center items-center max-w-3xl mx-auto">
            <div className="border-t-8 rounded-md my-6 border-[#29A0B1] bg-white max-w-2xl shadow w-full grid place-items-center mx-auto">
              <div className="w-full border border-gray-300">
                <div className="w-full px-6 py-2">
                  <input
                    type="text"
                    name="title"
                    onChange={(handleInputChange)}
                    defaultValue={form?.title}
                    required
                    className="text-3xl outline-none font-bold capitalize border-b 
                focus:border-b-2 border-gray-200 pt-3 pb-2 w-full focus:border-[#29A0B1]"
                  />
                </div>
                <div className="w-full px-6 py-1 mb-6">
                  <input
                    type="text"
                    name="description"
                    onChange={handleInputChange}
                    defaultValue={form?.description}
                    required
                    placeholder="Form Description"
                    className="text-base outline-none font-medium capitalize border-b 
                focus:border-b-2 border-gray-200 focus:border-[#29A0B1] py-1 w-full"
                  />
                </div>
              </div>
            </div>           
            
            <div>
            {loading && (
                <div className="absolute top-5 right-5 flex justify-center">
                  <Loader2 className="animate-spin" />
                </div>
                 )}
              {questionList?.length === 0 && (
                <Edit
                  mutate={mutate}
                  handleAdd={handleAddQuestion}
                  show
                  id={form?.id!}
                  handleDelete={() =>
                    handleDeleteQuestion(questionList[questionList?.length - 1].formId)
                  }
                />
              )}
            </div>
          </div>
          <div className="relative">
            {questionList?.map((question, index) => (
              <Question
                name={question.author}
                id={question?.id}
                formId={form.id}
                onclick={() => handleQuestionClick(index)}
                key={index}
                index={index}
                value={question}
                mutate={mutate}
                addQuestion={handleAddQuestion}
                handleDelete={() => handleDeleteQuestion(question.id)}
                isActiveQuestion={index === activeQuestionIndex}
              />
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
