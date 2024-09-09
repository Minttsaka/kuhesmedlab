
import { BlogList } from '@/components/BlogList'
import Footer from '@/components/Footer'
import { Industry } from '@/components/Industry'
import IndustryFinisher from '@/components/IndustryFinisher'
import { LandingNav } from '@/components/landing-nav'
import LandingMobileNav from '@/components/LandingMobileNav'
import SuccessIntro from '@/components/SuccessIntro'
import SuccessNav from '@/components/SuccessNav'
import CarouselFadeExample from '@/components/SuccessStories'
import UseCase from '@/components/UseCase'
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page() {

  const blog= await prisma.content.findMany({
    where:{
      type:"BLOG"
    }
  })
  
  return (
    <div>
      <LandingNav />
      <LandingMobileNav />
        <Industry />
        {/* <SuccessNav /> */}
        <SuccessIntro />
        <UseCase />
        <CarouselFadeExample />
        <BlogList blog={blog!} />
        <IndustryFinisher />
        <Footer />
    </div>
  )
}
