import React from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function IndustryFinisher() {
  return (
    <div className=' py-20'>
      <div className='container mx-auto space-y-10'>
      <div className="lg:grid lg:grid-cols-1 gap-10 p-2 md:p-8 relative z-20">
    <div className="text-center lg:text-left">
        <h2 className="text-2xl md:text-4xl font-bold my-4 text-center">So what are you waiting for?</h2>
        <p className="my-4 text-base text-gray-300 md:text-lg tracking-wide font-light text-center max-w-lg mx-auto">We are here to help you with your business. Get in touch with us and we will get back to you as soon as possible.</p>
        <div className="flex justify-center">
            <button
                className="text-white inline-flex items-center justify-center bg-gradient-to-b from-[#464d55] to-[#25292e] text-base px-6 transition duration-150 shadow-[0_10px_20px_rgba(0,_0,_0,_.1),0_3px_6px_rgba(0,_0,_0,_.05)] hover:shadow-[rgba(0,_1,_0,_.2)_0_2px_8px] active:outline-none hover:opacity-80 rounded-2xl py-2"
            >
                <a href="/signup">Contact Us</a>
            </button>
        </div>
    </div>
</div>

      </div>
    </div>
  )
}
