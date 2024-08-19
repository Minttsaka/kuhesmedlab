import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowRight, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarImage } from './ui/avatar'
import { ArrowRightIcon } from '@radix-ui/react-icons'

export default function BlogFirst() {
  return (
    <div className='mt-20'>
      <BackgroundGradientAnimation className=" -skew-y-12 origin-top-left" />
      <div className='relative container mx-auto'>
      <Card className='shadow-2xl grid md:grid-cols-2'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src='https://www.wipo.int/global_innovation_index/images/titleslides_title_ogp_3-2.jpg' className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='flex flex-col gap-4 mt-5'>
                    <Badge className='flex gap-2 rounded-xl bg-gradient-to-r from-blue-300 to-purple-400 text-gray-100 w-fit'>
                        Medicine
                    </Badge>
                    <h2 className='text-2xl uppercase font-bold'>Empowering Health Through Innovation: The Future of Medical Laboratories</h2>
                    <p className='line-clamp-6'>
                    In todays rapidly evolving healthcare landscape, medical laboratories are at the forefront of transforming patient care. The integration of cutting-edge technology, advanced diagnostics, and innovative research is driving a new era in medicine—one where accurate, timely, and personalized care is within reach for everyone. At [Your Platform Name], we are proud to be a part of this revolution, empowering health through 
                    innovation and delivering the future of medical laboratories.
                        </p>
                    <div className='flex gap-2 items-center'>
                        <Avatar>
                            <AvatarImage src='/img/halima.jpeg' className='object-cover'/>
                        </Avatar>
                        <div>
                            <p className='text-gray-600 '>Halima</p>
                            <p className='text-xs text-gray-500'>Product Manager</p>
                        </div>
                    </div>
                    
                    <Link className='text-[#3f3f74] mt-10 text-xs flex gap-2 items-center' href={'#'}>
                        Read More <ArrowRightIcon className='h-3 w-3' />
                    </Link>
                </div>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}
