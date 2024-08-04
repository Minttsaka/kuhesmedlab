/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/IeAH4pFR4Us
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
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card } from "./ui/card"
import Link from "next/link"

//

export function SurveyCollabo() {
  return (
    <section className=" p-2 h-screen shadow space-y-1 ">
      <p className="border-b text-xl">From internet</p>
     <Card className="w-full max-w-3xl p-6 grid gap-4">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Vercel - The Cloud Platform for Frontend Teams
          </Link>
          <p className="text-sm text-muted-foreground">https://vercel.com</p>
          <p className="text-sm text-muted-foreground">
            Vercel is the cloud platform for frontend teams. It enables developers to host websites and web applications
            that deploy instantly, scale automatically, and require no supervision, all with no configuration.
          </p>
        </div>
      </div>
    </Card>

    <Card className="w-full max-w-3xl p-6 grid gap-4">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Vercel - The Cloud Platform for Frontend Teams
          </Link>
          <p className="text-sm text-muted-foreground">https://vercel.com</p>
          <p className="text-sm text-muted-foreground">
            Vercel is the cloud platform for frontend teams. It enables developers to host websites and web applications
            that deploy instantly, scale automatically, and require no supervision, all with no configuration.
          </p>
        </div>
      </div>
    </Card>
    <Card className="w-full max-w-3xl p-6 grid gap-4">
      <div className="flex items-start gap-4">
        <div className="flex-1">
          <Link href="#" className="text-lg font-medium hover:underline" prefetch={false}>
            Vercel - The Cloud Platform for Frontend Teams
          </Link>
          <p className="text-sm text-muted-foreground">https://vercel.com</p>
          <p className="text-sm text-muted-foreground">
            Vercel is the cloud platform for frontend teams. It enables developers to host websites and web applications
            that deploy instantly, scale automatically, and require no supervision, all with no configuration.
          </p>
        </div>
      </div>
    </Card>
    
    </section>
  )
}
