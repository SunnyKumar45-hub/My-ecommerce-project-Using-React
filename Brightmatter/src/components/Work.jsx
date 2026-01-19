import React from 'react';
import {workItems} from '../assets/assets.js';
const Work = () => {
  return (
    <div id='work' className="py-20">
      <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-40">
        <div className='text-center mb-16'> 
           <h1 className='text-4xl md:text-5xl text-dark mb-6'>Our latest Work</h1>
           <p className='text-dark/60 text-xl max-w-2xl mx-auto'>Whether you're launching
            a new business or looking to elevate your existing brand</p>
        </div>
        {/* work data display */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12'>
           {
               workItems.map((work, index) => (
                  <div key={index} className='rounded-xl overflow-hidden 
                   border border-primary/50 hover:scale-105
                   transition duration-300 cursor-pointer'>
                    
                      <img src={work.image} alt="" />
                      <div className='mt-6 p-6 text-xl'>
                         {work.title}
                      </div>
                      <div className='text-dark/50 p-4'>
                         {work.description}
                      </div>
                  </div>
               ))
           }
        </div>
        <div></div>
      </div>
    </div>
  )
}
export default Work; 