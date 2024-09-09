import SurveyQuestions from '@/components/SurveyQuestions'
import { prisma } from '@/lib/prisma'
import React from 'react'
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import { authOptions } from '@/lib/auth';
import { getServerSession } from 'next-auth';
import { User } from '@prisma/client';
import { redirect } from 'next/navigation';
import { setCookie } from '@/lib/actions';


export default async function page({params:{id}}:{params:{id:string}}) {

  const session:any = await getServerSession(authOptions);
    const user = (session?.user as User );

  const cookieStore = cookies()
  const cookie = cookieStore.get('sessionId')
  let sessionId = cookie?.value

  const forms = await prisma.surveyForm.findUnique({
    where:{
      id
    },
    include:{
      survey:true,
      questions:{
        include:{
          options:true
        }
      }
    }
  })

  if(forms?.identity && user){
    sessionId=user?.id
  }

  return (
    <div>
      <SurveyQuestions forms={forms!} sessionid={sessionId! } user={user} />
    </div>
  )
}
