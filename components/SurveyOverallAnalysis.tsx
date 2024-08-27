"use client"

import React, { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Bar, Pie } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement } from 'chart.js'
import { Download, FileText, Filter, SortAsc, SortDesc, Moon, Sun, Maximize2, MessageSquare } from 'lucide-react'
import * as THREE from 'three'
import WordCloud from 'react-d3-cloud'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sphere } from '@react-three/drei'
import { Search, Plus, Edit, Trash2,Eye, X, Loader2 } from 'lucide-react'
import { Button } from './ui/button'
import {  ChevronLeft, ChevronRight } from 'lucide-react'
import { ScrollArea, ScrollBar } from './ui/scroll-area'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'
import useSWR from 'swr'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from './ui/dropdown-menu'
import { Textarea } from './ui/textarea'
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend, ArcElement)

type DataItem = {
  id: number;
  title: string;
  responses: number;
  importance: string;
  completionRate: number;
  avgTimeMinutes: number;
  sentiment: number;
};

export default function SurveyOverallAnalysis() {
  const [sortBy, setSortBy] = useState('responses')
  const [sortOrder, setSortOrder] = useState('desc')
  const [filterImportance, setFilterImportance] = useState('all')
  const [darkMode, setDarkMode] = useState(false)
  const [aiAnalysis, setAiAnalysis] = useState('')
  const [expandedSurvey, setExpandedSurvey] = useState<string | number>('')

  const surveyData:DataItem[] = [
    { id: 1, title: 'COVID-19 Symptoms', responses: 1234, importance: 'high', completionRate: 92, avgTimeMinutes: 8, sentiment: 0.7 },
    { id: 2, title: 'Mental Health Assessment', responses: 987, importance: 'high', completionRate: 88, avgTimeMinutes: 15, sentiment: -0.2 },
    { id: 3, title: 'Dietary Habits', responses: 756, importance: 'medium', completionRate: 79, avgTimeMinutes: 12, sentiment: 0.3 },
    { id: 4, title: 'Physical Activity', responses: 543, importance: 'medium', completionRate: 85, avgTimeMinutes: 10, sentiment: 0.5 },
    { id: 5, title: 'Sleep Quality', responses: 890, importance: 'high', completionRate: 91, avgTimeMinutes: 7, sentiment: 0.1 },
    { id: 6, title: 'Chronic Pain Assessment', responses: 432, importance: 'high', completionRate: 87, avgTimeMinutes: 14, sentiment: -0.4 },
    { id: 7, title: 'Medication Side Effects', responses: 678, importance: 'medium', completionRate: 82, avgTimeMinutes: 11, sentiment: -0.1 },
    { id: 8, title: 'Family Medical History', responses: 345, importance: 'low', completionRate: 76, avgTimeMinutes: 18, sentiment: 0.2 },
  ]

  const filteredData = surveyData
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

  const totalResponses = surveyData.reduce((sum, survey) => sum + survey.responses, 0)
  const avgCompletionRate = surveyData.reduce((sum, survey) => sum + survey.completionRate, 0) / surveyData.length
  const avgTimeMinutes = surveyData.reduce((sum, survey) => sum + survey.avgTimeMinutes, 0) / surveyData.length

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
          surveyData.filter(s => s.importance === 'high').length,
          surveyData.filter(s => s.importance === 'medium').length,
          surveyData.filter(s => s.importance === 'low').length,
        ],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        hoverBackgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
      },
    ],
  }

  const wordCloudData = [
    { text: 'Health', value: 64 },
    { text: 'Wellness', value: 41 },
    { text: 'COVID-19', value: 55 },
    { text: 'Mental Health', value: 38 },
    { text: 'Diet', value: 30 },
    { text: 'Exercise', value: 35 },
    { text: 'Sleep', value: 28 },
    { text: 'Chronic Pain', value: 22 },
    { text: 'Medication', value: 25 },
    { text: 'Family History', value: 20 },
  ]

  useEffect(() => {
    // Simulating AI analysis generation
    const generateAnalysis = async () => {
      await new Promise(resolve => setTimeout(resolve, 1500)) // Simulating API call
      setAiAnalysis(`Based on the comprehensive analysis of ${totalResponses.toLocaleString()} responses across ${surveyData.length} surveys, we've uncovered several key insights:

1. COVID-19 Symptom Tracking: This survey has garnered the highest response rate, indicating ongoing public concern and engagement with the pandemic situation.

2. Mental Health Focus: The Mental Health Assessment, while having a high response rate, also takes the longest to complete. This suggests that respondents are dedicating significant time to mental health considerations, reflecting its growing importance in overall health discussions.

3. Completion Rates: The Family Medical History survey has the lowest completion rate. This could indicate that users find it challenging to provide comprehensive family health information, or that the survey might benefit from restructuring for easier completion.

4. Time Investment: On average, respondents spend ${avgTimeMinutes.toFixed(1)} minutes per survey. This demonstrates a substantial time investment from participants, underlining the value they place on contributing to medical research.

5. High-Priority Health Areas: The prevalence of 'high importance' surveys in mental health, COVID-19, and sleep quality highlights these as key areas of focus in current medical research and public health concerns.

6. Dietary and Physical Activity Insights: These surveys show moderate response rates, suggesting an ongoing interest in lifestyle factors affecting health. The slightly lower completion rates might indicate an opportunity to refine these surveys for better engagement.

7. Sentiment Analysis: The COVID-19 Symptoms survey shows a surprisingly positive sentiment, which could reflect relief in having a platform to report symptoms or satisfaction with the survey's design. Conversely, the Chronic Pain Assessment has a more negative sentiment, potentially reflecting the challenging nature of the topic.

These insights can guide future research directions, help in refining survey designs, and inform public health strategies. The high engagement rates across most surveys underscore the public's commitment to contributing to medical research, particularly in areas directly impacting daily life and overall well-being.`)
    }
    generateAnalysis()
  }, [])

  const handleDownload = () => {
    // Implement report download logic here
    console.log('Downloading report...')
  }

  const handleExport = (format:string) => {
    // Implement export logic here
    console.log(`Exporting data as ${format}...`)
  }

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100'} transition-colors duration-500`}>
      <div className="max-w-7xl mx-auto p-8">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">Survey Analysis Dashboard</h1>
          <Button variant="outline" size="icon" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? <Sun className="h-[1.2rem] w-[1.2rem]" /> : <Moon className="h-[1.2rem] w-[1.2rem]" />}
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className='bg-green-900' darkMode={darkMode}>
            <h3 className="text-lg font-semibold mb-2">Total Responses</h3>
            <p className="text-3xl font-bold">{totalResponses.toLocaleString()}</p>
          </Card>
          <Card className='bg-green-900' darkMode={darkMode}>
            <h3 className="text-lg font-semibold mb-2">Avg. Completion Rate</h3>
            <p className="text-3xl font-bold">{avgCompletionRate.toFixed(1)}%</p>
          </Card>
          <Card className='bg-green-900' darkMode={darkMode}>
            <h3 className="text-lg font-semibold mb-2">Avg. Time to Complete</h3>
            <p className="text-3xl font-bold">{avgTimeMinutes.toFixed(1)} minutes</p>
          </Card>
        </div>

        <Card darkMode={darkMode} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Key Terms Word Cloud</h3>
          <WordCloud
            data={wordCloudData}
            width={500}
            height={300}
            font="Impact"
            fontStyle="normal"
            fontWeight="normal"
            fontSize={(word) => Math.log2(word.value) * 5}
            spiral="rectangular"
            rotate={(word) => word.value % 360}
            padding={5}
            random={Math.random}
            //fill={(d, i) => d3.schemeCategory10[i % 10]}
          />
        </Card>

        <Card darkMode={darkMode} className="mb-8">
          <h3 className="text-xl font-semibold mb-4">3D Data Visualization</h3>
          <div style={{ height: '400px' }}>
            <Canvas>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={0.5} />
              <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
              <pointLight position={[-10, -10, -10]} />
              {surveyData.map((survey, index) => (
                <Sphere key={survey.id} position={[index - 3.5, 0, 0]} args={[0.5, 32, 32]}>
                  <meshStandardMaterial color={`hsl(${index * 45}, 70%, 50%)`} />
                </Sphere>
              ))}
            </Canvas>
          </div>
        </Card>

        <Card darkMode={darkMode} className="mb-8">
          <div className="flex flex-wrap items-center justify-between mb-4">
            <h2 className="text-2xl font-bold">Survey Details</h2>
            <div className="flex space-x-2">
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
                  <th className="py-2 px-4 text-left">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((survey) => (
                  <tr key={survey.id} className="border-b last:border-b-0">
                    <td className="py-2 px-4">{survey.title}</td>
                    <td className="py-2 px-4">{survey.responses.toLocaleString()}</td>
                    <td className="py-2 px-4">
                      <Badge variant={survey.importance}>{survey.importance}</Badge>
                    </td>
                    <td className="py-2 px-4">{survey.completionRate}%</td>
                    <td className="py-2 px-4">{survey.avgTimeMinutes} min</td>
                    <td className="py-2 px-4">
                      <SentimentBar sentiment={survey.sentiment}/>
                    </td>
                    <td className="py-2 px-4">
                      <Button variant="ghost" size="sm" onClick={() => setExpandedSurvey(survey.id === expandedSurvey ? '' : survey.id)}>
                        <Maximize2 size={16} />
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Card>

        <AnimatePresence>
          {expandedSurvey && (
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
            >
              <Card darkMode={darkMode} className="w-full max-w-2xl">
                <Button className="absolute top-2 right-2" variant="ghost" size="sm" onClick={() => setExpandedSurvey('')}>
                  <X size={16} />
                </Button>
                <h3 className="text-2xl font-bold mb-4">{surveyData.find(s => s.id === expandedSurvey)?.title}</h3>
                <p>Detailed analysis and insights for this survey would go here...</p>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>

        <Card darkMode={darkMode} className="mb-8">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-2xl font-semibold">AI-Powered Descriptive Analysis</h3>
            <div className="flex items-center">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></div>
              <span className="text-sm text-green-500">Live Analysis</span>
            </div>
          </div>
          <div className="prose max-w-none">
            {aiAnalysis ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {aiAnalysis.split('\n\n').map((paragraph, index) => (
                  <motion.p
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {paragraph}
                  </motion.p>
                ))}
              </motion.div>
            ) : (
              <p>Generating analysis...</p>
            )}
          </div>
        </Card>

        <div className="flex flex-wrap justify-between items-center">
          <div className="space-y-2 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold">Quick Insights</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>COVID-19 Symptoms survey has the highest response rate</li>
              <li>Mental Health Assessment takes the longest to complete on average</li>
              <li>Family Medical History survey has the lowest completion rate</li>
            </ul>
          </div>
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

        <div className="mt-8 p-4 bg-blue-100 dark:bg-blue-900 rounded-lg">
          <h3 className="text-lg font-semibold mb-2 flex items-center">
            <MessageSquare className="mr-2" /> Feedback
          </h3>
          <p>Your feedback is valuable! Please share your thoughts on the survey process and analysis dashboard.</p>
          <Textarea className="mt-2" placeholder="Enter your feedback here..." />
          <Button className="mt-2">Submit Feedback</Button>
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