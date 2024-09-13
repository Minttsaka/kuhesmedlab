import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster"
import Providers from "./Providers";


const inter = Inter({ subsets: ["latin"] });

//#2a2e7c

export const metadata: Metadata = {
  title: "kuhesmedlab",
  description: "Advancing lab tech",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          {children}
          <Toaster />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
