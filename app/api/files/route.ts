
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { User } from "@prisma/client";
import { getServerSession } from "next-auth";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {


    const formdata  = await req.json();

    const session:any = await getServerSession(authOptions);
    const user= (session.user as User);

    const {
        url,
        filename,
        fileType,
        researchId
    } = formdata

    const research = await prisma.research.findUnique({
      where: {
        id: researchId,
      },
    });

    if (!research) {
      throw new Error(`research with id ${researchId} does not exist.`);
    }

    console.log(research)

    const savedFile = await prisma.file.create({
      data:{
        filename,
        url,
        fileType,
        uploadedBy:{
          connect: {
            id: user.id,
          },
      },
        research: {
          connect: {
            id: research.id,
          },
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
    const files = await prisma.file.findMany();
    return NextResponse.json(
      files
    );
  } catch (error: any) {
    console.log(error)
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}