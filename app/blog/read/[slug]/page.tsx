import Footer from '@/components/Footer'
import { LandingNav } from '@/components/landing-nav';
import LandingMobileNav from '@/components/LandingMobileNav';
import ReadBlog from '@/components/ReadBlog'
import { authOptions } from '@/lib/auth';
import prisma from '@/lib/prisma'
import { stripHtml } from '@/lib/stripHtml';
import { User } from '@prisma/client';
import { Metadata, ResolvingMetadata } from 'next'
import { getServerSession } from 'next-auth';
import React from 'react'

type Props = {
  params: { id: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // read route params
  const id = params.id

  // fetch data
  const product = await fetchProduct(id)

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || []

  return {
    title: product?.title,
    description: stripHtml(product?.body!),
    openGraph: {
      title: product?.title,
      description: stripHtml(product?.body!),
      url: `${process.env.NEXTAUTH_URL}/blog/read/${product?.slug}`,
      siteName: 'KUHESMEDLAB',
      images: [
        {
          url: product?.image!,
          width: 800,
          height: 600,
          alt: product?.title,
        },
        ...previousImages,
      ],
      locale: 'en_US',
      type: 'website',
    },
    twitter: {
      card: "summary_large_image",
      title: product?.title,
      description: stripHtml(product?.body!),
      images: [product?.image!],
    },
  }
}

async function fetchProduct(slug: string) {

  return await prisma.content.findUnique({
    where:{
        slug
    }
})
}

export default async function page({params:{slug}}:{params:{slug:string}}) {


  const session:any = await getServerSession(authOptions);
  const userSession= (session.user as User);

  const content = await fetchProduct(slug)

    const user = await prisma.user.findUnique({
      where:{
        id:userSession.id
      }
    })
  return (
    <div>
      <LandingNav />
      <LandingMobileNav />
      <ReadBlog user={user!} content={content!} />
      <Footer />
    </div>
  )
}
