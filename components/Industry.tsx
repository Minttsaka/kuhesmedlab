import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowRight, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarImage } from './ui/avatar'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export function Industry() {
  return (
    <div className='pt-10 md:pt-40 pb-10 bg-gray-100'>
      <BackgroundGradientAnimation className=" skew-y-12 origin-top-right" />
      <div className='relative container mx-auto'>
        <div className='flex flex-col md:flex-row gap-5 '>
        <Card className='shadow-2xl grid md:grid-cols-2'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 '>
                <img src='/icons/effective.png' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='flex flex-col gap-4 mt-5'>
                    <Badge className='flex gap-2 rounded-xl bg-gradient-to-r from-blue-300 to-purple-400 text-gray-100 w-fit'>
                        Mission
                    </Badge>
                    <h2 className='text-2xl uppercase font-bold'>Empowering healthcare through research and technology. </h2>
                    <p>
                    Our mission at KUHESMedLab is to bridge the gap between medical research and real-world applications. We strive 
                    to provide a comprehensive platform that supports the entire research lifecycle—from initial
                     hypothesis to final publication—while ensuring that the findings have a tangible impact on healthcare delivery.
                    </p>
                </div>
            </CardContent>
        </Card>
        <Card className='shadow-2xl grid md:grid-cols-2 bg-[#425466] text-gray-100'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40'>
                <img src='/icons/vision.png' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='flex flex-col gap-4 mt-5'>
                    <Badge className='flex gap-2 rounded-xl bg-gradient-to-r from-blue-300 to-purple-400 text-gray-100 w-fit'>
                    Vision
                    </Badge>
                    <h2 className='text-2xl uppercase font-bold'>
                    Shaping the future of healthcare through innovative research.
                    </h2>
                    <p> 
                    We envision a world where healthcare is continually improved through rigorous research and innovation. Our vision is to become a global leader in medical research, 
                    providing the tools, resources, and community needed to drive discoveries that enhance the quality of life for all.
                    </p>
                    
                    
                    <Link className='text-[#3f3f74] mt-10 text-xs flex gap-2 items-center' href={'#'}>
                        Read More <ArrowRightIcon className='h-3 w-3' />
                    </Link>
                </div>
            </CardContent>
        </Card>
        </div>

        <h2 className='text-3xl md:text-4xl max-w-2xl font-bold text-black text-opacity-80'>
                The research leader for platform and researchers
            </h2>
      
      </div>
    </div>
  )
}
