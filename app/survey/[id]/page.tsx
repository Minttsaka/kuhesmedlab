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
import Head from 'next/head';


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

  const formTitle = forms?.title || 'Untitled Form';
  const formDescription = forms?.description || 'Fill out this form to participate';
  const formUrl = `https://kuhesmedlab.vercel.app/mw/survey/create/${id}`;
  const imageUrl = forms?.img;


  return (
    <>
      <Head>
        <title>{formTitle}</title>
        <meta name="description" content={formDescription} />
        <meta property="og:title" content={formTitle} />
        <meta property="og:description" content={formDescription} />
        <meta property="og:url" content={formUrl} />
        <meta property="og:image" content={imageUrl!} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Website" />
        <meta property="fb:app_id" content="your-facebook-app-id" /> {/* Optional: Facebook App ID */}
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={formTitle} />
        <meta name="twitter:description" content={formDescription} />
        <meta name="twitter:image" content={imageUrl!} />
        <meta name="twitter:url" content={formUrl} />
      </Head>
      <SurveyQuestions forms={forms!} sessionid={sessionId! } user={user} />
    </>
  )
}
