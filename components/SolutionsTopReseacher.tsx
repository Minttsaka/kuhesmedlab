import React from 'react'
import { Badge } from './ui/badge'
import { StarFilledIcon } from '@radix-ui/react-icons'

export default function SolutionsTopReseacher() {
  return (
    <div className='bg-[#0040d1] '>
      <div className='container mx-auto space-y-5'>
        <h2 className='text-3xl text-white text-center font-bold'>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h2>
        <h2 className='text-3xl  font-bold text-center text-green-500'> amet consectetur adipisicing elit.</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <img src="https://plus.unsplash.com/premium_photo-1680658096480-7ca2fe809317?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member" width={120} height={120} className="rounded-full" />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">John Doe</h3>
                <p className="text-muted-foreground">CEO</p>
                <p className="text-sm text-muted-foreground">
                  John is the visionary behind our company, leading the team to new heights.
                </p>
              </div>
              <div>
                <Badge>
                    <StarFilledIcon />
                    Expert in
                </Badge>
                <div className='grid grid-cols-4 gap-3 mt-2'>
                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <img src="https://plus.unsplash.com/premium_photo-1680658096480-7ca2fe809317?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member" width={120} height={120} className="rounded-full" />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Jane Smith</h3>
                <p className="text-muted-foreground">CTO</p>
                <p className="text-sm text-muted-foreground">
                  Jane is our technical mastermind, driving innovation and engineering excellence.
                </p>
              </div>
              <div>
                <Badge>
                    <StarFilledIcon />
                    Expert in
                </Badge>
                <div className='grid grid-cols-4 gap-3 mt-2'>
                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <img src="https://plus.unsplash.com/premium_photo-1680658096480-7ca2fe809317?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member" width={120} height={120} className="rounded-full" />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Michael Johnson</h3>
                <p className="text-muted-foreground">Lead Designer</p>
                <p className="text-sm text-muted-foreground">
                  Michael is our creative visionary, crafting beautiful and user-friendly designs.
                </p>
              </div>
              <div>
                <Badge>
                    <StarFilledIcon />
                    Expert in
                </Badge>
                <div className='grid grid-cols-4 gap-3 mt-2'>
                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
              <img src="https://plus.unsplash.com/premium_photo-1680658096480-7ca2fe809317?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Team Member" width={120} height={120} className="rounded-full" />
              <div className="space-y-2 text-center">
                <h3 className="text-xl font-bold">Emily Davis</h3>
                <p className="text-muted-foreground">Product Manager</p>
                <p className="text-sm text-muted-foreground">
                  Emily is our user-centric product expert, ensuring our solutions meet the needs of our customers.
                </p>
              </div>
              <div>
                <Badge>
                    <StarFilledIcon />
                    Expert in
                </Badge>
                <div className='grid grid-cols-4 gap-3 mt-2'>
                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>

                    <Badge className='bg-gray-100 text-gray-500'>
                        React
                    </Badge>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}
