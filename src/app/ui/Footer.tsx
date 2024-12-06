import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-[#141F39] text-white py-8 md:py-16">
      <div className="flex justify-center px-4 md:px-0">
        <div className="w-full md:w-[1384px]">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8 md:mb-12">
            {/* Company Info */}
            <div className="col-span-1">
              <div className="flex justify-center md:justify-start">
                <Image src="/logo.svg" alt="Eytta Logo" width={120} height={40} className="mb-6" />
              </div>
              <p className="text-gray-300 mb-4 text-center md:text-left">
                Your trusted partner in digital transformation and software solutions.
              </p>
              <div className="flex space-x-4 justify-center md:justify-start">
                <Link href="https://twitter.com" className="hover:text-blue-400 transition-colors">
                  <Image src="/images/twitter.svg" alt="Twitter" width={24} height={24} />
                </Link>
                <Link href="https://linkedin.com" className="hover:text-blue-400 transition-colors">
                  <Image src="/images/linkedin.svg" alt="LinkedIn" width={24} height={24} />
                </Link>
                <Link href="https://facebook.com" className="hover:text-blue-400 transition-colors">
                  <Image src="/images/facebook.svg" alt="Facebook" width={24} height={24} />
                </Link>
              </div>
            </div>

            {/* Quick Links */}
            <div className="col-span-1">
              <h3 className="font-bold text-xl mb-4 text-center md:text-left">Quick Links</h3>
              <ul className="space-y-3 text-center md:text-left">
                <li><Link href="/about" className="text-gray-300 hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="/services" className="text-gray-300 hover:text-white transition-colors">Services</Link></li>
                <li><Link href="/portfolio" className="text-gray-300 hover:text-white transition-colors">Portfolio</Link></li>
                <li><Link href="/contact" className="text-gray-300 hover:text-white transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Services */}
            <div className="col-span-1">
              <h3 className="font-bold text-xl mb-4 text-center md:text-left">Services</h3>
              <ul className="space-y-3 text-center md:text-left">
                <li><Link href="/web-development" className="text-gray-300 hover:text-white transition-colors">Web Development</Link></li>
                <li><Link href="/mobile-apps" className="text-gray-300 hover:text-white transition-colors">Mobile Apps</Link></li>
                <li><Link href="/digital-marketing" className="text-gray-300 hover:text-white transition-colors">Digital Marketing</Link></li>
                <li><Link href="/consulting" className="text-gray-300 hover:text-white transition-colors">IT Consulting</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="col-span-1">
              <h3 className="font-bold text-xl mb-4 text-center md:text-left">Contact Us</h3>
              <div className="space-y-3 text-center md:text-left">
                <p className="text-gray-300">
                  <span className="block font-semibold">Email:</span>
                  contact@eytta.com
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-6 md:pt-8 border-t border-gray-700">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-gray-400 text-center md:text-left"> 2024 Eytta. All rights reserved.</p>
              <div className="flex space-x-4 md:space-x-6">
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer