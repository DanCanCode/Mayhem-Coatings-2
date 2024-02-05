import React from 'react'
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <section className="relative flex items-center justify-center bg-white py-24 px-10">

        <div className='flex flex-col flex-wrap items-center justify-center gap-8 w-screen'>
            <h2 className='font-bold text-3xl md:text-4xl underline text-center tracking-wide'>GALLERY</h2>

            <div className='flex sm:flex-row flex-col gap-3 flex-wrap items-center justify-center'>

                <div className='flex flex-col sm:flex-row gap-3 flex-wrap justify-center'>
                    <div className='bg-red-500  sm:h-[524px] w-full sm:w-96 rounded overflow-hidden'>
                        <img loading="lazy" className="object-cover  sm:h-[524px] w-full sm:w-96 rounded" src='/images/gallery/floor-15.jpg' alt="mayhem coatings custom epoxy flooring"/>
                    </div>

                    <div className='flex flex-col gap-3 flex-wrap justify-center'>
                        <div className='bg-blue-500 sm:h-64 w-full sm:w-96 rounded overflow-hidden'>
                            <img loading="lazy" className=" sm:h-64 w-full sm:w-96 rounded" src='/images/gallery/floor-19.jpg' alt="mayhem coatings custom epoxy flooring"/>
                        </div>
                        <div className='bg-blue-500 sm:h-64 w-full sm:w-96 rounded overflow-hidden'>
                            <img loading="lazy" className="sm:h-64 w-full sm:w-96 rounded" src='/images/gallery/floor-3.jpg' alt="mayhem coatings custom epoxy flooring"/>
                        </div>
                    </div>
                </div>

                
                {window.innerWidth >= 640 && <div className='flex flex-row lg:flex-col gap-3 flex-wrap justify-center'>
                    <div className='bg-green-500 h-[295px] lg:h-[338px] w-[320px] sm:w-96 rounded overflow-hidden'>
                        <img loading="lazy" className="h-[295px] lg:h-[338px] w-[320px] sm:w-96 rounded" src='/images/gallery/floor-12.jpg' alt="mayhem coatings custom epoxy flooring"/>
                    </div>
                    <div className='bg-yellow-500 h-[295px] lg:h-[174px] w-[320px] sm:w-96 rounded overflow-hidden'>
                        <img loading="lazy" className="h-[295px] lg:h-[174px] w-[320px] sm:w-96 rounded" src='/images/gallery/floor-17.jpg' alt="mayhem coatings custom epoxy flooring"/>
                    </div>
                </div>
                }
            </div>

            <Link to='/gallery'><button className="rounded-lg p-4 bg-purple-600 hover:bg-purple-800 text-white font-medium text-xl shadow-xl">View More</button></Link>
        </div>
    
    </section>
  )
}

export default Gallery