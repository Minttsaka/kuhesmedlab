import React from 'react'
import { Button } from './ui/button'

export default function AobutSec() {
  return (
    <div className='relative h-[50vh] bg-[#0040D1] mt-20 pb-60 pt-10 flex items-center text-white text-center'>
      <div className=' container mx-auto space-y-7'>
        <h2 className='text-5x font-bold'>Lorem ipsum  adipisicing elit. Officiis, harum.</h2>
        <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure perferendis cupiditate tempore numquam!</p>
        <div className='grid grid-cols-5 mt-10'>
            <div className='space-y-5'>
                <span className='h-6 w-6 bg-green-400 rounded-full p-2'>1</span>
                <h3 className='font-bold'>Lorem ipsum dolor sit amet.</h3>
                <p className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, consequatur.</p>
            </div>

            <div className='space-y-5'>
                <span className='h-6 w-6 bg-green-400 rounded-full p-2'>1</span>
                <h3 className='font-bold'>Lorem ipsum dolor sit amet.</h3>
                <p className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, consequatur.</p>
            </div>

            <div className='space-y-5'>
                <span className='h-6 w-6 bg-green-400 rounded-full p-2'>1</span>
                <h3 className='font-bold'>Lorem ipsum dolor sit amet.</h3>
                <p className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, consequatur.</p>
            </div>

            <div className='space-y-5'>
                <span className='h-6 w-6 bg-green-400 rounded-full p-2'>1</span>
                <h3 className='font-bold'>Lorem ipsum dolor sit amet.</h3>
                <p className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, consequatur.</p>
            </div>

            <div className='space-y-5'>
                <span className='h-6 w-6 bg-green-400 rounded-full p-2'>1</span>
                <h3 className='font-bold'>Lorem ipsum dolor sit amet.</h3>
                <p className='text-xs'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quis, consequatur.</p>
            </div>

        </div>
        
      </div>

      <div className='container grid grid-cols-2 text-start mx-auto absolute -bottom-20 inset-x-0 rounded-xl h-[30vh] fex items-center bg-[#2a2e7c]'>
        <div className='space-y-5'>
            <h2 className='font-bold'>Lorem ipsum dolor sit amet.</h2>
            <p className='font-light'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, ea. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nihil, pariatur?</p>
            <Button className='bg-white text-gray-500'>get started to us</Button>
        </div>
      </div>
      
    </div>
  )
}
