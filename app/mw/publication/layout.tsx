import type { Metadata } from "next";

import SurveySIdeBar from "@/components/SurveySIdeBar";
import ResearchSideBar from "@/components/ResearchSideBar";
import ResearchNavBar from "@/components/ResearchNavBar";

// const inter = Inter({ subsets: ["latin"] });

//#2a2e7c

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className='bg-[#b6ebec] w-full min-h-screen p-3 md:p-6'>
    <div className='bg-white bg-opacity-20  rounded-3xl md:p-6 border-2 border-white'>
      <div className='min-h-screen bg-white bg-opacity-40  rounded-3xl pb-5'>
        <ResearchSideBar />
          <ResearchNavBar />
          {children}       
        </div>
      </div>
    </div>
  );
}
