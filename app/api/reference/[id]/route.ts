import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    const reference = await prisma.reference.findMany({
      where: { 
        researchId:id
       },
       
    });

    if (!reference ) {
      throw new Error("Formquestions not found");
    }

    return NextResponse.json(reference )
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

    const formData = await req.json()

    const data = formData.reference

    const research = await prisma.research.findUnique({
      where:{
        id
      }
    })


    if (!research) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    const referenceString = JSON.stringify(data, null, 2);

    const prompt = `
    Format the following reference in APA 7th edition format based on the provided data:
    
    Reference Data:
    ${referenceString}

    `;

  const response = await openai.createChatCompletion({
    model: "gpt-4",
    messages: [
      { role: "system", content: "You are a helpful assistant that formats references." },
      { role: "user", content: prompt },
    ],
  });

    const reference = await prisma.reference.create({
     
       data:{
        ...data,
        fullReference:response.data.choices[0].message?.content,
        research:{
          connect:{
            id:research.id
          }
        }

       }
    });

    console.log("update question", reference)

    if (!reference) {
      throw new Error("question not found");
    }

    return NextResponse.json("success")
  } catch (error: any) {
    console.error("Error creating question:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

