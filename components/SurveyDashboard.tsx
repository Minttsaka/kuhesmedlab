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

export default function SurveyDashboard() {
  const [selectedSurvey, setSelectedSurvey] = useState("all")
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    root.classList.toggle('dark', darkMode)
  }, [darkMode])

  // Mock data for charts
  const responseData = [
    { date: '2023-01', responses: 120, completionRate: 75 },
    { date: '2023-02', responses: 150, completionRate: 80 },
    { date: '2023-03', responses: 200, completionRate: 85 },
    { date: '2023-04', responses: 180, completionRate: 82 },
    { date: '2023-05', responses: 220, completionRate: 88 },
    { date: '2023-06', responses: 250, completionRate: 90 },
  ]

  const demographicData = [
    { name: '18-24', value: 20 },
    { name: '25-34', value: 35 },
    { name: '35-44', value: 25 },
    { name: '45-54', value: 15 },
    { name: '55+', value: 5 },
  ]

  const questionData = [
    { question: 'Product Quality', excellent: 40, good: 35, average: 15, poor: 7, veryPoor: 3 },
    { question: 'Customer Service', excellent: 45, good: 30, average: 20, poor: 4, veryPoor: 1 },
    { question: 'Value for Money', excellent: 35, good: 40, average: 18, poor: 5, veryPoor: 2 },
  ]

  const sentimentData = [
    { name: 'Positive', value: 65 },
    { name: 'Neutral', value: 25 },
    { name: 'Negative', value: 10 },
  ]

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#A28DFF']

  return (
    <div className={`flex flex-col w-full min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-gray-900'} transition-colors duration-500`}>
     
      <main className="flex-1 overflow-y-auto bg-gray-50 dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="mb-8 flex items-center justify-between">
            <h1 className="text-3xl font-bold leading-tight text-gray-900 dark:text-white">Survey Analytics Dashboard</h1>
            <Select value={selectedSurvey} onValueChange={setSelectedSurvey}>
              <SelectTrigger className="w-[200px] text-black">
                <SelectValue placeholder="Select survey" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Surveys</SelectItem>
                <SelectItem value="survey1">Customer Satisfaction</SelectItem>
                <SelectItem value="survey2">Product Feedback</SelectItem>
                <SelectItem value="survey3">Employee Engagement</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-6 mb-8 md:grid-cols-2 xl:grid-cols-4">
            {[
              { title: "Total Responses", value: "1,284", icon: ClipboardListIcon, change: "+20.1% from last month" },
              { title: "Completion Rate", value: "78.2%", icon: PercentIcon, change: "+2.5% from last month" },
              { title: "Avg. Time to Complete", value: "5m 42s", icon: ClockIcon, change: "-30s from last month" },
              { title: "Net Promoter Score", value: "8.7", icon: TrendingUpIcon, change: "+0.3 from last month" },
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
                  <AreaChart data={responseData}>
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
                      data={demographicData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {demographicData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <div className="mb-8">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Question-Specific Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <BarChart data={questionData}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="question" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Bar dataKey="excellent" stackId="a" fill={COLORS[0]} />
                    <Bar dataKey="good" stackId="a" fill={COLORS[1]} />
                    <Bar dataKey="average" stackId="a" fill={COLORS[2]} />
                    <Bar dataKey="poor" stackId="a" fill={COLORS[3]} />
                    <Bar dataKey="veryPoor" stackId="a" fill={COLORS[4]} />
                  </BarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>
          </div>
          <div className="grid gap-6 mb-8 md:grid-cols-2">
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle>Descriptive Data</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Response Distribution</h4>
                    <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">Normal (Bell Curve)</p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Most responses cluster around the mean, with fewer extreme values.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Standard Deviation</h4>
                    <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">±1.2</p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">Indicates a moderate spread of responses around the mean.</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Confidence Interval (95%)</h4>
                    <p className="mt-2 text-3xl font-semibold text-gray-900 dark:text-white">7.8 - 9.2</p>
                    <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">We are 95% confident that the true population mean falls within this range.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="dark:bg-gray-800">
              <CardHeader>
                <CardTitle>AI Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Key Insights</h4>
                    <ul className="mt-2 list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      <li>Customer satisfaction has improved by 15% since last quarter</li>
                      <li>Product quality is the highest-rated aspect of our service</li>
                      <li>35-44 age group shows the most engagement with our surveys</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Recommendations</h4>
                    <ul className="mt-2 list-disc list-inside text-sm text-gray-600 dark:text-gray-400">
                      <li>Focus on improving customer service to match product quality ratings</li>
                      <li>Develop targeted marketing campaigns for the 25-34 age group</li>
                      <li>Investigate reasons for lower engagement in the 55+ age group</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Predicted Trends</h4>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">Based on current data, we predict a 10% increase in overall satisfaction scores over the next quarter if recommended actions are taken.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}