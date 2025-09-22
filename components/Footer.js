import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        {/* Left Side - Main Navigation */}
        <div className="flex flex-col space-y-3 text-sm">
          <Link href="/" className="hover:text-gray-300">Home</Link>
          <Link href="/blogs" className="hover:text-gray-300">Blogs</Link>
          <Link href="/service" className="hover:text-gray-300">Service</Link>
          <Link href="/about" className="hover:text-gray-300">About</Link>
          <Link href="/contact" className="hover:text-gray-300">Contact Us</Link>
        </div>

        {/* Center - Legal Links */}
        <div className="flex flex-col space-y-3 text-sm text-center">
          <Link href="/privacy" className="hover:text-gray-300">Privacy Statement</Link>
          <Link href="/terms" className="hover:text-gray-300">Terms & Conditions</Link>
          <Link href="/cookies" className="hover:text-gray-300">Cookies Policy / Settings</Link>
          <Link href="/locations" className="hover:text-gray-300">Locations</Link>
        </div>

        {/* Right Side - Social Icons, Logo, Copyright */}
        <div className="flex flex-col items-center md:items-end space-y-4">
          {/* Social Icons */}
          <div className="flex space-x-5">
            <Link href="#" className="hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452z"/>
              </svg>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </Link>
            <Link href="mailto:" className="hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </Link>
            <Link href="#" className="hover:text-gray-300">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zM16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
              </svg>
            </Link>
          </div>

          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="flex">
              <div className="w-4 h-4 bg-orange-400 mr-1"></div>
              <div className="w-4 h-4 bg-green-400"></div>
            </div>
            <div className="flex ml-1">
              <div className="w-4 h-4 bg-blue-500 mr-1"></div>
              <div className="w-4 h-4 bg-pink-500"></div>
            </div>
            <div className="ml-3">
              <div className="text-white font-semibold text-base leading-tight">Social</div>
              <div className="text-white font-semibold text-base leading-tight">Siyappa</div>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-white text-xs font-mono tracking-widest">
            © 2025 Social Siyappa
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
