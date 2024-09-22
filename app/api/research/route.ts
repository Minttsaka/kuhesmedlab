import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import {  NextResponse } from "next/server";
import { z } from "zod";
import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  });
  const openai = new OpenAIApi(configuration);

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  abstract: z.string().min(10, {
    message: "Abstract must be at least 10 characters.",
  }),
  slug: z.string(),
  keywords: z.string().min(2, {
    message: "Please provide at least one keyword.",
  }),
  affiliation: z.string().min(2, {
    message: "Affiliation must be at least 2 characters.",
  }),
  field: z.string({
    required_error: "Please select a research field.",
  }),
  authors: z.string().min(2, {
    message: "Please provide at least one author.",
  }),
  journal: z.string().optional(),
  conference: z.string().optional(),
})

export const POST = async (req: Request,res:Response) => {


    const session:any = await getServerSession(authOptions);
    const { id }= (session.user as User);
  
    const body = await req.json()

    const {
      title,
      abstract,
      slug,
      affiliation,
      keywords,
      field,
      journal,
      authors,
      conference
    } = FormSchema.parse(body)

  try {

    const checkUser = await prisma.user.findUnique({
        where:{
            id
        }
    })

    const fields = await prisma.researchCategory.findUnique({
      where:{
        category:field
      }
    })

    const institution = await prisma.institution.findUnique({
      where:{
        id:checkUser?.institutionId
      }
    })
    if(!checkUser) throw new Error("You have to loggin in first. This an unauthorized operation")

      const subjectAreaData = async()=>{

        const prompt = `
        Given the research title: "${title}"
        and abstract: "${abstract}",
        field:"${field}",
        keywords:"${keywords}",
        affiliation:"${affiliation}",
        generate data for various research fields with names and values similar to the format:
        [
          { "name": "Computer Science", "value": 350 },
          { "name": "Physics", "value": 200 },
          { "name": "Mathematics", "value": 150 }
        ]
      `;

      try {

         const completion = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        });
    
        return completion.data.choices[0].message?.content || '';

        
      } catch (error) {
        console.log(error)
        
      }

      }

      const citeReferenceData = async()=>{

        const prompt = `
          Generate an APA reference for a research paper with the following details:
          Title: "${title}"
          Abstract: "${abstract}"
          Affiliation: "${affiliation}"
          Keywords: ${keywords}
          Field: "${field}"
          date: ${new Date()}
          Journal: "${journal}"
          Authors: ${authors}
          
          Format the reference in modern APA style. do not add url.
        `;

        try {
          const completion = await openai.createChatCompletion({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
        });
    
        return completion.data.choices[0].message?.content || '';
        } catch (error) {

          console.log(error)
          
        }

      }

      const subjectArea = await subjectAreaData()
      const citeReference = await citeReferenceData()

      const newResearch = await prisma.research.create({
        data: {
          title,
          slug,
          abstract,
          field:fields?.category!,
          citeReference:citeReference!,
          keyWords:keywords,
          user:{
            connect:{
              id:checkUser?.id
            }
          },
          institution:{
            connect:{
              id:institution?.id
            }
          },
          journal,
          conference,
          affiliation,
          authors,
          category:{
            connect:{
              id:fields?.id
            }
          },
          creatorName: checkUser?.name,
        },
      });

      let parsedSubjectArea: { name: string; value: number }[] = [];
    try {
      // Attempt to parse subjectArea as JSON
      parsedSubjectArea = JSON.parse(subjectArea!);

      // Ensure that the parsed data is an array of objects with the expected properties
      if (!Array.isArray(parsedSubjectArea) || parsedSubjectArea.some(item => !item.name || typeof item.value !== 'number')) {
        throw new Error("Invalid subject area data format.");
      }
    } catch (err) {
      console.error("Failed to parse subject area data:", err, subjectArea);
      throw new Error("Invalid subject area data. Could not parse.");
    }

    await prisma.researchSubjectArea.createMany({
      data: parsedSubjectArea.map((option: { name: string; value: number }) => ({
        name: option.name,
        value: option.value,
        researchId: newResearch.id
      }))
    });


    return NextResponse.json(newResearch.id);

  } catch (err) {
    console.log(err)

    return new NextResponse()
  }
};


// CREATE A COMMENT
export const GET = async (req:Request) => {

  const session:any = await getServerSession(authOptions);
  const { id }= (session.user as User);

  try {

    const researchList = await prisma.research.findMany({
      where:{
        creatorId:id
      }
    })

    return NextResponse.json(researchList);
    
  } catch (err) {
    console.log(err);
    return new NextResponse(

    );
  }
};
