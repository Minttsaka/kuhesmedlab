import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your environment variables
  });
  const openai = new OpenAIApi(configuration);

export async function GET(req: NextRequest) {

  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    const research = await prisma.research.findUnique({
        where:{
            id
        }
    })

     const surveys= await prisma.survey.findMany({
        where:{
            researchId:id
        }
    })

   

   
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {
  try {

    const data = await req.json()

    const {prompt } = data

   const completion = await openai.createChatCompletion({
       model: 'gpt-3.5-turbo',
       messages: [{ role: 'user', content: prompt }],
     });
 
     const responseMessage = completion.data.choices[0].message?.content || '';

 
     return  NextResponse.json(responseMessage);

  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

