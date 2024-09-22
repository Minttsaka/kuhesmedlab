import Community from '@/components/Community'
import CommunitySidebar from '@/components/communityLeftbar'
import CommunityNav from '@/components/CommunityNav'
import prisma from '@/lib/prisma'
import React from 'react'

export default async function page() {


  return (
    <div className='flex'>
        <CommunitySidebar />
        <div className='w-full h-screen overflow-y-auto'>
          <CommunityNav />
        <Community  />
      </div>
    </div>
  )
}

