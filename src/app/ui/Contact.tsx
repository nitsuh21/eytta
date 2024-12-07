import React from 'react'
import { FaTelegram } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <div className="relative bg-slate-900 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-gradient-to-b from-blue-500/30 via-violet-500/30 to-transparent opacity-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-blue-500/20 via-indigo-500/20 to-transparent opacity-30 blur-3xl"></div>
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-gradient-to-tl from-purple-500/20 via-violet-500/20 to-transparent opacity-30 blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 py-24 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400 mb-4">
            Get in Touch
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Have a project in mind? We'd love to hear from yoHave a project in mind? We&apos;d love to hear from you. Choose your preferred way to connect with us.u. Choose your preferred way to connect with us.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          {/* Email Card */}
          <a 
            href="mailto:contact@eytta.com" 
            className="group relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-xl group-hover:bg-blue-500/30 transition-all duration-300"></div>
                <MdEmail className="w-8 h-8 text-blue-400 group-hover:text-blue-300 transition-colors duration-300 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                Email Us
              </h3>
              <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors duration-300">
                Send us an email anytime. We'll get back to you within 24 hours.
              </p>
              <span className="text-blue-400 font-medium group-hover:text-blue-300 transition-colors duration-300">
                contact@eytta.com
              </span>
            </div>
          </a>

          {/* Telegram Card */}
          <a 
            href="https://t.me/eytta" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="group relative bg-slate-800/50 backdrop-blur-xl rounded-2xl p-8 border border-slate-700/50 hover:bg-slate-800/70 transition-all duration-300"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-violet-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
            <div className="relative flex flex-col items-center text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-4">
                <div className="absolute inset-0 bg-violet-500/20 rounded-full blur-xl group-hover:bg-violet-500/30 transition-all duration-300"></div>
                <FaTelegram className="w-8 h-8 text-violet-400 group-hover:text-violet-300 transition-colors duration-300 relative z-10" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-violet-400 transition-colors duration-300">
                Telegram
              </h3>
              <p className="text-slate-400 mb-4 group-hover:text-slate-300 transition-colors duration-300">
                Join our Telegram channel for quick responses and updates.
              </p>
              <span className="text-violet-400 font-medium group-hover:text-violet-300 transition-colors duration-300">
                @eytta
              </span>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact
