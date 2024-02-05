import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import { Icon } from '@iconify/react';

const Navbar = () => {

    // Mobile Navbar Menu
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    // const closeMenu = setClick(false);


    // Change nav color when scrolling
    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 80) {
            setColor(true);
        } else {
            setColor(false);
        }
    }


    window.addEventListener('scroll', changeColor);
    
   const NavType = () => {
    if (window.innerWidth >= 640) {
        return <div className="flex gap-6 items-center text-lg">
        <ul className="flex gap-6">
        <li><HashLink smooth to='/#home'>Home</HashLink></li>
        <li><HashLink smooth to='/#about'>About</HashLink></li>
        <li><HashLink smooth to='/#services'>Services</HashLink></li>
        <li><HashLink smooth to='/#location'>Location</HashLink></li>
      </ul>

      <Link to='/contact'><button className="rounded py-1 px-2 bg-white hover:bg-zinc-400 text-black">Free Quote</button></Link>
      </div>;
    } else {
        return <div onClick={handleClick} className="z-30">
            <Icon icon={click ? "line-md:menu-to-close-alt-transition" : "line-md:menu"} height='36px' />
            </div>
        }
   }
     

    return (<nav className={`fixed w-full h-20 z-20  text-white transition duration-0 ease-in ${color || click ? `bg-black` : `bg-transparent`}`}>
        <div className="flex  h-20 mx-6 font-semibold justify-between items-center">
        <HashLink smooth to='/#home'>{color && <img src='/images/logo.png' className="max-h-[64px] animate-fadein"/>}</HashLink>
        <NavType/>
      </div>

      {click && 
            <div className="fixed bg-black w-full z-10 h-4/6">

                <div className="flex gap-4 items-center justify-evenly m-4">
                    <div className="flex flex-col items-center">
                        <HashLink smooth to='/#location' onClick={handleClick} className="bg-white/30 hover:bg-purple-600 p-4 rounded"><Icon icon="line-md:map-marker-alt-twotone" height='48px'/></HashLink>
                        <p >Connecticut</p>
                    </div>
                    
                    <div className="flex flex-col items-center">
                        <a href='tel:929-866-9064' className="bg-white/30 hover:bg-purple-600 p-4 rounded"><Icon icon="line-md:phone-call-twotone-loop" height='48px'/></a>
                        <p>929-866-9064</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <HashLink smooth to='/contact' onClick={handleClick} className="bg-white/30 hover:bg-purple-600 p-4 rounded"><Icon icon="line-md:pencil-twotone" height='48px'/></HashLink>
                        <p>Free Quote</p>
                    </div>
                </div>

         
                <ul className="flex flex-col mx-12 text-3xl font-semibold  gap-6 justify-center h-3/5">
                    <li className="border-b"><HashLink smooth to='/#home' onClick={handleClick}>Home</HashLink></li>
                    <li className="border-b"><HashLink smooth to='/#about' onClick={handleClick}>About</HashLink></li>
                    <li className="border-b"><HashLink smooth to='/#services' onClick={handleClick}>Services</HashLink></li>
                    <li className="border-b"><HashLink smooth to='/#location' onClick={handleClick}>Location</HashLink></li>
                </ul>
             
            </div>}
    </nav>);
  };
  
  export default Navbar;