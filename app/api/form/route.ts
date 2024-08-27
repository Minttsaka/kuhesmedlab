
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {

    const session:any = await getServerSession(authOptions);
    const user= (session.user as User);

    const formdata  = await req.json();

    const {
      title,
      description,
      label,
      identity:isChecked,
      surveyId,
      guildelines,
      importance
    } = formdata

    const survey = await prisma.survey.findUnique({
      where: {
        id: surveyId,
      },
    });

    console.log(survey)
  
    if (!survey) {
      throw new Error(`Survey with id ${surveyId} does not exist.`);
    }

    const savedForm = await prisma.surveyForm.create({
      data:{
        title,
        creatorId:user.id,
        creatorName:user.name,
        description,
        guildelines,
        importance,
        label,
        identity:isChecked,
        survey: {
          connect: {
            id: surveyId,
          },
      }
      }
    })
      ;
    console.log("saved", savedForm);

    return NextResponse.json(
      { message: "Form Created Successfully", success: true, savedForm },
      { status: 201 }
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