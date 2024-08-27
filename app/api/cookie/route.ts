import { cookies } from 'next/headers'
import { NextResponse } from 'next/server';
import { v4 as uuidv4 } from 'uuid';
 
export async function GET(request: Request) {

    const { name, value } = await request.json()

     const cookie = cookies().set({
        name,
        value: value,
        httpOnly: true,
        path: '/',
      })

      return new NextResponse("success")


    }

    



 
