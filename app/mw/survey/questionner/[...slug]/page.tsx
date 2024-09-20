
import { SurveyAnalytics } from '@/components/survey-analytics';
import { SurveyCreator } from '@/components/survey-creator'
import SurveyBarAnalysis from '@/components/SurveyBarAnalysis';
import SurveyDashboard from '@/components/SurveyDashboard';
import SurveyHeader from '@/components/SurveyHeader';
import SurveyOverallAnalysis from '@/components/SurveyOverallAnalysis';
import SurveyQuestionnaire from '@/components/SurveyQuestionaires';
import SurveyQuestionnaireList from '@/components/SurveyQuestionnaireList';
import { prisma } from '@/lib/prisma';
import { subDays } from 'date-fns';
import dayjs from 'dayjs';
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
     surveyForm
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


  prisma.surveyForm.findMany({
    where: {
      surveyId
    },
    select: {
      questions:{
        select:{
          choices:true
        }
      }, 
    },
  })
  

  
])

let totalResponses = 0;
surveyForm.forEach(form => {
  form.questions.forEach(question => {
    totalResponses += question.choices.length;
  });
});

const surveyForms = await prisma.surveyForm.findMany({
  where: {
    surveyId
  },
  select: {
    questions: {
      select: {
        choices: {
          select: {
            userId: true,
          },
        },
      },
    },
  },
});

let totalQuestions = 0;
const userResponses: Record<string, number> = {};

surveyForms.forEach(form => {
  form.questions.forEach(question => {
    totalQuestions += 1;

    question.choices.forEach(choice => {
      if (choice.userId) {
        userResponses[choice.userId] = (userResponses[choice.userId] || 0) + 1;
      }
    });
  });
});

const completedUsers = Object.values(userResponses).filter(count => count === totalQuestions).length;

const totalUsers = Object.keys(userResponses).length;

const completionRate = totalUsers > 0 ? (completedUsers / totalUsers) * 100 : 0;


let totalTimeTaken = 0;
let totalAnswers = 0;

survey?.surveyForm.forEach((form) => {
  form.questions.forEach((question) => {
    question.choices.forEach((answer) => {
      if (answer.timeTaken !== null) {
        totalTimeTaken += answer.timeTaken;
        totalAnswers += 1;
      }
    });
  });
});


const totalTimeTakenMinutes = totalTimeTaken / 60;

const averageTimeTakenInMinutes = (totalAnswers > 0 ? totalTimeTakenMinutes / totalAnswers : 0).toFixed(2);

const ageRanges = [
  { name: '18-24', min: 18, max: 24 },
  { name: '25-34', min: 25, max: 34 },
  { name: '35-44', min: 35, max: 44 },
  { name: '45-54', min: 45, max: 54 },
  { name: '55+', min: 55, max: Infinity },
];

const surveyFormsList = await prisma.surveyForm.findMany({
  where: {
    surveyId: surveyId,
  },
  include: {
    questions: {
      include: {
        choices: {
          include: {
            user: {
              select: { age: true },
            },
          },
        },
      },
    },
  },
});

const demographicData = ageRanges.map(range => ({
  name: range.name,
  value: 0,
}));

surveyFormsList.forEach(form => {
  form.questions.forEach(question => {
    question.choices.forEach(choice => {
      const ageString = choice.user?.age;
      
      if (ageString) {
        const ageNumber = parseInt(ageString, 10); 
        
        if (!isNaN(ageNumber)) {
          const range = ageRanges.find(r => ageNumber >= r.min && ageNumber <= r.max);
          
          if (range) {
            const index = demographicData.findIndex(d => d.name === range.name);
            if (index !== -1) {
              demographicData[index].value += 1;
            }
          }
        }
      }
    });
  });
});


const surveyFor = await prisma.surveyForm.findMany({
  where: {
    surveyId: surveyId, 
  },
  include: {
    questions: {
      include: {
        choices: true,
      },
    },
  },
});

const responseTrends: { date: string; responses: number; completionRate: number }[] = [];

const dailyData: Record<string, { totalResponses: number; completedResponses: number }> = {};

surveyFor.forEach(form => {
  form.questions.forEach(question => {
    question.choices.forEach(choice => {
      const responseDate = choice.createdAt.toISOString().split('T')[0]; 

      if (!dailyData[responseDate]) {
        dailyData[responseDate] = { totalResponses: 0, completedResponses: 0 };
      }

      dailyData[responseDate].totalResponses += 1;

      const userResponsesForDay = form.questions.filter(q => q.choices.some(c => c.userId === choice.userId)).length;
      const totalQuestionsForForm = form.questions.length;

      if (userResponsesForDay === totalQuestionsForForm) {
        dailyData[responseDate].completedResponses += 1;
      }
    });
  });
});

for (const date in dailyData) {
  const { totalResponses, completedResponses } = dailyData[date];
  const completionRate = totalResponses ? (completedResponses / totalResponses) * 100 : 0;

  responseTrends.push({
    date,
    responses: totalResponses,
    completionRate: parseFloat(completionRate.toFixed(2)),
  });
}

const surveyMetrics = {
  totalResponses,
  averageCompletionRate:completionRate,
  averageTimeToComplete:Number(averageTimeTakenInMinutes),
};


const findFormData = async()=>{
  // Fetch all forms and related data for a specific survey
const surveyForms = await prisma.surveyForm.findMany({
  where: {
    surveyId, // Replace with the actual surveyId
  },
  include: {
    questions: {
      include: {
        choices: true,
      },
    },
  },
});

const formData = surveyForms.map(form => {
  const totalResponses = form.questions.reduce(
    (acc, question) => acc + question.choices.length,
    0
  );

  const completedResponses = form.questions.reduce((acc, question) => {
    const userResponseMap = question.choices.reduce((map, choice) => {
      if (choice.userId) { 
        if (!map[choice.userId]) {
          map[choice.userId] = 0;
        }
        map[choice.userId]++;
      }
      return map;
    }, {} as Record<string, number>);
  
    const completedCount = Object.values(userResponseMap).filter(
      count => count === form.questions.length
    ).length;
  
    return acc + completedCount;
  }, 0);
  
  const completionRate = totalResponses
    ? (completedResponses / totalResponses) * 100
    : 0;

  const totalTime = form.questions.reduce((acc, question) => {
    const questionTime = question.choices.reduce(
      (timeAcc, choice) => timeAcc + choice.timeTaken,
      0
    );
    return acc + questionTime;
  }, 0);
  const avgTime = totalResponses ? totalTime / totalResponses : 0;

  const sentiment = "Not available";

  return {
    title: form.title,
    label:form.label,
    responses: totalResponses,
    importance: form.importance,
    completionRate: parseFloat(completionRate.toFixed(2)),
    avgTime: parseFloat(avgTime.toFixed(2)),
    sentiment,
  };
});

return formData

}



const relatedSurvey = await prisma.surveyForm.findMany({
  where:{
    survey:{
      researchId:{
        not:research?.id
      }
    }
  }
})

 
  return (
    <div className='lg:w-full min-h-screen'>
      <SurveyHeader id={research?.id!} />
      <SurveyQuestionnaireList surveyId={survey?.id!}  />
      <SurveyDashboard surveyId={survey?.id!}/>
      <SurveyQuestionnaire title={survey?.title!} relatedSurvey={relatedSurvey}/>
      <SurveyBarAnalysis metrics={ surveyMetrics}  />
      <SurveyOverallAnalysis aiAnalyze={survey?.aiAnalyze!} formData={await findFormData()} />      
    </div>
  )
}
