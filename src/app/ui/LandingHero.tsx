import React from 'react'
import Image from 'next/image'

const LandingHero = () => {
  return (
    <div className='flex justify-between h-[450px]'>
      <div className='flex flex-col gap-4 w-1/2'>
        <div className='bg-red-100 w-3/4 pr-0'>
          <div className='items-center'>
            <h1 className='text-5xl font-bold text-black font-space-grotesk leading-tight'>Smart-Thinking &</h1> 
            <h1 className='text-5xl font-bold text-black font-space-grotesk leading-tight'>Innovative Solutions</h1>
            <p className='text-black font-space-intel'>Class aptent taciti sociosqu ad litora torquent conubia nostrama </p>
            <p className='text-black font-space-intel'>inceptos himenaeos. Donec tristique nibh ipsum dignissim.</p>
          </div>
          <div className='flex items-center gap-4'>
            <button className='bg-[#3921F5] hover:bg-blue-900 transition-colors rounded-xl text-white px-6 py-2.5 font-space-grotesk'>Discover More</button>
            <p className='text-black hover:text-blue-800 cursor-pointer'>Contact Us</p>
          </div>
          <div className='flex items-center gap-4'>
            <p className='text-black font-space-grotesk'>Get 24/7 Support</p>
            <p className='text-black font-space-grotesk'>No Hidden Charges</p>
            <p className='text-black font-space-grotesk'>100% Transparency</p>
          </div>
        </div>
      </div>
      <div className='flex flex-col gap-4 w-1/2 pt-6'>
        <div className='flex gap-8'>
          <div className="shadow-lg flex-col rounded-lg gap-2 flex p-6 top-[164px] left-[855px] w-[236.85px] h-[222.32px]">
            <div className='flex gap-2'>
              <div className='bg-purple-800 rounded-lg h-[56.3px] w-[50.17px]'>
              
              </div>
              <div className="flex-col items-center justify-between w-[169px] h-[24px]">
                <div className="text-indigo-600 text-sm">
                  User Active Possibility
                </div>
                <div className="text-indigo-500 font-bold text-xl">$44.3578</div>
              </div>
            </div>
            <div className='items-center'>
              <Image src={'/images/hero1.png'} width={200} height={120} alt={'Dash1'}/>
            </div>
          </div>
          <div className='bg-white rounded-lg flex top-[163px] left-[1089px] w-[296px] h-[287px]'>
            <div className='flex-col items-center justify-between'>
              <div className='flex pl-5 pt-5'>
                <div className='text-indigo-600 text-lg font-bold'>
                  $4.8k
                </div>
                <p className='text-indigo-600 text-lg'>/ Daily</p>
               </div>
               <div className='items-center'>
                 <Image src={'/images/hero2.png'} width={300} height={120} alt={'Dash2'}/>
               </div>
            </div>
          </div>
        </div>
        <div className="shadow-lg flex-col bg-white rounded-lg gap-4 flex p-6 top-[164px] left-[855px] w-[353.97px] h-[353.97px]">
            <div className='flex gap-2'>
              <div className="flex-col items-center justify-between w-[169px] h-[24px]">
                <div className="text-indigo-600 font-bold text-md">
                  Engagements
                </div>
                <div className="text-black text-sm">506 New Followers</div>
              </div>
            </div>
            <div className='items-center'>
              <Image src={'/images/hero3.png'} width={316.21} height={201.53} alt={'Dash3'}/>
            </div>
          </div>
      </div>
    </div>
  )
}

export default LandingHero
