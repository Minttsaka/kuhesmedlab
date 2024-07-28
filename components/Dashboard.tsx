import React from 'react'
import { Card, CardContent } from './ui/card'

export default function Dashboard() {
  return (
    <div className='mt-20'>
        <div className='container mx-auto grid grid-cols-4 gap-4'>
            <Card className='border-none  shadow-none bg-gray-100 py-10'>
                <CardContent className='space-y-3'>
                    <h2  className='text-3xl'>
                        Six steps to success with generative AI
                    </h2>
                    <p className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </CardContent>
            </Card>

            <Card className='border-none shadow-none bg-gray-100 py-10 '>
                <CardContent className='space-y-3'>
                    <h2  className='text-3xl'>
                        Six steps to success with generative AI
                    </h2>
                    <p className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </CardContent>
            </Card>

            <Card className='border-none shadow-none bg-gray-100 py-10 '>
                <CardContent className='space-y-3'>
                    <h2  className='text-3xl'>
                        Six steps to success with generative AI
                    </h2>
                    <p className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </CardContent>
            </Card>

            <Card className='border-none shadow-none bg-gray-100 py-10 '>
                <CardContent className='space-y-3'>
                    <h2  className='text-3xl'>
                        Six steps to success with generative AI
                    </h2>
                    <p className='text-xs'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                </CardContent>
            </Card>
        </div>
      
    </div>
  )
}
