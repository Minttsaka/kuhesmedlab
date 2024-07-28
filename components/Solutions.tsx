import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export default function SolutionsFirst() {
  return (
    <div className='bg-[#0040d1] mt-20 py-20 text-white'>
      <div className='container mx-auto bg-[#2a2e7c] px-10 py-5 rounded-xl space-y-5'>
        <div className='grid grid-cols-2 items-center  w-full'>
            <h2 className='font-bold text-3xl'>
                Lorem ipsum dolor sit.
            </h2>
            <p className='font-light'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ab.</p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
            <div className=' p-6 rounded-md space-y-4 flex  items-start gap-5'>
                <span className='h-8 w-8 rounded-full shrink-0 bg-green-400 text-white flex items-center justify-center font-bold'>1</span>
                <div>
                    <h2 className='font-bold'>Lorem, ipsum dolor.</h2>
                    <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita quisquam voluptas veniam cum quo voluptatibus nobis, asperiores at error.</p>
                </div>
                
            </div>

            <div className=' p-6 rounded-md space-y-4 flex  items-start gap-5'>
                <span className='h-8 w-8 rounded-full shrink-0 bg-green-400 text-white flex items-center justify-center font-bold'>1</span>
                <div>
                    <h2 className='font-bold'>Lorem, ipsum dolor.</h2>
                    <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita quisquam voluptas veniam cum quo voluptatibus nobis, asperiores at error.</p>
                </div>
                
            </div>
            
            <div className=' p-6 rounded-md space-y-4 flex  items-start gap-5'>
                <span className='h-8 w-8 rounded-full shrink-0 bg-green-400 text-white flex items-center justify-center font-bold'>1</span>
                <div>
                    <h2 className='font-bold'>Lorem, ipsum dolor.</h2>
                    <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita quisquam voluptas veniam cum quo voluptatibus nobis, asperiores at error.</p>
                </div>
                
            </div>

            <div className=' p-6 rounded-md space-y-4 flex  items-start gap-5'>
                <span className='h-8 w-8 rounded-full shrink-0 bg-green-400 text-white flex items-center justify-center font-bold'>1</span>
                <div>
                    <h2 className='font-bold'>Lorem, ipsum dolor.</h2>
                    <p className=''>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita quisquam voluptas veniam cum quo voluptatibus nobis, asperiores at error.</p>
                </div>
                
            </div>


        </div>
      </div>
    </div>
  )
}
