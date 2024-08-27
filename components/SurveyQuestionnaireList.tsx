"use client"

import { Search, Filter, Plus, Edit, Trash2, Download, Eye, X, Loader2, Option } from 'lucide-react'
import { Button } from './ui/button'
import React, { useState, useRef, useEffect } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import {  ChevronLeft, ChevronRight } from 'lucide-react'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import useSWR from 'swr'
import { toast } from 'sonner'
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Input } from "./ui/input"
import axios from "axios"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import ReactQuill from "react-quill";
import { SurveyFormAnswer } from "@prisma/client"
import Link from "next/link"
import { Card } from "./ui/card"

import { Cross1Icon, HamburgerMenuIcon } from "@radix-ui/react-icons"
import 'animate.css';
import { Textarea } from "./ui/textarea"
import { Switch } from "./ui/switch"
import "react-quill/dist/quill.bubble.css";
import { formats, modules } from "@/lib/quillModules"



const FormSchema = z.object({
  title: z
    .string()
    .min(2, "First name must be at least 2 characters"),
  description: z.string()
  .min(2, "First name must be at least 2 characters"),
  label: z.string()
  .min(2, "First name must be at least 2 characters"),
});

type InputType = z.infer<typeof FormSchema>;



const fetcher = async (url:string) => {
  const res = await axios.get(url);

  return res.data;
};


export default function SurveyQuestionnaireList({ surveyId }:{ surveyId:string }) {
  const [open, setOPen] = useState(false)
    const [isChecked, setIsChecked] = useState<boolean>(false)
    const [importance, setImportance] = useState('')
    const [searchTerm, setSearchTerm] = useState('')
    const [filter, setFilter] = useState('all')
    const scrollContainerRef = useRef(null)
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [newQuestionnaire, setNewQuestionnaire] = useState({
      title: '',
      status: 'draft',
      importance: 'medium'
    })
    const [questionnaires, setQuestionnaires] = useState([
      { id: 1, title: 'COVID-19 Symptoms Survey', status: 'active', importance: 'high', responses: 1234 },
      { id: 2, title: 'Mental Health Assessment', status: 'draft', importance: 'medium', responses: 0 },
      { id: 3, title: 'Dietary Habits Questionnaire', status: 'archived', importance: 'low', responses: 567 },
      { id: 4, title: 'Physical Activity Tracker', status: 'active', importance: 'medium', responses: 890 },
      { id: 5, title: 'Sleep Quality Evaluation', status: 'active', importance: 'high', responses: 432 },
    ])
    const [value, setValue] = useState("");


  const { data, mutate, isLoading, error } = useSWR(
    `/api/form/${surveyId}`,
    fetcher
  );

    const formList = Array.isArray(data) ? data : [];
  
    const filteredQuestionnaires = questionnaires.filter(q => 
      q.title.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (filter === 'all' || q.status === filter)
    )
  
  
    const handleCreateQuestionnaire = (e:React.ChangeEvent<HTMLInputElement>) => {
      e.preventDefault()
      const newId = Math.max(...questionnaires.map(q => q.id)) + 1
      const createdQuestionnaire = {
        ...newQuestionnaire,
        id: newId,
        responses: 0
      }
      setQuestionnaires([...questionnaires, createdQuestionnaire])
      setIsModalOpen(false)
      setNewQuestionnaire({ title: '', status: 'draft', importance: 'medium' })
    }
  
    useEffect(() => {
      const handleKeyDown = (e:KeyboardEvent) => {
        if (e.key === 'Escape' && isModalOpen) setIsModalOpen(false)
      }
      window.addEventListener('keydown', handleKeyDown)
      return () => window.removeEventListener('keydown', handleKeyDown)
    }, [isModalOpen])


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

  console.log(errors)


  const saveform: SubmitHandler<InputType> = async (data) => {

    console.log(surveyId,  "second")

    const {title,  description, label} = data
  try {
    const response= await axios.post('/api/form',{
      title,
      description,
      label,
      identity:isChecked,
      surveyId,
      guildelines:value,
      importance
        })
      mutate();
      toast.success("The User Registered Successfully.");
      
  } catch (error) {
    console.log(error)
  }
};

const handleCheck =(e:boolean)=>{
  setIsChecked(e)

}

  return (
    <div className={`flex flex-col p-2 md:p-0 bg-gray-100 text-gray-900 transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto">
        <h1 className="text-xl lg:text-4xl font-bold text-gray-800 mb-8">Questionnaires</h1>
        
        <div className="lg:flex space-y-2 justify-between items-center mb-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search questionnaires..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          <div className="flex items-center space-x-4">
            <select
              className="border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-400 focus:border-transparent"
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
            >
              <option value="all">All Status</option>
              <option value="active">Active</option>
              <option value="draft">Draft</option>
              <option value="archived">Archived</option>
            </select>
            <Button variant="default" className="flex items-center space-x-2" onClick={() => setIsModalOpen(true)}>
              <Plus size={20} />
              <span>New Questionnaire</span>
            </Button>
          </div>
        </div>

        <ScrollArea className="max-w-xs  md:max-w-lg lg:max-w-full overflow-hidden rounded-md border border-gray-200 bg-white bg-opacity-10 backdrop-blur-md">
            <div className='flex  space-x-2 overflow-hidden p-4'>
                {formList.map((questionnaire) => (
              <motion.div
                key={questionnaire.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden flex-shrink-0 w-80"
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h2 className="text-xl font-semibold text-gray-800">{questionnaire.title}</h2>
                    <StatusBadge status={questionnaire.status} />
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
                    <ImportanceDot importance={questionnaire.importance} />
                    <span>{questionnaire.importance} importance</span>
                  </div>
                  <div className="text-3xl font-bold text-blue-600 mb-4">
                    {questionnaire.questions.length}
                    <span className="text-sm font-normal text-gray-600 ml-2">Questions</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <div className="space-x-2">
                    <Link target='__blank' href={`/mw/survey/create/${questionnaire.id}`}>
                      <Button variant="outline" size="sm">
                        <Edit size={16} className="mr-1" />
                        Edit
                      </Button>
                      </Link>
                      <Button variant="outline" size="sm">
                        <Eye size={16} className="mr-1" />
                        Preview
                      </Button>
                      
                    </div>
                    <div className="space-x-2">
                      <Button variant="ghost" size="sm">
                        <Option size={16} />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-600 hover:text-red-700">
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
                ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>        
      </div>
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
          >
             <ScrollArea className="h-screen w-full overflow-visible max-w-4xl">
                <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-lg shadow-xl p-6 w-full "
            >
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold">Create New Questionnaire</h2>
                <Button variant="ghost" size="sm" onClick={() => setIsModalOpen(false)}>
                  <X size={24} />
                </Button>
              </div>
              <form onSubmit={handleSubmit(saveform)}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="title">Title</Label>
                    <Input
                      id="title"
                      
                      {...register("title")}
                      required
                    />
                  </div>

                  <div>
                    <Label htmlFor="description">Description</Label>
                    <Textarea
                      id="description"
                      
                      {...register("description")}
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="label">label</Label>
                    <Input
                      id="label"
                      {...register("label")}
                      required
                    />
                  </div>
                  <div className="grid items-center grid-cols-1 gap-4">
                  <Label htmlFor="guidlines" className="text-right">
                    Guidelines (This is rich text editor where by highlighting the text, you can customize your content.)
                  </Label>
                  <ReactQuill
                    className="h-[60vh] bg-gray-100  mx-2 placeholder:text-2xl outline-none"
                    theme="bubble"
                    modules={modules}
                    formats={formats}
                    value={value}
                    onChange={setValue}
                    placeholder="Provide some guidelines..."
                  />
                </div>
                  <div className="flex items-center space-x-2">
                    <Switch onCheckedChange={handleCheck} id="identity-required" />
                    <Label htmlFor="identity-required">Identity Required</Label>
                  </div>
                  <div>
                    <Label htmlFor="importance">Importance</Label>
                    <Select
                      value={newQuestionnaire.importance}
                      onValueChange={(value) => setImportance(value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select importance" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="low">Low</SelectItem>
                        <SelectItem value="medium">Medium</SelectItem>
                        <SelectItem value="high">High</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="mt-6 flex justify-end space-x-3">
                  <Button variant="outline" onClick={() => setIsModalOpen(false)}>Cancel</Button>
                  <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting ? (<Loader2 className=" animate-spin h-4 w-4"/>) : "Create Questionnaire"}
                  </Button>
                </div>
              </form>
                </motion.div>
              </ScrollArea>
            
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

function StatusBadge({ status }:{ status:string }) {
  const colors = {
    active: 'bg-green-100 text-green-800',
    draft: 'bg-yellow-100 text-yellow-800',
    archived: 'bg-gray-100 text-gray-800'
  }

  const selectedColor = colors[status as keyof typeof colors];

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${selectedColor}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  )
}

function ImportanceDot({ importance }:{ importance:string }) {
  const colors = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-green-500'
  }

  const selectedColor = colors[importance as keyof typeof colors];

  return (
    <span className={`w-2 h-2 rounded-full ${selectedColor}`} />
  )
}