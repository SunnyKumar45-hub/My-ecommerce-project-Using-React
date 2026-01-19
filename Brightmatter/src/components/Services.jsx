import React from 'react';
import {FaCode, FaPaintBrush, FaBullhorn, FaChartLine} from 'react-icons/fa';
import {services} from '../assets/assets.js';
const Services = () => {
   return (
       <div id="services" className="py-20">
         <div className="container mx-auto px-6 sm:px-12 md:px-24 lg:px-40">
            <div className="text-center mb-16">
               <h1 className="text-4xl md:text-5xl text-dark
               mb-6 ">How we can Help you?</h1>
               <p className="text-dark/60 text-xl max-w-2xl 
               mx-auto ">Whether you're launching a new business or looking to
                  elevate your existing brand.</p>
            </div>
            {/* Services Data display */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
               {
                  services.map((service, index)=>(
                     <div key={index} className="rounded-xl border border-primary 
                      flex p-12 flex-col items-center md:flex-row gap-6 
                      hover:scale-105 transition duration-300 cursor-pointer">
                        <div className="flex-shrink-0 w-20 aspect-square 
                        border-2 border-primary/30 rounded-full
                        flex items-center justify-center">
                           <service.icon className="w-10 h-10 
                            text-primary" />
                        </div>
                        <div className="text-center md:text-start">
                            <h1 className="text-xl md:text-2xl mb-3">{service.title}</h1>
                            <p className="text-dark/60">{service.description}</p>
                        </div>
                     </div>
                  ))
               }
            </div>
         </div>
       </div>
   );
}

export default Services; 