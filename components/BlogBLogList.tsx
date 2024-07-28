import * as React from "react"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowRightIcon } from "lucide-react"
import Link from "next/link"
import { Badge } from "./ui/badge"

export function BlogBlogList() {
  return (
    <div className="bg-white space-y-2 w-full py-20 border-b">
      <div className="space-y-5">
        <div className="flex gap-3 items-center">
        <div className="ml-20 space-y-5 border-red-500">
            <h2 className="text-3xl font-bold text-center text-[#2a2e7c]">ARTIFICIAL INTELLIGENCE</h2>
            <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita 
              nulla quaerat neque deleniti molestiae nihil. Omnis facilis recusandae corporis.
            </p>
            <div className="grid grid-cols-5 gap-3">
              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>
            </div>
          </div>
        <Carousel
            opts={{
              align: "start",
            }}
            className="max-w-7xl ml-auto"
          >
          <CarouselContent>
           
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                <Card className="group overflow-hidden max-w-lg rounded-none transition-all hover:shadow-xl">
                <Link href="#" className="block h-48 w-full overflow-hidden" prefetch={false}>
                  <img
                    src="/polygon.png"
                    alt="Blog Post 1"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-all group-hover:scale-105"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="text-xl font-bold">
                    Unlocking the Power of dctfusion: Streamlining Your Software Development
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Discover how kuhes cutting-edge tools and technologies can revolutionize your software development
                    process.
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary/80"
                    prefetch={false}
                  >
                    Read More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex gap-2 mt-5 ml-5">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          
        </Carousel>
      </div>
       
      </div>
      <div className="space-y-5">
        <div className="flex gap-3 items-center">
        <div className="ml-20 space-y-5 border-red-500">
            <h2 className="text-3xl font-bold text-center text-[#2a2e7c]">ARTIFICIAL INTELLIGENCE</h2>
            <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita 
              nulla quaerat neque deleniti molestiae nihil. Omnis facilis recusandae corporis.
            </p>
            <div className="grid grid-cols-5 gap-3">
              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>
            </div>
          </div>
        <Carousel
            opts={{
              align: "start",
            }}
            className="max-w-7xl ml-auto"
          >
          <CarouselContent>
           
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                <Card className="group overflow-hidden max-w-lg rounded-none transition-all hover:shadow-xl">
                <Link href="#" className="block h-48 w-full overflow-hidden" prefetch={false}>
                  <img
                    src="/polygon.png"
                    alt="Blog Post 1"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-all group-hover:scale-105"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="text-xl font-bold">
                    Unlocking the Power of dctfusion: Streamlining Your Software Development
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Discover how kuhes cutting-edge tools and technologies can revolutionize your software development
                    process.
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary/80"
                    prefetch={false}
                  >
                    Read More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex gap-2 mt-5 ml-5">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          
        </Carousel>
      </div>
       
      </div>

      <div className="space-y-5">
        <div className="flex gap-3 items-center">
        <div className="ml-20 space-y-5 border-red-500">
            <h2 className="text-3xl font-bold text-center text-[#2a2e7c]">ARTIFICIAL INTELLIGENCE</h2>
            <p className="text-xl font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam expedita 
              nulla quaerat neque deleniti molestiae nihil. Omnis facilis recusandae corporis.
            </p>
            <div className="grid grid-cols-5 gap-3">
              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>

              <Badge>
                Machine
              </Badge>
            </div>
          </div>
        <Carousel
            opts={{
              align: "start",
            }}
            className="max-w-7xl ml-auto"
          >
          <CarouselContent>
           
            {Array.from({ length: 6 }).map((_, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                <Card className="group overflow-hidden max-w-lg rounded-none transition-all hover:shadow-xl">
                <Link href="#" className="block h-48 w-full overflow-hidden" prefetch={false}>
                  <img
                    src="/polygon.png"
                    alt="Blog Post 1"
                    width={600}
                    height={400}
                    className="h-full w-full object-cover transition-all group-hover:scale-105"
                  />
                </Link>
                <div className="p-4">
                  <h3 className="text-xl font-bold">
                    Unlocking the Power of dctfusion: Streamlining Your Software Development
                  </h3>
                  <p className="mt-2 text-muted-foreground">
                    Discover how kuhes cutting-edge tools and technologies can revolutionize your software development
                    process.
                  </p>
                  <Link
                    href="#"
                    className="mt-4 inline-flex items-center gap-1 font-medium text-primary transition-colors hover:text-primary/80"
                    prefetch={false}
                  >
                    Read More
                    <ArrowRightIcon className="h-4 w-4" />
                  </Link>
                </div>
              </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="flex gap-2 mt-5 ml-5">
            <CarouselPrevious />
            <CarouselNext />
          </div>
          
        </Carousel>
      </div>
       
      </div>
     
    </div>
    
  )
}


