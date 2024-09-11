import React from 'react'
import { BackgroundGradientAnimation } from './ui/background-gradient-animation'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowRight, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarImage } from './ui/avatar'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Content } from '@prisma/client'
import { stripHtml } from '@/lib/stripHtml'

export default function BlogFirst({blog}:{blog:Content}) {
  return (
    <div className='mt-20'>
      <BackgroundGradientAnimation className=" -skew-y-12 -z-10 origin-top-left" />
      <div className='relative container mx-auto'>
      {blog && <Card className='shadow-2xl grid md:grid-cols-2'>
            <CardHeader className='bg-gray-100 m-2 rounded-2xl  pl-40 pt-20'>
                <img src={blog?.image!} className='rounded-2xl' alt='this is good' />
            </CardHeader>
            <CardContent>
                
                <div className='flex flex-col gap-4 mt-5'>
                    <Badge className='flex gap-2 rounded-xl bg-gradient-to-r from-blue-300 to-purple-400 text-gray-100 w-fit'>
                        {blog?.category}
                    </Badge>
                    <h2 className='text-2xl uppercase font-bold'>{blog?.title}</h2>
                    <p className='line-clamp-6'>
                        {stripHtml(blog?.body).toLowerCase()}
                        </p>
                    <div className='flex gap-2 items-center'>
                        <Avatar>
                            <AvatarImage src='/img/halima.jpeg' className='object-cover'/>
                        </Avatar>
                        <div>
                            {/* <p className='text-gray-600 '>{}</p> */}
                            <p className='text-xs text-gray-500'>Product Manager</p>
                        </div>
                    </div>
                    
                    <Link className='text-[#3f3f74] mt-10 text-xs flex gap-2 items-center' href={`/blog/read/${blog?.slug}`}>
                        Read More <ArrowRightIcon className='h-3 w-3' />
                    </Link>
                </div>
            </CardContent>
        </Card>}
      </div>
    </div>
  )
}
