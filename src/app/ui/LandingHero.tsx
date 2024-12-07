'use client'

import React from 'react'
import { FiUsers, FiTrendingUp, FiBarChart2, FiActivity } from 'react-icons/fi'
import { motion } from 'framer-motion'

const LandingHero = () => {
  return (
    <div className='relative flex justify-center w-full min-h-screen px-4 md:px-6 py-8 md:py-12 bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden'>
      {/* Background gradients */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-500/20 via-violet-500/20 to-transparent opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/10 via-indigo-500/10 to-transparent opacity-30 blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/10 via-violet-500/10 to-transparent opacity-30 blur-3xl"></div>
      </div>

      <div className='flex flex-col lg:flex-row w-full max-w-[1384px] gap-8 lg:gap-12 relative z-10'>
        {/* Left Section */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className='flex flex-col gap-6 w-full lg:w-1/2'
        >
          <div className='lg:pl-[80px] lg:pt-[40px]'>
            <div className='space-y-6'>
              <div className='flex-col max-w-[584px] space-y-2'>
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-300 font-space-grotesk leading-tight'
                >
                  Providing new tech
                </motion.h1> 
                <motion.h1 
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className='text-4xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-400 font-space-grotesk leading-tight'
                >
                  Perspectives
                </motion.h1>
              </div>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className='space-y-2'
              >
                <p className='text-slate-300 font-space-intel text-lg'>From Ideation to Execution, we are dedicated to </p>
                <p className='text-slate-300 font-space-intel text-lg'>provide you and your business a value.</p>
              </motion.div>
            </div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className='flex flex-col sm:flex-row items-start sm:items-center gap-4 mt-8'
            >
              <button className='group bg-gradient-to-r from-blue-500 to-indigo-600 hover:from-blue-600 hover:to-indigo-700 transition-all duration-300 rounded-xl text-white px-8 py-3 font-space-grotesk w-full sm:w-auto text-lg shadow-lg hover:shadow-indigo-500/25'>
                <span className="flex items-center justify-center gap-2">
                  Discover More
                  <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
              <button className='text-slate-300 hover:text-indigo-400 cursor-pointer transition-colors duration-300 text-lg hover:underline decoration-indigo-400/50'>
                Contact Us
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className='flex flex-wrap items-center gap-x-6 gap-y-4 mt-12'
            >
              {[
                { icon: FiActivity, text: '24/7 Support' },
                { icon: FiActivity, text: '100% Transparency' }
              ].map((item, index) => (
                <React.Fragment key={index}>
                  {index > 0 && <div className='hidden sm:block text-slate-600'>•</div>}
                  <div className='flex items-center gap-2 group'>
                    <div className='bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg w-8 h-8 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300'>
                      <item.icon className="text-white text-lg" />
                    </div>
                    <p className='text-slate-300 font-space-grotesk group-hover:text-indigo-400 transition-colors duration-300'>{item.text}</p>
                  </div>
                </React.Fragment>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Right Section */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className='flex flex-col gap-6 w-full lg:w-1/2'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Active Users Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="shadow-lg flex-col rounded-xl gap-4 flex p-6 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm border border-slate-700/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className='flex gap-4 items-start'>
                <div className='bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg h-14 w-14 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300'>
                  <FiUsers className="text-white text-2xl" />
                </div>
                <div className="flex-col">
                  <div className="text-indigo-300 text-sm font-medium">Active Users</div>
                  <div className="text-blue-400 font-bold text-xl">44.3K</div>
                </div>
              </div>
              <div className='relative w-full h-[120px] bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg overflow-hidden'>
                <div className='absolute inset-0 flex items-end justify-around px-2'>
                  {[65, 45, 75, 55, 80, 70].map((height, i) => (
                    <motion.div 
                      key={i} 
                      className='w-[12%] h-full flex items-end'
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 0.8, delay: i * 0.1 }}
                    >
                      <div className='w-full bg-gradient-to-t from-blue-500 to-indigo-500 rounded-t-sm transition-all duration-500 group-hover:from-blue-400 group-hover:to-indigo-400 h-full' />
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Daily Revenue Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className='bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm border border-slate-700/50 rounded-xl flex flex-col shadow-lg p-6 hover:shadow-xl transition-all duration-300 group'
            >
              <div className='flex items-center gap-3 mb-6'>
                <div className='bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg h-14 w-14 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40'>
                  <FiTrendingUp className="text-white text-2xl" />
                </div>
                <div>
                  <div className='text-blue-400 text-lg font-bold'>$4.8k</div>
                  <p className='text-indigo-300 text-sm'>Daily Revenue</p>
                </div>
              </div>
              <div className='relative h-[140px] bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg overflow-hidden'>
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="areaGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.2" />
                      <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 150 Q 100 100, 200 130 T 400 110 L 400 200 L 0 200 Z"
                    fill="url(#areaGradient)"
                    className="transition-all duration-500"
                  />
                  <path
                    d="M0 150 Q 100 100, 200 130 T 400 110"
                    fill="none"
                    stroke="rgb(96, 165, 250)"
                    strokeWidth="3"
                    className="transition-all duration-500"
                  />
                </svg>
              </div>
            </motion.div>
          </div>

          {/* Engagement Card */}
          <motion.div 
            whileHover={{ scale: 1.02 }}
            className="shadow-lg flex-col bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm border border-slate-700/50 rounded-xl gap-6 flex p-6 hover:shadow-xl transition-all duration-300 group"
          >
            <div className='flex items-center gap-4'>
              <div className='bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg h-14 w-14 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40'>
                <FiBarChart2 className="text-white text-2xl" />
              </div>
              <div>
                <div className="text-blue-400 font-bold text-lg">
                  Engagements
                </div>
                <div className="text-indigo-300 text-sm">506 New Followers</div>
              </div>
            </div>
            <div className='relative w-full h-[200px] bg-gradient-to-br from-slate-900/50 to-transparent rounded-lg overflow-hidden'>
              <div className='absolute inset-0 flex items-end justify-around px-2'>
                <svg className="w-full h-full" viewBox="0 0 400 200" preserveAspectRatio="none">
                  <defs>
                    <linearGradient id="lineGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="rgb(59, 130, 246)" stopOpacity="0.3" />
                      <stop offset="100%" stopColor="rgb(59, 130, 246)" stopOpacity="0" />
                    </linearGradient>
                  </defs>
                  <path
                    d="M0 180 C 100 120, 200 160, 300 140 S 400 100, 400 100 L 400 200 L 0 200 Z"
                    fill="url(#lineGradient)"
                    className="transition-all duration-500"
                  />
                  <path
                    d="M0 180 C 100 120, 200 160, 300 140 S 400 100, 400 100"
                    fill="none"
                    stroke="rgb(96, 165, 250)"
                    strokeWidth="3"
                    className="transition-all duration-500"
                  />
                  {[180, 120, 160, 140, 100].map((y, i) => (
                    <circle
                      key={i}
                      cx={100 * i}
                      cy={y}
                      r="4"
                      fill="#1e293b"
                      stroke="rgb(96, 165, 250)"
                      strokeWidth="2"
                      className="transition-all duration-300 group-hover:r-6"
                    />
                  ))}
                </svg>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default LandingHero
