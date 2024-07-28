import { ArrowRight, DnaIcon, MicroscopeIcon, SyringeIcon } from 'lucide-react'
import React from 'react'
import { Card } from './ui/card'
import Link from 'next/link'

export default function SuccessIntro() {
  return (
    <div className='container mx-auto grid grid-cols-2 gap-8 my-10 items-center'>
        <div className='w-full space-y-6'>
            <h2 className='text-4xl font-bold'>transforming aeco from the concepts of construction</h2>
            <p className=' font-light'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci amet aspernatur ullam. Dolor eum facere quam voluptate sunt, explicabo nostrum
            doloremque voluptatem et in est ducimus 
            quod id non amet!
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora quo delectus consequatur velit accusantium, quisquam ratione ea numquam, accusamus dignissimos incidunt reprehenderit ipsa. Dolorem labore asperiores omnis id tempore alias molestias eum commodi. Saepe quas itaque sequi? Quasi voluptate minus ea et 
            voluptas perferendis commodi omnis, ad saepe autem non?
            </p>

        </div>
        <section className=" w-full">
          <div className="container px-4 md:px-6">
            <div className="space-y-8">
              <div className="space-y-5">
                <Card className="p-6 space-y-4 rounded-none">
                  <SyringeIcon className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">Pharmaceutical Research</h3>
                  <p className="text-muted-foreground">
                    Kuhes Med Lab collaborates with leading pharmaceutical companies to support drug discovery and
                    development, leveraging our state-of-the-art laboratories and expertise.
                  </p>
                  <Link href={'#'} className='flex items-center gap-5 text-green-500 font-bold'>
                    Watch NOw <ArrowRight className='text-blue-300' />
                  </Link>
                </Card>
                <Card className="p-6 space-y-4 rounded-none">
                  <DnaIcon className="w-8 h-8 text-primary" />
                  <h3 className="text-xl font-bold">Genomic Analysis</h3>
                  <p className="text-muted-foreground">
                    Our advanced genomic sequencing and bioinformatics capabilities enable in-depth genetic analysis,
                    empowe
                    ring personalized medicine and groundbreaking research.
                    <Link href={'#'} className='flex items-center gap-5 text-green-500 font-bold'>
                     Watch NOw <ArrowRight className='text-blue-300' />
                  </Link>
                  </p>
                </Card>
              </div>
            </div>
          </div>
        </section>

    </div>
  )
}
