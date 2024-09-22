import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 
import { SurveyFormQuestion, User } from "@prisma/client";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    console.log("params", id);

    const formsQuestions = await prisma.surveyFormQuestion.findMany({
      where: { 
        formId:id
       },
       include:{
        options:true
       }
       
    });

    if (!formsQuestions ) {
      throw new Error("Formquestions not found");
    }

    return NextResponse.json(formsQuestions )
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {

  const session:any = await getServerSession(authOptions);
    const user = (session.user as User); 

  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    const data = await req.json()

    const {questions} = data

    const question = await prisma.surveyFormQuestion.findUnique({
      where: { 
        id
       },
    });

    if(!question){
      return NextResponse.json({ error: "question is missing" }, { status: 400 });
    }

    await prisma.option.deleteMany({
      where: {
        questionId: question.id,
      },
    });

    const updateQuestion = await prisma.surveyFormQuestion.createMany({
      data: questions.map((question:SurveyFormQuestion)=> ({
        title: question.title,
        type:question.type,
        formId:question?.id,
        author:user.name,
        authorId:user.id
      })),
    });

    console.log("option", updateQuestion)

    if (!updateQuestion) {
      throw new Error("Form not found");
    }
    return NextResponse.json(updateQuestion)
  } catch (error: any) {
    console.error("Error creating question:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

