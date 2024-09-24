"use client"

import { useState, useEffect, KeyboardEvent } from 'react'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { ChevronRight, Home, FileText, HelpCircle, Settings, ExternalLink, Search, Menu, X } from 'lucide-react'
import Link from 'next/link'
import { Support } from '@prisma/client'
import {motion } from "framer-motion"
import { useRouter } from 'next/navigation'

const topics = [
  { id: 'getting-started', title: 'Getting Started', icon: Home },
  { id: 'genomic-analysis', title: 'Genomic Analysis', icon: FileText },
  { id: 'clinical-trials', title: 'Clinical Trials', icon: FileText },
  { id: 'data-integration', title: 'Data Integration', icon: FileText },
  { id: 'troubleshooting', title: 'Troubleshooting', icon: HelpCircle },
  { id: 'account-settings', title: 'Account Settings', icon: Settings },
]

export default function SupportContentPage({support, singleSupport}:{support:Support[], singleSupport:Support}) {
    const [searchQuery, setSearchQuery] = useState('')
    const [open , setOpen] =useState(false)

    const router = useRouter()

    const handleSearch = () => {
      if (searchQuery.trim()) {
        router.push(`/support/search?q=${encodeURIComponent(searchQuery.trim())}`)
      }
    }
  
    const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
      if (event.key === 'Enter') {
        handleSearch()
      }
    }


  return (
    <div className="flex flex-col h-screen bg-gray-100">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 p-4">
        <div className="max-w-7xl mx-auto flex items-center">
          <h1 className="text-2xl font-bold text-gray-800 mr-4 hidden md:block">Kuhesmedlab Support</h1>
          <Menu className='md:hidden' onClick={()=>setOpen((prev)=>!prev)} />
          <div className="relative flex-grow max-w-md">
            <Input
              type="text"
              placeholder="Search topics..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyDown={handleKeyDown}
              className="pl-10 pr-4 py-2 w-full"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          </div>
        </div>
      </div>

      <div className="flex flex-1 overflow-hidden">
        {/* Left Sidebar */}
        <div className="hidden md:block w-64 bg-white border-r border-gray-200">
          <ScrollArea className="h-full">
            <nav className="space-y-1 px-2 py-4">
              {support.map((topic) => (
                <Link
                  href={`/support/${topic.slug}`}
                  key={topic.id}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    'bg-blue-50 text-blue-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {topic.title}
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </div>

        {open && <div className="fixed inset-y-0 left-0 w-64 bg-white border-r border-gray-200">
          <ScrollArea className="h-full">
            <nav className="space-y-1 px-2 py-4">
              <div className='flex justify-end p-2'>
                <X onClick={()=>setOpen((prev)=>!prev)} />
              </div>
              {support.map((topic) => (
                <Link
                  href={`/support/${topic.slug}`}
                  key={topic.id}
                  className={`flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                    'bg-blue-50 text-blue-600 hover:bg-gray-50 hover:text-gray-900'
                  }`}
                >
                  {topic.title}
                </Link>
              ))}
            </nav>
          </ScrollArea>
        </div>}

        {/* Main Content Area */}
        <div className="flex-1 overflow-auto">
          <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            <div className="px-4 py-6 sm:px-0">
              <div className="  overflow-hidden sm:rounded-lg">
                <div className="px-4 py-5 sm:p-6">
                    <motion.div
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.5 }}
                    className="prose prose-lg max-w-4xl mx-auto"
                    dangerouslySetInnerHTML={{ __html: singleSupport?.body! }}
                  />
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}