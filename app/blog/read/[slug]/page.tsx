import Footer from '@/components/Footer'
import { LandingNav } from '@/components/landing-nav';
import LandingMobileNav from '@/components/LandingMobileNav';
import ReadBlog from '@/components/ReadBlog'
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma'
import { User } from '@prisma/client';
import { getServerSession } from 'next-auth';
import React from 'react'

export default async function page({params:{slug}}:{params:{slug:string}}) {


  const session:any = await getServerSession(authOptions);
  const userSession= (session.user as User);

    const content = await prisma.content.findUnique({
        where:{
            slug
        }
    })

    const user = await prisma.user.findUnique({
      where:{
        id:userSession.id
      }
    })
  return (
    <div>
      <LandingNav />
      <LandingMobileNav />
      <ReadBlog user={user!} content={content!} />
      <Footer />
    </div>
  )
}
