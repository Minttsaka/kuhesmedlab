import React from 'react'
import { Button } from './ui/button'
import { ArrowRight } from 'lucide-react'

export default function Resources() {
  return (
    <div className=''>
      <div className='container mx-auto space-y-5'>
        <div className='grid grid-cols-2 items-center mt-10 w-full'>
            <h2 className='font-bold text-3xl'>
                Lorem ipsum dolor sit.
            </h2>
            <p className='text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias, ut? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, ab.</p>
        </div>

        <div className='grid grid-cols-2 gap-4'>
            <div className='bg-blue-100 p-6 rounded-md space-y-4'>
                <h2 className='font-bold'>Lorem, ipsum dolor.</h2>
                <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita quisquam voluptas veniam cum quo voluptatibus nobis, asperiores at error.</p>
                <Button className='text-sm'>
                    schedule a call <ArrowRight className='h-2 w-2' />
                </Button>
            </div>

            <div className='bg-blue-100 p-6 rounded-md space-y-4'>
                <h2 className='font-bold'>Lorem, ipsum dolor.</h2>
                <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita quisquam voluptas veniam cum quo voluptatibus nobis, asperiores at error.</p>
                <Button className='text-sm'>
                    schedule a call <ArrowRight className='h-2 w-2' />
                </Button>
            </div>

            <div className='bg-blue-100 p-6 rounded-md space-y-4'>
                <h2 className='font-bold'>Lorem, ipsum dolor.</h2>
                <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita quisquam voluptas veniam cum quo voluptatibus nobis, asperiores at error.</p>
                <Button className='text-sm'>
                    schedule a call <ArrowRight className='h-2 w-2' />
                </Button>
            </div>

            <div className='bg-blue-100 p-6 rounded-md space-y-4'>
                <h2 className='font-bold'>Lorem, ipsum dolor.</h2>
                <p className='text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sapiente expedita quisquam voluptas veniam cum quo voluptatibus nobis, asperiores at error.</p>
                <Button className='text-sm'>
                    schedule a call <ArrowRight className='h-2 w-2' />
                </Button>
            </div>
        </div>
      </div>
    </div>
  )
}
