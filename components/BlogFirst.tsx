import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowRight, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarImage } from './ui/avatar'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function BlogFirst() {
  return (
    <div className='mt-20'>
      <BackgroundGradientAnimation className=" -skew-y-12 origin-top-left" />
      <div className='relative container mx-auto'>
      <Card className='shadow-2xl grid md:grid-cols-2'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='https://plus.unsplash.com/premium_photo-1681842934644-0d05b05e3348?q=80&w=2061&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='flex flex-col gap-4 mt-5'>
                    <Badge className='flex gap-2 rounded-xl bg-gradient-to-r from-blue-300 to-purple-400 text-gray-100 w-fit'>
                        <HelpCircle className='h-4 w-4' />
                        SUPPORT
                    </Badge>
                    <h2 className='text-2xl uppercase font-bold'>Outstanding support</h2>
                    <p>Discover the essential support system to propel this platform forward! dentify and connect with the right support system, resources, and expertise to fuel the growth and success of this innovative platform.</p>
                    <div className='flex gap-2 items-center'>
                        <Avatar>
                            <AvatarImage src='/placeholder.svg' />
                        </Avatar>
                        <div>
                            <p className='text-gray-600 '>Miracle Tsaka</p>
                            <p className='text-xs text-gray-500'>Product Manager</p>
                        </div>
                    </div>
                    
                    <Link className='text-[#3f3f74] mt-10 text-xs flex gap-2 items-center' href={'#'}>
                        Read More <ArrowRightIcon className='h-3 w-3' />
                    </Link>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
