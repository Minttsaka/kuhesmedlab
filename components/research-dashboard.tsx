
"use client"

import { GroupMembers } from './GroupMembers'
import { Progress } from './ui/progress'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import axios from "axios";
import { toast } from "sonner";
import { Loader2 } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react"
import useSWR from "swr"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PaperPlaneIcon, PlusIcon } from '@radix-ui/react-icons'
import { cn } from '@/lib/utils'
import { AvatarImage } from "@radix-ui/react-avatar";
import { Avatar, AvatarFallback } from "./ui/avatar";
import React, { PureComponent } from 'react';
import {  SurveyForm } from '@prisma/client'
import { UploadResearchPaper } from './upload-research-paper'


type Survey = {
  id: string;
  title: string;
  description: string;
  creatorId: string | null;
  creatorName: string;
  researchId: string;
  surveyForm :SurveyForm[]
  createdAt: Date;
}
const FormSchema = z.object({
  title: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(45, "First name must be less than 45 characters"),
  description: z.string()
  .min(2, "First name must be at least 2 characters")
});

type InputType = z.infer<typeof FormSchema>;

export function ResearchDashboard({ file_url , id, surveys }:{ id:string, surveys:Survey[], file_url:string }) {

  const router = useRouter();
  const {
    register,
    handleSubmit,
    reset,
    control,
    watch,
    formState: { errors,isSubmitting },
  } = useForm<InputType>({
    resolver: zodResolver(FormSchema),
  });



  const saveSurvey: SubmitHandler<InputType> = async (data) => {

      const {title, description} = data
    try {
      const response= await axios.post('/api/survey',{
        title,
        description,
        researchId:id
      })
      router.push(`/mw/survey/questionner/${response.data}/${id}`)
      
        toast.success("The workspace created.");
        
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-5 my-5">
      {!file_url &&
        <UploadResearchPaper researchId={id}/>
      }
 
      <div className="space-y-5 bg-white rounded-md p-8" id='upload'>
        <div className="text-xs lg:flex justify-between items-center">
          <p className="font-bold">
            Survey
          </p>
          <Dialog>
      <DialogTrigger className='absolute top-3 right-3 p-2 rounded-full ' asChild>
        <button className="px-8 py-2 rounded-xl relative bg-gray-100 text-gray-600 text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200">
            <span className="relative text-xs z-20">
              Create Survey form
            </span>
          </button>
      </DialogTrigger>
      <DialogContent className="bg-white shadow-2xl shadow-purple-500 sm:max-w-[425px]">
        <h2 className='text-gray-600 font-bold space-y-5 text-center'>Create New Survey</h2>
        <form onSubmit={handleSubmit(saveSurvey)} className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              {...register("title")}
              className="bg-transparent border-b-2 focus:outline-0 border-b-blue-900"
            />
          </div>
          <div className="">
            <Label htmlFor="description" className="text-right">
             Description
            </Label>
            <Input
            {...register("description")}
              id="description"
              className="bg-transparent border-b-2 focus:outline-0 border-b-blue-900"
            />
          </div>
          <button type='submit' className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
          disabled={isSubmitting}
          >
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">
                {isSubmitting ? "Creating.." : "Create New Survey"}
            </span>
            </button>
        </form>
      </DialogContent>
    </Dialog>
         
        </div>

        <div className="space-y-2">
          {surveys?.length===0 && (<p className='text-[red] text-sm'>No survey for this research</p>)}

          {surveys?.map((survey)=>(
          <div  key={survey.id} className="relative overflow-hidden rounded-lg transition-transform duration-300 ease-in-out group hover:-translate-y-2 hover:shadow-xl hover:shadow-purple-500">
            <Link  href={`/mw/survey/questionner/${survey.id}/${id}`} target='_blank' className="absolute inset-0 z-10" prefetch={false}>
              <span className="sr-only">View Survey</span>
            </Link>
            <div className="bg-[#f0f6f5] p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-bold text-[#1b4b48]">{survey.title}</h3>
                <span className="rounded-full bg-[#f3d27a] px-3 py-1 text-sm font-medium text-[#5c4b2e]">
                  {survey?.surveyForm.length}
                </span>
              </div>
              <p className="mt-2 text-[#4b5c5b]">
                {survey.description}
              </p>
              <div className="mt-4 flex items-center justify-between text-sm text-[#4b5c5b]">
                <span>{survey.createdAt.toDateString()}</span>
                <span>Ongoing</span>
              </div>
          </div>
          </div>
            
          ))}
         
        
        </div>
      </div>
      
    </div>
  )
}
