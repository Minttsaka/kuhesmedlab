import AboutFooter from '@/components/AboutFooter'
import BioPractice from '@/components/BioPractice'
import { BlogList } from '@/components/BlogList'
import DashboardFinisher from '@/components/DashboarFInisher'
import DashboaedAIAssist from '@/components/DashboardAIAssist'
import DashboardCarousel from '@/components/DashboardCarousel'
import DashboardSolutions from '@/components/DashboardSolutions'
import { Bio } from '@/components/bio'
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
  return (
    <div>
        <DashboardNav />
        {!user?.bio && <BioPractice />}
        <DashboardCarousel />
        <DashboardSolutions />
        <DashboardTraining />
        <DashboardFinisher />
        <BlogList />

         
        
        <AboutFooter />
        <DashboaedAIAssist />
    </div>
  )
}
