import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function IndustryFinisher() {
  return (
    <div className='mb-20'>
      <div className='container mx-auto space-y-10'>
      <div className="lg:grid lg:grid-cols-1 gap-10 p-2 md:p-8 relative z-20">
    <div className="text-center lg:text-left">
        <h2 className="text-2xl md:text-4xl font-bold my-4 text-center">So what are you waiting for?</h2>
        <p className="my-4 text-base text-gray-500 md:text-lg tracking-wide font-light text-center max-w-lg mx-auto">We are here to help you with your Research career. Get in touch with us and we will get back to you as soon as possible.</p>
        <div className="flex justify-center">
          <Link href={'/register'} className='p-px text-xs font-semibold leading-6  text-white inline-block'>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full ">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                  Signup
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
          </Link>
        </div>
    </div>
</div>

      </div>
    </div>
  )
}
