import PublicationsFooter from '@/components/PublicationFooter'
import PublicationNav from '@/components/PublicationNav'
import SearchPublication from '@/components/SearchPublication'
import prisma from '@/lib/prisma'
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

  const publications = await prisma.research.findMany({
    orderBy:{
      createdAt:"desc"
    }
  })

  console.log(publications, query)
  return (
    
    <div>
      <PublicationNav />
      <SearchPublication publicationList={publications!} searchQuery={query!} />
      <PublicationsFooter />
    </div>
  )
}
