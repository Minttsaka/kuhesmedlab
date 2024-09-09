import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"; 
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { User } from "@prisma/client";

export async function GET(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    const post = await prisma.content.findUnique({
      where:{
          id
      },
      include:{
          likes:true,
          comment:{
              include:{
                  user:true,
              }
          }
         
        }
  });

  console.log(post,"hello post")


    if (!post) {
      throw new Error("Form not found");
    }

    return NextResponse.json(post)
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function POST(req: NextRequest) {

  const url = new URL(req.url);
  const id = url.pathname.split("/").pop();

  if (!id) {
    return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
  }


  const session:any = await getServerSession(authOptions);
  const userSession= (session.user as User);

  try {



    const { contentId } = await req.json()

    const content = await prisma.content.findUnique({
      where:{
          id:contentId
      }
  })


      const user = await prisma.user.findUnique({
        where:{
            id:userSession.id
        }
    })

    const existingLike = await prisma.like.findFirst({
        where: { contentId, userId:userSession.id },
      });

      if (existingLike) {
        
        await prisma.like.deleteMany({
            where: { contentId, userId:userSession.id },
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
              content:{
                connect:{
                    id:content?.id
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
