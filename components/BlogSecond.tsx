import React from 'react'
import { Card, CardContent, CardHeader } from './ui/card'
import { Badge } from './ui/badge'
import { ArrowRight, HelpCircle } from 'lucide-react'
import Link from 'next/link'
import { Avatar, AvatarImage } from './ui/avatar'
import { ArrowRightIcon } from '@radix-ui/react-icons'
import { Content } from '@prisma/client'
import { stripHtml } from '@/lib/stripHtml'
import { NoBlog } from './NoBlog'

export default function BlogSecond({blog}:{blog:Content[]}) {
  return (
    <div className='mt-40'>
      <div className='container mx-auto space-y-20'>
        {blog.length===0 && <NoBlog />}
        {blog?.map(single=>
             <div key={single.id} className='grid md:grid-cols-2 gap-10'>
             <div className='flex flex-col gap-4 mt-5'>
                 <Badge className='flex gap-2 rounded-xl bg-gradient-to-r from-blue-300 to-purple-400 text-gray-100 w-fit'>
                     {single.category}
                 </Badge>
                 <h2 className='text-2xl uppercase font-bold'>{single.title}</h2>
                 <p className='line-clamp-6'>{stripHtml(single.body!)}</p>
                 <Link className='text-[#3f3f74] mt-10 text-xs flex gap-2 items-center' href={`/blog/read/${single.slug}`}>
                     Read More <ArrowRightIcon className='h-3 w-3' />
                 </Link>
             </div>
             <div className='space-y-5'>
                 <div className='flex gap-2 items-center'>
                     <Avatar>
                         <AvatarImage src={single.creatorImage!} className='object-cover'/>
                     </Avatar>
                     <div>
                         <p className='text-gray-600 '>{single.creatorName}</p>
                         <p className='text-xs text-gray-500'>{single.creatorRole}</p>
                     </div>
                 </div>
                 <div className='bg-white rounded-3xl shadow-2xl shadow-black/50 p-5'>
                     <img alt='blog' className='rounded-md' src={single.image!} />
                 </div>
             </div>
         </div>
        )}
       
      </div>
    </div>
  )
}
