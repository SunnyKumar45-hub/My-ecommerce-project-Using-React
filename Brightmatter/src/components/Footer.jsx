import React from 'react';
import {FaFacebook,
   FaTwitter, 
   FaInstagram, 
   FaLinkedin, 
   FaGoogle
  } from 'react-icons/fa';
const Footer = () => {
  return (
    <div id='footer'>
      <div className='container px-6 py-16 mx-auto max-w-6xl'>
          <div className='grid grid-cols-1 sm:grid-cols-[1fr_auto] 
           gap-4'>
            <div className='max-w-2xl'>
            <h1 className='text-2xl font-semibold 
            text-dark'>Brightmatter.ai</h1>
            <div className='flex items-center gap-2 bg-primary rounded-full'></div>
            <p className='mt-4 text-dark/50'>Whether you're launching a new
              business or looking to elevate your existing brand.</p>
            <div className='flex gap-6 font-bold text-dark/60
            text-md py-6 mb-10'>
              <a href='#home'>Home </a>  
              <a href='#sevices'>Services </a>  
              <a href='#works'>Our Works </a>  
              <a href='#contact'>Contact us </a>  
            </div>  
           </div>

           <div>
            <h1 className='text-xl text-dark
            font-semibold text-md '>
              Subscribe to our newsletter</h1>

            <p className='text-dark/60 mt-2 mb-4 text-sm'>The latest news, 
            articles, and resources, sent to your inbox weekly.
            </p>
            <div className='grid grid-cols-1 md:grid-cols-2
            gap-4 items-center '>
              <div className='flex items-center border 
              border-dark/60 px-4 py-2.5'>
                <input className='outline-none w-full
                placeholder:text-dark/60'
                placeholder='Enter your email' />
              </div>
              <button className='font-semibold border-none bg-primary
              px-6 py-3 rounded w-fit'>Subscribe</button>
            </div>
            </div>
          </div>
          
           <hr className='mt-6'></hr>
            <div className='flex flex-col md:flex-row items-center'> 
              <p className='text-dark/60 mt-4'>Copyright 2025 © TheAbhishekCodes 
                - All Right Reserved.</p>
                <div className='flex gap-4 text-primary 
                md:ml-auto mt-6'>
                  <FaFacebook className='w-5 h-5' />
                  <FaTwitter className='w-5 h-5' />
                  <FaInstagram className='w-5 h-5' />
                  <FaLinkedin className='w-5 h-5' />
                  <FaGoogle className='w-5 h-5' />
                </div>
            </div>
      </div>
    </div>
  )
}

export default Footer; 