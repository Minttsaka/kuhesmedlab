
import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {

    const formdata  = await req.json();

    const {
      id
    } = formdata

     await prisma.surveyForm.delete({
      where: {
        id
      },
    });   

    return NextResponse.json(
      { message: "Form Deleted Successfully", success: true, },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error deleting form:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
export async function GET() {
  try {
    const forms = await prisma.surveyForm.findMany();
    return NextResponse.json(
      { forms },
      { status: 200 }
    );
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}