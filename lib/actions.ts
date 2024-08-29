'use server'
import { cookies } from 'next/headers'
import { v4 as uuidv4 } from 'uuid';
import { prisma } from './prisma';

export const setCookie = async () => {
     const sessionId = cookies().set({
        name:"sessionId",
        value:uuidv4(),
        httpOnly: false,
        path: '/',
      })

      return sessionId.get("sessionId")?.value
}


export const updateUser = async (id:string,data:any) => {

  const userExist = await prisma.user.findUnique({
    where:{
      id
    }
  })

  if(!userExist){
    return "user not logged in."
  }

  Object.keys(data).forEach(
    (key) =>
      (data[key] === "" || undefined) && delete data[key]
  );

  const user = await prisma.user.update({
    where: {
      id
    },
    data
  });

  if (!user) {
    throw new Error(`user with id ${id} does not exist.`);
  }


   return "Successfully updated"
}