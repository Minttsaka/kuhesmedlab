import AboutFooter from '@/components/AboutFooter'
import { BlogList } from '@/components/BlogList'
import Notifications from '@/components/Notifications'
import ResearchFIrst from '@/components/ResearchFIrst'
import { ResearchFirth } from '@/components/ResearchFirth'
import { ResearchLandingNav } from '@/components/ResearchLandingNav'
import { Researchsec } from '@/components/researchsec'
import { Researchthird } from '@/components/researchthird'
import React from 'react'

export default function page() {
  return (
    <div>
      {/* <Notifications /> */}
      <ResearchLandingNav />
      <ResearchFIrst />
      <Researchsec />
      <Researchthird />
      <BlogList />
      <ResearchFirth />
      <AboutFooter />
    </div>
  )
}
