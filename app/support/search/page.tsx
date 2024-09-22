import { LandingNav } from '@/components/landing-nav'
import LandingMobileNav from '@/components/LandingMobileNav'
import PublicationsFooter from '@/components/PublicationFooter'
import PublicationNav from '@/components/PublicationNav'
import SearchPublication from '@/components/SearchPublication'
import SupportSearch from '@/components/SupportSearch'
import prisma from '@/lib/prisma'
import { notFound } from 'next/navigation'
import React from 'react'

export default  async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const query = searchParams.q

  const support = await prisma.support.findMany({
    orderBy:{
      createdAt:"desc"
    },
  })

  if (!query) {
    notFound()
  }

  return (
    
    <div>
      <LandingMobileNav />
      <LandingNav />
      <SupportSearch supportList={support!} searchQuery={query!} />
      <PublicationsFooter />
    </div>
  )
}
