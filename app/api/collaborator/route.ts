import prisma from "@/lib/prisma";
import { NextResponse } from "next/server";


  export async function GET() {
    try {
      const collaborator = await prisma.user.findMany()
      return NextResponse.json(
        collaborator
      );
    } catch (error: any) {
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
  }