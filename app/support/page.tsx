import PublicationsFooter from '@/components/PublicationFooter'
import SupportChat from '@/components/SupportChat';
import SupportPage from '@/components/SupportFirst'
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma'
import { User } from '@prisma/client';
import { getServerSession } from 'next-auth';
import React from 'react'

export default async function page() {
  const session:any = await getServerSession(authOptions);
  const sessionUser = (session.user as User);

  const user = await prisma.user.findUnique({
    where:{
      email:sessionUser.email
    }
  })


  const support = await prisma.support.findMany({
    orderBy:{
      createdAt:"desc"
    },
    take:3
  })

  const popularSupport = await prisma.support.findMany({
    take:5,
    skip:3
  })
  return (
    <div>
      <SupportPage supports={support!} popularSupport={popularSupport!} />
      <PublicationsFooter />
      {user && <SupportChat user={user!} /> }
    </div>
  )
}
