/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/k8WNTZv24NX
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

/** Add fonts into your Next.js project:

import { Chivo } from 'next/font/google'
import { Rubik } from 'next/font/google'

chivo({
  subsets: ['latin'],
  display: 'swap',
})

rubik({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function VerifyEmail() {
  return (
    <div className="flex min-h-[100dvh] items-center justify-center bg-gray-50 px-4 py-12 dark:bg-gray-950">
      <div className="mx-auto w-full max-w-md space-y-6 rounded-xl bg-white p-8 shadow-lg dark:bg-gray-900">
        <div className="space-y-2 text-center">
          <MailIcon className="mx-auto h-12 w-12 text-primary-500" />
          <h2 className="text-2xl font-bold tracking-tight">Verify Your Account</h2>
          <p className="text-gray-500 dark:text-gray-400">
            We have sent a verification email to your inbox. Please check your email and click the verification link to
            activate your account.
          </p>
        </div>
        <div>
          <Button className="w-full">
            <Link className="flex items-center justify-center gap-2" href="https://accounts.google.com/b/0/AddMailService">
              <MailIcon className="h-5 w-5" />
              Verify Email
            </Link>
          </Button>
        </div>
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          If you did not receive the email, please try again.
          
        </div>
      </div>
    </div>
  )
}

function MailIcon(props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
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
      <rect width="20" height="16" x="2" y="4" rx="2" />
      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
    </svg>
  )
}
