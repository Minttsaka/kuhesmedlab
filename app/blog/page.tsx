import AboutFooter from '@/components/AboutFooter'
import BlogFirst from '@/components/BlogFirst'
import BlogSecond from '@/components/BlogSecond'
import { LandingNav } from '@/components/landing-nav'
import LandingMobileNav from '@/components/LandingMobileNav'
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page() {

  const blogList = await prisma.content.findMany({
    where:{
      type:"BLOG"
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  return (
    <div>
        <LandingNav />
        <LandingMobileNav />
        <BlogFirst blog={blogList[0]!}/>
        <BlogSecond />
        <AboutFooter />
    </div>
  )
}
