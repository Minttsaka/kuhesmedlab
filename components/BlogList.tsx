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

export function BlogList() {
  return (
    <div className="bg-black space-y-2 pt-10">
        <Carousel
      opts={{
        align: "start",
      }}
      className="container ml-auto py-20"
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
            <Card className="group overflow-hidden max-w-xs rounded-none transition-all hover:shadow-xl border-none">
            <Link href="#" className="block h-48 w-full overflow-hidden" prefetch={false}>
              <img
                src="https://media.istockphoto.com/id/1485440785/photo/science-covid-and-solution-with-a-black-woman-doctor-working-in-a-laboratory-for-research-or.webp?b=1&s=170667a&w=0&k=20&c=Z2xDwFlMDwXy3DmRdxlPSoj6AKor5gUUKW1NdiSibwY="
                alt="Blog Post 1"
                width={600}
                height={400}
                className="h-full w-full object-cover transition-all group-hover:scale-105"
              />
            </Link>
            <div className="p-4">
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
    
  )
}


