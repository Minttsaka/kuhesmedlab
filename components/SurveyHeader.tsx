
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
import Link from 'next/link'
import { Avatar, AvatarImage } from './ui/avatar'
import { useSession } from 'next-auth/react'

export default function SurveyHeader({id}:{id:string}) {

    const {data:session} = useSession()
    const user = session?.user
  return (

       <header className="hidden md:block sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950 shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
            <Link
              href="/mw/dashboard"
              className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
              prefetch={false}
            >
              <Avatar>
                <AvatarImage src='/img/official-logo.png' className="object-cover" />
            </Avatar>
            </Link>
              <nav className="hidden md:ml-6 md:flex md:space-x-8">
                <a className="text-gray-900 dark:text-gray-100 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium" href="/mw/dashboard">Dashboard</a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium" href="#overall">Overall survey analysis</a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium" href={`/mw/publication/${id}`}>Research</a>
                <a className="text-gray-500 dark:text-gray-400 hover:text-indigo-600 dark:hover:text-indigo-400 px-3 py-2 rounded-md text-sm font-medium" href="#feedback">Feedback</a>
              </nav>
            </div>
            <div className="flex items-center">
              <div className="ml-3 relative">
                <div>
                  <Button variant="ghost" size="icon" className="rounded-full">
                    <img
                      alt="Avatar"
                      className="rounded-full"
                      height="32"
                      src={user?.image! ?? '/img/avatar.png'}
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
