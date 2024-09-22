"use server";

import * as bcrypt from "bcrypt";
import {
  compileResetPassTemplate,
  sendMail,
} from "./mail";
import { signJwt, verifyJwt } from "./jwt";
import prisma from "./prisma";


type ActivateUserFunc = {
  jwtUserId: string

}


export const activateUser = async (jwtUserID: ActivateUserFunc) => {
  const payload = verifyJwt(jwtUserID as any);
  const userId = payload?.id;

  const user = await prisma.user.findUnique({
    where:{
      id:userId
    }
    
  });

  if (!user) return {status:"failed",data:"userNotExist"};;
  if (user.emailVerified) return {status:"failed",data:"alreadyActivated"};;

  const result = await prisma.user.update({
    where:{
      id:userId
    },
    data:{
      emailVerified: new Date(),
    }
    
  });
  // Check if the update was successful, or add any additional conditions as needed
  if (result) {
    return { status:"success",data:user.name};
  } else {
    // Handle the case where the update did not return a value
    return {status:"failed",data:"failed"};; // or any other appropriate value
  }
};

export async function forgotPassword(email: string) {

  const user = await prisma.user.findFirst({
    where:{
      email
    }
    
  });

  if (!user) throw new Error("The User Does Not Exist!");

  //  Send Email with Password Reset Link
  const jwtUserId = signJwt({
    id: user.id,
  });
  const resetPassUrl = `${process.env.NEXTAUTH_URL}/auth/resetPass/${jwtUserId}`;
  const body = compileResetPassTemplate(user.name, resetPassUrl);
  const sendResult = await sendMail({
    to: user.email,
    subject: "Reset Password",
    body: body,
  });
  return sendResult;
}

type ResetPasswordFucn = (
  jwtUserId: string,
  password: string
) => Promise<"userNotExist" | "success">;

export const resetPassword: ResetPasswordFucn = async (jwtUserId, password) => {
  const payload = verifyJwt(jwtUserId);
  if (!payload) return "userNotExist";
  const userId = payload.id;

  const user = await prisma.user.findUnique({
    where:{
      id:userId
    }, 
  });

  if (!user) return "userNotExist";

  const result = await prisma.user.update(
    {
      where:{
        id:userId
    },
      data:{
        password: await bcrypt.hash(password, 10),
      }
  }
     
  );

  if (result) return "success";
  else throw new Error("Something went wrong!");
};
