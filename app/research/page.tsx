
import { BlogList } from '@/components/BlogList'
import Footer from '@/components/Footer'
import { LandingNav } from '@/components/landing-nav'
import LandingMobileNav from '@/components/LandingMobileNav'
import ResearchFIrst from '@/components/ResearchFIrst'
import { ResearchFirth } from '@/components/ResearchFirth'
import { Researchsec } from '@/components/researchsec'
import { Researchthird } from '@/components/researchthird'
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page() {

  const [blog, research, researchNo, downloadTrend, citationTrend] = await prisma.$transaction([
    prisma.content.findMany({
      orderBy:{
        createdAt:"desc"
      }
    }),
    prisma.research.findMany({
      include:{
        files:true
      },
      orderBy:{
        createdAt:"desc"
      }
    }),
    prisma.research.count({
      where:{
        status:"APPROVED"
      }
    }),
    prisma.downloadTrend.count(),
    prisma.citationTrend.count()

  ])


  return (
    <div>
      <LandingMobileNav />
      <LandingNav />
      <ResearchFIrst researchNo={researchNo} downloadTrend={downloadTrend} citationTrend={citationTrend} />
      <Researchsec currentArticles={research!}/>
      <Researchthird />
      <BlogList blog={blog!} />
      <ResearchFirth />
      <Footer />
    </div>
  )
}
