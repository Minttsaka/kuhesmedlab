import React from 'react'
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Research, User } from '@prisma/client'
import { cn } from '@/lib/utils'
import Link from 'next/link';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { prisma } from '@/lib/prisma';

  

export default async function CreateResearchForm({ id }:{ id:string }) {

  const session:any = await getServerSession(authOptions);
    const sessionUser = (session.user as User);
  
    const user = await prisma.user.findUnique({
      where:{
        id:sessionUser.id
      }
    })

    const researchList = await prisma.research.findMany({
      where:{
        creatorId:user?.id
      }
    })
  return (
    <div className='rounded-lg my-8'>
        <div className='mb-10'>
            <h2 className='text-xl md:text-3xl font-bold text-green-900'>Your Research List</h2>
            <p className='max-w-md'>All the details for individual research can be found by scrolling down below research list</p>
        </div>
        <div className='max-h-[70vh] lg:max-h-full grid lg:flex overflow-y-auto lg:overflow-x-auto lg:w-full gap-1'>
          {researchList.length===0 && (
            <Card className="w-full max-w-md ">
            <CardHeader>
              <CardTitle>No Research Conducted</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <CardDescription>
                It looks like you havent started your research yet. Get started by exploring our library of resources and
                data to uncover valuable insights.
              </CardDescription>
              
            </CardContent>
          </Card>
          )}
 
          {(researchList as Research[])?.map((research,index) => (
                <Link  href={`/mw/publication/${research.id}`} key={research.id} className={cn(' bg-white p-10 rounded-3xl space-y-0',{
                  "border border-green-500":research.id===id
                })}>
                  <div className='font-bold md:text-xl'>
                      {research.title}
                  </div>
                  <div>
                      <div className='text-gray-500'>
                          {research.abstract}
                      </div>
                  </div>
                  <div className='flex flex-col'>
                      {/* <GroupMembers /> */}
                      <p className='text-xs text-gray-500'>{new Date(research.createdAt).toDateString()}</p>
                    </div>
                  </Link>
          ))}

        </div>

    </div>
  )
}

const LoadingSpinner: React.FC = () => {
  return (
    <svg
      className="animate-spin h-10 w-10 text-gray-500"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      ></circle>
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8v8H4z"
      ></path>
    </svg>
  );
};

