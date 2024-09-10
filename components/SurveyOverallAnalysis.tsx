"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {  CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Download, FileText, Filter, SortAsc, SortDesc, Moon, Sun, Maximize2, MessageSquare } from 'lucide-react'
import { Button } from './ui/button'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Textarea } from './ui/textarea'
import axios from 'axios'
import { useSession } from 'next-auth/react'
import { useToast } from './ui/use-toast'
import { useRouter } from 'next/navigation'

type DataItem = {
  responses:number,
  title: string;
  importance: string;
  completionRate: number;
  avgTime: number;
  sentiment:string;
};

export default function SurveyOverallAnalysis({formData, aiAnalyze}:{formData:DataItem[],aiAnalyze:string}) {
  const [sortBy, setSortBy] = useState('responses')
  const [sortOrder, setSortOrder] = useState('desc')
  const [filterImportance, setFilterImportance] = useState('all')
  const [darkMode, setDarkMode] = useState(false)
  const [aiAnalysis, setAiAnalysis] = useState('')
  const [message, setMessage] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [expandedSurvey, setExpandedSurvey] = useState<string | number>('')

  const {data:session } = useSession()
  const user = session?.user
  const { toast } = useToast()
  const router = useRouter()

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF']

 
  const filteredData = formData
    .filter(survey => filterImportance === 'all' || survey.importance === filterImportance)
    .sort((a, b) => {
      const order = sortOrder === 'asc' ? 1 : -1;
      const aValue = a[sortBy as keyof DataItem];
      const bValue = b[sortBy as keyof DataItem];
  
      if (typeof aValue === 'number' && typeof bValue === 'number') {
        return (aValue - bValue) * order;
      } else if (typeof aValue === 'string' && typeof bValue === 'string') {
        return aValue.localeCompare(bValue) * order;
      }
  
      return 0; 
    })

  const totalResponses = formData.reduce((sum, survey) => sum + survey.responses, 0)
  const avgCompletionRate = formData.reduce((sum, survey) => sum + survey.completionRate, 0) / formData.length
  const avgTimeMinutes = formData.reduce((sum, survey) => sum + survey.avgTime, 0) / formData.length

  const barChartData = {
    labels: filteredData.map(survey => survey.title),
    datasets: [
      {
        label: 'Responses',
        data: filteredData.map(survey => survey.responses),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  }

  const pieChartData = {
    labels: ['High', 'Medium', 'Low'],
    datasets: [
      {
        data: [
          formData.filter(s => s.importance === 'high').length,
          formData.filter(s => s.importance === 'medium').length,
          formData.filter(s => s.importance === 'low').length,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }

  const handleDownload = () => {
    // Implement report download logic here
    console.log('Downloading report...')
  }

  const handleExport = (format:string) => {
    // Implement export logic here
    console.log(`Exporting data as ${format}...`)
  }

  const handleSubmit = async() => {

    try {
      setIsSubmitting(true)
      await axios.post('/api/notification',
      { 
        name, 
        comments:message,
        email:user?.email,
        feedbackType:"SURVEY_ANALYSIS"
      }
    )
    toast({
      title:'Success',
      description:'Successfully sent the feedback'
    })
    router.refresh()
    } catch (error) {

      console.log(error)
      
    } finally{
      setIsSubmitting(false)
     
    }
      
  }


  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto p-8">
        <Card darkMode={darkMode} className="mb-8">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Survey Details</h2>
            <div className="md:flex space-x-2">
              <Select
                value={filterImportance}
                onValueChange={setFilterImportance}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Filter by Importance" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Importance</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
              <Select
                value={sortBy}
                onValueChange={setSortBy}
              >
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="responses">Responses</SelectItem>
                  <SelectItem value="completionRate">Completion Rate</SelectItem>
                  <SelectItem value="avgTimeMinutes">Avg. Time</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc')}
              >
                {sortOrder === 'asc' ? <SortAsc size={16} /> : <SortDesc size={16} />}
              </Button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b">
                  <th className="py-2 px-4 text-left">Title</th>
                  <th className="py-2 px-4 text-left">Responses</th>
                  <th className="py-2 px-4 text-left">Importance</th>
                  <th className="py-2 px-4 text-left">Completion Rate</th>
                  <th className="py-2 px-4 text-left">Avg. Time</th>
                  <th className="py-2 px-4 text-left">Sentiment</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((survey, index) => (
                  <tr key={index} className="border-b last:border-b-0">
                    <td className="py-2 px-4 line-clamp-1">{survey.title}</td>
                    <td className="py-2 px-4">{survey.responses.toLocaleString()}</td>
                    <td className="py-2 px-4">
                      <Badge variant={survey.importance}>{survey.importance}</Badge>
                    </td>
                    <td className="py-2 px-4">{survey.completionRate}%</td>
                    <td className="py-2 px-4">{survey.avgTime} sec</td>
                    <td className="py-2 px-4">
                      {survey.sentiment}
                    </td>
                    
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>
        <Card darkMode={darkMode} className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">AI-Powered Descriptive Analysis</h3>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-green-500">Live Analysis</span>
            </div>
          </div>
          <div className="prose max-w-none">
            {aiAnalysis && 
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <div dangerouslySetInnerHTML={{ __html: aiAnalyze }} />                
              </motion.div>
              }
          </div>
        </Card>

        <div className="flex flex-wrap justify-between items-center">
          <div className="space-y-2">
            <Button onClick={handleDownload} className="w-full mb-2">
              <Download className="mr-2 h-4 w-4" /> Download Full Report
            </Button>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" /> Export Data
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={() => handleExport('csv')}>
                  Export as CSV
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('xlsx')}>
                  Export as Excel
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => handleExport('json')}>
                  Export as JSON
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>

        <div className="mt-8 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg" id="feedback">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <MessageSquare className="mr-2" /> Feedback
          </h3>
          <p>Your feedback is valuable! Please share your thoughts on the survey process and analysis dashboard.</p>
          <Textarea onChange={(e)=>setMessage(e.target.value)} className="mt-2" placeholder="Enter your feedback here..." />
          <Button onClick={handleSubmit} className="mt-2" disabled={isSubmitting}>Submit Feedback</Button>
        </div>
      </div>
    </div>
  )
}

function Card({ children, darkMode, className = '' }:{ children:React.ReactNode, darkMode:boolean, className :string }) {
  return (
    <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 ${darkMode ? 'text-white' : ''} ${className}`}>
      {children}
    </div>
  )
}

function Badge({ children, variant }:{ children:React.ReactNode, variant:string }) {
  const colors = {
    high: 'bg-red-100 text-red-800 dark:bg-red-800 dark:text-red-100',
    medium: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100',
    low: 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100',
  }

  const selectedColor = colors[variant as keyof typeof colors];

  return (
    <span className={`px-2 py-1 rounded-full text-xs font-medium ${selectedColor}`}>
      {children}
    </span>
  )
}

function SentimentBar({ sentiment }:{ sentiment:number }) {
  const width = Math.abs(sentiment) * 100
  const color = sentiment > 0 ? 'bg-green-500' : 'bg-red-500'

  return (
    <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
      <div
        className={`h-2.5 rounded-full ${color}`}
        style={{ width: `${width}%`, marginLeft: sentiment < 0 ? `${100 - width}%` : '0' }}
      ></div>
    </div>
  )
}