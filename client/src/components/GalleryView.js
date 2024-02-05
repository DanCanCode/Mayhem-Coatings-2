import React from 'react'

const GalleryView = () => {

  const images = [
    "/images/gallery/floor-1.jpg",
    "/images/gallery/floor-2.jpg",
    "/images/gallery/floor-3.jpg",
    "/images/gallery/floor-4.jpg",
    "/images/gallery/floor-5.jpg",
    "/images/gallery/floor-6.jpg",
    "/images/gallery/floor-7.jpg",
    "/images/gallery/floor-8.jpg",
    "/images/gallery/floor-9.jpg",
    "/images/gallery/floor-10.jpg",
    "/images/gallery/floor-11.jpg",
    "/images/gallery/floor-12.jpg",
    "/images/gallery/floor-13.jpg",
    "/images/gallery/floor-14.jpg",
    "/images/gallery/floor-15.jpg",
    "/images/gallery/floor-16.jpg",
    "/images/gallery/floor-17.jpg",
    "/images/gallery/floor-18.jpg",
    "/images/gallery/floor-19.jpg",
    "/images/gallery/floor-20.jpg",

  ]

  return (
    <section className='flex relative  items-center justify-center py-24 px-4 overflow-hidden bg-zinc-300'>
      <img className='absolute object-cover w-full h-full opacity-10' src='/images/graffiti.png'/>

      <div className='flex flex-col justify-center items-center gap-8 z-10'>
        <h2 className='font-bold text-3xl sm:text-5xl underline'>GALLERY</h2>

        <div className='flex gap-3 flex-wrap justify-center'>
          {images.map((item, index) => {
              return (
                <img
                  loading="lazy"
                  className="w-64 sm:w-80 object-cover object-center"
                  key={index}
                  src={item}
                  alt={"mayhem coatings custom epoxy flooring"}
                />
              );
            })}
        </div>
      </div>
    
    </section>
  )
}

export default GalleryView