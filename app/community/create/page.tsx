import CommunitySidebar from '@/components/communityLeftbar'
import CommunityNav from '@/components/CommunityNav'
import dynamic from 'next/dynamic'
import React from 'react'

 
const CreateBlogPost = dynamic(() => import('@/components/CreatePost'), {
  ssr: false,
})

export default function page() {
  return (
    <div className='flex'>
      <CommunitySidebar />
        <div className='w-full h-screen overflow-y-auto'>
        <CommunityNav />
        <CreateBlogPost />
      </div>
    </div>
  )
}
