import CommunitySidebar from '@/components/communityLeftbar'
import CommunityNav from '@/components/CommunityNav'
import RelatedPosts from '@/components/RelatedPosts'
import SinglePostCommunity from '@/components/SinglePostCommunity'
import prisma from '@/lib/prisma'
import React from 'react'

export default async function page({params:{slug}}:{params:{slug:string}}) {

  const post = await prisma.post.findUnique({
    where:{
      slug
    },
    include:{
      user:true,
      likes:true
    }
  })

  const otherPost = await prisma.post.findMany({

    include:{
      user:true,
      likes:true
    },
    orderBy:{
      createdAt:"asc"
    }
  })


  return (
    <div className='flex'>
        <CommunitySidebar />
        <div className='w-full h-screen overflow-y-auto'>
          <CommunityNav />
          <RelatedPosts otherPost={otherPost!} />
          <SinglePostCommunity post={post!}/>
        </div>
    </div>
  )
}
