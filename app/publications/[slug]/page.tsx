import PublicationContent from '@/components/PublicationContent'
import PublicationsFooter from '@/components/PublicationFooter'
import PublicationImage from '@/components/PublicationImage'
import PublicationNav from '@/components/PublicationNav'
import PublicationRef from '@/components/PulbicationsRef'
import { loadPdf } from '@/lib/pageNum'
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page({params:{slug}}:{params:{slug:string}}) {

  const research = await prisma.research.findUnique({
    where:{
      slug
    },
    include:{
      files:true,
      reference:true,
      citationTrend:true,
      downloadTrend:true
    }
  })

  if (research) {
    await prisma.research.update({
      where: {
        id: research.id
      },
      data: {
        views: {
          increment: 1
        }
      }
    });
  } else {
    console.error('Research not found');
  }
  
  return (
    <div>
        <PublicationNav />
        <PublicationImage image={research?.files.find(file=>file.fileType==="image")?.url!} />
        <PublicationContent research={research!} pageNum={await loadPdf(research?.files?.find(file => file.fileType === "pdf")?.url!)} />
        <PublicationRef references={research?.reference!} />
        <PublicationsFooter />
    </div>
  )
}
