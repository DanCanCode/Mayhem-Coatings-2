import React from 'react'

const Services = () => {
  return (
    <section id='services' className="relative flex items-center justify-center bg-white py-24 px-10">
        <img className='absolute object-cover w-full h-full opacity-10' src='/images/graffiti.png'/>

        <div className='flex flex-col items-center h-full w-full gap-10'>
            <h2 className='font-bold text-3xl md:text-4xl underline text-center tracking-wide'>OUR WORK</h2>

            <div className='flex flex-col md:flex-row flex-wrap justify-center gap-8 text-white text-xl'>
                <div className='sm:w-96 bg-blue-600 rounded relative'>
                    <img className='object-cover w-full h-full rounded' src='/images/metallic.JPG' />
                    <p className='absolute bottom-0 left-0 w-full bg-black/75 p-4 rounded-b'>Metallic Floors</p>
                </div>

                <div className='sm:w-96 bg-blue-600 rounded relative'>
                    <img className='object-cover w-full h-full rounded' src='/images/flake.jpg'/>
                    <p className='absolute bottom-0 left-0 w-full bg-black/75 p-4 rounded-b'>Flake Floors</p>
                </div>

                <div className='sm:w-96 bg-blue-600 rounded relative'>
                    <img className='object-cover w-full h-full rounded' src='/images/countertop.jpg'/>
                    <p className='absolute bottom-0 left-0 w-full bg-black/75 p-4 rounded-b'>Countertops</p>
                </div>
            </div>
        </div>

    </section>
  )
}

export default Services