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


  const researchList = Array.isArray(data) ? data : [];

//href={`/mw/r-for-researcher/${research.id}
  return (
    <div className='rounded-lg my-8'>
        <div className='mb-10'>
            <h2 className='text-xl md:text-3xl font-bold text-green-900'>Your Research List</h2>
            <p className='max-w-md'>All the details for individual research can be found by scrolling down below research list</p>
        </div>
        <div className='max-h-[70vh] lg:max-h-full grid lg:flex overflow-y-auto lg:overflow-x-auto lg:w-full gap-1'>
          {researchList.length===0 && (
            <Card className="w-full max-w-md ">
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
 
          {(researchList as Research[])?.map((research,index) => (
                <Link  href={`/mw/publication/${research.id}`} key={research.id} className={cn(' bg-white p-10 rounded-3xl space-y-0',{
                  "border border-green-500":research.id===id
                })}>
                  <div className='font-bold md:text-xl'>
                      {research.title}
                  </div>
                  <div>
                      <div className='text-gray-500'>
                          {research.abstract}
                      </div>
                  </div>
                  <div className='flex flex-col'>
                      {/* <GroupMembers /> */}
                      <p className='text-xs text-gray-500'>{new Date(research.createdAt).toDateString()}</p>
                    </div>
                  </Link>
          ))}

        </div>

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

