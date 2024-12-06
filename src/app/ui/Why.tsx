import React from 'react'
import Image from 'next/image'

const Why = () => {
  return (
    <div className='flex justify-center'>
      <div className='flex flex-col w-[1384px]'>
        <div className='flex flex-col pt-6 w-[562px] mx-auto'>
        <p className='text-black font-bold font-space-grotesk text-4xl mx-auto'>Why Will You Choose Our</p>
        <p className='text-black font-bold font-space-grotesk text-4xl mx-auto'>Services and Products</p>
        <p className='text-black font-space-grotesk text-md mx-auto pt-4'>Our Expertise in both Digital Marketing and Software</p>
        <p className='text-black font-space-grotesk text-md mx-auto'>Development sets up apart</p>
      </div>
      <div className='flex mx-auto gap-4 pt-10'>
        <div className='flex flex-col my-auto w-[270px] bg-[#FFFFFF] h-[326px] shadow-xl items-center justify-center'>
          <div className='flex justify-center items-center pt-12'>
            <Image src={'/images/image19.png'} alt="logo" width={70} height={70}/>
          </div>
          <p className='text-black font-bold font-space-grotesk mx-auto pt-4'>Creative Designs</p>
          <p className='text-black font-space-grotesk mx-auto pt-4 text-center'>New Perspectives for a better solutions</p>
        </div>
        <div className='flex flex-col my-auto w-[270px] bg-[#FFFFFF] h-[326px] shadow-xl items-center justify-center'>
          <div className='flex justify-center items-center pt-12'>
            <Image src={'/images/image23.png'} alt="logo" width={70} height={70}/>
          </div>
          <p className='text-black font-bold font-space-grotesk mx-auto pt-4'>Awesome Designs</p>
          <p className='text-black font-space-grotesk mx-auto pt-4 text-center'>Professional Designing that meets your brand</p>
        </div>
        <div className='flex flex-col my-auto w-[270px] bg-[#FFFFFF] h-[326px] shadow-xl items-center justify-center'>
          <div className='flex justify-center items-center pt-12'>
            <Image src={'/images/image24.png'} alt="logo" width={70} height={70}/>
          </div>
          <p className='text-black font-bold font-space-grotesk mx-auto pt-4'>Best Features</p>
          <p className='text-black font-space-grotesk mx-auto pt-4 text-center'>latest technological achievements</p>
        </div>
        <div className='flex flex-col my-auto w-[270px] bg-[#FFFFFF] h-[326px] shadow-xl items-center justify-center'>
          <div className='flex justify-center items-center pt-12'>
            <Image src={'/images/image26.png'} alt="logo" width={70} height={70}/>
          </div>
          <p className='text-black font-bold font-space-grotesk mx-auto pt-4'>Easy Solutions</p>
          <p className='text-black font-space-grotesk mx-auto pt-4 text-center'>value over Complications</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Why
