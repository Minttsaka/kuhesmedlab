
import CreateResearchForm from '@/components/CreateResearchForm'
import NotificationsList from '@/components/notifications-list'
import { RelatedResearch } from '@/components/related-research'
import { ResearchAnalytics } from '@/components/research-analytics'
import { ResearchDashboard } from '@/components/research-dashboard'
import { ResearchGreeting } from '@/components/research-greeting'
import ResearchAnalysis from '@/components/ResearchAnalysis'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { File, User } from '@prisma/client'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page({params:{ id} }:{params:{id:string}}) {

  const session:any = await getServerSession(authOptions);
  const user = (session.user as User);

  const [isResearchExist,  file_url , surveys] = await prisma.$transaction([

      prisma.research.findUnique({
        where:{
        id
        }
      }),

      prisma.file.findFirst({
        where:{
        researchId:id
        }
      }),

      prisma.survey.findMany({
        where:{
          researchId:id
        },
        include:{
          surveyForm:true
        }
      })

  ])

  return (
    <div className='p-2'>
      <ResearchGreeting id={id} />
      <CreateResearchForm id={id}/>
      {isResearchExist  && (
        <div>
          <ResearchAnalytics file_url={file_url?.url!} researchId={isResearchExist.id} />
          <ResearchAnalysis file_url={file_url?.url!} researchId={isResearchExist.id}  />
          <RelatedResearch title={isResearchExist.title} />
          <ResearchDashboard file_url={file_url?.url! } id={id} surveys={surveys} />
        </div>
      )}
      
    </div>
  )
}
