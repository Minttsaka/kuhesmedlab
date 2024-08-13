import Form from '@/components/Form'
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page({params:{id}}:{params:{id:string}}) {

  const form = await prisma.surveyForm.findUnique({

    where:{
      id
    }

  })


  return (
    <div className='w-full flex justify-center'>
      <Form  form={form!}/>
    </div>
  )
}
