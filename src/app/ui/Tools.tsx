'use client'

import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SiPython, SiJavascript, SiTypescript, SiReact, SiNextdotjs, SiTailwindcss, 
         SiGoogleanalytics, SiHubspot, SiMailchimp, SiShopify, SiWordpress, SiWix,
         SiFigma, SiAdobexd, SiAdobephotoshop, SiCanva, SiMeta,
         SiLinkedin, SiInstagram, SiBuffer, SiHootsuite, SiZapier, SiAirtable,
         SiAsana, SiTrello, SiNotion, SiSlack } from 'react-icons/si'

const Tools = () => {
  const [isMounted, setIsMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState('Development')

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const tools = [
    // Development Tools
    { icon: SiPython, name: 'Python', category: 'Development' },
    { icon: SiJavascript, name: 'JavaScript', category: 'Development' },
    { icon: SiTypescript, name: 'TypeScript', category: 'Development' },
    { icon: SiReact, name: 'React', category: 'Development' },
    { icon: SiNextdotjs, name: 'Next.js', category: 'Development' },
    { icon: SiTailwindcss, name: 'Tailwind', category: 'Development' },
    
    // Marketing Tools
    { icon: SiGoogleanalytics, name: 'Analytics', category: 'Marketing' },
    { icon: SiHubspot, name: 'HubSpot', category: 'Marketing' },
    { icon: SiMailchimp, name: 'Mailchimp', category: 'Marketing' },
    { icon: SiShopify, name: 'Shopify', category: 'Marketing' },
    { icon: SiWordpress, name: 'WordPress', category: 'Marketing' },
    { icon: SiWix, name: 'Wix', category: 'Marketing' },
    
    // Design Tools
    { icon: SiFigma, name: 'Figma', category: 'Design' },
    { icon: SiAdobexd, name: 'Adobe XD', category: 'Design' },
    { icon: SiAdobephotoshop, name: 'Photoshop', category: 'Design' },
    { icon: SiCanva, name: 'Canva', category: 'Design' },
    
    // Social Media
    { icon: SiMeta, name: 'Meta', category: 'Social' },
    { icon: SiLinkedin, name: 'LinkedIn', category: 'Social' },
    { icon: SiInstagram, name: 'Instagram', category: 'Social' },
    
    // Management Tools
    { icon: SiBuffer, name: 'Buffer', category: 'Management' },
    { icon: SiHootsuite, name: 'Hootsuite', category: 'Management' },
    { icon: SiZapier, name: 'Zapier', category: 'Management' },
    { icon: SiAirtable, name: 'Airtable', category: 'Management' },
    { icon: SiAsana, name: 'Asana', category: 'Management' },
    { icon: SiTrello, name: 'Trello', category: 'Management' },
    { icon: SiNotion, name: 'Notion', category: 'Management' },
    { icon: SiSlack, name: 'Slack', category: 'Management' },
  ]

  const categories = ['Development', 'Marketing', 'Design', 'Social', 'Management']

  if (!isMounted) {
    return null
  }

  return (
    <div className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-4">
            Our Technology Stack
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We leverage cutting-edge tools and technologies to deliver exceptional digital solutions
          </p>
        </div>

        {/* Category Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`text-center px-4 py-2 rounded-full transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg shadow-blue-500/25'
                  : 'bg-gradient-to-r from-blue-500/10 to-indigo-500/10 border border-blue-500/20 backdrop-blur-sm text-blue-400 hover:border-blue-400/40'
              }`}
            >
              <span className="text-sm font-medium">{category}</span>
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6"
            >
              {tools
                .filter((tool) => tool.category === selectedCategory)
                .map((tool, index) => (
                  <motion.div
                    key={tool.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="group"
                  >
                    <div className="w-full aspect-square flex flex-col items-center justify-center p-4 rounded-2xl bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-indigo-900/30 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                      <tool.icon className="w-12 h-12 text-blue-400 group-hover:text-blue-300 transition-colors duration-300" />
                      <span className="mt-4 text-sm text-slate-400 group-hover:text-slate-300 text-center transition-colors duration-300">
                        {tool.name}
                      </span>
                    </div>
                  </motion.div>
                ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default Tools
