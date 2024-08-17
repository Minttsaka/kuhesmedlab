"use client";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addQuestion,
  deleteQuestion,
  setTitle,
  setDesc,
  setActiveQuestionIndex,
  setInitialState,
} from "@/redux/formSlice";
import Question from "./Question";
import Edit from "./Edit";
import { AppDispatch, RootState } from "@/redux/store";
import axios from "axios";
import { SurveyForm } from "@prisma/client";
import { Loader2, MessageCircleQuestionIcon } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { CalendarIcon, ClockIcon } from "@radix-ui/react-icons";



const Form = ({ form }:{ form:SurveyForm }) => {

  const dispatch = useDispatch<AppDispatch>();
  const questionList = useSelector((state: RootState) => state.form.questionList);
  const activeQuestionIndex = useSelector(
    (state: RootState) => state.form.activeQuestionIndex
  );
  const [loading, setLoading] = useState(false);

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
  }, [form.id, dispatch]);

  const handleTitleChange = (e: any) => {
    e.preventDefault();
    dispatch(setTitle(
      {
      id:form.id,
      data:e.target.value as string
    }
  ));
  };

  const handleDescChange = (e: any) => {
    e.preventDefault();
    dispatch(setDesc(
      {
        id:form.id,
        data:e.target.value as string
      }
    ));
  };

  const handleAddQuestion = () => {
    dispatch(addQuestion(form.id));
    
  };

  const handleDeleteQuestion = (index: number) => {
    dispatch(deleteQuestion(index));
    
  };
  const handleQuestionClick = (index: number) => {
    dispatch(setActiveQuestionIndex(index));
  };
 
  return (
    <div className="relative w-full">
      <header className="bg-background px-4 py-3 shadow-sm lg:rounded-se-3xl">
      <div className="lg:flex items-center justify-between">
        <div className="lg:flex items-center gap-4">
          <div className="lg:flex items-center gap-2">
            <div className="flex items-center gap-2">
              <Avatar>
                <AvatarImage src="https://lh3.googleusercontent.com/p/AF1QipOcEAWN-J65DTf7PRUFsOAcqfJdPFHMz0C7s9Us=s680-w680-h510" alt="John Doe" />
                <AvatarFallback>JD</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://lh3.googleusercontent.com/p/AF1QipOcEAWN-J65DTf7PRUFsOAcqfJdPFHMz0C7s9Us=s680-w680-h510" alt="Jane Smith" />
                <AvatarFallback>JS</AvatarFallback>
              </Avatar>
              <Avatar>
                <AvatarImage src="https://lh3.googleusercontent.com/p/AF1QipOcEAWN-J65DTf7PRUFsOAcqfJdPFHMz0C7s9Us=s680-w680-h510" alt="Bob Johnson" />
                <AvatarFallback>BJ</AvatarFallback>
              </Avatar>
            </div>
            
            <span className="text-sm text-muted-foreground">+ 2 more collaborators</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <MessageCircleQuestionIcon className="h-4 w-4" />
            <span>{questionList.length} {questionList.length<=1 ? "question" : "questions"}</span>
          </div>
        </div>
        <div className="lg:flex items-center gap-4 space-y-2 lg:space-y-0 my-2 lg:my-0 bg-gray-100 p-2 rounded-md">
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <ClockIcon className="h-4 w-4" />
            <span>Estimated time: 10 min</span>
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            <CalendarIcon className="h-4 w-4" />
            <span>Last updated: 2 days ago</span>
          </div>
        </div>
        <div>
        <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>
              Submit
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
                    onChange={handleTitleChange}
                    defaultValue={form?.title}
                    required
                    className="text-3xl outline-none font-bold capitalize border-b 
                focus:border-b-2 border-gray-200 pt-3 pb-2 w-full focus:border-[#29A0B1]"
                  />
                </div>
                <div className="w-full px-6 py-1 mb-6">
                  <input
                    type="text"
                    onChange={handleDescChange}
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
                  handleAdd={handleAddQuestion}
                  show
                  handleDelete={() =>
                    handleDeleteQuestion(questionList?.length - 1)
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
                onclick={() => handleQuestionClick(index)}
                key={index}
                index={index}
                value={question}
                addQuestion={handleAddQuestion}
                handleDelete={() => handleDeleteQuestion(index)}
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
