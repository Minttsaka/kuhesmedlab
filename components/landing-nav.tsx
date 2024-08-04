"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";

export function LandingNav() {
  return (
    <div className="relative w-full flex items-center justify-center">
      <Navbar className="top-2" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn("fixed top-10 inset-x-0 hidden max-w-2xl mx-auto lg:flex justify-between items-center px-1 z-50 bg-black bg-opacity-5 border border-white rounded-full backdrop-blur-3xl", className)}
    >
        <Link href={'/'}>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
                <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </span>
                <div className="relative flex space-x-2 items-center z-10 rounded-full bg-[#2a2e7c] py-0.5 px-4 ring-1 ring-white/10 font-semibold">
                <span>
                Kuhesmedlab
                </span>
                
                </div>
                <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
        </Link>
      <Menu setActive={setActive}>
       
        <MenuItem  setActive={setActive} active={active} item="Products">
            <div className="bg-white p-10 mr-10 text-black rounded-e-2xl">
                    <div className="relative " data-flip-config='{"translate":true,"scale":true,"opacity":true}' data-flip-id="dropdown" data-portal-key="portal" >
                        <div className="flex gap-6 xl:gap-14" data-first-dropdown-section="true">
                     
                            <div className="flex-shrink-0 min-w-max">
                                <ul className="flex flex-col gap-4">
                                    <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                        <a href="#">
                                            <div className="flex group font-normal transition-colors duration-300 ease" >
                                                
                                                <p className="transition-opacity  duration-300 opacity-90 group-hover:opacity-100">
                                                    <span className="block text-xs font-bold  md:!text-base">Products</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="flex-shrink-0 pl-[50px] mt-4">
                                    <ul className="grid grid-cols-2 gap-4">
                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="#">
                                                <div className="flex  gap-1.5 md:gap-3 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />

                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/research'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">Research</span><span className="block text-sm mt-px text-neutral-400">In-depth exploration <br />of medical laboratory <br /> science topics to<br /> uncover new insights and knowledge. </span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="/evaluation/public-sector">
                                                <div className="flex  gap-1.5 md:gap-2 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />
                                                  
                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/storage'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">Cloud Storage</span><span className="block text-sm mt-px text-neutral-400 ">Secure and scalable<br /> storage of medical laboratory<br /> data and resources in a <br />cloud-based infrastructure.</span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="/evaluation/public-sector">
                                                <div className="flex  gap-1.5 md:gap-2 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />
                                                  
                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/survey'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">Survey</span><span className="block text-sm mt-px text-neutral-400">Systematic collection of<br /> data and opinions from medical <br /> laboratory professionals to<br /> understand trends and preferences. </span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="/ai">
                                                <div className="flex  gap-1.5 md:gap-2 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />
                                                  
                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/ai'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">Artificial intelligence</span><span className="block text-sm mt-px text-neutral-400">Application of machine <br />learning and AI algorithms<br /> to analyze data, identify patterns,<br /> and make predictions. </span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="/analysis">
                                                <div className="flex  gap-1.5 md:gap-2 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />
                                                  
                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/analysis'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">Data Analysis</span><span className="block text-sm mt-px text-neutral-400">Extraction of meaningful <br />patterns and insights<br /> from complex data sets <br />to inform decision-making. </span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="/automation">
                                                <div className="flex  gap-1.5 md:gap-2 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />
                                                  
                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/automation'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">Automation</span><span className="block text-sm mt-px text-neutral-400">Streamlining repetitive tasks<br /> and processes through automation,<br />  freeing up professionals to<br /> focus on high-value tasks.</span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                     
                                    </ul>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>
            
        </MenuItem>

        <MenuItem  setActive={setActive} active={active} item="Events">
            <div className="bg-white p-10 mr-10 text-black rounded-e-2xl">
                    <div className="relative " data-flip-config='{"translate":true,"scale":true,"opacity":true}' data-flip-id="dropdown" data-portal-key="portal" >
                        <div className="flex gap-6 xl:gap-14" data-first-dropdown-section="true">
                     
                            <div className="flex-shrink-0 min-w-max">
                                <ul className="flex flex-col gap-4">
                                    <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                        <a href="event">
                                            <div className="flex group font-normal transition-colors duration-300 ease" >
                                                
                                                <p className="transition-opacity  duration-300 opacity-90 group-hover:opacity-100">
                                                    <span className="block text-xs font-bold  md:!text-base">Events</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="flex-shrink-0 pl-[50px] mt-4">
                                    <ul className="grid grid-cols-2 gap-4">
                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="#">
                                                <div className="flex  gap-1.5 md:gap-3 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />

                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/event/#organizational-events'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">Organizational Events</span><span className="block text-sm mt-px text-neutral-400">Internal conferences, seminars,<br /> and workshops hosted by KUHESMEDLAB</span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="/evaluation/public-sector">
                                                <div className="flex  gap-1.5 md:gap-2 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />
                                                  
                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/event/#institutional-events'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">Institutional Events</span><span className="block text-sm mt-px text-neutral-400">International conferences, symposia, <br />and summits attended by KUHESMEDLAB</span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="/evaluation/public-sector">
                                                <div className="flex  gap-1.5 md:gap-2 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />
                                                  
                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/event/#global-events'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">Global Events</span><span className="block text-sm mt-px text-neutral-400">Workshops, training sessions, and meetings <br />hosted by KUHESMEDLAB in <br />partnership with academic institutions</span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                       
                                     
                                    </ul>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>
            
        </MenuItem>

        <MenuItem  setActive={setActive} active={active} item="Resources">
            <div className="bg-white p-10 mr-10 text-black rounded-e-2xl">
                    <div className="relative " data-flip-config='{"translate":true,"scale":true,"opacity":true}' data-flip-id="dropdown" data-portal-key="portal" >
                        <div className="flex gap-6 xl:gap-14" data-first-dropdown-section="true">
                     
                            <div className="flex-shrink-0 min-w-max">
                                <ul className="flex flex-col gap-4">
                                    <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                        <a href="#">
                                            <div className="flex group font-normal transition-colors duration-300 ease" >
                                                
                                                <p className="transition-opacity  duration-300 opacity-90 group-hover:opacity-100">
                                                    <span className="block text-xs font-bold  md:!text-base">Resources</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="flex-shrink-0 pl-[50px] mt-4">
                                    <ul className="grid grid-cols-2 gap-4">
                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="#">
                                                <div className="flex  gap-1.5 md:gap-3 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />

                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/blog'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">Blog</span><span className="block text-sm mt-px text-neutral-400">Insights and perspectives on medical<br /> laboratory science, AI, and innovation</span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="/evaluation/public-sector">
                                                <div className="flex  gap-1.5 md:gap-2 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />
                                                  
                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/support'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">Support</span><span className="block text-sm mt-px text-neutral-400">Dedicated assistance<br /> from KUHESMEDLAB</span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li> 

                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="/evaluation/public-sector">
                                                <div className="flex  gap-1.5 md:gap-2 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />
                                                  
                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/#faq'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">Faq</span><span className="block text-sm mt-px text-neutral-400">Frequently Asked Questions<br /> about KUHESMEDLAB</span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>                                     
                                    </ul>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>
            
        </MenuItem>

        <Link 
          className="cursor-pointer text-[#0a2540] font-bold text-sm hover:opacity-[0.9] dark:text-white"
          href={''}>
          Community
        </Link>

       <MenuItem  setActive={setActive} active={active} item="About">
            <div className="bg-white p-10 mr-10 text-black rounded-e-2xl">
                    <div className="relative " data-flip-config='{"translate":true,"scale":true,"opacity":true}' data-flip-id="dropdown" data-portal-key="portal" >
                        <div className="flex gap-6 xl:gap-14" data-first-dropdown-section="true">
                     
                            <div className="flex-shrink-0 min-w-max">
                                <ul className="flex flex-col gap-4">
                                    <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                        <a href="about">
                                            <div className="flex group font-normal transition-colors duration-300 ease" >
                                                
                                                <p className="transition-opacity  duration-300 opacity-90 group-hover:opacity-100">
                                                    <span className="block text-xs font-bold  md:!text-base">About</span>
                                                </p>
                                            </div>
                                        </a>
                                    </li>
                                </ul>
                                <div className="flex-shrink-0 pl-[50px] mt-4">
                                    <ul className="grid grid-cols-2 gap-4">
                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="#">
                                                <div className="flex  gap-1.5 md:gap-3 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />

                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/about'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">About</span><span className="block text-sm mt-px text-neutral-400">KUHESMEDLABs mission, <br />vision, and values</span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>
                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="/evaluation/public-sector">
                                                <div className="flex  gap-1.5 md:gap-2 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />
                                                  
                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/about-us'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">About us</span><span className="block text-sm mt-px text-neutral-400">Our story, history, and<br /> evolution as a leading platform</span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li> 

                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="/evaluation/public-sector">
                                                <div className="flex  gap-1.5 md:gap-2 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />
                                                  
                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/about'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">About Team</span><span className="block text-sm mt-px text-neutral-400">Meet the talented and dedicated<br /> individuals behind KUHESMEDLAB</span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>

                                        <li className="DropdownItem_dropdownItem__iI2LA m-0 p-0 select-none lg:whitespace-nowrap">
                                            <a href="/evaluation/public-sector">
                                                <div className="flex  gap-1.5 md:gap-2 group font-normal transition-colors duration-300 ease" >
                                                    
                                                    <div className="h-3 w-3 rounded-full bg-gradient-to-r from-black to-purple-400" />
                                                  
                                                    <p className="transition-opacity duration-300 opacity-90 group-hover:opacity-100">
                                                    <Link href={'/technologies'}>
                                                        <span className="block text-gray-600 text-xs  md:!text-base">About Technology</span><span className="block text-sm mt-px text-neutral-400">The cutting-edge technologies<br />  and AI-driven solutions<br />  powering KUHESMEDLABs platform</span>
                                                    </Link>
                                                    </p>
                                                </div>
                                            </a>
                                        </li>                                     
                                    </ul>
                                </div>
                            </div>
                        </div>                  
                    </div>
                </div>
            
        </MenuItem>
      </Menu>
        <Link href={'/register'}>
            <button className="bg-slate-800 no-underline group cursor-pointer relative shadow-2xl shadow-zinc-900 rounded-full p-px text-xs font-semibold leading-6  text-white inline-block">
              <span className="absolute inset-0 overflow-hidden rounded-full">
                <span className="absolute inset-0 rounded-full bg-[image:radial-gradient(75%_100%_at_50%_0%,rgba(56,189,248,0.6)_0%,rgba(56,189,248,0)_75%)] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              </span>
              <div className="relative flex space-x-2 items-center z-10 rounded-full bg-zinc-950 py-0.5 px-4 ring-1 ring-white/10 ">
                <span>
                  Sign up
                </span>
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
              </div>
              <span className="absolute -bottom-0 left-[1.125rem] h-px w-[calc(100%-2.25rem)] bg-gradient-to-r from-emerald-400/0 via-emerald-400/90 to-emerald-400/0 transition-opacity duration-500 group-hover:opacity-40" />
            </button>
        </Link>
    </div>
  );
}
