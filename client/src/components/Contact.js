import React from 'react'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section className="relative flex items-center justify-center bg-white py-24 px-10 min-h-[550px]">

      <div className='shadow-lg flex gap-4 flex-col sm:flex-row max-h-[600px] max-w-6xl overflow-hidden'>
        <div className='flex flex-col justify-evenly gap-4 md:gap-0 p-6 sm:w-1/2'>
          <h2 className='font-bold text-3xl md:text-4xl underline tracking-wide'> Request a Quote</h2>
          <p className='font-medium text-lg sm:text-xl md:text-2xl'>If you’re ready to work with the area’s most accommodating, hardest working group of qualified industrial coating specialists, then we can’t wait to hear from you!</p>
          <Link to='/contact'><button className="rounded-lg w-full p-4 bg-purple-600 hover:bg-purple-800 text-white font-medium text-xl shadow-xl">Contact</button></Link>
        </div>

        <img className="sm:w-1/2 overflow-hidden" src="/images/gallery/floor-5.jpg"/>
      </div>
      
    </section>
  )
}

export default Contact