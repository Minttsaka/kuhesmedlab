"use client"

import React from 'react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from './ui/button'
import { Content } from '@prisma/client'
import { stripHtml } from '@/lib/stripHtml'
import Link from 'next/link'
import { AlertCircle, Calendar } from 'lucide-react'

export default function DashboardCarousel({blog}:{blog:Content[]}) {

    const plugin = React.useRef(
        Autoplay({ delay: 2000, stopOnInteraction: true })
      )
    

  return (
    <div>
        <Carousel
        plugins={[plugin.current]}
        className="w-full min-h-[50vh]"
        onMouseEnter={plugin.current.stop}
        onMouseLeave={plugin.current.reset}
        >
        <CarouselContent className='space-x-20 mt-5'>
            {blog.length===0 && <Card className="w-full max-w-2xl mx-auto bg-white">
        <CardHeader className="text-center">
          <div className="mx-auto bg-blue-100 rounded-full p-3 w-16 h-16 flex items-center justify-center mb-4">
            <Calendar className="w-8 h-8 text-blue-500" />
          </div>
          <CardTitle className="text-2xl font-bold text-gray-800">No discovery</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="text-center space-y-4">
            <p className="text-gray-600">
              There are currently no scheduled discovery. Our team is working on planning exciting new discovery for the future.
            </p>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <div className="flex items-center">
                <AlertCircle className="w-5 h-5 text-yellow-400 mr-2" />
                <p className="text-sm text-yellow-700">
                  Stay tuned for updates on our upcoming discovery. We will be adding new discoveries soon!
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
            {blog?.map((blog, index) => (
            <CarouselItem key={index} className='relative container w-full rounded-2xl'>

                <img src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member" className="min-h-[50vh] rounded-2xl md:h-[50vh] w-full object-cover object-center" />
                <div className='flex items-center absolute inset-0 bg-gradient-to-r from-[purple] rounded-3xl to-transparent'>
                    <div className='max-w-xl text-white space-y-5 ml-20'>
                        <h2 className='font-bold text-xl md:text-5xl line-clamp-3'>
                            {blog.title}
                        </h2>
                        <p className='max-w-[300px] line-clamp-3 md:max-w-xl'>
                            {stripHtml(blog.body)}
                        </p>
                        <Link href={`/blog/read/${blog.slug}`}>
                            <button className="px-12 py-4 mt-5 rounded-full bg-[orange] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                            Explore
                            </button>
                        </Link>

                        </div>
                    </div>
            </CarouselItem>
            ))}
        </CarouselContent>
        {/* <CarouselPrevious />
        <CarouselNext /> */}
        </Carousel>
    </div>
  )
}
