/**
* This code was generated by v0 by Vercel.
* @see https://v0.dev/t/MvOlvmkG1ie
* Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
*/

import { User } from "@prisma/client";

/** Add fonts into your Next.js project:

import { DM_Sans } from 'next/font/google'

dm_sans({
  subsets: ['latin'],
  display: 'swap',
})

To read more about using these font, please visit the Next.js documentation:
- App Directory: https://nextjs.org/docs/app/building-your-application/optimizing/fonts
- Pages Directory: https://nextjs.org/docs/pages/building-your-application/optimizing/fonts
**/
export function AboutTeam({teams}:{teams:User[]}) {
  return (
    <div className="relative py-10" id="team">
      <section className="w-full ">
        <div className="container space-y-10 xl:space-y-16">
          <div className="flex flex-col items-center space-y-4 text-center">
            <div className="space-y-2">
              <h1 className="font-bold tracking-tighter  text-3xl">
                Meet Our Team
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground ">
              Kuhesmedlab was founded by a diverse and dedicated team of individuals passionate about advancing medical research and improving healthcare outcomes.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {teams.map(team=>
               <div key={team.id} className="flex flex-col items-center space-y-4 rounded-lg bg-background p-6 shadow-lg transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-xl">
                <img src={team.image!} alt="Team Member" width={120} height={120} className="rounded-full w-[8rem] h-[10rem] object-cover" />
                <div className="space-y-2 text-center">
                  <h3 className="text-xl font-bold">{team.name}</h3>
                  <p className="text-muted-foreground">{team.authority}</p>
                  <p className="text-sm text-muted-foreground">
                  {team.bio}
                  </p>
                </div>
              </div>
            )}
           
          </div>
        </div>
      </section>
    </div>
  )
}
