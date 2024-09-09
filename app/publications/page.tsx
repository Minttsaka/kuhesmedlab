
import { LandingNav } from '@/components/landing-nav'
import LandingMobileNav from '@/components/LandingMobileNav'
import PublicationsFooter from '@/components/PublicationFooter'
import PublicationSearch from '@/components/PublicationSearch'
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page() {

  const researchList = await prisma.research.findMany({
    where:{
      status:"APPROVED"
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  return (
    <div>
      <LandingNav />
      <LandingMobileNav />
      <PublicationSearch researchList={researchList} />
      <PublicationsFooter />
    </div>
  )
}
