import React from 'react'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-20 p-6 flex items-center justify-between bg-[#141F39]'>
        <div className='flex items-center'>
           <p className='text text-xl font-bold'>Eytta Technologies</p>
        </div>
        <div className='flex items-center'>
            <button className='bg-blue-800 hover:bg-blue-900 transition-colors rounded-md text-white px-6 py-2.5'><a href="#contact">Contact us now</a> </button>
        </div>
    </div>
  )
}

export default Navbar
