
import { BlogList } from '@/components/BlogList'
import DashboardFinisher from '@/components/DashboarFInisher'
import DashboardCarousel from '@/components/DashboardCarousel'
import DashboardSolutions from '@/components/DashboardSolutions'
import { DashboardNav } from '@/components/dashboard-nav'
import { DashboardTraining } from '@/components/dashboard-training'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { User } from '@prisma/client'
import { getServerSession } from 'next-auth'
import React from 'react'

export default async function page() {

  const session:any = await getServerSession(authOptions);
  const { id }= (session.user as User);

  const blog = await prisma.content.findMany({
    where:{
      type:"BLOG" ,
      publishedAt:{
        not:null
      }
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  const discover = await prisma.content.findMany({
    where:{
      type:"DISCOVERY" ,
      publishedAt:{
        not:null
      }
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  const announce = await prisma.content.findMany({
    where:{
      type:"ANNOUNCEMENT" ,
      publishedAt:{
        not:null
      }
    },
    orderBy:{
      createdAt:"desc"
    }
  })

  return (
    <div>
        <DashboardNav />
        <DashboardCarousel blog={discover!} />
        <DashboardSolutions />
        <DashboardTraining blog={announce!} />
        
        <BlogList blog={blog!}/>
        <DashboardFinisher />
    </div>
  )
}
