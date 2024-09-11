/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Soc6B8scqDG
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/


import Link from "next/link"
import { getServerSession } from "next-auth"
import { authOptions } from "@/lib/auth"
import { prisma } from "@/lib/prisma"
import Logout from "./Logout"
import DashboardSearchBar from "./DashboardSearchBar"
import { ArrowRight } from "lucide-react"

type User = {
  id: string;
  email: string;
  name: string;
  role:string,
  country: string | null;
  bio: string | null;
  password: string;
  emailVerified: Date | null;
  phone: string | null;
  image: string | null;
  researchId: string | null;
}


export async function DashboardNav() {


  const session:any = await getServerSession(authOptions);
  const sessionuser= session.user as User;

  const firstResearch = await prisma.research.findFirst({
    where:{
      creatorId:sessionuser.id
    }
    ,
    orderBy:{
      createdAt:"desc"
    }
  })

  const user = await prisma.user.findUnique({
    where:{
      id:sessionuser.id
    }
  })

  const blog = await prisma.content.findFirst({
    where:{
      type:"BLOG" 
    },
    orderBy:{
      createdAt:"desc"
    }
  })
  

  return (
    <header>
     <div className="bg-gradient-to-r from-purple-300 to-blue-400">
        {firstResearch && <Link href={`/blog/read/${blog?.slug}`} className="container text-xs flex items-center mx-auto">
          <p className="font-bold p-2   gap-2 text-white">{blog?.title}</p>
          <ArrowRight className="h-3 w-3 text-white" />
        </Link>}
     </div>
   <DashboardSearchBar user={user!} firstResearch={firstResearch!} />
    </header>
  )
}
