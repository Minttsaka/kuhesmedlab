
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
import React from 'react'

export default function page() {
  return (
    <div>
      <LandingNav />
      <LandingMobileNav />
        <Industry />
        {/* <SuccessNav /> */}
        <SuccessIntro />
        <UseCase />
        <CarouselFadeExample />
        <BlogList />
        <IndustryFinisher />
        <Footer />
    </div>
  )
}
