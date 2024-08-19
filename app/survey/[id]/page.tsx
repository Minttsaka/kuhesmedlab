import SurveyQuestions from '@/components/SurveyQuestions'
import { prisma } from '@/lib/prisma'
import React from 'react'

export default async function page({params:{id}}:{params:{id:string}}) {

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

  console.log("form list",forms)
  return (
    <div>
      <SurveyQuestions forms={forms!} />
    </div>
  )
}
