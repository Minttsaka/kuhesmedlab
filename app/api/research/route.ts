import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import {  NextResponse } from "next/server";
import { z } from "zod";

const FormSchema = z.object({
    title: z.string().min(2, "First name must be at least 2 characters"),
    abstract: z.string().min(2, "First name must be at least 2 characters"),
    doi: z.string().min(2, "Last name must be at least 2 characters"),
    journal: z.string().min(2, "Last name must be at least 2 characters"),
    conference: z.string().min(2, "Last name must be at least 2 characters"),
    keyWords: z.string().min(2, "Last name must be at least 2 characters"),
    affiliation: z.string().min(2, "First name must be at least 2 characters"),
    researchField: z.string().min(2, "First name must be at least 2 characters"),
  });


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
      keyWords,
      researchField,
      doi,
      journal,
      conference
    } = FormSchema.parse(body)

  try {

    const checkUser = await prisma.user.findUnique({
        where:{
            id
        }
    })

    if(!checkUser) throw new Error("You have to loggin in first. This an unauthorized operation")

    const newResearch = await prisma.research.create({
        data:{
            title,
            abstract,
            keyWords,
            doi,
            journal,
            conference,
            affiliation,
            researchField,
            creatorId:checkUser?.id,
            creatorName:checkUser?.name
        }
    })

   
    console.log("success",newResearch)

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
