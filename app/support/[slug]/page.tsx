import SupportContentPage from '@/components/SupportContent'
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page({params:{slug}}:{params:{slug:string}}) {

  const support = await prisma.support.findMany({
    orderBy:{
      createdAt:"desc"
    },
  })

  const singleSupport = await prisma.support.findUnique({
    where:{
      slug
    }
  })

  return (
    <div>
      <SupportContentPage support={support!} singleSupport={singleSupport!} />
    </div>
  )
}
