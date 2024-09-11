"use client"

import React, { useState } from 'react'
import { Button } from './ui/button'
import { ArrowLeftRightIcon, BotMessageSquare, SendIcon, XCircleIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import axios from 'axios'
import { BellIcon, Cross1Icon } from '@radix-ui/react-icons'
import { Input } from './ui/input'
import 'animate.css';

export default function DashboaedAIAssist() {

    const [isOpen,setIsOpen] = useState(false)

  return (
    <div className='relative'>
        <div onClick={()=>{
                setIsOpen((prev)=>!prev)
                }} className="fixed  bottom-20 right-5">
            <img alt='' className=''  src='/img/message.png'/>
        </div>
       <aside className={cn("fixed w-[90%] z-50 space-y-5 h-[80vh] md:w-[35%] lg:w-[25%] bottom-0 right-5 z-20 flex flex-col overflow-hidden bg-white shadow rounded-t-lg animate__animated animate__slideInUp",
       {
        'hidden':!isOpen
    })}>
      <div className='flex justify-between items-center bg-[#2a2e7c] text-white rounded-t-lg p-2'>
        <h3 className="text-lg font-semibold">KUHESMEDLAB <span className='text-xs'>AI Assistance</span></h3>
        <Cross1Icon onClick={()=>{setIsOpen((prev)=>!prev)}} className='cursor-pointer' />
      </div>
    
      <div className="space-y-4 h-full relative">
            <div className="flex items-center justify-center">
            <img alt='' className='h-12 w-12 object-cover'  src='/img/official-logo.png'/>
            </div>
            <h3 className="text-lg text-center font-medium">AI Assistant</h3>
            <div className="space-y-2 px-5">
              <p className="text-muted-foreground">
              Enhance your conversation with kuhesmedlab ai assistant, an always-on generative Al assistant providing helpful
               KUHESMEDLAB guidance and recommendations.
              </p>

             <div className='space-y-2'>
                <p className='p-2 rounded-md border text-blue-600'>
                    I want to learn about your products and services
                </p>

                <p className='p-2 rounded-md border text-blue-600'>
                    I want to learn about your products and services
                </p>

                <p className='p-2 rounded-md border text-blue-600'>
                    I want to learn about your products and services
                </p>
             </div>
            </div>
            <p className='text-[red]'>
              Chatbot is Temporarily disabled
            </p>
            <div className="absolute bottom-0 inset-x-0 p-2 flex items-center space-x-2">
                <Input id="message" placeholder="Type your message..." className="flex-1" autoComplete="off" disabled/>
                <Button className='rounded-full' type="submit" size="icon">
                  <SendIcon className="h-4 w-4" />
                  <span className="sr-only">Send</span>
                </Button>
              </div>
           
           
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
  

