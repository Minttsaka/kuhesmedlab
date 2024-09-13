import Form from '@/components/Form'
import { prisma } from '@/lib/prisma'
import Head from 'next/head'
import React from 'react'

export default async function page({params:{id}}:{params:{id:string}}) {

  const form = await prisma.surveyForm.findUnique({

    where:{
      id
    },
    include:{
      questions:true,
      survey:{
        include:{
          research:{
            include:{
              collaborator:{
                include:{
                  user:true
                }
              }
            }
          }
        }
      }
     }

  })

  const formTitle = form?.title || 'Untitled Form';
  const formDescription = form?.description || 'Fill out this form to participate';
  const formUrl = `https://kuhesmedlab.vercel.app/survey/${id}`;
  const imageUrl = form?.img;


  return (
    <div className='w-full flex justify-center'>
        <Head>
        <title>{formTitle}</title>
        <meta name="description" content={formDescription} />

        {/* Open Graph for Facebook and WhatsApp */}
        <meta property="og:title" content={formTitle} />
        <meta property="og:description" content={formDescription} />
        <meta property="og:url" content={formUrl} />
        <meta property="og:image" content={imageUrl!} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="Your Website" />
        <meta property="fb:app_id" content="your-facebook-app-id" /> {/* Optional Facebook App ID */}
        <meta property="og:locale" content="en_US" />

        {/* Twitter Card Metadata */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={formTitle} />
        <meta name="twitter:description" content={formDescription} />
        <meta name="twitter:image" content={imageUrl!} />
        <meta name="twitter:url" content={formUrl} />
      </Head>
      <Form  form={form!}/>
    </div>
  )
}
