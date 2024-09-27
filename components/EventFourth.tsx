"use client";
import Image from "next/image";
import React from "react";
import { Carousel, } from "@/components/ui/apple-cards-carousel";
import { Card } from "./ui/card";
import Link from "next/link";
import { Event } from "@prisma/client";
import { stripHtml } from "@/lib/stripHtml";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"
import { Button } from "./ui/button";
import { Calendar, Clock, MapPin } from "lucide-react";
import VideoPlayer from "./PublicationVideoPlayer";
import { NoEvents } from "./NoEvent";

export function EventFourth({generalEvents}:{generalEvents:Event[]}) {
  const cards = generalEvents.map((event, index) => (
    <Card key={index}  className="shadow-2xl w-screen md:w-[32rem] md:h-[30rem] shadow-gray-300 rounded-3xl border-t-4 border-t-blue-400 flex items-center justify-center p-10 md:px-20">
          <div>
            <div className="space-y-2">
                <section className="space-y-5" >
                    <header className="text-xl font-bold tracking-wide">
                        <h1 className="Copy__title">
                            {event.title}
                        </h1>
                    </header>

                    <div className="line-clamp-3">
                        <p>{stripHtml(event.description)}</p>
                    </div>

                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="bg-blue-500 hover:bg-blue-600 text-white">
                          View More
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-gray-800 text-white max-w-3xl">
                        <DialogHeader>
                          <DialogTitle>{event.title}</DialogTitle>
                          <DialogDescription>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                              <div>
                                <p className="text-gray-300 mb-2">
                                  <Calendar className="w-4 h-4 inline mr-2" />
                                  {event.startDate.toDateString()} - {event.endDate.toDateString()}
                                </p>
                                <p className="text-gray-300 mb-2">
                                  <Clock className="w-4 h-4 inline mr-2" />
                                  {event.startTime}
                                </p>
                                <p className="text-gray-300 mb-4">
                                  <MapPin className="w-4 h-4 inline mr-2" />
                                  {event.location}
                                </p>
                                <div
                                        dangerouslySetInnerHTML={{ __html: event.description }}
                                      />
                                {event.video && (
                                  <VideoPlayer url={event.video} />
                                )}
                              </div>
                              {event.img && (
                                <div className="relative h-48 md:h-full">
                                  <Image 
                                    src={event.img} 
                                    alt={event.title} 
                                    layout="fill" 
                                    objectFit="cover" 
                                    className="rounded-lg"
                                  />
                                </div>
                              )}
                            </div>
                          </DialogDescription>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                </section>
            </div>
          </div>
      </Card>
  ));

  return (
    <div id="organizational-events" className="w-full h-full">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        General Events
      </h2>
      {generalEvents.length ===0 && <NoEvents eventType="General" />}
      <Carousel items={cards} />
    </div>
  );
}

