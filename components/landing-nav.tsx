/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/5pjTuSiCz4P
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Inter } from 'next/font/google'

inter({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { NavigationMenu, NavigationMenuList, NavigationMenuLink, NavigationMenuItem, NavigationMenuTrigger, NavigationMenuContent } from "@/components/ui/navigation-menu"
import { Input } from "@/components/ui/input"
import { Button } from "./ui/button"

export function LandingNav() {
  return (
    <header className="max-w-7xl text-gray-500 mx-auto h-12 z-50 flex w-full shrink-0 items-center px-4 md:px-6">
      <Link href="#" className="mr-6 hidden font-bold lg:flex" prefetch={false}>
        <h1 className="font-extrabold">KuhesMedLab</h1>
      </Link>
      <div className="flex w-full justify-center">
        <NavigationMenu className="hidden lg:flex">
          <NavigationMenuList>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group font-bold inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Home
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold">About</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[400px] p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group  grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm leading-none group-hover:underline">About us</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn more about our flagship product.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm leading-none group-hover:underline">Overview</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Explore our innovative product offerings.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm leading-none group-hover:underline">About</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Discover our latest product innovations.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group font-bold inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
               Services
              </Link>
            </NavigationMenuLink>
            <NavigationMenuItem>
              <NavigationMenuTrigger className="font-bold">Resources</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid w-[550px] grid-cols-2 p-2">
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm leading-none group-hover:underline">Blog</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Read our latest blog posts.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm leading-none group-hover:underline">Documentation</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn how to use our products.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm leading-none group-hover:underline">Case Studies</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Learn how our customers use our products.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                  <NavigationMenuLink asChild>
                    <Link
                      href="#"
                      className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-background p-4 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                      prefetch={false}
                    >
                      <div className="text-sm leading-none group-hover:underline">Help Center</div>
                      <div className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                        Get help with our products.
                      </div>
                    </Link>
                  </NavigationMenuLink>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group font-bold inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Contact
              </Link>
            </NavigationMenuLink>
            <NavigationMenuLink asChild>
              <Link
                href="#"
                className="group font-bold inline-flex h-9 w-max items-center justify-center rounded-md bg-background px-4 py-2 text-sm transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                prefetch={false}
              >
                Community
              </Link>
            </NavigationMenuLink>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      
        <Link
          href="/register"
          className=""
          prefetch={false}
        >
          <Button className="rounded-3xl">
          Signup
          </Button>
        </Link>
    </header>
  )
}

function MountainIcon(props: React.FC<React.SVGAttributes<SVGSVGElement>>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}


function XIcon(props: React.FC<React.SVGAttributes<SVGSVGElement>>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  )
}
