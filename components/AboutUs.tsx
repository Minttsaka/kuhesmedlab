"use client"

import React, { useState } from "react";
import {
  motion,
  useTransform,
  AnimatePresence,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { Collaborator } from "@prisma/client";
import { NewspaperIcon, Users } from 'lucide-react';
import { User } from '@prisma/client';

export default function AboutUs({users, publications}:{users:number, publications:number}) {

    const people = [
        {
          id: "1",
          name: "Dctfusion",
          designation: "Malawian leading tech and ai company",
          image:
            "/img/fusion.png",
        },

      ];

  return (
    <div className='py-20'>
        <div className='container mx-auto grid md:grid-cols-2  md:items-center gap-20'>
            <div className='space-y-5'>
                <h2 className='text-3xl font-bold'>Shaping Digital Solutions That Transform ai in Research</h2>
                <div className='bg-green-400 p-5 rounded grid md:grid-cols-2'>
                    <div className='flex flex-row items-center '>
                    <AnimatedTooltip items={people} />
                    </div>
                    <div className="text-white">
                        <h2 className='md:text-4xl font-bold'>{people.length}</h2>
                        <p>partner</p>
                    </div>
                </div>
                <p>We work hand in hand with our partner to make sure we provide quality operations</p>
                <div className='grid grid-cols-2 text-white gap-3'>
                    <div className='bg-blue-700 p-5 flex gap-3 items-center rounded-md' >
                        <Users className='h-6 w-6' />
                        <div>
                            <h2 className='md:text-4xl font-bold'>{users===0 ? users : users - 1}+</h2>
                            <p>Users</p>
                        </div> 
                    </div>

                    <div className='bg-blue-700 p-5 flex gap-3 items-center rounded-md' >
                        <NewspaperIcon className='h-6 w-6' />
                        <div>
                            <h2 className='md:text-4xl font-bold'>{publications===0 ? publications : publications - 1}+</h2>
                            <p>Publications</p>
                        </div> 
                    </div>

                </div>
            </div>
            <img alt='kuh' src='/img/kuh.png' />
        </div>
      
    </div>
  )
}


export const AnimatedTooltip = ({items,
}: {items:{
    id: string,
    name:string,
    designation: string,
    image:string,
  }[]}) => {
  const [hoveredIndex, setHoveredIndex] = useState<string | null>(null);
  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move
  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );
  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 50]),
    springConfig
  );
  const handleMouseMove = (event: any) => {
    const halfWidth = event.target.offsetWidth / 2;
    x.set(event.nativeEvent.offsetX - halfWidth); // set the x value, which is then used in transform and rotate
  };

  return (
    <>
      {items?.map((item, idx) => (
        <div
          className="-mr-4  relative group"
          key={item.name}
          onMouseEnter={() => setHoveredIndex(item.id)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence mode="popLayout">
            {hoveredIndex === item.id && (
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                animate={{
                  opacity: 1,
                  y: 0,
                  scale: 1,
                  transition: {
                    type: "spring",
                    stiffness: 260,
                    damping: 10,
                  },
                }}
                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                style={{
                  translateX: translateX,
                  rotate: rotate,
                  whiteSpace: "nowrap",
                }}
                className="absolute -top-16 -left-1/2 translate-x-1/2 flex text-xs  flex-col items-center justify-center rounded-md bg-black z-50 shadow-xl px-4 py-2"
              >
                <div className="absolute inset-x-10 z-30 w-[20%] -bottom-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent h-px " />
                <div className="absolute left-10 w-[40%] z-30 -bottom-px bg-gradient-to-r from-transparent via-sky-500 to-transparent h-px " />
                <div className="font-bold text-white relative z-30 text-base">
                  {item.name}
                </div>
                <div className="text-white text-xs">{item.designation}</div>
              </motion.div>
            )}
          </AnimatePresence>
          <img
            onMouseMove={handleMouseMove}
            height={100}
            width={100}
            src={item.image}
            alt={item.name}
            className="object-cover !m-0 !p-0 object-top rounded-full h-14 w-14 border-2 group-hover:scale-105 group-hover:z-30 border-white  relative transition duration-500"
          />
        </div>
      ))}
    </>
  );
};
