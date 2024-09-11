import BlogFirst from '@/components/BlogFirst'
import BlogSecond from '@/components/BlogSecond'
import Footer from '@/components/Footer'
import { LandingNav } from '@/components/landing-nav'
import LandingMobileNav from '@/components/LandingMobileNav'
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page() {

  const blogList = await prisma.content.findFirst({
    where:{
      type:"BLOG"
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  const otherPost = await prisma.content.findMany({
    orderBy:{
      createdAt:"desc"
    },
    skip:1
  })

  return (
    <div>
        <LandingNav />
        <LandingMobileNav />
        <BlogFirst blog={blogList!}/>
        <BlogSecond blog={otherPost!} />
        <Footer />
    </div>
  )
}
