/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/Nj23XOUPrkD
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import { ArrowRight } from "lucide-react";
import { Badge } from "./ui/badge";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { BackgroundGradientAnimation } from "./ui/background-gradient-animation";
import Trustedby from "./Trustedby";

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
export function LandingFirst() {
  return (
    <div className="flex h-screen  items-center  w-full">
      <div className="relative w-full">
        <BackgroundGradientAnimation className=" -skew-y-12 origin-top-left" />
        <BackgroundGradientAnimation className=" skew-y-12 origin-bottom-right" />
        {/* <div className="absolute inset-x-0 top-40 bottom-0 h-[30rem] bg-[#A3CCE5] -skew-y-12 origin-top-left" /> */}
        {/* <div className="absolute inset-x-0 top-40 bottom-0 h-[30rem] bg-[#A3CCE5] skew-y-12 origin-bottom-right" /> */}
        <div className="relative max-w-7xl mx-auto z-10 md:grid grid-cols-2 p-6 gap-6">
          <div className=" max-w-lg flex flex-col gap-4 text-start text-gray-100">
            <Badge className="w-fit">See how ai is helping lab<ArrowRight className="h-3 w-3" /></Badge>
            <h1 className="text-6xl md:text-6xl font-bold ">Kuhes medical laboratory program</h1>
            <p className="text-lg sm:text-xl">The field of Medical Laboratory Science 
            is on the cusp of a revolution, and KUHES is at the heart of it!join the movement 
             to revolutionize this critical field!
             </p>
              <div className="p-2 flex gap-2  rounded-3xl bg-white bg-opacity-20 mb-2 md:mb-0">
                <Input placeholder="email" className="bg-transparent border-none placeholder:text-white rounded-2xl" />
                <Button className="rounded-2xl">Send<ArrowRight className="h-3 w-3" /></Button>
              </div>
          </div>
          <div>
            <div className="p-6 rounded-lg bg-opacity-20 bg-white">
              <img src="https://media.istockphoto.com/id/1485440785/photo/science-covid-and-solution-with-a-black-woman-doctor-working-in-a-laboratory-for-research-or.webp?b=1&s=170667a&w=0&k=20&c=Z2xDwFlMDwXy3DmRdxlPSoj6AKor5gUUKW1NdiSibwY=" className="w-full h-full rounded-lg" />
            </div>
          </div>
          <Trustedby />
        </div>
      </div>
    </div>
    
  )
}
