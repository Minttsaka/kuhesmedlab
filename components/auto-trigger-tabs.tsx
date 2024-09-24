/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/dkheCyZ3Hqi
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
'use client'

import { useState, useEffect } from "react"
import { Button } from "./ui/button"
import { ArrowRight, Facebook } from "lucide-react"
import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import Image from "next/image"
import Link from "next/link"
import { Content } from "@prisma/client"
import { stripHtml } from "@/lib/stripHtml"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Calendar, AlertCircle } from 'lucide-react'

export function AutoTriggerTabs({autoTrigger}:{autoTrigger:Content[]}) {
  const [activeTab, setActiveTab] = useState(0)
  
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((prevTab) => (prevTab + 1) % 3)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

 
  return (
    <div className="relative container mx-auto min-h-screen mt-5">
      <div className="flex flex-col gap-5 max-w-3xl mr-auto mb-10">
        <div className="w-fit mb-5 lg:mb-5 overflow-hidden tracking-[3px] text-xs md:px-5 md:py-2 lg:text-xs uppercase bg-gradient-to-r from-blue-300 to-purple-400 text-white rounded-full px-4 py-2">
          <span>Center of Innovation</span>
        </div>
        <h1 className="text-4xl font-bold">Driving Innovation in Medical Laboratory Science</h1>
        <p>
          Recognizing the rapidly evolving landscape of laboratory technology, the research team is dedicated to empowering researchers, professionals,
          and students to embrace a pioneering mindset and explore creative solutions to address the challenges they face.
        </p>
        <Link href={'/signin'} className="bg-slate-800 no-underline group w-fit cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
          <span className="absolute inset-0 overflow-hidden rounded-full">
            <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </span>
          <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
            <span>Get Started</span>
            <svg fill="none" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
              <path d="M10.75 8.75L14.25 12L10.75 15.25" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" />
            </svg>
          </div>
          <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
        </Link>
      </div>
      
      <div className="relative h-[80vh] overflow-hidden">
        {autoTrigger.length===0 && <Card className="w-full max-w-2xl mx-auto bg-white">
        <CardHeader className="text-center">
          <div className="mx-auto bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">No blog</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              There are currently no scheduled blog. Our team is working on planning exciting new blog for the future.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
                <p className="text-sm text-yellow-700">
                  Stay tuned for updates on our upcoming blog. We will be adding new blog soon!
                </p>
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-sm text-gray-500">
                In the meantime, you can:
              </p>
              <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                {/* <li>Check out our past event recordings</li> */}
                <li>Subscribe to our newsletter for blog notifications</li>
                <li>Follow us on social media for the latest updates</li>
              </ul>
            </div>
          </div>
        </CardContent>
      </Card>}
        {autoTrigger?.map((content, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              activeTab === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="grid md:grid-cols-2 gap-5 h-full">
              <div className="grid grid-cols-1 gap-2 overflow-y-auto">
                <div className="space-y-2">
                  <h2 className="font-bold text-2xl">{content.title}</h2>
                  <p className="text-gray-500 max-w-md line-clamp-6">{stripHtml(content.body)}</p>
                  <Link href={`/blog/read/${content.slug}`} className=" text-[#2a2e7c] font-bold flex items-center gap-2  bg-transparent rounded-[6px]  relative group transition duration-20 hover:bg-transparent">
                            Learn full story
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
                          </Link>
                </div>
                {/* Add more content sections here if needed */}
              </div>
              <div className="relative md:h-full shadow-2xl rounded-2xl overflow-hidden">
                <div className={`absolute inset-0 bg-gradient-to-t from-[blue] to-transparent opacity-60 shadow-3xl flex flex-col justify-end gap-1 p-5 rounded-2xl`} />
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <p className="text-white font-bold md:text-xl">{content.title}</p>
                  <Link className="text-white text-xs flex items-center" href={`/publications/${content.slug}`}>Read the article <ArrowRight className="h-4 w-4" /></Link>
                </div>
                <img src={content.image!} className="w-full h-full object-cover rounded-2xl" alt="Article image" />
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-3 w-full items-center justify-center border-t border-muted mt-8">
        {[0, 1, 2].map((index) => (
          <button
            key={index}
            className={`flex items-center justify-center gap-2 px-4 py-10 text-sm font-medium transition-colors ${
              activeTab === index ? "text-primary border-t-2 border-primary" : "text-muted-foreground hover:text-primary"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {/* You can add tab labels or icons here if needed */}
          </button>
        ))}
      </div>
    </div>
  )
}