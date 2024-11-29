import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='pt-10'>
      <div className='flex flex-col items-center gap-4'>
        <h1 className='text-black font-bold font-space-grotesk text-4xl'>Our Services</h1>
        <p className='text-black font-space-grotesk'>A new dimension to your business</p>
      </div>
      <div className='flex justify-between pl-[80px] pt-[80px] pr-[80px]'>
        <div className='flex flex-col gap-4 w-[451px] pt-16'>
            <h1 className='text-black font-bold font-space-grotesk text-4xl'>Web and Mobile Apps Development that helps you to excel</h1>
            <p className='text-black font-space-grotesk text-base pb-3'>we build high quality SaaS products for individuals and companies. from early development up to optimization and scaling we got your back </p>
            <hr className='w-full' />
            <p className='text-black font-bold font-space-grotesk text-xl pt-3'>Bring your Ideas to Reality</p>
            <p className='text-black'>do you have an idea you want to convert into a web/mobile app product? Give us a call!</p>
            <ul>
                <li className='text-black font-bold font-space-grotesk pt-3'>- Web and Mobile Apps Development</li>
                <li className='text-black font-bold font-space-grotesk pt-3'>- Custom Software Development</li>
                <li className='text-black font-bold font-space-grotesk pt-3'>- SaaS products Development like ERP</li>
            </ul>
        </div>
        <div className='relative flex w-[655px] h-[728px]'>
            <div className='absolute left-0 top-0 bg-red-200'>
                
            </div>
            <div className='absolute right-0 top-0 rounded-lg bg-[#FFFFFF] w-[336.4px] h-[728px]'>
                <div className='flex flex-col items-center gap-4 pt-10'>
                    <h1 className='text-black font-bold font-space-grotesk text-3xl'>Eytta</h1>
                </div>
                <div className='relative w-[336.4px] h-[300px] pt-6'>
                    <Image 
                        src='/images/followers-stats.png'
                        alt="Followers statistics"
                        fill
                        sizes="(max-width: 336px) 100vw"
                        style={{
                            objectFit: 'cover',
                            objectPosition: 'center',
                        }}
                        priority
                    />
                </div>
                <hr className='w-full' />
                <div className='flex flex-col items-center gap-4 pt-6'>
                    <h1 className='text-black font-bold font-space-grotesk text-xl pt-6'>Maximize Your Saving</h1>
                    <p className='text-black font-space-grotesk text-base w-[265.67px]'>Maximize Your Savings with Multiple  Accounts for Different Occasions</p>
                </div>
                <div className='flex flex-col items-center gap-4 pt-6 px-6'>
                    <button className='bg-[#3921F5] rounded-sm text-white w-full  py-2.5 font-space-grotesk'>Login</button>
                    <button className='border-2 border-[#3921F5] rounded-sm text-[#3921F5] w-full py-2.5 font-space-grotesk'>Create Account</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Services
