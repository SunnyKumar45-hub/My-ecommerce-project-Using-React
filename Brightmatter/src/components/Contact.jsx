import React from 'react';
import {FaUser, FaEnvelope} from 'react-icons/fa';
import {FaArrowRightLong} from 'react-icons/fa6';
const Contact = () => {
  return(
    <div id='contacts' className='py-20 bg-white'>
      <div className='container mx-auto px-6'>
        <div className='text-center mb-16'>
           <h1 className='text-dark text-4xl md:text-5xl
            mb-6'>Reach out to us</h1>
            <p className='text-dark/60 max-w-xl mx-auto
            '>Let’s talk! Whether it’s a quick question 
              or a big project, we’re just a message away.</p>
        </div>

        {/* Contact form */}
        <div className='max-w-2xl mx-auto'>
           <form>
             <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
              {/* full name */}
              <div>
                <label className='text-dark block mb-2 '>
                  Your name
                </label>
                <div className='flex items-center gap-4 border
                 border-dark/60 pl-4 py-2 rounded'>
                  <FaUser /> 
                  <input className='outline-none
                  placeholder:text-dark/60 text-sm'
                  placeholder='Enter your name' />
                </div>
              </div>
              {/* full email */}
              <div>
                <label className='text-dark block mb-2 '>
                  Your email
                </label>
                <div className='flex items-center gap-4 border
                 border-dark/60 pl-4 py-2 rounded'>
                  <FaUser /> 
                  <input className='outline-none
                  placeholder:text-dark/60 text-sm'
                  placeholder='Enter your email'
                  type="email" />
                </div>
              </div>
             </div>
              {/* message */}
              <div className='mt-6 mb-4'>
                <label className='block mb-2'>Your message</label>
                <textarea className='w-full placeholder:text-dark/60 
                 border border-dark/40 rounded pl-6 py-6
                 outline-none h-60 '
                 placeholder='Enter your message'></textarea>
              </div>
              <button className='flex items-center gap-2 bg-primary
              px-6 py-2.5 border-none rounded-full font-semibold'>
                submit
                <FaArrowRightLong />
              </button>
           </form>
        </div>
      </div>
    </div>
  )
}

export default Contact; 