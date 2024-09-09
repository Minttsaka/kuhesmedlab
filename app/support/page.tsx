import PublicationsFooter from '@/components/PublicationFooter'
import SupportPage from '@/components/SupportFirst'
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page() {

  const support = await prisma.support.findMany({
    orderBy:{
      createdAt:"desc"
    },
    take:3
  })

  const popularSupport = await prisma.support.findMany({
    take:5,
    skip:3
  })
  return (
    <div>
      <SupportPage supports={support!} popularSupport={popularSupport!} />
      <PublicationsFooter />
    </div>
  )
}
