
import CreateResearchForm from '@/components/CreateResearchForm'
import Practice from '@/components/Practice'
import RelatedResearchList from '@/components/RelatedResearchList'
import ResearchGreeting from '@/components/research-greeting'
import ResearchDangerZone from '@/components/ResearchDangerZone'
import ResearchFiles from '@/components/ResearchFIles'
import ResearchReferencesSection from '@/components/ResearchReference'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { File, User } from '@prisma/client'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page({params:{ id} }:{params:{id:string}}) {

  const session:any = await getServerSession(authOptions);
  const user = (session.user as User);

  const [research, researchList] = await prisma.$transaction([

      prisma.research.findUnique({
        where:{
        id
        },
        include:{
          files:true,
          collaborator:true,
          surveys:{
            include:{
              surveyForm:true
            }
          }
        }
      }),

      prisma.research.findMany({
        where:{
          creatorId:user?.id
        }
      })

  ])

  return (
    <div className='p-2'>
      <ResearchGreeting  />
      <CreateResearchForm researchList={researchList} id={id}/>
      <Practice 
        research={research!}
      />
      {/* <ResearchFiles researchId={research?.id!} /> */}
      <RelatedResearchList title={research?.title!} />
      <ResearchReferencesSection researchId={research?.id!}/>
      <ResearchDangerZone id={id} status={research?.status!} />
    </div>
  )
}

