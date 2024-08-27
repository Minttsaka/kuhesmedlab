"use client"

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ScrollArea } from "@/components/ui/scroll-area"
import { Switch } from "@/components/ui/switch"
import { Badge } from "@/components/ui/badge"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from 'recharts'
import { SunIcon, MoonIcon, TrendingUpIcon, DownloadIcon, UsersIcon, GlobeIcon, ArrowRight, FormInput } from 'lucide-react'
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
import  { PureComponent } from 'react';
import {  Collaborator, Prisma, Research, SurveyForm } from '@prisma/client'
import { UploadResearchPaper } from './upload-research-paper'
import { GroupMembers } from './GroupMembers'
import ResearchInvite from './ResearchInvite'


export type ResearchWithAllRelations = Prisma.ResearchGetPayload<{
  include:{
    files:true,
    collaborator:true,
    surveys:{
      include:{
        surveyForm:true
      }
    }
  }
}>;


const FormSchema = z.object({
  title: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(45, "First name must be less than 45 characters"),
  description: z.string()
  .min(2, "First name must be at least 2 characters"),
  label: z.string()
  .min(2, "First name must be at least 2 characters")
});

type InputType = z.infer<typeof FormSchema>;


const generateTimeSeriesData = (months:number, baseValue:number, trend:number, volatility:number) => {
  return Array.from({ length: months }, (_, i) => {
    const trendValue = baseValue + (trend * i)
    const random = (Math.random() - 0.5) * 2 * volatility
    return Math.max(0, Math.round(trendValue + random))
  })
}

const generateChartData = (paper:Research) => {
  const citationData = generateTimeSeriesData(24, 10, 4, 10).map((value, index) => ({
    month: `Month ${index + 1}`,
    citations: value
  }))

  const downloadData = generateTimeSeriesData(24, 100, 15, 50).map((value, index) => ({
    month: `Month ${index + 1}`,
    downloads: value
  }))

  const subjectAreaData = [
    { name: 'Computer Science', value: Math.random() * 400 + 100 },
    { name: 'Physics', value: Math.random() * 300 + 100 },
    { name: 'Mathematics', value: Math.random() * 200 + 100 },
    { name: 'Engineering', value: Math.random() * 100 + 100 },
    { name: 'Biology', value: Math.random() * 250 + 100 },
  ]

  const impactMetrics = [
    { subject: 'Citations', A: paper.citationCount, fullMark: 150 },
    { subject: 'Downloads', A: paper.downloadCount / 50, fullMark: 150 },
    { subject: 'Social Media', A: Math.random() * 100 + 50, fullMark: 150 },
    { subject: 'News Mentions', A: Math.random() * 50 + 10, fullMark: 150 },
    { subject: 'Policy Citations', A: Math.random() * 30 + 5, fullMark: 150 },
  ]

  return { citationData, downloadData, subjectAreaData, impactMetrics }
}

const COLORS = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FF`A07A', '#98D8C8']

export default function Practice(
  { 
    research, 
 
  }:{
    research:ResearchWithAllRelations,

  }) {
  const [darkMode, setDarkMode] = useState(false)
  const { citationData, downloadData, subjectAreaData, impactMetrics } = generateChartData(research)

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

      const {title, description, label} = data
    try {
      const response= await axios.post('/api/survey',{
        title,
        description,
        researchId:research.id,
        label
      })
      router.push(`/mw/survey/questionner/${response.data}/${research.id}`)
      
        toast.success("The workspace created.");
        
    } catch (error) {
      console.log(error)
    }
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <div className="p-4 bg-gradient-to-r from-background to-secondary ">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-4xl bg-clip-text font-extrabold tracking-tight mb-2 text-transparent bg-gradient-to-r from-primary to-secondary line-clamp-1">{research.title}</h1>
          <div className="flex items-center space-x-2">
            <SunIcon className="h-5 w-5" />
            <Switch checked={darkMode} onCheckedChange={setDarkMode} />
            <MoonIcon className="h-5 w-5" />
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <Card className="lg:col-span-1 bg-gradient-to-br from-card to-background">
            <CardHeader>
              <CardTitle className='text-md flex items-center justify-between'>
                Survey
                <Dialog>
                  <DialogTrigger className='absolute top-3 right-3 p-2 rounded-md bg-primary text-primary-foreground shadow-lg ' asChild>
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
                      <div className="">
                        <Label htmlFor="label" className="text-right">
                        Label
                        </Label>
                        <Input
                        {...register("label")}
                          id="label"
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
         
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ScrollArea className="h-[80vh]">
                <AnimatePresence>
                  {research?.surveys.map((survey) => (
                    <motion.div
                      key={survey.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.3 }}
                      className={`p-4 mb-4 rounded-lg cursor-pointer transition-all duration-300 bg-primary text-primary-foreground shadow-lg '
                      }`}
                    
                    >
                      <h3 className="font-semibold">{survey.title}</h3>
                      <p className="text-sm">{survey.description}</p>
                      <div className="flex justify-between mt-2">
                        <Badge variant="secondary" className="flex items-center">
                          <FormInput className="w-3 h-3 mr-1" />
                          {survey.surveyForm.length} - {survey.surveyForm.length === 1 ? "form" :"forms "}
                        </Badge>
                        <Badge variant="secondary" className="flex items-center ">
                          {survey.label} 
                        </Badge>
                        <Link  href={`/mw/survey/questionner/${survey.id}/${research.id}`} target='_blank' >
                          <Badge variant="secondary" className="flex items-center">
                            <ArrowRight className="w-3 h-3 mr-1" />
                            View
                          </Badge>
                        </Link>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </ScrollArea>
            </CardContent>
          </Card>
          <div className="lg:col-span-3 space-y-6">
            <Card className="bg-gradient-to-br from-card to-background">
              <CardHeader>
                <CardTitle className='line-clamp-1'>{research.abstract}</CardTitle>
                <div className='flex items-center gap-3'>
                <GroupMembers />
                <ResearchInvite />
                </div>
               
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                  <div className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-lg">
                    <TrendingUpIcon className="w-8 h-8 mb-2 text-primary" />
                    <span className="text-2xl font-bold">{research.citationCount}</span>
                    <span className="text-sm">Total Citations</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-lg">
                    <DownloadIcon className="w-8 h-8 mb-2 text-primary" />
                    <span className="text-2xl font-bold">{research.downloadCount}</span>
                    <span className="text-sm">Total Downloads</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-lg">
                    <UsersIcon className="w-8 h-8 mb-2 text-primary" />
                    <span className="text-2xl font-bold">{research.collaborator.length}</span>
                    <span className="text-sm">Collaborators</span>
                  </div>
                  <div className="flex flex-col items-center justify-center p-4 bg-primary/10 rounded-lg">
                    <GlobeIcon className="w-8 h-8 mb-2 text-muted-foreground" />
                    <span className="text-2xl font-bold">{research.issue}</span>
                    <span className="text-sm">Impact Factor</span>
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="bg-gradient-to-br from-card to-background">
                <CardHeader>
                  <CardTitle>Citations Over Time</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={citationData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Line type="monotone" dataKey="citations" stroke="#8884d8" strokeWidth={2} dot={false} />
                    </LineChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-background">
                <CardHeader>
                  <CardTitle>Monthly Downloads</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={downloadData}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="downloads" fill="#82ca9d" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-background">
                <CardHeader>
                  <CardTitle>Subject Area Distribution</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChart>
                      <Pie
                        data={subjectAreaData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                      >
                        {subjectAreaData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <Tooltip />
                    </PieChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card className="bg-gradient-to-br from-card to-background">
                <CardHeader>
                  <CardTitle>Research Impact Metrics</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={impactMetrics}>
                      <PolarGrid />
                      <PolarAngleAxis dataKey="subject" />
                      <PolarRadiusAxis angle={30} domain={[0, 150]} />
                      <Radar name="Paper Metrics" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                      <Legend />
                    </RadarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}