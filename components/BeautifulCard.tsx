"use client"

import React, { useState, useEffect } from 'react'
import { Button } from './ui/button'
import { HelpCircle, Group, Search, Book, Code, Zap, Cpu, LucideIcon } from 'lucide-react'
import { Card, CardContent } from './ui/card'
import { Badge } from './ui/badge'
import { motion, AnimatePresence } from 'framer-motion'
import Link from 'next/link'

interface FeatureProps {
  icon: LucideIcon;
  color: string;
  title: string;
  description: string;
  bgImage: string;
  link:string
}

const Feature: React.FC<FeatureProps> = ({ icon: Icon, color, title, description,link }) => {
  return (
    <Card className="bg-white/10 backdrop-blur-md shadow-2xl overflow-hidden h-full">
      <CardContent className="p-6 h-full flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <div className={`p-2 rounded-full bg-${color}-500`}>
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-3xl font-bold text-white">{title}</h2>
          </div>
          <p className="text-xl text-gray-200">{description}</p>
        </div>
        <Link href={link} className="bg-slate-800 no-underline group w-fit cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <button className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                  Get Started
                </span>
                <svg
                  fill="none"
                  height="16"
                  viewBox="0 0 24 24"
                  width="16"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 8.75L14.25 12L10.75 15.25"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  />
                </svg>
              </button>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </Link>
      </CardContent>
    </Card>
  )
}

export default function BeautifulCard() {
  const [activeTab, setActiveTab] = useState<string>('Support')

  const features: FeatureProps[] = [
    {
      icon: HelpCircle,
      color: 'green',
      title: 'Support',
      description: 'Discover the essential support system to propel this platform forward! Identify and connect with the right resources and expertise.',
      bgImage: '/img/support.png',
      link:"/support"
    },
    {
      icon: Group,
      color: 'blue',
      title: 'Forum',
      description: 'Engage in discussions on the latest developments and trends in medical laboratory technologies and advancements.',
      bgImage: '/img/community.png',
      link:"/community/feed"
    },
    {
      icon: Search,
      color: 'purple',
      title: 'Research',
      description: 'Use this platform to research and drive innovation in medical laboratory science. Share knowledge and overcome challenges.',
      bgImage: '/img/publications.png',
      link:"/mw/research"
    },
    {
      icon: Book,
      color: 'yellow',
      title: 'Survey',
      description: 'Take your survey to the next level. Build survey forms with beautiful templates right into it.',
      bgImage: '/img/survey.png',
      link:"/survey"
    },
    {
      icon: Zap,
      color: 'orange',
      title: 'Collaboration',
      description: 'Collaborate with peers globally in real-time on research projects, data analysis, and problem-solving sessions.',
      bgImage: '/img/analysis.png',
      link:"/signin"
    },

  ]

  const activeFeature = features.find(f => f.title === activeTab) || features[0]

  return (
    <div className="relative md:min-h-screen flex bg-gray-900 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center transition-all duration-500 ease-in-out transform scale-105"
        style={{ backgroundImage: `url(${activeFeature.bgImage})` }}
      />
      <div className="absolute inset-0 bg-black bg-opacity-60 backdrop-blur-sm" />
      
      <div className="relative z-10 flex w-full max-w-7xl mx-auto px-4 py-16">
        <div className="w-1/4 pr-8">
          <h1 className="text-xs md:text-4xl font-bold text-white mb-8">MLS Scientist Platform</h1>
          <nav className="space-y-2">
            {features.map((feature) => (
              <Button
                key={feature.title}
                onClick={() => setActiveTab(feature.title)}
                variant={activeTab === feature.title ? 'default' : 'outline'}
                className={`w-full justify-start text-left text-lg py-3 ${
                  activeTab === feature.title ? `bg-${feature.color}-500 text-white` : 'text-gray-300'
                }`}
              >
                <feature.icon className="mr-2 h-5 w-5" />
                <span className='hidden md:block'>
                  {feature.title}
                </span>
              </Button>
            ))}
          </nav>
        </div>
        
        <div className="w-3/4">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="h-full"
            >
              <Feature {...activeFeature} />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}