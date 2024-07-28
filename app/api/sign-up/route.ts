import bcrypt from 'bcrypt';
import { signJwt } from '@/lib/jwt';
import { z } from 'zod';
import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';
import { compileActivationTemplate, sendMail } from '@/lib/mail';
  
const FormSchema = z.object({
  name: z
    .string()
    .min(2, "First name must be at least 2 characters")
    .max(45, "First name must be less than 45 characters"),
  country:z.string(),
  email: z.string().email("Please enter a valid email address"),
  password: z.string().min(4, "First name must be at least 2 characters"),
});

  

  export async function POST(req: Request, res: Response) {

    const body = await req.json()

    const { 
      
        email,
        name,
        country,
        password,

    } = FormSchema.parse(body);

  try {
    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    const alreadyUser = await prisma.user.findFirst(
      {
        where:{
          email
        }
      }
    )

    if(alreadyUser) throw new Error("The email address has been used by another person.")
  
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
        country,
        password:hashedPassword,
      },
    });

    // Generate JWT token for user ID
    const jwtUserId = signJwt({
      id: newUser.id,
    });

    const activationUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${jwtUserId}`;
    const body = compileActivationTemplate(newUser.name, activationUrl);
    await sendMail({ to: newUser.email, subject: "Activate Your Account", body });
    return NextResponse.json("success");

  } catch (error) {
    console.error('Error creating user:', error);
    throw error; 
  } finally {
    await prisma.$disconnect(); // Disconnect from the Prisma client
  }
}
