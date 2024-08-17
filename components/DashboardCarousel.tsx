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

                <img src="https://images.unsplash.com/photo-1626544827763-d516dce335e2?q=80&w=1934&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member" className="min-h-[50vh] rounded-2xl md:h-[50vh] w-full object-cover object-center" />
                <div className='flex items-center absolute inset-0 bg-gradient-to-r from-[purple] rounded-3xl to-transparent'>
                    <div className='max-w-xl text-white space-y-5 ml-20'>
                        <h2 className='font-bold text-xl md:text-5xl'>
                            totam laboriosam eaque culpa itaque minima vero nesciunt! Hic, ex.
                        </h2>
                        <p className='max-w-[300px] md:max-w-xl'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Itaque aut doloribus eaque 
                        reiciendis, labore aliquid voluptate quod rem! Aliquam, nemo?Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias
                        minus non modi repellat explicabo esse fuga provident tempora dolorem ea.
                        </p>
                        <button className="px-12 py-4 rounded-full bg-[orange] font-bold text-white tracking-widest uppercase transform hover:scale-105 hover:bg-[#21e065] transition-colors duration-200">
                        Explore
                        </button>

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
