import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    const data = await req.json()

    const {options} = data

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

    const option = await prisma.option.createMany({
      data: options.map((option:string)=> ({
        text: option,
        questionId:question?.id
      })),
    });

    console.log("option", option)

    if (!option) {
      throw new Error("Form not found");
    }

    return NextResponse.json(option)
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();



    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    const data = await req.json()

    const updateoption = await prisma.surveyForm.update({
      where: { 
        id
       },
       data
    });

    console.log("fupdate form", updateoption)

    if (!updateoption) {
      throw new Error("Form not found");
    }

    return NextResponse.json(updateoption)
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

