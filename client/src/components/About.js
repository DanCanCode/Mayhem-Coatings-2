import React from 'react'

const About = () => {

    const AboutVideo = () => {
        if (window.innerWidth >= 640) {
          return <video src='/videos/paint-splatter-wd.mp4' className="absolute h-full w-full object-cover z-10" autoPlay muted/>
        } else {
          return <video src='/videos/paint-splatter-vh.mp4' className="absolute h-full w-full object-cover z-10" autoPlay muted/>
        }
      }

  return (
    <section id='about' className="relative flex items-center justify-center bg-white py-24 px-10 min-h-[550px]">
        <AboutVideo />

        <div className='flex flex-col gap-10 sm:text-center z-10 h-full max-w-7xl'>
            <h2 className='font-bold text-3xl md:text-4xl underline tracking-wide'>PREMIUM COATINGS FROM <span className='italic font-extrabold'>EXPERIENCED</span> ARTISTS</h2>

            
                <p className='font-medium text-lg sm:text-xl md:text-2xl'>
                  At Mayhem Coatings, our mission is to transform bland flooring with beautfil designs that'll last for years on end! 
                  Epoxy resin is commonly used in commerical, industrial, and residental settings due to it's high durability and aesthetic appeal. 
                  It can be applied to exisiting surfaces, including concrete, hardwoord, and tile. Epoxy flooring is highly resistant to foot traffic, machinery, chemical stains and abrasion. 
                  Learn more about how epoxy flooring can enhance the appearance and functionality of your environment.
                </p>
      
        </div>
    </section>)}

export default About