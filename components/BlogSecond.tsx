import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowRight, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarImage } from './ui/avatar'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function BlogSecond() {
  return (
    <div className='mt-40'>
      <div className='container mx-auto space-y-20'>
        <div className='grid md:grid-cols-2 gap-10'>
            <div className='flex flex-col gap-4 mt-5'>
                <Badge className='flex gap-2 rounded-xl bg-gradient-to-r from-blue-300 to-purple-400 text-gray-100 w-fit'>
                    <HelpCircle className='h-4 w-4' />
                    SUPPORT
                </Badge>
                <h2 className='text-2xl uppercase font-bold'>Testing the impact of buy now, pay later across 150,000+ checkout sessions</h2>
                <p>Discover the essential support system to propel this platform forward! dentify and connect with the right support system, resources, and expertise to fuel the growth and success of this innovative platform.</p>
                
                
                <Link className='text-[#3f3f74] mt-10 text-xs flex gap-2 items-center' href={'#'}>
                    Read More <ArrowRightIcon className='h-3 w-3' />
                </Link>
            </div>
            <div className='space-y-5'>
                <div className='flex gap-2 items-center'>
                    <Avatar>
                        <AvatarImage src='/placeholder.svg' />
                    </Avatar>
                    <div>
                        <p className='text-gray-600 '>Miracle Tsaka</p>
                        <p className='text-xs text-gray-500'>Product Manager</p>
                    </div>
                </div>
                <div className='bg-white rounded-3xl shadow-2xl shadow-black/50 p-5'>
                    <img alt='' className='' src='/flow.png' />
                </div>
            </div>
        </div>

        <div className='grid md:grid-cols-2 gap-10'>
            <div className='flex flex-col gap-4 mt-5'>
                <Badge className='flex gap-2 rounded-xl bg-gradient-to-r from-blue-300 to-purple-400 text-gray-100 w-fit'>
                    <HelpCircle className='h-4 w-4' />
                    SUPPORT
                </Badge>
                <h2 className='text-2xl uppercase font-bold'>Testing the impact of buy now, pay later across 150,000+ checkout sessions</h2>
                <p>Discover the essential support system to propel this platform forward! dentify and connect with the right support system, resources, and expertise to fuel the growth and success of this innovative platform.</p>
                
                
                <Link className='text-[#3f3f74] mt-10 text-xs flex gap-2 items-center' href={'#'}>
                    Read More <ArrowRightIcon className='h-3 w-3' />
                </Link>
            </div>
            <div className='space-y-5'>
                <div className='flex gap-2 items-center'>
                    <Avatar>
                        <AvatarImage src='/placeholder.svg' />
                    </Avatar>
                    <div>
                        <p className='text-gray-600 '>Miracle Tsaka</p>
                        <p className='text-xs text-gray-500'>Product Manager</p>
                    </div>
                </div>
                <div className='bg-white rounded-3xl shadow-2xl shadow-black/50 p-5'>
                    <img alt='' className='' src='/flow.png' />
                </div>
            </div>
        </div>

        <div className='grid md:grid-cols-2 gap-10'>
            <div className='flex flex-col gap-4 mt-5'>
                <Badge className='flex gap-2 rounded-xl bg-gradient-to-r from-blue-300 to-purple-400 text-gray-100 w-fit'>
                    <HelpCircle className='h-4 w-4' />
                    SUPPORT
                </Badge>
                <h2 className='text-2xl uppercase font-bold'>Testing the impact of buy now, pay later across 150,000+ checkout sessions</h2>
                <p>Discover the essential support system to propel this platform forward! dentify and connect with the right support system, resources, and expertise to fuel the growth and success of this innovative platform.</p>
                
                
                <Link className='text-[#3f3f74] mt-10 text-xs flex gap-2 items-center' href={'#'}>
                    Read More <ArrowRightIcon className='h-3 w-3' />
                </Link>
            </div>
            <div className='space-y-5'>
                <div className='flex gap-2 items-center'>
                    <Avatar>
                        <AvatarImage src='/placeholder.svg' />
                    </Avatar>
                    <div>
                        <p className='text-gray-600 '>Miracle Tsaka</p>
                        <p className='text-xs text-gray-500'>Product Manager</p>
                    </div>
                </div>
                <div className='bg-white rounded-3xl shadow-2xl shadow-black/50 p-5'>
                    <img alt='' className='' src='/flow.png' />
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
