import React from 'react'
import Image from 'next/image'

const navbar = () => {
  return (
    <div className='h-20 p-6 flex items-center shadow-sm justify-between'>
        <div className='flex items-center'>
           <Image src={'/logo.svg'} alt="logo" width={70} height={50}/>
        </div>
        <div className='flex items-center'>
            <ul className='flex items-center gap-8'>
                <li className='text-xl text-black hover:text-blue-800 cursor-pointer'>Home</li>
                <li className='text-xl text-black hover:text-blue-800 cursor-pointer'>About</li>
                <li className='text-xl text-black hover:text-blue-800 cursor-pointer'>Services</li>
                <li className='text-xl text-black hover:text-blue-800 cursor-pointer'>Contact</li>
            </ul>
        </div>
        <div className='flex items-center'>
            <button className='bg-blue-800 hover:bg-blue-900 transition-colors rounded-md text-white px-6 py-2.5'>Contact us now</button>
        </div>
    </div>
  )
}

export default navbar
