import React from 'react'

const Location = () => {
  return (
    <section id='location' className="relative min-h-[550px] flex items-center justify-center bg-white py-24 px-10">

        <div className='flex flex-col sm:flex-row items-center justify-center gap-10 sm:max-w-4xl text-start'>

          <div className='flex flex-col gap-10 sm:w-1/2'>
            <h2 className='font-bold text-3xl md:text-4xl underline tracking-wide'>OUR LOCATIONS</h2>
            <p className='font-medium text-lg sm:text-xl md:text-2xl'>Located in Danbury, Connecticut. We provide our services to all throughout the tri-state area, we're capable of providing service throughout the country. For more details, please contact us.</p>
          </div>

            <img className='sm:w-1/2' src='/images/connecticut.png'/>
        </div>

    </section>
  )
}

export default Location