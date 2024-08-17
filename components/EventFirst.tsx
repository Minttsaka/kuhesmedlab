import { ArrowRight, Stars } from 'lucide-react'
import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'

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
        <div className='space-y-6'>
            <div className='flex gap-2 items-center text-start text-xs'>
                <Stars className='h-8 w-8 text-purple-400' />
                <div className='space-y-1 '>
                    <h2 className='font-bold'>
                        5 stars
                    </h2>
                    <p>Read our events</p>
                </div>
            </div>
            <h2 className='text-5xl md:text-7xl max-w-lg font-bold'>
                Host lovely events to next level
            </h2>
            <p className='max-w-lg'>Lorem ipsum dolor, 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo, unde?
                sit amet consectetur adipisicing elit. Sequi, repellat.
                </p>
                <div className='flex justify-center md:justify-start gap-2'>
                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-[#2a2e7c] py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                  Do not miss events
                </span>
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
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
                </div>
        </div>
        <div className='p-3 rounded-full shadow bg-white bg-opacity-20'>
            <img className='shadow-2xl shadow-gray-300 rounded-full' alt='' src='/img/events.png' />

        </div>
      </div>
    </div>
  )
}
