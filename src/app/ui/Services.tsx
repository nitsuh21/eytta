'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FiCode, FiLayout, FiSmartphone, FiTrendingUp, FiSearch, FiShield } from 'react-icons/fi'

const Services = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null)

  const services = [
    {
      icon: FiCode,
      title: "Custom Software Development",
      description: "Build scalable, robust applications tailored to your business needs. From web apps to enterprise solutions, we deliver cutting-edge software that drives innovation.",
      features: [
        "Full-stack Development",
        "Cloud-native Solutions",
        "API Integration",
        "Database Design"
      ],
      gradient: "from-blue-500 via-indigo-500 to-purple-500"
    },
    {
      icon: FiLayout,
      title: "UI/UX Design",
      description: "Create stunning, intuitive interfaces that captivate users. Our design process focuses on user experience while maintaining visual excellence.",
      features: [
        "User Research",
        "Wireframing",
        "Prototype Development",
        "Design Systems"
      ],
      gradient: "from-purple-500 via-pink-500 to-red-500"
    },
    {
      icon: FiSmartphone,
      title: "Mobile App Development",
      description: "Develop powerful, feature-rich mobile applications for iOS and Android. We create engaging mobile experiences that users love.",
      features: [
        "Native Development",
        "Cross-platform Apps",
        "App Store Optimization",
        "Performance Tuning"
      ],
      gradient: "from-green-500 via-teal-500 to-blue-500"
    },
    {
      icon: FiTrendingUp,
      title: "Digital Marketing",
      description: "Boost your online presence with data-driven marketing strategies. We help you reach your target audience and achieve measurable results.",
      features: [
        "SEO Optimization",
        "Content Strategy",
        "Social Media Marketing",
        "Analytics & Reporting"
      ],
      gradient: "from-orange-500 via-red-500 to-pink-500"
    },
    {
      icon: FiSearch,
      title: "AI & Machine Learning",
      description: "Harness the power of artificial intelligence to transform your business. We implement cutting-edge AI solutions for real-world challenges.",
      features: [
        "Predictive Analytics",
        "Natural Language Processing",
        "Computer Vision",
        "Machine Learning Models"
      ],
      gradient: "from-cyan-500 via-blue-500 to-indigo-500"
    },
    {
      icon: FiShield,
      title: "Cybersecurity",
      description: "Protect your digital assets with enterprise-grade security solutions. We ensure your systems are secure, compliant, and resilient.",
      features: [
        "Security Audits",
        "Penetration Testing",
        "Compliance Management",
        "Incident Response"
      ],
      gradient: "from-emerald-500 via-green-500 to-teal-500"
    }
  ]

  return (
    <div className="w-full bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 py-20 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -left-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-blue-500/10 to-transparent blur-3xl"></div>
        <div className="absolute -bottom-1/2 -right-1/2 w-[1000px] h-[1000px] rounded-full bg-gradient-to-br from-indigo-500/10 to-transparent blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 mb-4"
          >
            Our Services
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-slate-400 text-lg max-w-2xl mx-auto"
          >
            Transforming ideas into digital reality with our comprehensive suite of services
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onHoverStart={() => setHoveredService(index)}
              onHoverEnd={() => setHoveredService(null)}
              className="relative group"
            >
              <div className="h-full p-6 rounded-2xl bg-gradient-to-br from-slate-800/50 via-slate-900/50 to-indigo-900/30 backdrop-blur-sm border border-slate-700/50 hover:border-blue-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10">
                {/* Service Icon */}
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-r ${service.gradient} p-0.5 mb-6`}>
                  <div className="w-full h-full rounded-xl bg-slate-950 flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Service Content */}
                <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-slate-400 mb-6">{service.description}</p>

                {/* Features List */}
                <AnimatePresence>
                  {hoveredService === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-2"
                    >
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={featureIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: featureIndex * 0.1 }}
                          className="flex items-center text-slate-300"
                        >
                          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.gradient} mr-3`} />
                          {feature}
                        </motion.li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Services
