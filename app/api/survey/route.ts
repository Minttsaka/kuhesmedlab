import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import {  NextResponse } from "next/server";
import { z } from "zod";

const FormSchema = z.object({
    title: z.string().min(2, "First name must be at least 2 characters"),
    description:z.string(),
    label:z.string(),
    researchId:z.string()
  });


export const POST = async (req: Request,res:Response) => {


    const session:any = await getServerSession(authOptions);
    const { id }= (session.user as User);
  
    const user = await prisma.user.findUnique({
      where:{
        id
      }
    })

    console.log("this is session from research route", user)

    const body = await req.json()

    const {title ,description, researchId, label } = FormSchema.parse(body)

  try {

    const research = await prisma.research.findUnique({
        where:{
            id:researchId
        }
      });

    if(!research) throw new Error("You have to loggin in first. This an unauthorized operation")

    const newSurvey= await prisma.survey.create({
        data:{
            title,
            creatorId:user?.id,
            creatorName:user?.name!,
            description,
            label,
            research: {
                connect: {
                  id: research.id,
                },
            }

        }
    })

    console.log("success",newSurvey)

    return NextResponse.json(newSurvey.id);

  } catch (err) {

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
