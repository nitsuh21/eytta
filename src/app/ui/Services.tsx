import React from 'react'
import Image from 'next/image'
import { FaInstagram, FaFacebookF } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Services = () => {
  return (
    <div className='container mx-auto px-4 py-8 md:py-12 w-full max-w-[1384px]'>
      <div className='text-center mb-8 md:mb-12'>
        <h2 className='text-3xl text-black md:text-4xl font-bold mb-4'>Our Services</h2>
        <p className='text-gray-600 max-w-2xl mx-auto'>We offer comprehensive digital solutions to help your business grow and succeed in the digital landscape.</p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8'>
        {/* Web Development Section */}
        <div className='flex flex-col gap-6'>
          <h2 className='text-3xl md:text-4xl font-bold text-black font-space-grotesk'>Web and Mobile Apps Development that helps you to excel</h2>
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
        <div className='relative h-[728px] hidden md:block'>
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
        <div className='col-span-1 lg:col-span-2 mt-8 md:mt-12'>
          <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12'>
            <div className='flex flex-col items-center gap-4 w-full'>
              <div className='relative w-full max-w-[320px] h-[600px] md:h-[650px] bg-white rounded-[40px] shadow-xl overflow-hidden border-8 border-gray-800'>
                <div className='absolute top-0 left-0 right-0 h-6 bg-gray-800 rounded-t-[32px]'>
                  <div className='w-20 h-4 mx-auto bg-black rounded-b-xl'></div>
                </div>
                <div className='p-3 md:p-4 pt-8 h-full bg-gradient-to-b from-blue-50 to-white overflow-y-auto'>
                  <div className='space-y-3 md:space-y-4'>
                    {/* Social Media Growth */}
                    <div className='bg-white p-3 md:p-4 rounded-xl shadow-md'>
                      <h4 className='text-sm font-bold text-gray-800 mb-3 md:mb-4'>Social Media Growth</h4>
                      <div className='relative h-[120px] md:h-[150px] w-full'>
                        <div className='absolute bottom-0 left-0 w-full h-full flex items-end justify-around'>
                          <div className='w-6 md:w-8'>
                            <div className='bg-gradient-to-t from-blue-500 to-blue-400 h-[100px] md:h-[120px] rounded-t-lg transition-all hover:h-[110px] md:hover:h-[130px]'></div>
                            <p className='text-[10px] md:text-xs text-center mt-2'>Jan</p>
                          </div>
                          <div className='w-6 md:w-8'>
                            <div className='bg-gradient-to-t from-blue-500 to-blue-400 h-[70px] md:h-[90px] rounded-t-lg transition-all hover:h-[80px] md:hover:h-[100px]'></div>
                            <p className='text-[10px] md:text-xs text-center mt-2'>Feb</p>
                          </div>
                          <div className='w-6 md:w-8'>
                            <div className='bg-gradient-to-t from-blue-500 to-blue-400 h-[120px] md:h-[140px] rounded-t-lg transition-all hover:h-[130px] md:hover:h-[150px]'></div>
                            <p className='text-[10px] md:text-xs text-center mt-2'>Mar</p>
                          </div>
                          <div className='w-6 md:w-8'>
                            <div className='bg-gradient-to-t from-blue-500 to-blue-400 h-[80px] md:h-[100px] rounded-t-lg transition-all hover:h-[90px] md:hover:h-[110px]'></div>
                            <p className='text-[10px] md:text-xs text-center mt-2'>Apr</p>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Engagement Stats */}
                    <div className='bg-white p-3 md:p-4 rounded-xl shadow-md'>
                      <h4 className='text-sm font-bold text-gray-800 mb-3 md:mb-4'>Platform Performance</h4>
                      <div className='space-y-3 md:space-y-4'>
                        <div>
                          <div className='flex justify-between text-xs md:text-sm mb-1 items-center'>
                            <div className='flex items-center gap-2'>
                              <FaInstagram className="text-pink-500 text-base md:text-lg" />
                              <span className='text-gray-600'>Instagram</span>
                            </div>
                            <span className='text-blue-600 font-semibold'>85%</span>
                          </div>
                          <div className='h-1.5 md:h-2 bg-gray-200 rounded-full'>
                            <div className='h-full w-[85%] bg-gradient-to-r from-pink-500 to-purple-600 rounded-full'></div>
                          </div>
                        </div>
                        <div>
                          <div className='flex justify-between text-xs md:text-sm mb-1 items-center'>
                            <div className='flex items-center gap-2'>
                              <FaFacebookF className="text-blue-600 text-base md:text-lg" />
                              <span className='text-gray-600'>Facebook</span>
                            </div>
                            <span className='text-blue-600 font-semibold'>72%</span>
                          </div>
                          <div className='h-1.5 md:h-2 bg-gray-200 rounded-full'>
                            <div className='h-full w-[72%] bg-gradient-to-r from-blue-400 to-blue-600 rounded-full'></div>
                          </div>
                        </div>
                        <div>
                          <div className='flex justify-between text-xs md:text-sm mb-1 items-center'>
                            <div className='flex items-center gap-2'>
                              <FaXTwitter className="text-gray-900 text-base md:text-lg" />
                              <span className='text-gray-600'>X</span>
                            </div>
                            <span className='text-blue-600 font-semibold'>68%</span>
                          </div>
                          <div className='h-1.5 md:h-2 bg-gray-200 rounded-full'>
                            <div className='h-full w-[68%] bg-gradient-to-r from-gray-700 to-gray-900 rounded-full'></div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Quick Stats */}
                    <div className='grid grid-cols-2 gap-3 md:gap-4'>
                      <div className='bg-white p-3 md:p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
                        <p className='text-[10px] md:text-xs text-gray-600'>Total Followers</p>
                        <p className='text-base md:text-lg font-bold text-gray-800'>125.4K</p>
                      </div>
                      <div className='bg-white p-3 md:p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow'>
                        <p className='text-[10px] md:text-xs text-gray-600'>Engagement</p>
                        <p className='text-base md:text-lg font-bold text-gray-800'>24.8%</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='flex flex-col gap-6'>
              <h2 className='text-3xl md:text-4xl font-bold text-black font-space-grotesk'>Digital Marketing; Helping your business elevating in the digital realm</h2>
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
