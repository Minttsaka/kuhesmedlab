import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Copyright, Facebook } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div className='relative md:mt-80'>
      <div className='absolute inset-x-0 -skew-y-12 top-40 bottom-0 h-[30rem] bg-[#2a2e7c] origin-top-left ' />
      <div className='absolute inset-x-0  skew-y-12 top-40 bottom-0 h-[30rem] bg-[#2a2e7c] origin-top-right ' />
      <div className='absolute inset-x-0  top-40 bottom-0 h-full md:h-[30rem] bg-[#2a2e7c] origin-top-right ' />
      <div className='relative py-20 '>
      <div className='container text-white mx-auto grid  md:grid-cols-4 lg:grid-cols-6 gap-5 md:gap-0 z-50'>
        <h3 className='text-2xl  font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent'>
            Kuhesmedlab
        </h3>
        <div>
            <h2 className='font-bold text-[#df891f]'>Products</h2>
            <ul className='space-y-2 mt-2 text-gray-400'>
                <li className="">Research</li>
                <li className="">Survey</li>
                <li className="">Data Analysis</li>
                <li className="">Cloud Storage</li>
                <li className="">Artificial Intelligence</li>
                <li className="">Automation</li>
            </ul>
        </div>

        <div>
            <h2 className='font-bold text-[#df891f]'>Events</h2>
            <ul className='space-y-2 mt-2 text-gray-400'>
                <li className="">Organizational Events</li>
                <li className="">Global Events</li>
                <li className="">Institutional Events</li>
            </ul>
        </div>

        <div>
            <h2 className='font-bold text-[#df891f]'>Resources</h2>
            <ul className='space-y-2 mt-2 text-gray-400'>
                <li className="">Blog</li>
                <li className="">Community</li>
                <li className="">Faq</li>
                <li className="">Support</li>
            </ul>
        </div>

        <div>
            <h2 className='font-bold text-[#df891f]'>About</h2>
            <ul className='space-y-2 mt-2 text-gray-400'>
                <li className="">About</li>
                <li className="">About us</li>
                <li className="">About Team</li>
                <li className="">About Technology</li>
            </ul>
        </div>

        <div className='space-y-3 text-gray-300'>
            <h3 className='font-bold'>Get in touch</h3>
            
            <div>
                <p className="font-light">0998970102</p>
                <p className="font-light">sales@kuhes.com</p>
                <p className="font-light">36 juluy cental islip ny 11722</p>
            </div>
            <div>
                <h3 className='font-bold'>Follow us:</h3>
                <ul className='flex gap-3 mt-2'>
                    <li className="font-bold">
                        <Facebook className='h-4 w-4' />
                    </li>
                    <li className="font-bold">
                    <InstagramLogoIcon className='h-4 w-4' />
                    </li>
                    <li className="font-bold">
                    <TwitterLogoIcon className='h-4 w-4' />
                    </li>

                </ul>
            </div>

        </div>
            
      </div>
    </div>
    </div>
  )
}
