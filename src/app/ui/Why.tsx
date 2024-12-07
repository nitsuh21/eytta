import React from 'react'
import Image from 'next/image'

const Why = () => {
  return (
    <div className='flex justify-center bg-slate-900 relative overflow-hidden'>
      {/* Background gradients */}
      <div className='absolute inset-0'>
        <div className='absolute -top-40 -right-32 w-96 h-96 rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 blur-3xl'></div>
        <div className='absolute -bottom-40 -left-32 w-96 h-96 rounded-full bg-gradient-to-tr from-indigo-500/20 to-pink-500/20 blur-3xl'></div>
      </div>

      <div className='flex flex-col w-full max-w-[1384px] relative z-10 px-4 py-20'>
        <div className='flex flex-col w-full md:w-[562px] mx-auto text-center'>
          <h2 className='text-3xl md:text-4xl font-bold font-space-grotesk bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 leading-tight'>
            Why Will You Choose Our Services and Products
          </h2>
          <p className='text-slate-400 text-md mx-auto pt-4'>
            Our Expertise in both Digital Marketing and Software Development sets us apart
          </p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-10 px-4'>
          <div className='group flex flex-col my-auto bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50'>
            <div className='flex justify-center items-center mb-6'>
              <div className='relative'>
                <div className='absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300'></div>
                <Image src={'/images/image19.png'} alt="Creative Designs" width={70} height={70} className='relative z-10'/>
              </div>
            </div>
            <h3 className='text-white font-bold font-space-grotesk text-xl text-center group-hover:text-blue-400 transition-colors duration-300'>
              Creative Designs
            </h3>
            <p className='text-slate-400 text-center mt-4 group-hover:text-slate-300 transition-colors duration-300'>
              New Perspectives for better solutions
            </p>
          </div>

          <div className='group flex flex-col my-auto bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50'>
            <div className='flex justify-center items-center mb-6'>
              <div className='relative'>
                <div className='absolute inset-0 bg-purple-500/20 rounded-full blur-xl group-hover:bg-purple-500/30 transition-all duration-300'></div>
                <Image src={'/images/image23.png'} alt="Awesome Designs" width={70} height={70} className='relative z-10'/>
              </div>
            </div>
            <h3 className='text-white font-bold font-space-grotesk text-xl text-center group-hover:text-purple-400 transition-colors duration-300'>
              Awesome Designs
            </h3>
            <p className='text-slate-400 text-center mt-4 group-hover:text-slate-300 transition-colors duration-300'>
              Professional Designing that meets your brand
            </p>
          </div>

          <div className='group flex flex-col my-auto bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50'>
            <div className='flex justify-center items-center mb-6'>
              <div className='relative'>
                <div className='absolute inset-0 bg-indigo-500/20 rounded-full blur-xl group-hover:bg-indigo-500/30 transition-all duration-300'></div>
                <Image src={'/images/image24.png'} alt="Best Features" width={70} height={70} className='relative z-10'/>
              </div>
            </div>
            <h3 className='text-white font-bold font-space-grotesk text-xl text-center group-hover:text-indigo-400 transition-colors duration-300'>
              Best Features
            </h3>
            <p className='text-slate-400 text-center mt-4 group-hover:text-slate-300 transition-colors duration-300'>
              Latest technological achievements
            </p>
          </div>

          <div className='group flex flex-col my-auto bg-slate-800/50 backdrop-blur-xl rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700/50'>
            <div className='flex justify-center items-center mb-6'>
              <div className='relative'>
                <div className='absolute inset-0 bg-violet-500/20 rounded-full blur-xl group-hover:bg-violet-500/30 transition-all duration-300'></div>
                <Image src={'/images/image26.png'} alt="Easy Solutions" width={70} height={70} className='relative z-10'/>
              </div>
            </div>
            <h3 className='text-white font-bold font-space-grotesk text-xl text-center group-hover:text-violet-400 transition-colors duration-300'>
              Easy Solutions
            </h3>
            <p className='text-slate-400 text-center mt-4 group-hover:text-slate-300 transition-colors duration-300'>
              Value over Complications
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Why
