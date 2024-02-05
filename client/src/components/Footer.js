import React from 'react'
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
    <footer className='w-full min-h-[60vh] bg-zinc-800 pt-12 text-white flex flex-col items-center justify-between'>
        <div className='w-3/4 sm:gap-0 gap-4 flex flex-col sm:flex-row items-between sm:justify-between pb-4'>
            <div className='flex flex-col items-center sm:items-start gap-2'>
                <img src="/images/logo.png" className="h-36"/>
                <h3 className='px-12 text-2xl font-semibold'>Connecticut</h3>
                <p className='px-12'>Addreswafwafawfwafws</p>
                <p className='px-12'>929-866-9064</p>
            </div>
   

            <div className='flex flex-col gap-2 px-12 justify-center'>
                <div className='flex flex-col gap-3'>
                    <h3 className='text-center text-2xl font-semibold'><HashLink smooth to='/#about'>About</HashLink></h3>
                    <h3 className='text-center text-2xl font-semibold'><HashLink smooth to='/contact'>Free Quote</HashLink></h3>
                    <h3 className='text-center text-2xl font-semibold'>Follow</h3>
                    <div className='flex gap-3 justify-center'>
                        <a href='https://www.instagram.com/mayhemcoatings/' target='_blank'className="bg-white/30 p-3 rounded"><Icon icon="line-md:instagram" height='24px'/></a>
                        <a href='https://www.tiktok.com/@mayhem.coatings' className="bg-white/30 p-3 rounded"><Icon icon="line-md:tiktok" height='24px'/></a>
                    </div>
                </div>
            </div>

        </div>

  
        <p className='p-6 w-3/4 border-t text-center text-white/75 sm:text-start text-xs'>&copy; {new Date().getFullYear()} Mayhem Coatings Epoxy Specialist. All Rights Reserved.</p>
    </footer>
  )
}

export default Footer