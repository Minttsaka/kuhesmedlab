import { SurveyAnalytics } from '@/components/survey-analytics';
import { SurveyCreator } from '@/components/survey-creator'
import { SurveyForms } from '@/components/SurveyCollabo';
import { prisma } from '@/lib/prisma';
import React from 'react'

type Props = {
  params: {
    slug: string[];
  };
};


export default async function page({ params: { slug } }: Props) {


  const [surveyId, researchId] = slug

  const survey = await prisma.survey.findUnique({
    where:{
      id:surveyId
    },
    include:{
      surveyForm:true,
    }

  })

  const research = await prisma.research.findUnique({
    where:{
      id:researchId
    },
    
  })

  return (
    <div className='w-full flex'>
      <div className=''>
        <SurveyCreator survey={survey!} research={research!} />
        <SurveyAnalytics />
      </div>
      <SurveyForms surveyId={surveyId}  />
      
    </div>
  )
}
