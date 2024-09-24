import bcrypt from 'bcrypt';
import { signJwt } from '@/lib/jwt';
import { z } from 'zod';
import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';
import { compileActivationTemplate, sendMail } from '@/lib/mail';

  
const FormSchema = z.object({
  name: z.string().min(2, 'Full name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  gender: z.enum(["MALE", "FEMALE"]),
  country:z.object({ value: z.string(), label: z.string() }),
  password: z
    .string()
    .min(8, 'Password must be at least 8 characters')
    .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 
      'Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character'),
  institution: z.object({
    label: z.string().min(2, 'Institution name must be at least 2 characters'),
    value: z.string()
  }),
  age: z.number().min(18, 'You must be at least 18 years old').max(120, 'Invalid age')
})

  

  export async function POST(req: Request, res: Response) {

    const body = await req.json()

    console.log(body)

    const { 
        password,
        email,
        institution,
        age,
        name,
        country,
        gender

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

    const existInstitution = await prisma.institution.findUnique({
      where:{
        id:institution.value
      }
    })

    if(alreadyUser) throw new Error("The email address has been used by another person.")
  
    const newUser = await prisma.user.create({
      data: {
        email,
        password:hashedPassword,
        gender:gender,
        institution:{
          connect:{
            id:existInstitution?.id
          }
        },
        age:age.toString(),
        name,
        country:country.label
      },
    });

    // Generate JWT token for user ID
    const jwtUserId = signJwt({
      id: newUser.id,
    });

    const activationUrl = `${process.env.NEXTAUTH_URL}/auth/activation/${jwtUserId}`;
    const body = compileActivationTemplate(newUser.name, activationUrl);
    await sendMail({ to: newUser.email, subject: "Activate Your Account", body });

    await prisma.notification.create({
      data: {
        to:{
          connect:{
            id:newUser.id
          }
        },
        senderId:"1234",
        from:"KUHESMEDLAB",
        title:"Welcome to KUHESMEDLAB!",
        description:"a warm welcome to you",
        status: 'UNREAD',
        content:`<div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 8px; border: 1px solid #ddd; max-width: 600px; margin: 0 auto; color: #333;">
            <h1 style="font-size: 24px; color: #4a90e2; text-align: center; margin-bottom: 20px;">Welcome to kuhesmedlab!</h1>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              Hello <strong>${newUser.name}</strong>,
            </p>
            
            <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
              We're excited to have you on board! Here at Kuhesmedlab, we are dedicated to helping you succeed in your journey. To get started, we have put together some useful links and resources just for you.
            </p>
            
            <a href="/mw/research" style="display: inline-block; background-color: #4a90e2; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-size: 16px; margin-bottom: 20px; text-align: center;">Get Started</a>
            
            <p style="font-size: 16px; line-height: 1.6; margin-top: 20px;">
              If you have any questions, feel free to reach out to our support team at any time.
            </p>
            
            <p style="font-size: 14px; line-height: 1.6; color: #888; margin-top: 30px; text-align: center;">
              Best Regards,<br>
              The Kuhesmedlab Team
            </p>
          </div>
          `
      },
    });

    await prisma.notification.create({
      data: {
        to:{
          connect:{
            id:newUser.id
          }
        },
        senderId:"1234",
        from:"KUHESMEDLAB",
        title:"Upadte biography!",
        description:"Biography is missing.",
        status: 'UNREAD',
        content:`<div style="font-family: Arial, sans-serif; padding: 20px; border-radius: 8px; max-width: 600px; margin: 0 auto; color: #333;">
    <h1 style="font-size: 24px; color: #4a90e2; text-align: center; margin-bottom: 20px;">Profile Update Required!</h1>

    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
      Hello <strong>${newUser.name}</strong>,
    </p>

    <p style="font-size: 16px; line-height: 1.6; margin-bottom: 20px;">
      We noticed that your biography is missing or outdated. Please update your biography to help others and ai understand more about you and your contributions.
      
    </p>

    <a href="/mw/a/profile" style="display: inline-block; background-color: #4a90e2; color: #fff; padding: 10px 20px; text-decoration: none; border-radius: 4px; font-size: 16px; margin-bottom: 20px; text-align: center;">Update Biography</a>

    <p style="font-size: 16px; line-height: 1.6; margin-top: 20px;">
      You can easily update your biography in your profile settings by clicking the link above and click edit profile.
    </p>

    <p style="font-size: 14px; line-height: 1.6; color: #888; margin-top: 30px; text-align: center;">
      Best Regards,<br>
      The Kuhesmedlab Team
    </p>
</div>
`
      },
    });

    return NextResponse.json("success");

  } catch (error) {
    console.error('Error creating user:', error);
    throw error; 
  } finally {
    await prisma.$disconnect(); 
  }
}
