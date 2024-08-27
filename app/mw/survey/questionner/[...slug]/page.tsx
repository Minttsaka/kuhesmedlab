
import { SurveyAnalytics } from '@/components/survey-analytics';
import { SurveyCreator } from '@/components/survey-creator'
import { SurveyForms } from '@/components/SurveyCollabo';
import SurveyDashboard from '@/components/SurveyDashboard';
import SurveyHeader from '@/components/SurveyHeader';
import SurveyOverallAnalysis from '@/components/SurveyOverallAnalysis';
import SurveyQuestionnaire from '@/components/SurveyQuestionaires';
import SurveyQuestionnaireList from '@/components/SurveyQuestionnaireList';
import { prisma } from '@/lib/prisma';
import React from 'react'

type Props = {
  params: {
    slug: string[];
  };
};


export default async function page({ params: { slug } }: Props) {


  const [surveyId, researchId] = slug

  console.log(surveyId, researchId)

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
    <div className='lg:w-full min-h-screen'>
      <SurveyHeader />
      <SurveyQuestionnaireList surveyId={surveyId}  />
        <SurveyDashboard />
        <SurveyQuestionnaire />
        <SurveyOverallAnalysis />
        {/* <SurveyCreator survey={survey!} research={research!} />
        <SurveyAnalytics />
      <SurveyForms surveyId={surveyId}  /> */}
      
    </div>
  )
}
