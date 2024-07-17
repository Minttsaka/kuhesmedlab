"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const content = [
  {
    title: "Overcoming Obstacles in Laboratory Technology",
    description:
      "Emphasize the need to find creative and cost-effective solutions to bridge the technology gap. Highlight the importance of leveraging local resources, traditional knowledge, and innovative approaches to develop sustainable solutions that can keep pace with the rapid advancements in laboratory technology.",
    content: (
        <img
        src="https://media.istockphoto.com/id/1867575053/photo/female-scientist-working-in-the-lab-using-computer.webp?b=1&s=170667a&w=0&k=20&c=9m722IaVpIZSM1AP3_bxjEG0ptUIAqvmIoLdliACi3k="
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Bridging the Technology Gap",
    description:
      "The medical laboratory science community in Malawi faces significant challenges in keeping up with the rapid advancements in laboratory technology. The pace of innovation is relentless, with new technologies constantly emerging, making it difficult to maintain pace and ensure the availability of cutting-edge equipment and tools.      ",
    content: (
      <div className="h-full w-full  flex items-center justify-center text-white">
        <img
          src="https://media.istockphoto.com/id/1979439555/photo/scientist-working-with-pipette-and-cultured-meat-in-laboratory.webp?b=1&s=170667a&w=0&k=20&c=9V8ewaFRZExS_PtioYEkQIqkGOgng-V5D3zCNfSHEsw="
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Fostering a Culture of Innovation and Collaboration",
    description:
      "Cultivating a culture of innovation and problem-solving within the medical laboratory science community in Malawi is crucial to overcoming the obstacles in laboratory technology. The KUHeSMEDLAB research community is committed to fostering this collaborative mindset, where experts from various disciplines work together to drive progress and make a meaningful impact on healthcare outcomes.",
    content: (
        <img
        src="https://media.istockphoto.com/id/1729701910/photo/science-study-and-black-woman-with-test-tube-in-laboratory-medical-engineer-and-results.webp?b=1&s=170667a&w=0&k=20&c=jjqISlo_EHhSYLprJGygv-LxnnGOW-qxrX2Cqj4YioA="
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
  {
    title: "Leveraging Local Resources and Traditional Knowledge",
    description:
      "Showcase examples of how the research team is combining traditional wisdom with modern scientific approaches to address healthcare challenges. Emphasize the importance of harnessing the unique ecosystems, forests, and natural resources available in Malawi to find cost-effective and sustainable solutions. Highlight the collaborative efforts between experts from diverse fields, such as microbiology, pharmacology, and bioinformatics, to harness the power of local knowledge and resources.",
    content: (
        <img
        src="https://t4.ftcdn.net/jpg/07/74/44/89/360_F_774448976_IGLXLaV50P95HUk6DyHx0K7KwaOkVUMD.jpg"
        className="h-full w-full object-cover"
        alt="linear board demo"
      />
    ),
  },
];
export function StickyScrollRevealDemo() {
  return (
    <div className="w-full">
      <StickyScroll content={content} />
    </div>
  );
}
