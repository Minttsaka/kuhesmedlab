import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "@prisma/client";

export async function GET(req: NextRequest) {

  const session:any = await getServerSession(authOptions);
  const userSession= (session.user as User);

  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    const reply = await prisma.reply.findUnique({
      where: { id },
    });

    const user = await prisma.user.findUnique({
      where:{
          id:userSession.id
      }
  })

  const existingLike = await prisma.like.findFirst({
      where: { replyId:reply?.id, userId:userSession.id },
    });

    if (existingLike) {
      
      await prisma.like.deleteMany({
          where: { replyId:reply?.id, userId:userSession.id },
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
            reply:{
              connect:{
                  id:reply?.id
              }
            }
          },
        });

        console.log("liked")


    }
    return NextResponse.json("success")
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {

  const session:any = await getServerSession(authOptions);
  const userSession= (session.user as User);

  try {



    const { commentId } = await req.json()

    const comment = await prisma.comment.findUnique({
        where: { id:commentId },
      });

      const user = await prisma.user.findUnique({
        where:{
            id:userSession.id
        }
    })

    const existingLike = await prisma.like.findFirst({
        where: { commentId, userId:userSession.id },
      });

      if (existingLike) {
        
        await prisma.like.deleteMany({
            where: { commentId, userId:userSession.id },
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
              comment:{
                connect:{
                    id:comment?.id
                }
              }
            },
          });

          console.log("liked")


      }


    return NextResponse.json("success")
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

