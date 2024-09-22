
import { z } from 'zod';
import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { compileActivationTemplate, sendMail } from '@/lib/mail';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { User } from '@prisma/client';
  

  

  export async function POST(req: Request, res: Response) {
 

    const body = await req.json()

    const {
      answer,
      userId,
      questionId,
      startTime,
      endTime, 
      timeTaken 
    } = body


  try {

    const question = await prisma.surveyFormQuestion.findFirst(
      {
        where:{
          id:questionId
        },
      }
    )

    console.log("this question",question)

    const answerAlreadySubmitted = await prisma.surveyFormAnswer.findFirst(
      {
        where:{
          userId,
          questionId
        },
      }
    )

    if(answerAlreadySubmitted){

      await prisma.surveyFormAnswer.update(
        {
          where:{
            id:answerAlreadySubmitted.id
          },
          data:{
            answer,
            startTime,
            endTime, 
            timeTaken,

          }
        }
      )
      console.log("updated")
    } else {

      await prisma.surveyFormAnswer.create({
        data:{
          answer,
          startTime,
          endTime, 
          timeTaken,
          user:{
            connect:{
              id:userId
            }
          },
          question:{
            connect:{
              id:question?.id
            }
          }
        }
      })

      console.log("created")

    }

    return NextResponse.json("success");

  } catch (error) {
    console.error('Error creating user:', error);
    throw error; 
  } finally {
    await prisma.$disconnect(); 
  }
}
