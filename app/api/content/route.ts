
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {


    const formdata  = await req.json();

    const { id, comment} = formdata

    const session:any = await getServerSession(authOptions);
    const userSession= (session.user as User);

    const content = await prisma.content.findUnique({
        where:{
            id,
        }
    })

    const user = await prisma.user.findUnique({
        where:{
            id:userSession.id
        }
    })

    if(!user) throw new Error("Please login to comment.")

    

    const savedComment = await prisma.comment.create({
      data:{
        comment,
       content:{
            connect:{
                id:content?.id
            }
        },
        user:{
            connect:{
                id:user.id
            }
        }
      }
    })
      ;

    return NextResponse.json(
     "success"
    );
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function GET() {
  try {
    const comments = await prisma.comment.findMany({
        include:{
            user:true,
            likes:true,
            reply:{
              include:{
                likes:true,
                user:true
              }
            }
          }
    });
    return NextResponse.json(
      comments
    );
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}