"use client"

import React, { ReactNode } from 'react'
import { Upload, Download, BookOpen,FileSpreadsheet, Brain, TrendingUp } from "lucide-react"
import { IconChartBar } from '@tabler/icons-react'

export default function ResearchDashboard() {
  const iconSize = 80
  const iconColor = "white"

  const IconWrapper = ({ children, gradient }: { children: ReactNode, gradient: string }) => (
    <div 
      className="p-8 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer transform hover:scale-105"
      style={{
        background: gradient,
        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05), inset 0 0 0 2px rgba(255, 255, 255, 0.2)'
      }}
    >
      {children}
    </div>
  )

  const BackgroundBlur = () => (
    <div
      aria-hidden='true'
      className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'
    >
      <div
        style={{
          clipPath:
            'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
        }}
        className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
      />
    </div>
  )

  const DashboardItem = ({ icon, title, description, gradient, isReversed }: { icon: ReactNode, title: string, description: string, gradient: string, isReversed: boolean }) => (
    <div className={`flex flex-col ${isReversed ? 'md:flex-row-reverse' : 'md:flex-row'} gap-10 items-center relative`}>
      <BackgroundBlur />
      <div className="w-full md:w-1/2 flex justify-center">
        <IconWrapper gradient={gradient}>
          {icon}
        </IconWrapper>
      </div>
      <div className='w-full md:w-1/2 max-w-sm mx-auto md:max-w-none'>
        <h2 className='text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 mb-4'>
          {title}
        </h2>
        <p className='text-gray-500 font-light'>
          {description}
        </p>
      </div>
    </div>
  )

  const dashboardItems = [
    {
      icon: <Upload size={iconSize} color={iconColor} strokeWidth={1.5} />,
      title: "Upload Research Papers",
      description: "Simplify and accelerate the sharing of medical laboratory research, uploading papers in a centralized hub to facilitate collaboration, innovation, and improved healthcare outcomes in Malawi and beyond.",
      gradient: "linear-gradient(135deg, #ff9a9e 0%, #fad0c4 99%, #fad0c4 100%)"
    },
    {
      icon: <Download size={iconSize} color={iconColor} strokeWidth={1.5} />,
      title: "Download Research Papers",
      description: "Explore a vast collection of medical laboratory research, downloading papers to stay updated on the latest findings, advancements, and best practices in enhancing healthcare outcomes.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
    },
    {
      icon: <BookOpen size={iconSize} color={iconColor} strokeWidth={1.5} />,
      title: "Learn from KUHESMEDLAB",
      description: "Enhance your knowledge and skills in medical laboratory science, accessing a comprehensive repository of research papers, articles, and resources to stay updated on the latest techniques, methodologies, and innovations in the field.",
      gradient: "linear-gradient(135deg, #fbc2eb 0%, #a6c1ee 100%)"
    },
    {
      icon: <IconChartBar size={iconSize} color={iconColor} strokeWidth={1.5} />,
      title: "Research Analysis",
      description: "Dive deep into research data with powerful analysis tools. Visualize trends, compare methodologies, and gain valuable insights to drive your medical laboratory research forward.",
      gradient: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)"
    },
    {
      icon: <FileSpreadsheet size={iconSize} color={iconColor} strokeWidth={1.5} />,
      title: "Survey Management",
      description: "Create, distribute, and analyze surveys to gather crucial data for your medical research. Our intuitive tools make it easy to design effective questionnaires and interpret results.",
      gradient: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)"
    },
    {
      icon: <Brain size={iconSize} color={iconColor} strokeWidth={1.5} />,
      title: "AI-Powered Analysis",
      description: "Leverage cutting-edge artificial intelligence to analyze complex medical data sets. Uncover hidden patterns, predict outcomes, and accelerate your research with advanced AI functionalities.",
      gradient: "linear-gradient(135deg, #5ee7df 0%, #b490ca 100%)"
    },
    
  ]

  return (
    <div className='relative px-5 md:px-0'>
      <div className='max-w-6xl mx-auto py-20'>
        <div className='space-y-32'>
          {dashboardItems.map((item, index) => (
            <DashboardItem
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              gradient={item.gradient}
              isReversed={index % 2 !== 0}
            />
          ))}
        </div>
      </div>
    </div>
  )
}