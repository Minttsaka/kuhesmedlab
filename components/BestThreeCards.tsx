import React from 'react'
import { GlareCard } from './ui/glare-card'

export default function BestThreeCards() {
  return (
    <div className='relative px-5 md:px-0'>
        
        <div className='max-w-5xl min-h-screen mx-auto space-y-20'>
            
            <div className='grid md:grid-cols-2 gap-10 items-center relative '>
            <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

            <GlareCard className="h-full w-full">
                
                <img
                className="h-full w-full absolute inset-0 object-cover"
                src="https://media.istockphoto.com/id/1159619657/photo/searching-and-big-data-concepts-with-male-hand-using-computer-laptop-in-cafe-bar-with-search.webp?b=1&s=170667a&w=0&k=20&c=HwyyVeIWKlGIjJAAnkZreu8LtDoFkeiGdD7dvf_ciT8="
                />
            </GlareCard>
            <div className='max-w-sm'>
                <h2 className='text-2xl'>
                All the Insights, All in One Place to Make Research Innovative
                </h2>
                <p className='text-gray-500 font-light'>
                Centralizing knowledge and expertise in medical laboratory science, 
                fostering collaboration and innovation to combat ESKAPE pathogens
                 and improve healthcare outcomes in Malawi and beyond.
                </p>
            </div>
            </div>

            <div className='grid md:grid-cols-2 md:hidden gap-10 items-center relative '>
            <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

            <GlareCard className="h-full w-full">
                
                <img
                className="h-full w-full absolute inset-0 object-cover"
                src="https://plus.unsplash.com/premium_photo-1661685751617-d51f9025f164?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzaWduJTIwcmVzZWFyY2h8ZW58MHx8MHx8fDA%3D"
                />
            </GlareCard>
            <div className='max-w-sm'>
                <h2 className='text-2xl'>
                    Connecting Minds, Advancing Healthcare through Collaboration
                </h2>
                <p className='text-gray-500 font-light'>Providing a secure, intuitive platform for medical laboratory professionals and students to share knowledge, collaborate on research projects, and leverage collective expertise to drive innovation and improve healthcare outcomes.</p>
            </div>
            </div>

            <div className='hidden md:grid md:grid-cols-2 gap-10 items-center relative'>
            <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>
            <div className='max-w-sm'>
                <h2 className='text-2xl'>
                    Connecting Minds, Advancing Healthcare through Collaboration
                </h2>
                <p className='text-gray-500 font-light'>Providing a secure, intuitive platform for medical laboratory professionals and students to share knowledge, collaborate on research projects, and leverage collective expertise to drive innovation and improve healthcare outcomes.</p>
            </div>
            <GlareCard className="h-full w-full">
                <img
                className="h-full w-full absolute inset-0 object-cover"
                src="https://plus.unsplash.com/premium_photo-1661685751617-d51f9025f164?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGVzaWduJTIwcmVzZWFyY2h8ZW58MHx8MHx8fDA%3D"
                />
            </GlareCard>
            
            </div>

            <div className='grid md:grid-cols-2 gap-10 items-center relative'>
            <div
            aria-hidden='true'
            className='pointer-events-none absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80'>
            <div
              style={{
                clipPath:
                  'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
              }}
              className='relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]'
            />
          </div>

            <GlareCard className="h-full w-full">
                <img
                className="h-full w-full absolute inset-0 object-cover"
                src="https://media.istockphoto.com/id/1398247155/photo/businessman-working-on-laptops-with-signs-of-the-top-service-quality-control-certification.webp?b=1&s=170667a&w=0&k=20&c=V_I0uvWss_Q5QyRB7195ZdBnQjMNVMpP7XYkJBopXeg="
                />
            </GlareCard>
            <div className='max-w-sm'>
                <h2 className='text-2xl'>
                Revolutionizing Data Analysis with AI-Powered Insights
                </h2>
                <p className='text-gray-500 font-light'>Utilizing artificial intelligence and machine learning 
                  to analyze complex medical data, uncover hidden patterns,
                   and drive informed decision-making in medical laboratory science research and practice.</p>
            </div>
            </div>
            

        </div>
        
       
    </div>
  )
}
