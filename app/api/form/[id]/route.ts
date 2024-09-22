import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    const forms = await prisma.surveyForm.findMany({
      where: { 
        surveyId:id
       },
       include:{
        questions:{
          include:{
            options:true,
            choices:{
              include:{
                user:true
              }
            }
          }
        }
       }
    });

  
    if (!forms) {
      throw new Error("Form not found");
    }

    return NextResponse.json(forms)
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

    const updateforms = await prisma.surveyForm.update({
      where: { 
        id
       },
       data
    });

    console.log("fupdate form", updateforms)

    if (!updateforms) {
      throw new Error("Form not found");
    }

    return NextResponse.json(updateforms)
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

