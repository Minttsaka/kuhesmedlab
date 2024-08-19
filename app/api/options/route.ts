import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 

export async function POST(req: NextRequest) {
  try {


    const data = await req.json()

    const { rating , id } = data

    const question = await prisma.surveyFormQuestion.findUnique({
      where: { 
        id
       },
    });

    if(!question){
      return NextResponse.json({ error: "question is missing" }, { status: 400 });
    }

    console.log(rating,"from rating")


    const updatedquestion = await prisma.surveyFormQuestion.update({

        where:{
            id
        },
      data: {
        rating:parseInt(rating)
      }
  
    });

    console.log("updatedquestion", updatedquestion)

    if (!updatedquestion) {
      throw new Error("Form not found");
    }

    return NextResponse.json(updatedquestion)
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

