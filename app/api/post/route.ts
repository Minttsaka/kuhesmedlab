
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {


    const formdata  = await req.json();

    const { page = 1, limit = 7 } = formdata


  const skip = (page - 1) * limit;

  const posts = await prisma.post.findMany({
    skip,
    take: limit,
    include:{
      likes:true,
      user:true,
      comment:{
        include:{
          likes:true
         }
        },
  
     },
     orderBy:{
      createdAt:"desc"
     }
  
  });


  return NextResponse.json(posts)
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
