import CommunityNav from '@/components/CommunityNav'
import CommunitySearch from '@/components/CommunitySearch'
import PublicationsFooter from '@/components/PublicationFooter'
import PublicationNav from '@/components/PublicationNav'
import SearchPublication from '@/components/SearchPublication'
import { prisma } from '@/lib/prisma'
import { notFound } from 'next/navigation'
import React from 'react'

export default async function page({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {

  const query = searchParams.q

  if (!query) {
    notFound()
  }

  const support = await prisma.post.findMany({
    orderBy:{
      createdAt:"desc"
    },
  })
  return (
    
    <div>
      <CommunityNav />
      <CommunitySearch searchQuery={query!} supportList={support!}  />
      <PublicationsFooter />
    </div>
  )
}
