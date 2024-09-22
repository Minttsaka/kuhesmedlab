import UserFirstSec from '@/components/UserFirstSec'
import { Profilesec } from '@/components/profilesec'
import { authOptions } from '@/lib/auth'
import prisma from '@/lib/prisma'
import { User } from '@prisma/client'
import { getServerSession } from 'next-auth'
import React from 'react'

export default  async function page() {

  const session:any = await getServerSession(authOptions)

  const sessionUser = session.user as User

  const [user , files] = await prisma.$transaction([
    prisma.user.findUnique({
      where:{
        id:sessionUser.id
      },
      include:{
        research:{
          include:{
            collaborator:{
              include:{
                user:true
              }
            },
            surveys:{
              include:{
                surveyForm:{
                  include:{
                    questions:true
                  }
                }
              }
            }
          }
        },
      }
    }),

    prisma.file.findMany({
      where:{
        uploadedById:sessionUser.id
      }
    })

  ])
  
  return (
    <div className='bg-gray-100 w-full'>
      <UserFirstSec user={user!} />
      <Profilesec  user={user!} files={files!}/>
      
    </div>
  )
}
