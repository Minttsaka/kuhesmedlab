
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {

    const session:any = await getServerSession(authOptions);
    const user = (session.user as User); 
  try {
    const formdata  = await req.json();

    const {
      formId ,

    } = formdata

    const form = await prisma.surveyForm.findUnique({
      where: {
        id: formId,
      },
    });

  
    if (!form) {
      throw new Error(`Survey with id ${form } does not exist.`);
    }

    const savedFormQuestion = await prisma.surveyFormQuestion.create({
      data:{
        title:"",
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
      ;
    console.log("saved the question", savedFormQuestion);

    return NextResponse.json(
      savedFormQuestion
    );
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function GET() {
  try {
    const forms = await prisma.surveyForm.findMany();
    return NextResponse.json(
      { forms },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}