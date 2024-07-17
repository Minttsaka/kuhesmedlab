import { InstagramLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import { Copyright, Facebook } from 'lucide-react'
import React from 'react'

export default function Footer() {
  return (
    <div className='relative  md:mt-80'>
      <div className='absolute inset-x-0 -skew-y-12 top-40 bottom-0 h-[30rem] bg-[#2a2e7c] origin-top-left ' />
      <div className='absolute inset-x-0  top-40 bottom-0 h-full md:h-[29rem] bg-[#2a2e7c] origin-top-left ' />
    <div className='relative container mx-auto gap-5 border-x border-muted-foreground border-dotted'>
        <div>
            <h1 className='font-bold text-blue-900 mt-20'>
                Kuhesmedlab
            </h1>
        </div>
        <div className='grid md:grid-cols-4 gap-5 w-full text-gray-300 mt-20'>

            <div>
                <h2 className='font-bold text-xs'>About</h2>
                <ul className='flex flex-col gap-3 mt-5 ml-2'>
                    <li className="text-xs">About</li>
                    <li className="text-xs">About Us</li>
                    <li className="text-xs">Overview</li>
                </ul>
            </div>

            <div>
                <h2 className='font-bold text-xs'>Services:</h2>
                <ul className='flex flex-col gap-3 mt-5 ml-2'>
                    <li className="text-xs">services</li>
                    <li className="text-xs">What we offer</li>
                    <li className="text-xs">our-solutions</li>

                </ul>
            </div>

            <div>
                <h2 className='font-bold text-xs'>Blog</h2>
                <ul className='flex flex-col gap-3 mt-5 ml-2'>
                    <li className="text-xs">blog</li>
                    <li className="text-xs">news-and-insights</li>
                    <li className="text-xs">articles</li>
                </ul>
            </div>

            <div>
                <h2 className='font-bold text-xs'>Contact</h2>
                <ul className='flex flex-col gap-3 mt-5 ml-2'>
                    <li className="text-xs">contact</li>
                    <li className="text-xs">contact-us</li>
                    <li className="text-xs">get-in-touch</li>
                </ul>
            </div>

            <div>
                <h2 className='font-bold text-xs'>Portfolio</h2>
                <ul className='flex flex-col gap-3 mt-5 ml-2'>
                    <li className="text-xs">portfolio</li>
                    <li className="text-xs">case-studies</li>
                    <li className="text-xs">our-work</li>
                </ul>
            </div>

        </div>
        <div className='flex justify-between items-center mt-10'>
            <div className='flex gap-5 items-center'>
                <Facebook className='h-4 w-4 text-white' />
                <InstagramLogoIcon className='h-4 w-4 text-white' />
                <TwitterLogoIcon className='h-4 w-4 text-white' />
            </div>
            <p className='text-xs text-white flex items-center'><Copyright className='h-4 w-4 font-extralight' /> Kuhesmedlab</p>
        </div>
       

    </div>
    </div>
  )
}
