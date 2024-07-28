"use client"

import React from 'react'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Button } from './ui/button'

export default function DashboardCarousel() {

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
            {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className='relative container rounded-2xl'>

                <img src="https://plus.unsplash.com/premium_photo-1680658096480-7ca2fe809317?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member" className="min-h-[50vh] rounded-2xl md:h-[50vh] w-full object-cover object-center" />
                <div className='flex items-center absolute inset-0 bg-gradient-to-r from-white to-transparent'>
                    <div className='max-w-5xl space-y-5 ml-20'>
                        <h2 className='font-bold text-5xl'>
                            totam laboriosam eaque culpa itaque minima vero nesciunt! Hic, ex.
                        </h2>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aut doloribus eaque 
                        reiciendis, labore aliquid voluptate quod rem! Aliquam, nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                        minus non modi repellat explicabo esse fuga provident tempora dolorem ea.
                        </p>
                        <Button className='bg-black rounded-none'>
                        Explore this trending blogs
                        </Button>

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
