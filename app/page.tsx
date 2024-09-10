import BeautifulCard from "@/components/BeautifulCard";
import BestThreeCards from "@/components/BestThreeCards";
import BlackBg from "@/components/BlackBg";
import { BlogList } from "@/components/BlogList";
import Finisher from "@/components/Finisher";
import Footer from "@/components/Footer";
import GlobalConnection from "@/components/GlobalConnection";
import { HeroParallaxDemo } from "@/components/HeroParallaxDemo";
import LandingMobileNav from "@/components/LandingMobileNav";
import { AutoTriggerTabs } from "@/components/auto-trigger-tabs";
import { Faq } from "@/components/faq";
import { LandingFirst } from "@/components/landing-first";
import { LandingNav } from "@/components/landing-nav";
import { prisma } from "@/lib/prisma";
import Image from "next/image";

export default async function Home() {

  const blog= await prisma.content.findMany({
    where:{
      type:"BLOG"
    }
  })

  return (
    <main className="">
      <LandingNav />
      <LandingMobileNav />
     <LandingFirst />
     <BestThreeCards />
     <HeroParallaxDemo />
     <GlobalConnection />
     <AutoTriggerTabs />
     <BeautifulCard />
     <BlackBg />
     <BlogList blog={blog!} />
     <Finisher  averageRating={4} totalRatings={10}/>
     <Faq />
     <img alt="" src="https://www.kuhes.ac.mw/wp-content/uploads/2022/10/KUHES-Banner-3748x980.jpg" />
     <Footer/>
    </main>
  );
}
