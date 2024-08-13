"use client"

import React from 'react'
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
import { BriefcaseIcon, CalendarIcon, Loader2, LocateIcon } from "lucide-react";
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
import { PlusIcon } from '@radix-ui/react-icons'
import { Research } from '@prisma/client'
import { cn } from '@/lib/utils'
import { Textarea } from './ui/textarea'

const FormSchema = z.object({
    title: z
      .string()
      .min(2, "First name must be at least 2 characters"),
    abstract: z.string()
    .min(2, "First name must be at least 2 characters"),
    keyWords: z.string()
    .min(2, "First name must be at least 2 characters"),
    affiliation: z.string()
    .min(2, "First name must be at least 2 characters"),
    doi: z.string()
    .min(2, "First name must be at least 2 characters"),
    journal: z.string()
    .min(2, "First name must be at least 2 characters"),
    conference: z.string()
    .min(2, "First name must be at least 2 characters"),
    });
  
  type InputType = z.infer<typeof FormSchema>;


const fetcher = async (url:string) => {
    const res = await axios.get(url);

    return res.data;
  };
  

export default function CreateResearchForm({ id }:{ id:string }) {

  const [researchField, setResearchField] = useState("");

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


  const { data, mutate, isLoading, error } = useSWR(
    `/api/research`,
    fetcher
  );

  if (isLoading) {
    return <div className='w-full flex items-center justify-center'>
      <LoadingSpinner />
    </div>;
  }

  if (error) {
    return <div>Error loading data</div>;
  }

  const saveResearch: SubmitHandler<InputType> = async (data) => {

      const {title, abstract ,keyWords, affiliation,doi, journal, conference} = data
    try {
      const response= await axios.post('/api/research',{
        title,
        abstract,
        keyWords,
        affiliation,
        researchField,
        doi,
        journal,
        conference,
      })
      router.push(`/mw/r-for-researcher/${response.data}`)
        mutate();
        toast.success("The User Registered Successfully.");
        
    } catch (error) {
      console.log(error)
    }
  };

  const researchList = Array.isArray(data) ? data : [];


  return (
    <div className='relative my-8'>
       <div>
            <div className='flex items-center justify-between'>
                <div className='mb-10'>
                    <h2 className='text-3xl font-bold text-green-900'>Your Research List</h2>
                    <p>All the details for individual research can be found by scrolling down below research list</p>
                </div>
               
            </div>
           
            <div className='flex gap-4'>
              {researchList.length===0 && (
                <Card className="w-full max-w-md mx-auto">
                <CardHeader>
                  <CardTitle>No Research Conducted</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription>
                    It looks like you havent started your research yet. Get started by exploring our library of resources and
                    data to uncover valuable insights.
                  </CardDescription>
                 
                </CardContent>
              </Card>
              )}
              {
                (researchList as Research[])?.map((research)=>(
                  <Link key={research.id} href={`/mw/r-for-researcher/${research.id}`}>
                    <Card  className={cn('bg-white rounded-3xl space-y-0',{
                    "border border-green-500":research.id===id
                  })}>
                    <CardHeader className='font-bold text-xl'>
                        {research.title}
                    </CardHeader>
                    <CardContent>
                        <CardDescription className='text-gray-500'>
                           {research.abstract}
                        </CardDescription>
                    </CardContent>
                    <CardFooter className='flex flex-col'>
                        <GroupMembers />
                        <p className='text-xs text-gray-500'>{new Date(research.createdAt).toDateString()}</p>
                      </CardFooter>
                    </Card>

                  </Link>
                  
                ))
              }
                
            
            </div>
        </div>
      <Dialog>
      <DialogTrigger className='absolute top-3 right-3 p-2 rounded-full bg-green-300' asChild>
        <PlusIcon className='h-10 w-10 font-bold text-white' />
      </DialogTrigger>
      <DialogContent className="bg-[#c8f2f3] max-w-7xl h-[95vh] overflow-y-auto">
        <h2 className='text-gray-600 font-bold space-y-5 text-center'>Create New Research Workspace</h2>
        <form onSubmit={handleSubmit(saveResearch)} className="grid gap-4 py-4">
          <div className="">
            <Label htmlFor="title" className="text-right">
              Title
            </Label>
            <Input
              id="title"
              {...register("title")}
              className="bg-transparent border-b-2 focus:outline-0 border-b-[green]"
            />
          </div>
          <div className="">
            <Label htmlFor="Abstract" className="text-right">
             Abstract
            </Label>
            <Textarea
            {...register("abstract")}
              id="abstract"
              className="bg-transparent border-b-2 focus:outline-0 border-b-[green]"
            />
          </div>
          <div className="">
            <Label htmlFor="keyWords" className="text-right">
              Enter key Words separated by comma
            </Label>
            <Input
              id="keyWords"
              {...register("keyWords")}
              className="bg-transparent border-b-2 focus:outline-0 border-b-[green]"
            />
          </div>
          <div className="">
            <Label htmlFor="field" className="text-right">
             Field
            </Label>
            <Select onValueChange={(e)=>setResearchField(e)}>
              <SelectTrigger className='bg-transparent border-b-2 border-b-green-400'>
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="us">Life</SelectItem>
                <SelectItem value="Plants">Plants</SelectItem>
                <SelectItem value="Animal">Animal</SelectItem>
                <SelectItem value="river">river</SelectItem>
                <SelectItem value="lake">lake</SelectItem>
              </SelectContent>
            </Select>
           
          </div>

          <div>
        <label className="block text-sm font-medium text-gray-700">Authors</label>
        <div className="">
            <Label htmlFor="doi" className="text-right">
              doi
            </Label>
            <Input
              id="doi"
              {...register("doi")}
              className="bg-transparent border-b-2 focus:outline-0 border-b-[green]"
            />
          </div>
          <div className="">
            <Label htmlFor="journal" className="text-right">
              journal
            </Label>
            <Input
              id="journal"
              {...register("journal")}
              className="bg-transparent border-b-2 focus:outline-0 border-b-[green]"
            />
          </div>
          <div className="">
            <Label htmlFor="conference" className="text-right">
              conference
            </Label>
            <Input
              id="conference"
              {...register("conference")}
              className="bg-transparent border-b-2 focus:outline-0 border-b-[green]"
            />
          </div>
        <div className="">
            <Label htmlFor="affiliation" className="text-right">
              affiliation
            </Label>
            <Input
              id="affiliation"
              {...register("affiliation")}
              className="bg-transparent border-b-2 focus:outline-0 border-b-[green]"
            />
          </div>
        
      </div>
          <button type='submit' className="px-8 py-2 rounded-full relative bg-slate-700 text-white text-sm hover:shadow-2xl hover:shadow-white/[0.1] transition duration-200 border border-slate-600"
          disabled={isSubmitting}
          >
            <div className="absolute inset-x-0 h-px w-1/2 mx-auto -top-px shadow-2xl  bg-gradient-to-r from-transparent via-teal-500 to-transparent" />
            <span className="relative z-20">
                {isSubmitting ? "Creating.." : "Create New Research"}
            </span>
            </button>
        </form>
      </DialogContent>
    </Dialog>
    </div>
  )
}

const LoadingSpinner: React.FC = () => {
  return (
    <svg
      className="animate-spin h-10 w-10 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  );
};

