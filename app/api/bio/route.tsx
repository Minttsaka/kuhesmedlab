import bcrypt from 'bcrypt';
import { signJwt } from '@/lib/jwt';
import { z } from 'zod';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { compileActivationTemplate, sendMail } from '@/lib/mail';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { User } from '@prisma/client';
  
const FormSchema = z.object({
  bio: z
    .string()
    .min(2, "First name must be at least 2 characters")
});

  

  export async function POST(req: Request, res: Response) {

    const session:any = await getServerSession(authOptions);
    const { id }= (session.user as User);

  

    const body = await req.json()

    const { 
      
        bio,

    } = FormSchema.parse(body);

  try {

    console.log(bio)


    const user= await prisma.user.update(
      {
        where:{
          id
        },
        data:{
            bio
        }
      }
    )

    return NextResponse.json("success");

  } catch (error) {
    console.error('Error creating user:', error);
    throw error; 
  } finally {
    await prisma.$disconnect(); 
  }
}
