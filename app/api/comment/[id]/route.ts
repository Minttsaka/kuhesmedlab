import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import { User } from "@prisma/client";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    console.log("params", id);

    const files = await prisma.file.findMany({
      where:{
        researchId:id
      }
    });


    if (!files) {
      throw new Error("Form not found");
    }

    return NextResponse.json(files)
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}


export async function POST(req: NextRequest) {

  const session:any = await getServerSession(authOptions);
  const userSession= (session.user as User);

  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    const comment = await prisma.comment.findUnique({
      where:{
          id
      }
  })

    const user = await prisma.user.findUnique({
      where:{
          id:userSession.id
      }
  })

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    const {reply} = await req.json()

    const newReply = await prisma.reply.create({
      data:{
        reply,
        user:{
          connect:{
            id:user?.id
          }
        },
        comment:{
          connect:{
            id:comment?.id
          }
        }
      }
    });

    if (!newReply) {
      throw new Error(`newReply with id ${id} does not exist.`);
    }


    return NextResponse.json("success")
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

