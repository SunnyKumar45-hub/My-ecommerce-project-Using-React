import React from 'react';
import { useState } from 'react';
import { FaArrowRightLong ,FaBars ,FaXmark } from 'react-icons/fa6';
const Navbar = () => {
     const [showMenu, setShowMenu] = useState(false);
  return (
    <>
    <div className="w-full fixed top-0 z-50 backdrop-blur-2xl">
      <div className='flex items-center justify-between px-6 py-8
       sm:px-12 md: px-24 lg:px-40'>
        {/* left section */}
       <div>
        <span className='text-3xl font-bold 
        text-dark'>Brightmatter.io</span>
        <div className="w-4 h-4 bg-primary rounded-full"></div>
       </div>

       {/* mid section menu */}
       <div className='hidden md:flex items-center space-x-6 font-semibold text-dark/80'>
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#work">Work</a>
        <a href="#contact">Contact</a>
       </div>

       {/* right section buttons */}
       <div className="hidden md:block">
         <button className="px-6 py-2 bg-primary text-dark rounded-full 
         font-semibold cursor-pointer flex items-center gap-2">
            Contact Me 
            <FaArrowRightLong />
         </button>
       </div>
       {/* Mobile version */}
       <div className="md:hidden z-10">
           {
              showMenu ? 
              <FaXmark onClick={() => setShowMenu(!showMenu)} 
               className="text-xl text-dark" /> :
              <FaBars onClick={() => setShowMenu(!showMenu)} 
               className="text-xl text-dark" />
           }
            
          
       </div>
      </div>

      {/* Mobile version menu */}
      {
        showMenu && (
           <div className="flex flex-col w-64 items-center 
            justify-center space-y-6 fixed top-0 
            right-0 bg-primary/50 h-screen">
            <a onClick={() => setShowMenu(!showMenu)}  
             href="">Home</a>
            <a onClick={() => setShowMenu(!showMenu)}  
             href="">Services</a>
            <a onClick={() => setShowMenu(!showMenu)} 
             href="">Work</a>
            <a onClick={() => setShowMenu(!showMenu)} 
             href="">Contact</a>
           </div>
        )
      }
    </div>
    </>
  )
}
export default Navbar;
