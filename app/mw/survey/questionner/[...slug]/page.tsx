
import SurveyBarAnalysis from '@/components/SurveyBarAnalysis';
import SurveyDashboard from '@/components/SurveyDashboard';
import SurveyHeader from '@/components/SurveyHeader';
import SurveyOverallAnalysis from '@/components/SurveyOverallAnalysis';
import SurveyQuestionnaire from '@/components/SurveyQuestionaires';
import SurveyQuestionnaireList from '@/components/SurveyQuestionnaireList';
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma';
import { User } from '@prisma/client';
import { getServerSession } from 'next-auth';
import React from 'react'

type Props = {
  params: {
    slug: string[];
  };
};


export default async function page({ params: { slug } }: Props) {

  const [surveyId, researchId] = slug

  const session:any = await getServerSession(authOptions);
  const sessionUser = (session.user as User);

  const [
    survey,
     research, 
     relatedSurvey,
     user
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

  prisma.surveyForm.findMany(),

  prisma.user.findUnique({
    where:{
      email:sessionUser.email
    }
  })
  

  
])

 
  return (
    <div className='lg:w-full min-h-screen'>
      <SurveyHeader id={research?.id!} />
      <SurveyQuestionnaireList surveyId={survey?.id!}  />
      <SurveyDashboard surveyId={survey?.id!}/>
      <SurveyQuestionnaire title={survey?.title!} relatedSurvey={relatedSurvey}/>
      <SurveyBarAnalysis surveyId={surveyId}/>
      <SurveyOverallAnalysis 
        survey={survey!} 
        aiAnalyze={survey?.aiAnalyze!}  
        user={user!}/>      
    </div>
  )
}
