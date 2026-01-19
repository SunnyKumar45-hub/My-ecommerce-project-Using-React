import React from 'react';
import {teams} from '../assets/assets.js';
const Teams = () => {
  return (
    <div id='team' className='py-20 bg-white'>
      <div className='container mx-auto px-6 sm:px-12 md:px-24 lg:px-40'>
        <div className='text-center mb-16'>
          <h1 className='text-4xl md:text-5xl font-thin'>Meet the team</h1>
          <p className='max-w-xl max-auto text-dark/50 mt-6 text-xl'>Behind every successful project is
            a passionate and skilled team — and ours is no exception.</p>
        </div>
        {/* Team leader */}
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 
        gap-8'>
          {
            teams.map((team, index) => (
              <div key={index} className='rounded-xl 
              overflow-hidden p-6 border border-primary/50 
              bg-white flex items-center gap-6 hover:scale-105 
              transition duration-300 cursor-pointer'>
                <img className='w-10 h-10 rounded-full 
                object-cover' src={team.image} alt="" />
                <div className='flex flex-col'>
                <span className='text-sm font-semibold'>
                  {team.name}
                </span>
                <span className='text-dark/60'>
                  {team.role}
                </span>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
export default Teams; 