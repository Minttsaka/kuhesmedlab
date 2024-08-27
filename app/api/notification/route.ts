import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import {  NextResponse } from "next/server";
import { z } from "zod";

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  abstract: z.string().min(10, {
    message: "Abstract must be at least 10 characters.",
  }),
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
  
    const user = await prisma.user.findUnique({
      where:{
        id
      }
    })

    const body = await req.json()

    const {
      title,
      abstract,
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


    const institution = await prisma.institution.findUnique({
      where:{
        id:checkUser?.institutionId
      }
    })
    if(!checkUser) throw new Error("You have to loggin in first. This an unauthorized operation")

      const newResearch = await prisma.research.create({
        data: {
          title,
          abstract,
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
          field,
          creatorName: checkUser?.name,
        },
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
