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

  return (
    <div className='w-full flex justify-center'>
      <Form  form={form!}/>
    </div>
  )
}
