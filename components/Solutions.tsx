import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'

export default function SolutionsFirst() {
  return (
    <div className=' bg-gray-100  py-20 text-white'>
      <div className='max-w-6xl mx-auto grid md:grid-cols-2 gap-5 px-10 py-5 rounded-xl space-y-5'>
        <div className='space-y-10'>
            <h2 className='text-4xl md:text-6xl font-bold text-black text-opacity-80'>
                The market leader for platform and market palce payments
            </h2>
            <p className='text-gray-500'>
                Lorem ipsum dolor sit amet consectetur
                 adipisicing elit. Dolor velit fugit corporis 
                 fuga ipsum exercitationem ullam, at perspiciatis 
                 expedita reprehenderit nam atque temporibus sit? Natus,
                  voluptas tempora. Consectetur doloribus optio a sunt
                   alias dicta 
                tenetur laudantium sit! Error, aliquid ducimus.
            </p>
            <div className='flex flex-col md:flex-row justify-center md:justify-start items-center gap-2'>
                <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                    <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                    <span>
                    Tailwind Connect
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
                <Link href={'/signin'} className="px-8 py-2 text- text-gray-500 flex items-center gap-2  bg-transparent rounded-[6px]  relative group transition duration-20 hover:bg-transparent">
                Learn more 
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
        </div>
        <div className='shadow-2xl shadow-gray-200 rounded-3xl '>
          <img className='w-full h-full rounded-3xl' alt='' src='/flow.png' />
        </div>
      </div>
    </div>
  )
}
