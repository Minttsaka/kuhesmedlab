"use client";
import React from "react";
import { HeroParallax } from "./ui/hero-parallax";

export function HeroParallaxDemo() {
  return <HeroParallax products={products} />;
}
export const products = [
  {
    title: "Moonbeam",
    link: "https://gomoonbeam.com",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661767959390-c0ad35845cce?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cursor",
    link: "https://cursor.so",
    thumbnail:
      "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Rogue",
    link: "https://userogue.com",
    thumbnail:
      "https://images.unsplash.com/file-1719664968387-83d5a3f4d758image?dpr=2&w=416&auto=format&fit=crop&q=60",
  },

  {
    title: "Editorially",
    link: "https://editorially.org",
    thumbnail:
      "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVzZWFyY2glMjBwYXBlcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Editrix AI",
    link: "https://editrix.ai",
    thumbnail:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVzZWFyY2glMjBwYXBlcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Pixel Perfect",
    link: "https://app.pixelperfect.quest",
    thumbnail:
      "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzZWFyY2glMjBwYXBlcnN8ZW58MHx8MHx8fDA%3D",
  },

  {
    title: "Algochurn",
    link: "https://algochurn.com",
    thumbnail:
      "https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cmVzZWFyY2glMjBwYXBlcnN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Aceternity UI",
    link: "https://ui.aceternity.com",
    thumbnail:
      "https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJlc2VhcmNoJTIwcGFwZXJzfGVufDB8fDB8fHww",
  },
  {
    title: "Tailwind Master Kit",
    link: "https://tailwindmasterkit.com",
    thumbnail:
      "https://images.unsplash.com/3/doctype-hi-res.jpg?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHJlc2VhcmNoJTIwcGFwZXJzfGVufDB8fDB8fHww",
  },
  {
    title: "SmartBridge",
    link: "https://smartbridgetech.com",
    thumbnail:
      "https://images.unsplash.com/photo-1434626881859-194d67b2b86f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJlc2VhcmNoJTIwcGFwZXJzfGVufDB8fDB8fHww",
  },
  {
    title: "Renderwork Studio",
    link: "https://renderwork.studio",
    thumbnail:
      "https://images.unsplash.com/photo-1707944746042-e4c81c191812?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc2VhcmNoZXJ8ZW58MHx8MHx8fDA%3D",
  },

  {
    title: "Creme Digital",
    link: "https://cremedigital.com",
    thumbnail:
      "https://plus.unsplash.com/premium_photo-1661438058994-d13fec8543f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8cmVzZWFyY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Golden Bells Academy",
    link: "https://goldenbellsacademy.com",
    thumbnail:
      "https://images.unsplash.com/photo-1652947965461-9ec15359520a?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzZWFyY2hlcnxlbnwwfHwwfHx8MA%3D%3D",
  },
  {
    title: "Invoker Labs",
    link: "https://invoker.lol",
    thumbnail:
      "https://images.unsplash.com/photo-1707944746042-e4c81c191812?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc2VhcmNoZXJ8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "E Free Invoice",
    link: "https://efreeinvoice.com",
    thumbnail:
      "https://images.unsplash.com/photo-1707944746042-e4c81c191812?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHJlc2VhcmNoZXJ8ZW58MHx8MHx8fDA%3D",
  },
];
