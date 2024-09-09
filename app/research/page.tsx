import AboutFooter from '@/components/AboutFooter'
import { BlogList } from '@/components/BlogList'
import ResearchFIrst from '@/components/ResearchFIrst'
import { ResearchFirth } from '@/components/ResearchFirth'
import { ResearchLandingNav } from '@/components/ResearchLandingNav'
import { Researchsec } from '@/components/researchsec'
import { Researchthird } from '@/components/researchthird'
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page() {

  const blog = await prisma.content.findMany({
    orderBy:{
      createdAt:"desc"
    }
  })
  return (
    <div>
      <ResearchLandingNav />
      <ResearchFIrst />
      <Researchsec />
      <Researchthird />
      <BlogList blog={blog!} />
      <ResearchFirth />
      <AboutFooter />
    </div>
  )
}
