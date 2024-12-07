'use client'

import React from 'react'
import { FiUsers, FiTrendingUp, FiBarChart2, FiActivity } from 'react-icons/fi'
import { BiSupport } from 'react-icons/bi'
import { MdVerified } from 'react-icons/md'
import { FaLinkedin, FaYoutube, FaTiktok, FaTelegram } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { FaMeta } from 'react-icons/fa6'

const LandingHero = () => {
  const handleDiscoverMore = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleContactUs = () => {
    const contactSection = document.getElementById('contact');
    contactSection?.scrollIntoView({ behavior: 'smooth' });
  };

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
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                onClick={handleDiscoverMore}
                className='px-8 py-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white rounded-lg font-medium hover:from-blue-600 hover:to-indigo-600 transition-all duration-200 shadow-lg hover:shadow-xl'
              >
                Discover More
              </motion.button>
              <motion.button
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                onClick={handleContactUs}
                className='text-slate-300 hover:text-indigo-400 cursor-pointer transition-colors duration-300 text-lg hover:underline decoration-indigo-400/50'
              >
                Contact Us
              </motion.button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className='flex flex-wrap items-center gap-x-6 gap-y-4 mt-12'
            >
              {[
                { icon: BiSupport, text: '24/7 Support' },
                { icon: MdVerified, text: '100% Delivery Guarantee' }
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
          className='hidden lg:flex lg:flex-col gap-6 w-full lg:w-1/2'
        >
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
            {/* Active Users Card */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              className="shadow-lg flex-col rounded-xl gap-4 flex p-6 bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm border border-slate-700/50 hover:shadow-xl transition-all duration-300 group"
            >
              <div className='flex gap-4 items-start'>
                <div className='bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg h-14 w-14 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40'>
                  <FiUsers className="text-white text-2xl" />
                </div>
                <div className="flex-col">
                  <div className="text-indigo-300 text-sm font-medium">Active Users</div>
                  <div className="text-blue-400 font-bold text-xl">44.3K</div>
                </div>
              </div>
              <div className='relative w-full h-[120px] bg-gradient-to-t from-slate-900/50 to-transparent rounded-lg overflow-hidden'>
                <div className='absolute inset-0 flex items-end justify-around px-2'>
                  {[
                    { height: 65, delay: 0 },
                    { height: 45, delay: 0.1 },
                    { height: 75, delay: 0.2 },
                    { height: 55, delay: 0.3 },
                    { height: 80, delay: 0.4 },
                    { height: 70, delay: 0.5 }
                  ].map(({ height, delay }, i) => (
                    <motion.div 
                      key={i}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ 
                        height: `${height}%`,
                        opacity: 1
                      }}
                      transition={{
                        height: { duration: 1, delay, type: "spring", stiffness: 100 },
                        opacity: { duration: 0.5, delay }
                      }}
                      className="w-[15%] rounded-t-lg bg-gradient-to-t from-blue-500 to-indigo-400 relative group"
                    >
                      <motion.div 
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: delay + 0.3 }}
                        className="absolute -top-2 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      >
                        <div className="bg-white/10 backdrop-blur-sm px-2 py-1 rounded text-xs text-white">
                          {height}%
                        </div>
                      </motion.div>
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
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="shadow-lg flex-col bg-slate-800/50 hover:bg-slate-800 backdrop-blur-sm border border-slate-700/50 rounded-xl gap-6 flex p-6 hover:shadow-xl transition-all duration-300 group"
          >
            <div className='flex items-center gap-4'>
              <motion.div 
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                whileHover={{ 
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.5 }
                }}
                transition={{ duration: 0.5 }}
                className='bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg h-14 w-14 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40'
              >
                <motion.div
                  animate={{ 
                    scale: [1, 1.2, 1],
                    rotate: [0, 0, 0]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <FiBarChart2 className="text-white text-2xl" />
                </motion.div>
              </motion.div>
              <motion.div
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.div 
                  initial={{ y: -10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-blue-400 font-bold text-lg"
                >
                  Social Engagement
                </motion.div>
                <motion.div 
                  initial={{ y: 10 }}
                  animate={{ y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="text-indigo-300 text-sm"
                >
                  Growing Community
                </motion.div>
              </motion.div>
            </div>
            <div className='flex gap-4 px-2'>
              <div className="flex-1 space-y-2">
                {[
                  { icon: FaTelegram, colorClass: "text-blue-400", name: "Telegram", count: "15.2K", delay: 0 },
                  { icon: FaLinkedin, colorClass: "text-[#0077B5]", name: "LinkedIn", count: "8.7K", delay: 0.1 },
                  { icon: FaMeta, colorClass: "text-blue-500", name: "Meta", count: "6.5K", delay: 0.2 },
                  { icon: FaYoutube, colorClass: "text-red-600", name: "YouTube", count: "3.9K", delay: 0.3 },
                  { icon: FaTiktok, colorClass: "text-slate-200", name: "TikTok", count: "1.2K", delay: 0.4 }
                ].map((platform, index) => (
                  <motion.div 
                    key={platform.name}
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: platform.delay }}
                    whileHover={{ 
                      scale: 1.02, 
                      x: 5,
                      backgroundColor: "rgba(255, 255, 255, 0.05)"
                    }}
                    className="flex items-center justify-between p-2 rounded-lg hover:bg-slate-700/30 transition-all duration-300 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <motion.div
                        whileHover={{ 
                          scale: 1.2,
                          rotate: [0, -10, 10, -10, 0],
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        <platform.icon className={`${platform.colorClass} text-lg`} />
                      </motion.div>
                      <span className="text-slate-300 text-sm">{platform.name}</span>
                    </div>
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.3, delay: platform.delay + 0.2 }}
                      className="relative group"
                    >
                      <motion.span 
                        whileHover={{ y: -2 }}
                        className="text-blue-400 font-medium inline-block"
                      >
                        {platform.count}
                      </motion.span>
                      <motion.div
                        initial={{ scaleX: 0 }}
                        whileHover={{ scaleX: 1 }}
                        transition={{ duration: 0.2 }}
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-blue-400/50 origin-left"
                      />
                    </motion.div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default LandingHero
