import React from 'react'

const Subscribe = () => {
  return (
    <div className='flex justify-center py-20'>
      <div className='flex flex-col w-[1384px]'>
        <div className='flex flex-col pt-6 w-[562px] mx-auto'>
          <p className='text-black font-bold font-space-grotesk text-4xl mx-auto'>Subscribe to Our Newsletter</p>
          <p className='text-black font-space-grotesk text-md mx-auto pt-4'>Stay updated with our latest news and updates</p>
        </div>
        <div className='flex justify-center gap-4 pt-10'>
          <input 
            type="email" 
            placeholder="Enter your email address" 
            className="w-[400px] h-[50px] px-4 rounded-lg border border-gray-300 focus:outline-none focus:border-blue-500"
          />
          <button className="bg-blue-600 text-white px-8 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Subscribe
          </button>
        </div>
      </div>
    </div>
  )
}

export default Subscribe
