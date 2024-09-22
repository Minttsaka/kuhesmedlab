import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma"; 

export async function POST(req: NextRequest) {
  try {
    const url = new URL(req.url);
    const id = url.pathname.split("/").pop();

    if (!id) {
      return NextResponse.json({ error: "ID parameter is missing" }, { status: 400 });
    }

    const data = await req.json()

    await prisma.research.update({
      where:{
        id
      },
      data
    })

    return NextResponse.json("success")
  } catch (error: any) {
    console.error("Error creating question:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

