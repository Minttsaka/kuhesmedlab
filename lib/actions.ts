'use server'
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid';
import { prisma } from './prisma';
import {  Importance, User } from '@prisma/client';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import { getServerSession } from 'next-auth';
import { authOptions } from './auth';
import { Configuration, OpenAIApi } from 'openai';
import { compileActivationTemplate, compileCollaborationTemplate, sendMail } from './mail';
import crypto from 'crypto';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

type Post = {

  title: string;
  body: string;
  slug: string;
  img: string | null;
  video: string | null;
  tag: string;
  pdf: string | null;
  createdAt: Date;
  updatedAt: Date | null;
}

export const setCookie = async () => {
     const sessionId = cookies().set({
        name:"sessionId",
        value:uuidv4(),
        httpOnly: false,
        path: '/',
      })

      return sessionId.get("sessionId")?.value
}


export const updateUser = async (id:string,data:any) => {

  const userExist = await prisma.user.findUnique({
    where:{
      id
    }
  })

  if(!userExist){
    return "user not logged in."
  }

  Object.keys(data).forEach(
    (key) =>
      (data[key] === "" || undefined) && delete data[key]
  );

  const user = await prisma.user.update({
    where: {
      id
    },
    data
  });

  if (!user) {
    throw new Error(`user with id ${id} does not exist.`);
  }


   return "Successfully updated"
}

export const savePost = async(post:Post)=>{


  const session:any = await getServerSession(authOptions);
  const sessionUser= session.user as User
  try {

    const user = await prisma.user.findUnique({
      where:{
        id:sessionUser.id
      }
    })

    const existSlug = await prisma.post.findUnique({
      where:{
        slug:post.slug
      }
    })

    if(existSlug){ return "slug"}


    const newPost = await prisma.post.create({
      data:{
        ...post,
        user:{
          connect:{
            id:sessionUser.id
          }
        }
      }
    })

    return true
  } catch (error) {
    if(error){
    console.log(error)
    return "failed"
    }
    
  }

}

type SurveyData ={
  
    title:string ,
    description:string, 
    researchId:string, 
    label:string
  }

export const saveSurveyData = async(data:SurveyData)=>{

  const {title ,description, researchId, label} = data

  const session:any = await getServerSession(authOptions);
  const sessionUser= session.user as User
  try {

    const research = await prisma.research.findUnique({
      where:{
          id:researchId
      }
    });

    const user = await prisma.user.findUnique({
      where:{
        id:sessionUser.id
      }
    })

  if(!research) throw new Error("You have to loggin in first. This an unauthorized operation")

    const existLabel = await prisma.survey.findFirst({
      where:{
        label,
        creatorId:user?.id
      }
    })

    if(existLabel){
      return "label"
    }

  const newSurvey = await prisma.survey.create({
      data:{
          title,
          creatorId:user?.id,
          creatorName:user?.name!,
          description,
          label,
          research: {
              connect: {
                id: research.id,
              },
          }

      }
  })

  return newSurvey
    
  } catch (error) {
    if(error){
    console.log(error)
    return "failed"
    }
    
  }

}

type QuestionnaireData ={
  
  title:string ,
  description:string, 
  surveyId:string, 
  identity:boolean,
  label:string,
  img:string | undefined,
  guildelines:string,
  importance:Importance
}

export const saveQuestionnaireData = async(data:QuestionnaireData)=>{

  const {title, img ,description,importance,guildelines, identity, surveyId, label} = data

  const session:any = await getServerSession(authOptions);
  const sessionUser= session.user as User
  try {

    const survey = await prisma.survey.findUnique({
      where:{
          id:surveyId
      }
    });

    const user = await prisma.user.findUnique({
      where:{
        id:sessionUser.id
      }
    })

  if(!survey) throw new Error("You have to loggin in first. This an unauthorized operation")

    const existLabel = await prisma.surveyForm.findFirst({
      where:{
        label,
        creatorId:user?.id
      }
    })

    if(existLabel){
      return "label"
    }

  const newForm = await prisma.surveyForm.create({
      data:{
          title,
          identity,
          img,
          creatorId:user?.id!,
          creatorName:user?.name!,
          description,
          guildelines,
          importance,
          label,
          survey: {
              connect: {
                id: survey.id,
              },
          }

      }
  })

  return newForm
    
  } catch (error) {
    if(error){
    console.log(error)
    return "failed"
    }
    
  }

}

export const newSurveyQuestion = async (id:string) =>{


  const session:any = await getServerSession(authOptions);
    const user = (session.user as User); 
  try {


    const form = await prisma.surveyForm.findUnique({
      where: {
        id
      }
      
    });

  
    if (!form) {
      throw new Error(`Survey with id ${form } does not exist.`);
    }

    const questions = await prisma.surveyFormQuestion.findMany({
      where:{
        formId:id
      }
    })

    const filteredQuestions = questions.map(question=>question.title)

    const prompt = `Generate the estimated time in minutes as integer that a 
    respondent can take to answer the following survey questions
    ${JSON.stringify(filteredQuestions)}. For example: 5 so that i can convert
    it into number and save to db as number.
    `
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const estimatedTime = completion.data.choices[0].message?.content || '';

    const savedFormQuestion = await prisma.surveyFormQuestion.create({
      data:{
        title:"Untitled",
        type:"Short_Answer",
        authorId:user.id,
        author:user.name,
        form: {
          connect: {
            id: form.id,
          },
      }
      }
    })

    await prisma.surveyForm.update({
      where:{
        id
      },
      data:{
        estimatedTime:Number(estimatedTime)
      }
    })

    if(savedFormQuestion) console.log("new question created")

    const updatedQuestion = await prisma.surveyFormQuestion.findMany({
      where:{
        formId:id
      }
    })

    return updatedQuestion

  } catch (error){

  }
     
}

export const updateFields =async(id:string, data:any)=>{

  try {

    await prisma.surveyFormQuestion.update({
      where:{
        id,
      },
      data
    })

    console.log("updated")

    const updatedQuestion = await prisma.surveyFormQuestion.findMany({
      where:{
        formId:id
      }
    })

    return updatedQuestion
    
  } catch (error) {

    console.log(error)
    
  }

}

export const updatedSurveyTitleAndDesc = async(id:string, data:any)=>{

  try {

    await prisma.surveyForm.update({
      where:{
        id
      },
      data
    })

    console.log("title saved")
    
  } catch (error) {

    console.log(error)
    
  }
}


export const saveOptions = async(id:string, options:string[])=>{

  try {

    const question = await prisma.surveyFormQuestion.findUnique({
      where: { 
        id
       },
    });

    if(!question){
      return "Error"
    }

    await prisma.option.deleteMany({
      where: {
        questionId: question.id,
      },
    });

    const option = await prisma.option.createMany({
      data: options.map((option:string)=> ({
        text: option,
        questionId:question?.id
      })),
    });
    console.log("Option saved")
  } catch (error) {

    console.log(error)
    
  }
}

export const aiGeneratedQuestion = async(id:string)=>{

  const session:any = await getServerSession(authOptions);
    const user= (session.user as User);

  const form = await prisma.surveyForm.findUnique({
    where: {
      id
    },
    include:{
      questions:true
    }
    
  });

  const existQ = form?.questions.map(question=>question.title)

  const estimatedTime = async()=>{

    const prompt = `Generate the estimated time in minutes as integer that a 
    respondent can take to answer the following survey questions
    ${JSON.stringify(existQ)}. For example: 5 so that i can convert
    it into number and save to db as number.`
    try {

      const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
  
      return completion.data.choices[0].message?.content || '';
      
    } catch (error) {
      console.log(error)
    }
  }

  console.log("estimated time", await estimatedTime())


  const openAiPrompt = `
    You are creating a survey questions having title of ${form?.title} and description of ${form?.description} given the following questions where already asked ${JSON.stringify(existQ)} that fits the following structure. 
    Please generate a question title, a question type (from 'Short_Answer', 'Paragraph', 'Multiple_Choice', or 'Rating'), an optional number of stars (if the type is 'Rating'),
     a list of options in array (if the type is 'Multiple_Choice').

    Schema:
    {
      "title": "string",
      "type": "enum (Short_Answer, Paragraph, Options, Rating)",
      "rating": "integer (optional, if type is Rating)",
      "options": "string[] (if type is Options)" eg "["never","little"]",
    }

    Please return the question details as a JSON object.
    `;


  try {

  
    const response = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: "You are a helpful assistant that generate survey question" },
        { role: "user", content: openAiPrompt },
      ],
    });
  
    
    const generatedQuestion = JSON.parse(response.data.choices[0].message?.content as string);
    const {options, ...rest} = generatedQuestion
    const generatedQ = await prisma.surveyFormQuestion.create({

      data:{
        ...rest,
        authorId:user.id,
        author:user.name,
        form: {
          connect: {
            id: form?.id,
          },
      }
      }
    });

    if(options){
      const option = await prisma.option.createMany({
        data: options.map((option:string)=> ({
          text: option,
          questionId:generatedQ?.id
        })),
      });
    }

    await prisma.surveyForm.update({
      where:{
        id
      },
      data:{
        estimatedTime:Number(await estimatedTime())
      }
    })

    
  } catch (error) {

    console.log(error)
    
  }

}

export const deleteQuestion = async(id:string)=>{
  try {
    
    await prisma.surveyFormQuestion.delete({
      where:{
        id
      },
      include:{
        options:true,
        choices:true
      }

    })
    console.log("deleted")

    return true
  } catch (error) {

    console.log(error)
    
  }
}

export const submitForm = async(id:string)=>{

  try {
    await prisma.surveyForm.update({
      where:{
        id
      },
      data:{
        status:"active"
      }
    })

    return true
  } catch (error) {
    
  }
}


export const inviteCollaboratior = async(id:string,collaborators:User[])=>{

    const session:any = await getServerSession(authOptions);
    const user= (session.user as User);

    const url = `http:localhost:3000/invite/${id}`

  try {

    collaborators.map(async(collaborator)=>{

      const body = compileCollaborationTemplate(collaborator.name,
        url,
        user.name,
        user.email,
        user.image!)
      await sendMail({ to: collaborator.email, subject: "Collaboration Invite", body });

      await prisma.notification.create({
        data: {
          to:{
            connect:{
              id:collaborator.id
            }
          },
          senderId:"1234",
          from:"KUHESMEDLAB",
          title:"Collaboration Research",
          description:"Im inviting you to collaborate to my project",
          status: 'UNREAD',
          content:`<!DOCTYPE html>
            <html>
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background-color: #f4f4f4;
                        margin: 0;
                        padding: 0;
                    }
                    .email-container {
                        width: 100%;
                        max-width: 600px;
                        margin: 0 auto;
                        background-color: #ffffff;
                        padding: 20px;
                        border-radius: 10px;
                        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
                    }
                    .email-header {
                        text-align: center;
                        padding: 20px 0;
                    }
                    .email-header img {
                        border-radius: 50%;
                        width: 100px;
                        height: 100px;
                        object-fit: cover;
                    }
                    .email-body {
                        padding: 20px;
                        color: #333333;
                        line-height: 1.6;
                    }
                    .email-body h1 {
                        color: #007bff;
                    }
                    .email-footer {
                        margin-top: 30px;
                        text-align: center;
                        font-size: 14px;
                        color: #777777;
                    }
                    .cta-button {
                        background-color: #007bff;
                        color: #ffffff;
                        text-decoration: none;
                        padding: 12px 24px;
                        border-radius: 5px;
                        font-size: 16px;
                        display: inline-block;
                        margin-top: 20px;
                    }
                    .cta-button:hover {
                        background-color: #0056b3;
                    }
                </style>
            </head>
            <body>
                <div class="email-container">
                    <div class="email-header">
                        <img src=${user.image} alt="Sender's Image">
                    </div>
                    <div class="email-body">
                        <h1>Hello, ${collaborator.name}!</h1>
                        <p>
                            We hope this email finds you well. I am ${user.name}, and I am excited to invite you to collaborate on a new research project.
                        </p>
                        <p>
                            Your expertise and insights would be incredibly valuable to this initiative. If you're interested, please click the button below to learn more about the project and how we can work together:
                        </p>
                        <p style="text-align: center;">
                            <a href="/invite/${id}" class="cta-button">Join the Research Collaboration</a>
                        </p>
                        <p>
                            Should you have any questions, feel free to reach out to me directly at ${user.email}. I look forward to your positive response.
                        </p>
                        <p>Best regards,<br>${user.name}</p>
                    </div>
                    <div class="email-footer">
                        <p>&copy;  kuhesmedlab Research Collaboration. All rights reserved.</p>
                    </div>
                </div>
            </body>
            </html>

            `
        },
      });

      })

      return true

    
    
  } catch (error) {

    console.log(error)
    return false
    
  }
}

export const saveCollaboration = async(id:string)=>{

  const session:any = await getServerSession(authOptions);
  const user= (session.user as User);

  try {

    const userExist = await prisma.user.findUnique({
      where:{
        id:user.id
      }
    })

    const existCollabo = await prisma.collaborator.findFirst({
      where:{
        userId:user.id
      }
    })

    const existResearch = await prisma.research.findFirst({
      where:{
        id
      }
    })

    if(existCollabo){
      return existResearch?.id
    } else{
        await prisma.collaborator.create({
          data:{
            role:"CONTRIBUTOR",
            research:{
              connect:{
                id:existResearch?.id
              }
            },
            affiliation:user.name!,
            user:{
              connect:{
                id:userExist?.id
              }
            }
          },

        })
    }

    return existResearch?.id
   
  } catch (error) {

    console.log(error)
    
  }
}

export const surveyAnalysis = async (surveyId:string) => {

  const surveyForm = await prisma.surveyForm.findMany({
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

  const survey = await prisma.survey.findUnique({
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

  })

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

const today = new Date();

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

const surveyForms = await prisma.surveyForm.findMany({
  where: {
    surveyId, 
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
    responses: totalResponses,
    importance: form.importance,
    completionRate: parseFloat(completionRate.toFixed(2)),
    avgTime: parseFloat(avgTime.toFixed(2)),
    sentiment,
  };
});

return formData

}

const formData = await findFormData()

return {
  completionRate,
  totalResponses,
  demographicData,
  averageTimeTakenInMinutes,
  responseTrends,
  formData
}

}

export const aiSurveyAnalysis = async(surveyId:string, data:string) => {

  try {

    const prompt = `
    Given the following survey data ${data}, please perform a detailed analysis covering multiple aspects. The data includes responses to several questions, completion times, and user demographics such as age and gender. Analyze the following:

Overall Survey Summary: Provide a summary of the total number of responses, the completion rate, and general participation statistics.

Survey Improvement Suggestions: Based on the data, suggest areas for improving future surveys, such as rewording questions, changing their order, or targeting specific demographics.

Targeted Follow-Ups: Identify segments of respondents who should receive follow-up surveys or additional engagement based on their responses or behavior.

Response Forecasting: Predict future response rates and trends based on the current data.

Identify Outliers: Detect any outliers or unusual patterns in the data, particularly responses that deviate significantly from the norm.

Unusual Completion Times: Highlight any respondents with unusually fast or slow completion times, which might indicate non-serious responses or technical issues.

Correlation Between Responses: Identify any significant correlations between responses to different questions.

Drop-Off Analysis: Analyze where respondents tend to drop off, and provide suggestions for reducing drop-off rates in future surveys.

Response Trends Over Time: Identify trends in responses over time and highlight any periods of increased or decreased participation.

Comparison by Demographic Groups: Compare how different demographic groups (e.g., age, gender) responded to certain questions or participated in the survey.

Completion Rate Comparisons: Compare completion rates across different sections of the survey and demographic groups.

Demographic Distribution: Provide a breakdown of the demographic data (e.g., age groups, gender) of the respondents.

Please present the analysis in an HTML format using tailwind css  with appropriate headings and sections for each part of the analysis.`
    
    const completion = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [{ role: 'user', content: prompt }],
    });

    const responseMessage = completion.data.choices[0].message?.content || '';

    await prisma.survey.update({
      where:{
        id:surveyId
      },
      data:{
        aiAnalyze:responseMessage
      }
    })
    console.log("ai analyzed")
  } catch (error) {
    console.log(error)
  }
}

export const trackDownload = async(researchId: string) => {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();

  let downloadTrend = await prisma.downloadTrend.findFirst({
    where: { researchId, month, year },
  });

  if (downloadTrend) {

    await prisma.downloadTrend.update({
      where: { id: downloadTrend.id },
      data: { downloads: { increment: 1 } },
    });
  } else {
    await prisma.downloadTrend.create({
      data: {
        researchId,
        month,
        year,
        downloads: 1,
      },
    });
  }
}

export const trackCitation = async (researchId: string) => {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();

  let citationTrend = await prisma.citationTrend.findFirst({
    where: { researchId, month, year },
  });

  if (citationTrend) {
    await prisma.citationTrend.update({
      where: { id: citationTrend.id },
      data: { citations: { increment: 1 } },
    });
  } else {
    await prisma.citationTrend.create({
      data: {
        researchId,
        month,
        year,
        citations: 1,
      },
    });
  }
}

export const getResearchTrends = async (researchId: string) => {
  const citationTrends = await prisma.citationTrend.findMany({
    where: { researchId },
    orderBy: [
      { year: 'desc' },
      { month: 'desc' }
    ]
  });

  const downloadTrends = await prisma.downloadTrend.findMany({
    where: { researchId },
     orderBy: [
      { year: 'desc' },
      { month: 'desc' }
    ]
  });

  const research = await prisma.research.findUnique({
    where: { id: researchId },
    select: {
      citationTrend: true,
      downloadTrend: true,
      subjectAreas:true,
      views:true
    },
  });

  if (!research) {
    throw new Error("Research not found");
  }


  return { 
    citationTrends, 
    downloadTrends ,
    views:research.views,
    subjectAreaData:research.subjectAreas,
    citations: research.citationTrend.reduce((sum, citation) => sum + citation.citations, 0),
    downloads: research.downloadTrend.reduce((sum, download) => sum + download.downloads, 0), 
  };
}

export const download = async (researchId: string) => {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();

  let downloadTrend = await prisma.downloadTrend.findFirst({
    where: { researchId, month, year },
  });

  if (downloadTrend) {
    await prisma.downloadTrend.update({
      where: { id: downloadTrend.id },
      data: { downloads: { increment: 1 } },
    });
  } else {
    await prisma.downloadTrend.create({
      data: {
        researchId,
        month,
        year,
        downloads: 1,
      },
    });
  }
};

export const citation = async (researchId: string) => {
  const now = new Date();
  const month = now.toLocaleString('default', { month: 'long' });
  const year = now.getFullYear();

  let citationTrend = await prisma.citationTrend.findFirst({
    where: { researchId, month, year },
  });

  if (citationTrend) {
    await prisma.citationTrend.update({
      where: { id: citationTrend.id },
      data: { citations: { increment: 1 } },
    });
  } else {
    await prisma.citationTrend.create({
      data: {
        researchId,
        month,
        year,
        citations: 1,
      },
    });
  }
};


export const subscribeNewsletter =async(email:string)=>{

    if (!email) {
      return "error"
    }

    try {
      // Check if the email is already subscribed
      const existingSubscription = await prisma.newsletterSubscription.findUnique({
        where: { email },
      });

      if (existingSubscription && existingSubscription.isSubscribed) {
        return "exist"
      }

      const unsubscribeToken = crypto.randomBytes(16).toString('hex');

      if (existingSubscription) {
        // Re-subscribe the user
        await prisma.newsletterSubscription.update({
          where: { email },
          data: {
            isSubscribed: true,
            unsubscribeToken,
          },
        });
      } else {
        // Create a new subscription
        await prisma.newsletterSubscription.create({
          data: {
            email,
            unsubscribeToken,
          },
        });
      }
  } catch (error) {
    
  }

}

export const deleteUserPost = async(id:string)=>{
  try {

    await prisma.post.delete({
      where:{
        id
      }
    })
    
  } catch (error) {

    console.log(error)
    
  }
}

export const deleteUserComment = async(id:string)=>{
  try {

    await prisma.comment.delete({
      where:{
        id
      }
    })
    
  } catch (error) {

    console.log(error)
    
  }
}

export const deleteUserReply = async(id:string)=>{
  try {

    await prisma.reply.delete({
      where:{
        id
      }
    })
    
  } catch (error) {

    console.log(error)
    
  }
}


export async function markAsReads(id:string) {

  console.log(id)
  try {

    const notifications = await prisma.notification.update({
      where:{
        id
      },
      data:{
        status:"READ",
        readAt:new Date()
      }
    })

    console.log("marked as red single")

    if (!notifications) {
      throw new Error("Form not found");
    }

    return true

  } catch (error: any) {
    console.error("Error creating form:", error);
    return false
  }
}

export async function markAllAsReads() {

  const session:any = await getServerSession(authOptions);
  const userSession= (session.user as User);
  try {

    const notifications = await prisma.notification.updateMany({
      where:{
        receiverId:userSession.id
      },
      data:{
        status:"READ",
        readAt:new Date()
      }
    })

    console.log("marked as red all")

    if (!notifications) {
      throw new Error("Form not found");
    }

    return "success"

  } catch (error: any) {
    console.error("Error creating form:", error);
    return false
  }
}

export async function deleteNotification(id:string) {

  try {

    await prisma.notification.delete({
      where:{
        id
      },
      
    })


    return "success"

  } catch (error: any) {
    console.error("Error creating form:", error);
    return false
  }
}

