/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/3nnKTUYVDs4
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
import { GroupMembers } from "./GroupMembers"

export function Surveyattendance() {
  return (
    <section className="w-full md:py-24 lg:py-32">
      <div className="">
        <h6 className="text-center font-bold underline mb-5">List of attended participants</h6>
        {/* <GroupMembers /> */}
      </div>
    </section>
  )
}
