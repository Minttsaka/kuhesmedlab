
import { authOptions } from "@/lib/auth";
import prisma from "@/lib/prisma";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {


    const formdata  = await req.json();

    const session:any = await getServerSession(authOptions);
    const user= (session.user as User);


    const {
       pageNumber,
       limitNumber
    } = formdata

    const posts = await prisma.post.findMany({
        skip: (pageNumber - 1) * limitNumber,
        take: limitNumber,
      });

      const totalPosts = await prisma.post.count();


    return NextResponse.json(
        {
            posts,
            totalPages: Math.ceil(totalPosts / limitNumber),
          }
    );
  } catch (error: any) {
    console.error("Error creating form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function GET() {
  try {
    const files = await prisma.file.findMany();
    return NextResponse.json(
      files
    );
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}