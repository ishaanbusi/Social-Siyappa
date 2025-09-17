import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-12 px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-start">
          {/* Left side - Navigation Links */}
          <div className="flex gap-48">
            {/* First column */}
            <div className="flex flex-col space-y-4">
              <Link href="/" className="text-white text-sm no-underline hover:no-underline">
                Home
              </Link>
              <Link href="/blogs" className="text-white text-sm no-underline hover:no-underline">
                Blogs
              </Link>
              <Link href="/service" className="text-white text-sm no-underline hover:no-underline">
                Service
              </Link>
              <Link href="/about" className="text-white text-sm no-underline hover:no-underline">
                About
              </Link>
              <Link href="/contact" className="text-white text-sm no-underline hover:no-underline">
                Contact Us
              </Link>
            </div>
            
            {/* Second column */}
            <div className="flex flex-col space-y-4">
              <Link href="/privacy" className="text-white text-sm no-underline hover:no-underline">
                Privacy Statement
              </Link>
              <Link href="/terms" className="text-white text-sm no-underline hover:no-underline">
                Terms & Conditions
              </Link>
              <Link href="/cookies" className="text-white text-sm no-underline hover:no-underline">
                Cookies Policy / Settings
              </Link>
              <Link href="/locations" className="text-white text-sm no-underline hover:no-underline">
                Locations
              </Link>
            </div>
          </div>

          {/* Right side - Social Icons, Logo, and Copyright */}
          <div className="flex flex-col items-center">
            {/* Social Icons with horizontal lines */}
            <div className="flex items-center space-x-4 mb-6">
              {/* LinkedIn with lines */}
              <div className="flex items-center">
                <div className="w-8 h-px bg-white mr-3"></div>
                <Link href="#" className="text-white">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                <div className="w-8 h-px bg-white ml-3"></div>
              </div>

              {/* Facebook */}
              <Link href="#" className="text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
                </svg>
              </Link>

              {/* Email */}
              <Link href="mailto:" className="text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </Link>

              {/* Instagram */}
              <Link href="#" className="text-white">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zM16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"/>
                </svg>
              </Link>
            </div>

            {/* Horizontal line separator */}
            <div className="w-full h-px bg-white mb-6"></div>

            {/* Social Siyappa Logo */}
            <div className="flex items-center mb-4">
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
              copyright @2025
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;