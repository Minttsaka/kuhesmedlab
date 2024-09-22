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



    const { postId } = await req.json()

    const post = await prisma.post.findUnique({
        where: { id:postId },
      });

      const user = await prisma.user.findUnique({
        where:{
            id:userSession.id
        }
    })

    const existingLike = await prisma.like.findFirst({
        where: { postId, userId:userSession.id },
      });

      if (existingLike) {
        
        await prisma.like.deleteMany({
            where: { postId, userId:userSession.id },
          });

          console.log("disliked")

      } else {

        await prisma.like.create({
            data: {
              user:{
                connect:{
                    id:user?.id
                }
              },
              post:{
                connect:{
                    id:post?.id
                }
              }
            },
          });

          console.log("liked")


      }

      const likesCount = await prisma.like.count({
        where: {
          postId,
        },
      });


    return NextResponse.json(likesCount)
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

