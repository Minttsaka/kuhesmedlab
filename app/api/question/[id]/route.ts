import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 

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
       
    });

    console.log("forms", formsQuestions )

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
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    const data = await req.json()

    const updateQuestion = await prisma.surveyFormQuestion.update({
      where: { 
        id
       },
       data
    });

    console.log("update question", updateQuestion)

    if (!updateQuestion) {
      throw new Error("question not found");
    }

    return NextResponse.json(updateQuestion)
  } catch (error: any) {
    console.error("Error creating question:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

