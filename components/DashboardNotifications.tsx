import React from 'react'
import { Bio } from './bio'
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { User } from '@prisma/client';
import { prisma } from '@/lib/prisma';

export default async function DashboardNotifications() {

  const session:any = await getServerSession(authOptions);
  const { id }= (session.user as User);

  const user = await prisma.user.findUnique({
    where:{
      id
    }
  })


  const hasNoBio = user?.bio===null
  


  return (
    <div className='grid grid-cols-2 my-20 shadow border'>
     {hasNoBio && <Bio />}
        <div className='bg-gray-100 py-3 flex items-center justify-end'>
            <h2 className='me-20 font-semibold text-gray-500'>
                KUHES customer service
            </h2>
        </div>
        <div className='flex justify-start items-center px-20 py-3'>
            <h2 className='text-xs'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima, esse deserunt, ab tempora voluptates voluptatem reiciendis consequuntur quis iusto dignissimos temporibus quo. Placeat illum impedit autem, vero modi alias eius.</h2>
        </div>
      
    </div>
  )
}
