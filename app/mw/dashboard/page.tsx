import BioPractice from '@/components/BioPractice'
import { BlogList } from '@/components/BlogList'
import DashboardFinisher from '@/components/DashboarFInisher'
import DashboaedAIAssist from '@/components/DashboardAIAssist'
import DashboardCarousel from '@/components/DashboardCarousel'
import DashboardSolutions from '@/components/DashboardSolutions'
import PublicationsFooter from '@/components/PublicationFooter'
import { DashboardNav } from '@/components/dashboard-nav'
import { DashboardTraining } from '@/components/dashboard-training'
import { authOptions } from '@/lib/auth'
import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page() {

  const session:any = await getServerSession(authOptions);
  const { id }= (session.user as User);

  const user = await prisma.user.findUnique({
    where:{
      id
    }
  })

  const blog = await prisma.content.findMany({
    where:{
      type:"DISCOVERY" 
    },
    orderBy:{
      createdAt:"desc"
    }
  })
  return (
    <div>
        <DashboardNav />
        {!user?.bio && <BioPractice />}
        <DashboardCarousel blog={blog!} />
        <DashboardSolutions />
        <DashboardTraining blog={blog!} />
        
        <BlogList blog={blog!}/>
        <DashboardFinisher />
        <DashboaedAIAssist />
    </div>
  )
}
