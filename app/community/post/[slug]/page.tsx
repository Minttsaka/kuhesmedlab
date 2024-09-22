import CommunitySidebar from '@/components/communityLeftbar'
import CommunityNav from '@/components/CommunityNav'
import RelatedPosts from '@/components/RelatedPosts'
import SinglePostCommunity from '@/components/SinglePostCommunity'
import prisma from '@/lib/prisma'
import React from 'react'
import { Metadata, ResolvingMetadata } from 'next'
import { stripHtml } from '@/lib/stripHtml'

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
      url: `${process.env.NEXTAUTH_URL}/${product?.slug}`,
      siteName: 'KUHESMEDLAB',
      images: [
        {
          url: product?.img!,
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
      images: [product?.img!],
    },
  }
}

async function fetchProduct(slug: string) {

  return await prisma.post.findUnique({
    where:{
      slug
    },
    include:{
      user:true,
      likes:true
    }
  })
}


export default async function page({params:{slug}}:{params:{slug:string}}) {

  const post = await fetchProduct(slug)

  const otherPost = await prisma.post.findMany({

    include:{
      user:true,
      likes:true
    },
    orderBy:{
      createdAt:"asc"
    }
  })


  return (
    <div className='flex'>
        <CommunitySidebar />
        <div className='w-full h-screen overflow-y-auto'>
          <CommunityNav />
          <RelatedPosts otherPost={otherPost!} />
          <SinglePostCommunity post={post!}/>
        </div>
    </div>
  )
}
