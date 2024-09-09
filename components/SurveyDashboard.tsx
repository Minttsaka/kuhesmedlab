"use client"

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { TabsContent, TabsList, TabsTrigger, Tabs } from "@/components/ui/tabs"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, PieChart, Pie, Cell, AreaChart, Area } from 'recharts'
import { motion } from 'framer-motion'
import { BarChartIcon, ClipboardListIcon, ClockIcon, MoonIcon, PercentIcon, SunIcon, TrendingUpIcon } from 'lucide-react'
import { surveyAnalysis } from '@/lib/actions'

interface DemographicData {
  name: string; // The name of the age range, e.g., '18-24'
  value: number; // The number of responses in this age range
}


interface DailyProgress {
  date: string; // Date in ISO format, e.g., '2023-01-01'
  responses: number; // Number of responses on this date
  completionRate: number; // Completion rate as a percentage
}


export default function SurveyDashboard({surveyId}:{surveyId:string}) {
  const [selectedSurvey, setSelectedSurvey] = useState("all")
  const [data, setData] = useState<{
    completionRate:number,
    totalResponses:number,
     demographicData:DemographicData[],
     responseTrends:DailyProgress[],
     averageTimeTakenInMinutes:string
    }>()


  useEffect(()=>{

    const fetchData = async () => {
    const {
    completionRate,
    totalResponses,
    demographicData,
    responseTrends,
    averageTimeTakenInMinutes
  } = await surveyAnalysis(surveyId)

  const allInfo = {
    completionRate,
    totalResponses,
    demographicData,
    responseTrends,
    averageTimeTakenInMinutes
  }

  setData(allInfo)

}

fetchData()
  },[])

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF']

  return (
    <div className={`flex flex-col w-full ${true ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-500`} id='overview'>
     
      <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">Survey Analytics Dashboard</h1>
          </div>
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Total Responses", value: data?.totalResponses, icon: ClipboardListIcon, change: "Now" },
              { title: "Completion Rate", value:`${data?.completionRate}%`, icon: PercentIcon, change: "Now" },
              { title: "Avg. Time to Complete", value:`${data?.averageTimeTakenInMinutes} min`, icon: ClockIcon, change: "Now" },
              { title: "Drop-off", value: "Unavailable", icon: TrendingUpIcon, change: "Now" },
            ].map((item, index) => (
              <Card key={index} className="dark:bg-gray-800">
                <CardHeader className="flex flex-row items-center justify-between pb-2 space-y-0">
                  <CardTitle className="text-sm font-medium">{item.title}</CardTitle>
                  <item.icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{item.value}</div>
                  <p className="text-xs text-gray-600 dark:text-gray-400">{item.change}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid gap-6 mb-8 md:grid-cols-2">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Response Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <AreaChart data={data?.responseTrends}>
                    <defs>
                      <linearGradient id="colorResponses" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="date" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Area type="monotone" dataKey="responses" stroke="#8884d8" fillOpacity={1} fill="url(#colorResponses)" />
                  </AreaChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Demographic Breakdown</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={data?.demographicData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {data?.demographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}