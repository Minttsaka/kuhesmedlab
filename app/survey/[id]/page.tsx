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
import { Metadata, ResolvingMetadata } from 'next'
import { headers } from 'next/headers'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const product = await fetchProduct(id)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title,
    description: product?.description,
    openGraph: {
      title: product?.title,
      description: product?.description,
      url: `${process.env.NEXTAUTH_URL}/survey/${id}`,
      siteName: 'KUHESMEDLAB',
      images: [
        {
          url: product?.img!,
          width: 800,
          height: 600,
          alt: product?.title,
        },
        ...previousImages,
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: "summary_large_image",
      title: product?.title,
      description: product?.description,
      images: [product?.img!],
    },
  }
}

async function fetchProduct(id: string) {

  return await prisma.surveyForm.findUnique({
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
}

export default async function page({params:{id}}:{params:{id:string}}) {

  const session:any = await getServerSession(authOptions);
    const user = (session?.user as User );

  const cookieStore = cookies()
  const cookie = cookieStore.get('sessionId')
  let sessionId = cookie?.value

  const forms = await fetchProduct(id)

  if(forms?.identity && user){
    sessionId=user?.id
  }

  return (
    <SurveyQuestions forms={forms!} sessionid={sessionId! } user={user} />
  )
}
