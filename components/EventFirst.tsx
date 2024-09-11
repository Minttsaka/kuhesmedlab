import { ArrowRight, StarIcon, Stars } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import Newsletter from './Newsletter'
import { Event } from '@prisma/client'

export default function EventFirst() {
  return (
    <div className='relative'>
      <BackgroundGradientAnimation className=" -skew-y-12 origin-top-left" />
      <div className='relative container mx-auto mt-10 mb-10 grid md:grid-cols-2 text-center md:text-start items-center'>
      <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>
        <div className='space-y-6 mt-20'>
            <div className='flex gap-2 items-center text-start text-xs'>
            <StarIcon className='text-yellow-400 fill-yellow-400' />
            <StarIcon className='text-yellow-400 fill-yellow-400' />
            <StarIcon className='text-yellow-400 fill-yellow-400' />
              
            </div>
            <h2 className='text-5xl md:text-7xl max-w-lg font-bold'>
            Empowering Health Through Innovation
            </h2>
            <p className='max-w-lg'>Exploring the Future of Medicine Together and 
            Bridging the Gap Between Research and Clinical Practice
                </p>
                <div className='flex justify-center md:justify-start gap-2'>
                  <Newsletter />
              </div>
        </div>
        <div className='p-3 rounded-full shadow bg-white bg-opacity-20'>
            <img className='shadow-2xl shadow-gray-300 rounded-full' alt='' src='/img/events.png' />

        </div>
      </div>
    </div>
  )
}
