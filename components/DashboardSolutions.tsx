import React from 'react'
import { Card, CardContent } from './ui/card'
import { Button } from './ui/button'
import { Badge } from './ui/badge'
import Link from 'next/link'

export default function DashboardSolutions() {
  return (
    <div>
        <div className='container mx-auto space-y-5 mb-5'>
            <h2 className='text-3xl text-slate-600'>
                Explore our Solutions
            </h2>
            <Button className='bg-transparent text-black border'>
                Filter our Solutions
            </Button>
        </div>
      <div className='container mx-auto grid grid-cols-3 gap-4'>
            <Card className='border-none  shadow-none bg-gray-100 py-10'>
                <CardContent className='space-y-3'>
                    <Badge className='bg-gradient-to-r from-blue-200 to-purple-300 text-xs text-gray-500'>
                        Industry
                    </Badge>
                    <h2  className='text-3xl'>
                        Six steps to success with generative AI
                    </h2>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link className='text-xs underline flex items-center' href={'#'}>
                        View this Solution
                    </Link>
                </CardContent>
            </Card>

            <Card className='border-none  shadow-none bg-gray-100 py-10'>
                <CardContent className='space-y-3'>
                    <Badge className='bg-gradient-to-r from-blue-200 to-purple-300 text-xs text-gray-500'>
                        Industry
                    </Badge>
                    <h2  className='text-3xl'>
                        Six steps to success with generative AI
                    </h2>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link className='text-xs underline flex items-center' href={'#'}>
                        View this Solution
                    </Link>
                </CardContent>
            </Card>


            <Card className='border-none  shadow-none bg-gray-100 py-10'>
                <CardContent className='space-y-3'>
                    <Badge className='bg-gradient-to-r from-blue-200 to-purple-300 text-xs text-gray-500'>
                        Industry
                    </Badge>
                    <h2  className='text-3xl'>
                        Six steps to success with generative AI
                    </h2>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link className='text-xs underline flex items-center' href={'#'}>
                        View this Solution
                    </Link>
                </CardContent>
            </Card>


            <Card className='border-none  shadow-none bg-gray-100 py-10'>
                <CardContent className='space-y-3'>
                    <Badge className='bg-gradient-to-r from-blue-200 to-purple-300 text-xs text-gray-500'>
                        Industry
                    </Badge>
                    <h2  className='text-3xl'>
                        Six steps to success with generative AI
                    </h2>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link className='text-xs underline flex items-center' href={'#'}>
                        View this Solution
                    </Link>
                </CardContent>
            </Card>


            <Card className='border-none  shadow-none bg-gray-100 py-10'>
                <CardContent className='space-y-3'>
                    <Badge className='bg-gradient-to-r from-blue-200 to-purple-300 text-xs text-gray-500'>
                        Industry
                    </Badge>
                    <h2  className='text-3xl'>
                        Six steps to success with generative AI
                    </h2>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link className='text-xs underline flex items-center' href={'#'}>
                        View this Solution
                    </Link>
                </CardContent>
            </Card>


            <Card className='border-none  shadow-none bg-gray-100 py-10'>
                <CardContent className='space-y-3'>
                    <Badge className='bg-gradient-to-r from-blue-200 to-purple-300 text-xs text-gray-500'>
                        Industry
                    </Badge>
                    <h2  className='text-3xl'>
                        Six steps to success with generative AI
                    </h2>
                    <p className=''>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <Link className='text-xs underline flex items-center' href={'#'}>
                        View this Solution
                    </Link>
                </CardContent>
            </Card>


          
        </div>
    </div>
  )
}
