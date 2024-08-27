
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

export default function SurveyHeader() {

    const [darkMode, setDarkMode] = useState(false)
  return (

       <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a className="flex-shrink-0" href="#">
                <BarChartIcon className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />
              </a>
              <nav className="hidden md:ml-6 md:flex md:space-x-8">
                <a className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium" href="#">Dashboard</a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium" href="#">Surveys</a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium" href="#">Reports</a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium" href="#">Settings</a>
              </nav>
            </div>
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Button
                  className="ml-3"
                  size="sm"
                  variant="outline"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  {darkMode ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
                </Button>
              </div>
              <div className="ml-3 relative">
                <div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="32"
                      src="/placeholder.svg"
                      style={{
                        aspectRatio: "32/32",
                        objectFit: "cover",
                      }}
                      width="32"
                    />
                    <span className="sr-only">Open user menu</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
  )
}
