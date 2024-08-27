'use server'
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid';

export const setCookie = async () => {
     const sessionId = cookies().set({
        name:"sessionId",
        value:uuidv4(),
        httpOnly: false,
        path: '/',
      })

      return sessionId.get("sessionId")?.value
}