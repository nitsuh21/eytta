'use client'
import React from 'react'
import { GoTelescopeFill } from 'react-icons/go'

const Navbar = () => {
  const handleClick = () =>{
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  }
  return (
    <div className='h-20 p-6 flex items-center justify-between bg-[#141F39]'>
        <div className='flex items-center gap-2'>
            <GoTelescopeFill className="text-2xl text-blue-500" />
            <span className='text-white text-xl font-semibold'>Eytta Technologies</span>
        </div>
        <div className='flex items-center'>
            <button className='bg-blue-800 hover:bg-blue-900 transition-colors rounded-md text-white px-6 py-2.5' onClick={handleClick}>Contact us now </button>
        </div>
    </div>
  )
}

export default Navbar
