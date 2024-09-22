import CreateResearch from '@/components/CreateResearch'
import dynamic from 'next/dynamic'
import prisma from '@/lib/prisma';
import React from 'react'

const ResearchWorkspaceForm = dynamic(() => import('@/components/WorkspaceForm'), {
  ssr: false,
})

export default async function page() {

  const fields = await prisma.researchCategory.findMany({
    orderBy:{
      createdAt:"desc"
    }
  })
  return (
    <div>
      <CreateResearch />
      <ResearchWorkspaceForm fields={fields} />
    </div>
  )
}
