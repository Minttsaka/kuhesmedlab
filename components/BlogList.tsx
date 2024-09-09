"use client";
import Image from "next/image";
import React from "react";
import { Carousel, } from "@/components/ui/apple-cards-carousel";
import { Card } from "./ui/card";
import Link from "next/link";
import { Content } from "@prisma/client";
import { stripHtml } from "@/lib/stripHtml";

export function BlogList({blog}:{blog:Content[]}) {
  const cards = blog?.map((blog, index) => (
    <Card key={index} className="shadow-2xl w-screen md:w-[32rem] md:h-[30rem] shadow-gray-300 rounded-3xl border-t-4 border-t-blue-400 flex items-center justify-center p-10 md:px-20">
          <div className="AccentedCard AccentedCard--shadowMedium AccentedCardCarouselItem__accentedCard" >
             
                  <div className="space-y-2">
                      <section className="space-y-5" >
                          <header className="text-xl font-bold tracking-wide">
                              <h1 className="Copy__title">
                                  {blog.title}
                              </h1>
                          </header>
      
                          <div className="">
                              <p className="line-clamp-3">
                                {stripHtml(blog.body)}
                              </p>
                          </div>
      
                          <Link href={`/blog/read/${blog.slug}`} className=" text-[#2a2e7c] font-bold flex items-center gap-2  bg-transparent rounded-[6px]  relative group transition duration-20 hover:bg-transparent">
                            Learn more 
                            <svg
                              fill="none"
                              height="16"
                              viewBox="0 0 24 24"
                              width="16"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M10.75 8.75L14.25 12L10.75 15.25"
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="1.5"
                              />
                            </svg>
                          </Link>
                      </section>
                  </div>
          </div>
      </Card>
    // <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div id='blog' className="w-full h-full py-20">
      <h2 className="max-w-7xl mt-10 pl-4 mx-auto text-xl font-bold text-neutral-800 dark:text-neutral-200 ">
        Blog
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

