import React from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { RocketIcon } from 'lucide-react'
import { StarFilledIcon } from '@radix-ui/react-icons'

export default function AboutBenefits() {
  return (
    <div className='bg-[#00c26c] py-10 rounded-2xl flex items-center mt-20 text-white'>
        <div className='container mx-auto grid md:grid-cols-2 gap-5'>
            <div className='space-y-3'>
            <h5 className='flex justify-start text-xs text-center capitalize tracking-[3px]'><span className='rounded-2xl bg-gradient-to-r from-blue-300 to-purple-400 w-fit  py-1 px-5 uppercase'>Benefits</span></h5>
                <h2 className='text-2xl font-bold'>
                    Why us ? 
                </h2>
                <p className='max-w-xl'>Lorem ipsum, dolor sit amet consectetur adipisicing elit
                    . Expedita, iure provident facilis et optio at excepturi tenetur, similique quis, velit eligendi.
                    </p>
                  
            </div>
            <div className='space-y-3'>
                <div className='bg-white border-b-8 border-b-blue-200 text-black py-2 px-4 flex gap-4'>
                    <StarFilledIcon className='text-[green]' />
                    <p className='text-xl text-gray-700 font-bold'>Top 1% of research talent</p>
                </div>

                <div className='bg-white border-b-8 border-b-blue-200 text-black py-2 px-4 flex gap-4'>
                    <StarFilledIcon className='text-[green]' />
                    <p className='text-xl text-gray-700 font-bold'>Top 1% of research talent</p>
                </div>

                <div className='bg-white border-b-8 border-b-blue-200 text-black py-2 px-4 flex gap-4'>
                    <StarFilledIcon className='text-[green]' />
                    <p className='text-xl text-gray-700 font-bold'>Top 1% of research talent</p>
                </div>
            </div>
        </div>
      
    </div>
  )
}
