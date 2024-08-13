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

    const prompt = `YOu are ai assistant and you are able to make recommendations for the research. inform on what can be done to make this research effective given the following survey data
     and provide some recomendetions
     provide key insights having the following 
     details of a research called ${research?.title} and 
     abstract of ${research?.abstract}. Details : ${research} 
     number of files: 1, number of survey: ${surveys}`

    const completion = await openai.createChatCompletion({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: prompt }],
      });
  
      const responseMessage = completion.data.choices[0].message?.content || '';
  
      return  NextResponse.json({ completion: responseMessage });

   
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

