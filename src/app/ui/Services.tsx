import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='container mx-auto px-4 py-12 w-[1384px]'>
      <div className='text-center mb-12'>
        <h1 className='text-black font-bold font-space-grotesk text-4xl mb-4'>Our Services</h1>
        <p className='text-black font-space-grotesk'>A new dimension to your business</p>
      </div>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
        {/* Web Development Section */}
        <div className='flex flex-col gap-6'>
          <h2 className='text-black font-bold font-space-grotesk text-4xl'>Web and Mobile Apps Development that helps you to excel</h2>
          <p className='text-black font-space-grotesk text-base'>we build high quality SaaS products for individuals and companies. from early development up to optimization and scaling we got your back</p>
          <hr className='w-full' />
          <div className='space-y-4'>
            <p className='text-black font-bold font-space-grotesk text-xl'>Bring your Ideas to Reality</p>
            <p className='text-black'>do you have an idea you want to convert into a web/mobile app product? Give us a call!</p>
            <ul className='space-y-3'>
              <li className='text-black font-bold font-space-grotesk'>- Web and Mobile Apps Development</li>
              <li className='text-black font-bold font-space-grotesk'>- Custom Software Development</li>
              <li className='text-black font-bold font-space-grotesk'>- SaaS products Development like ERP</li>
            </ul>
          </div>
        </div>

        {/* Interactive Demo Section */}
        <div className='relative h-[728px]'>
          <div className='absolute left-0 top-0 w-1/2 h-full flex items-center justify-center z-10'>
            <div className='relative w-full max-w-[333px] h-[230px] translate-x-6 translate-y-2'>
              <Image 
                src='/images/service-mini.png'
                alt="Eytta"
                fill
                quality={100}
                sizes="(max-width: 336px) 100vw"
                style={{
                  objectFit: 'cover',
                  objectPosition: 'center',
                }}
                priority
              />
            </div>
          </div>
          <div className='absolute right-0 top-0 rounded-lg bg-white w-1/2 h-full shadow-lg'>
            <div className='p-8 flex flex-col h-full'>
              <div className='text-center mb-6'>
                <h3 className='text-black font-bold font-space-grotesk text-3xl'>Eytta</h3>
              </div>
              <div className='relative h-[300px] mb-6'>
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
              <hr className='mb-6' />
              <div className='text-center space-y-4 mb-8'>
                <h4 className='text-black font-bold font-space-grotesk text-xl'>Maximize Your Saving</h4>
                <p className='text-black font-space-grotesk text-base'>Maximize Your Savings with Multiple Accounts for Different Occasions</p>
              </div>
              <div className='space-y-4 mt-auto'>
                <button className='bg-[#3921F5] rounded-sm text-white w-full py-2.5 font-space-grotesk'>Login</button>
                <button className='border-2 border-[#3921F5] rounded-sm text-[#3921F5] w-full py-2.5 font-space-grotesk'>Create Account</button>
              </div>
            </div>
          </div>
        </div>

        {/* Digital Marketing Section */}
        <div className='col-span-2 mt-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>
            <div className='flex flex-col items-center gap-4'>
              <Image src='/images/wallet-app.png' alt="Digital Marketing" width={500} height={500} />
            </div>
            <div className='flex flex-col gap-6'>
              <h2 className='text-4xl font-bold text-black font-space-grotesk'>Digital Marketing; Helping your business elevating in the digital realm</h2>
              <h3 className='text-2xl font-bold text-black font-space-grotesk'>Services</h3>
              <div className='space-y-4'>
                <div className='py-3 border-b'>
                  <h4 className='text-xl text-black font-space-grotesk'>Social Media Marketing</h4>
                </div>
                <div className='py-3 border-b'>
                  <h4 className='text-xl text-black font-space-grotesk'>Search Engine Optimization</h4>
                </div>
                <div className='py-3 border-b'>
                  <h4 className='text-xl text-black font-space-grotesk'>Content Marketing</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Services
