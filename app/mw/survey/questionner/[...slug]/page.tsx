
import SurveyBarAnalysis from '@/components/SurveyBarAnalysis';
import SurveyDashboard from '@/components/SurveyDashboard';
import SurveyHeader from '@/components/SurveyHeader';
import SurveyOverallAnalysis from '@/components/SurveyOverallAnalysis';
import SurveyQuestionnaire from '@/components/SurveyQuestionaires';
import SurveyQuestionnaireList from '@/components/SurveyQuestionnaireList';
import prisma from '@/lib/prisma';
import React from 'react'

type Props = {
  params: {
    slug: string[];
  };
};


export default async function page({ params: { slug } }: Props) {

  const [surveyId, researchId] = slug

  const [
    survey,
     research, 
     relatedSurvey
    ] = await prisma.$transaction([

  prisma.survey.findUnique({
    where:{
      id:surveyId
    },
    include:{
      surveyForm:{
        include:{
          questions:{
            include:{
              choices:true
            }
          }
        }
      },
    }

  }),

  prisma.research.findUnique({
    where:{
      id:researchId
    },
    
  }),


  prisma.surveyForm.findMany()
  

  
])

 
  return (
    <div className='lg:w-full min-h-screen'>
      <SurveyHeader id={research?.id!} />
      <SurveyQuestionnaireList surveyId={survey?.id!}  />
      <SurveyDashboard surveyId={survey?.id!}/>
      <SurveyQuestionnaire title={survey?.title!} relatedSurvey={relatedSurvey}/>
      <SurveyBarAnalysis surveyId={surveyId}/>
      <SurveyOverallAnalysis survey={survey!} aiAnalyze={survey?.aiAnalyze!}  />      
    </div>
  )
}
