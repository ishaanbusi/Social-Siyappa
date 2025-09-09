'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">SOCIAL SIYAPPA</span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            <Link 
              href="/" 
              className={`relative font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-gray-900 text-base' 
                  : 'text-gray-600 text-sm hover:text-gray-900'
              }`}
            >
              Home
              {isActive('/') && (
                <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-black rounded-full"></span>
              )}
            </Link>
            <Link 
              href="/about" 
              className={`relative font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-gray-900 text-base' 
                  : 'text-gray-600 text-sm hover:text-gray-900'
              }`}
            >
              About
              {isActive('/about') && (
                <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-black rounded-full"></span>
              )}
            </Link>
            <Link 
              href="/services" 
              className={`relative font-medium transition-colors duration-200 ${
                isActive('/services') 
                  ? 'text-gray-900 text-base' 
                  : 'text-gray-600 text-sm hover:text-gray-900'
              }`}
            >
              Services
              {isActive('/services') && (
                <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-black rounded-full"></span>
              )}
            </Link>
            <Link 
              href="/work" 
              className={`relative font-medium transition-colors duration-200 ${
                isActive('/work') 
                  ? 'text-gray-900 text-base' 
                  : 'text-gray-600 text-sm hover:text-gray-900'
              }`}
            >
              Work
              {isActive('/work') && (
                <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-black rounded-full"></span>
              )}
            </Link>
            <Link 
              href="/blog" 
              className={`relative font-medium transition-colors duration-200 ${
                isActive('/blog') 
                  ? 'text-gray-900 text-base' 
                  : 'text-gray-600 text-sm hover:text-gray-900'
              }`}
            >
              Blog
              {isActive('/blog') && (
                <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-black rounded-full"></span>
              )}
            </Link>
            <Link 
              href="/contact" 
              className={`relative font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-gray-900 text-base' 
                  : 'text-gray-600 text-sm hover:text-gray-900'
              }`}
            >
              Contact
              {isActive('/contact') && (
                <span className="absolute -bottom-5 left-0 right-0 h-0.5 bg-black rounded-full"></span>
              )}
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="lg:hidden flex flex-col items-center justify-center w-6 h-6 space-y-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-5 h-0.5 bg-gray-700 transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-80 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <nav className="py-6 space-y-4 border-t border-gray-100">
            <Link 
              href="/" 
              className={`block font-medium transition-colors duration-200 ${
                isActive('/') 
                  ? 'text-gray-900 text-lg' 
                  : 'text-gray-600 text-base hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
              {isActive('/') && (
                <span className="block w-8 h-0.5 bg-black rounded-full mt-1"></span>
              )}
            </Link>
            <Link 
              href="/about" 
              className={`block font-medium transition-colors duration-200 ${
                isActive('/about') 
                  ? 'text-gray-900 text-lg' 
                  : 'text-gray-600 text-base hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              About
              {isActive('/about') && (
                <span className="block w-8 h-0.5 bg-black rounded-full mt-1"></span>
              )}
            </Link>
            <Link 
              href="/services" 
              className={`block font-medium transition-colors duration-200 ${
                isActive('/services') 
                  ? 'text-gray-900 text-lg' 
                  : 'text-gray-600 text-base hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Services
              {isActive('/services') && (
                <span className="block w-8 h-0.5 bg-black rounded-full mt-1"></span>
              )}
            </Link>
            <Link 
              href="/work" 
              className={`block font-medium transition-colors duration-200 ${
                isActive('/work') 
                  ? 'text-gray-900 text-lg' 
                  : 'text-gray-600 text-base hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Work
              {isActive('/work') && (
                <span className="block w-8 h-0.5 bg-black rounded-full mt-1"></span>
              )}
            </Link>
            <Link 
              href="/blog" 
              className={`block font-medium transition-colors duration-200 ${
                isActive('/blog') 
                  ? 'text-gray-900 text-lg' 
                  : 'text-gray-600 text-base hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Blog
              {isActive('/blog') && (
                <span className="block w-8 h-0.5 bg-black rounded-full mt-1"></span>
              )}
            </Link>
            <Link 
              href="/contact" 
              className={`block font-medium transition-colors duration-200 ${
                isActive('/contact') 
                  ? 'text-gray-900 text-lg' 
                  : 'text-gray-600 text-base hover:text-gray-900'
              }`}
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
              {isActive('/contact') && (
                <span className="block w-8 h-0.5 bg-black rounded-full mt-1"></span>
              )}
            </Link>
            <div className="pt-4">
              <button 
                className="w-full bg-gray-900 hover:bg-gray-800 text-white text-base font-medium px-6 py-3 rounded-lg transition-colors duration-200"
                onClick={() => setIsMenuOpen(false)}
              >
                Get Started
              </button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
