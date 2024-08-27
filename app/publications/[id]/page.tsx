import PublicationContent from '@/components/PublicationContent'
import PublicationsFooter from '@/components/PublicationFooter'
import PublicationImage from '@/components/PublicationImage'
import PublicationNav from '@/components/PublicationNav'
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page({params:{id}}:{params:{id:string}}) {

  const research = await prisma.research.findUnique({
    where:{
      id
    },
    include:{
      files:true,
    }
  })
  return (
    <div>
        <PublicationNav />
        <PublicationImage image={research?.image!} />
        <PublicationContent research={research!} />
        <PublicationsFooter />
    </div>
  )
}
