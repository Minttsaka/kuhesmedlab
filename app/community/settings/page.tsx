import CommunitySidebar from '@/components/communityLeftbar'
import CommunitySettings from '@/components/CommunitySettings'
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';
import { User } from '@prisma/client';
import { getServerSession } from 'next-auth';
import React from 'react'

export default async function page() {

  const session:any = await getServerSession(authOptions);
  const userSession= session.user as User

  const user = await prisma.user.findUnique({
    where:{
      email:userSession.email
    },
    include:{
      Post:{
        include:{
          comment:true
        }
      },
      comment:{
        include:{
          post:true
        }
      },
      reply:{
        include:{
          comment:{
            include:{
              post:true
            }
          }
        }
      }
    }
  })

  return (
    <div className='flex'>
      <CommunitySidebar />
        <div className='w-full h-screen overflow-y-auto'>
         <CommunitySettings user={user!} />
      </div>
    </div>
  )
}
