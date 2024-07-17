import BeautifulCard from "@/components/BeautifulCard";
import BlackBg from "@/components/BlackBg";
import Finisher from "@/components/Finisher";
import Footer from "@/components/Footer";
import GlobalConnection from "@/components/GlobalConnection";
import { StickyScrollRevealDemo } from "@/components/StickyScroll";
import { AutoTriggerTabs } from "@/components/auto-trigger-tabs";
import { Faq } from "@/components/faq";
import { LandingFirst } from "@/components/landing-first";
import { LandingNav } from "@/components/landing-nav";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <LandingNav />
     <LandingFirst />
     <StickyScrollRevealDemo />
     <GlobalConnection />
     <AutoTriggerTabs />
     <BeautifulCard />
     <BlackBg />
     <Finisher />
     <Faq />
     <Footer/>
    </main>
  );
}
