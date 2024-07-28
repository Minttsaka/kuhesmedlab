import React from 'react'

export default function AboutBlog() {
  return (
    <div className='bg-[#e4f9f0] py-20'>
      <div className='container mx-auto space-y-5'>
        <h2 className='text-3xl text-bold font-bold max-w-2xl '>
            Lorem ipsum, dolor sit amet consectetur adipisicing.
        </h2>
        <p className='max-w-2xl text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempora, repellendus maiores pariatur sunt aspernatur exercitationem corporis excepturi itaque consequatur minus!</p>
        <div className='grid grid-cols-3 gap-7'>
            <div className="relative h-full rounded-2xl">
                <img
                src="https://media.istockphoto.com/id/1485440785/photo/science-covid-and-solution-with-a-black-woman-doctor-working-in-a-laboratory-for-research-or.webp?b=1&s=170667a&w=0&k=20&c=Z2xDwFlMDwXy3DmRdxlPSoj6AKor5gUUKW1NdiSibwY="
                alt=""
                className="w-full h-full object-cover rounded-2xl"
                />
                <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-black bg-opacity-20 flex flex-col text-white p-5">
                <h2 className="text-md font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nemo?</h2>
                </div>
            </div>
            <div className="relative h-full rounded-2xl">
                    <img
                    src="https://media.istockphoto.com/id/1485440785/photo/science-covid-and-solution-with-a-black-woman-doctor-working-in-a-laboratory-for-research-or.webp?b=1&s=170667a&w=0&k=20&c=Z2xDwFlMDwXy3DmRdxlPSoj6AKor5gUUKW1NdiSibwY="
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-black bg-opacity-20 flex flex-col text-white p-5">
                    <h2 className="text-md font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nemo?</h2>
                    </div>
                </div>
                <div className="relative h-full rounded-2xl">
                    <img
                    src="https://media.istockphoto.com/id/1485440785/photo/science-covid-and-solution-with-a-black-woman-doctor-working-in-a-laboratory-for-research-or.webp?b=1&s=170667a&w=0&k=20&c=Z2xDwFlMDwXy3DmRdxlPSoj6AKor5gUUKW1NdiSibwY="
                    alt=""
                    className="w-full h-full object-cover rounded-2xl"
                    />
                    <div className="absolute inset-x-0 bottom-0 rounded-b-2xl bg-black bg-opacity-20 flex flex-col text-white p-5">
                    <h2 className="text-md font-bold">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, nemo?</h2>
                    </div>
                </div>
        </div>
      </div>
    </div>
  )
}
