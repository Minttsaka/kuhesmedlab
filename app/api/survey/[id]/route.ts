
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {


  try {
    const { params } = await req.json();

    const survey = await prisma.surveyForm.findMany({ 
      where:{
      surveyId: params
      }
     });

    if (!survey) {
      return NextResponse.json({ error: "Form not found" }, { status: 404 });
    }

    return NextResponse.json(survey);
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
