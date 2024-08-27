
import { LandingNav } from '@/components/landing-nav'
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

  console.log(researchList[2])
  return (
    <div>
      <LandingNav />
      <PublicationSearch researchList={researchList} />
      <PublicationsFooter />
    </div>
  )
}
