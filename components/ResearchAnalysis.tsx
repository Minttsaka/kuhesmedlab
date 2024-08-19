"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { ArrowLeftRightIcon, BotMessageSquare, XCircleIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import axios from 'axios'

export default function ResearchAnalysis({file_url, researchId}:{file_url:string, researchId:string}) {

    const [isOpen,setIsOpen] = useState(false)
    const [response, setResponse] = useState<string>();
    const [loading, setLoading] = useState(false);
  
    const requestAnalysis = async () => {
      setLoading(true);
      try {
        const result = await axios.get(`/api/openai/${researchId}`);
        setResponse(result.data.completion);
        //localStorage.setItem('ai_response', result.data.completion);
      } catch (error) {
        console.error('Error generating completion:', error);
        setResponse('Error generating completion');
      } finally {
        setLoading(false);
      }
    };
  

    const storedResponse = true // localStorage.getItem('ai_response');
  return (
    <div>
        <div className="fixed bottom-5 right-5 h-12 w-12 rounded-full bg-gradient-to-r from-blue-300 to-purple-500 p-2  flex items-center justify-center">
            <span  onClick={()=>{
                setIsOpen((prev)=>!prev)
                }} className="text-white">
            <MessageCircleIcon />
            </span>
        </div>
       <aside className={cn("fixed w-[70%] md:w-[40%] inset-y-0 left-0 z-20 flex flex-col overflow-hidden rounded-r-2xl bg-gradient-to-br from-[#8b5cf6] to-[#ec4899] p-6 text-white shadow-xl",
       {
        'hidden':!isOpen
    })}>
    <h3 className="text-lg font-semibold">AI Assistant</h3>
        
        <div className="mt-6 flex-1 space-y-4 overflow-auto">
            {storedResponse===null &&  (
                <div className="max-w-md w-full mx-4 bg-white rounded-2xl shadow-lg overflow-hidden">
                <div className="bg-[#6366F1] px-6 py-4 flex items-center justify-between">
                  <h2 className="text-white text-2xl font-bold">How can I help you?</h2>
                  <button className="bg-white text-[#6366F1] font-medium px-4 py-2 rounded-full hover:bg-gray-100 transition-colors">
                    Get Help
                  </button>
                </div>
                <div className="px-6 py-4 flex items-center justify-between">
                  <p className="text-gray-600">Lets work on the research</p>
                  <button disabled={loading} onClick={ requestAnalysis} className="bg-[#6366F1] text-white p-3 rounded-full hover:bg-[#4F46E5] transition-colors">
                    
                    {loading ? 
                      <LoadingSpinner />
                   : <ArrowLeftRightIcon className="w-6 h-6" />
                   }
                  </button>
                </div>
              </div>
            )}

            {storedResponse && (
                <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                {storedResponse}
                </div>
           )}
           
        </div>
        </aside>
      
    </div>
  )
}

function MessageCircleIcon(props:any) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
      </svg>
    )
  }
  

const LoadingSpinner: React.FC = () => {
    return (
      <svg
        className="animate-spin h-6 w-6 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        ></circle>
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v8H4z"
        ></path>
      </svg>
    );
  };
