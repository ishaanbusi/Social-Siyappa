'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="w-14 h-14 rounded-lg overflow-hidden flex items-center justify-center">
                <Image
                  src="/images/logo.png"
                  alt="Social Siyappa Logo"
                  width={56}
                  height={56}
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-10">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`relative font-medium transition-colors duration-200 ${
                  isActive(href)
                    ? 'text-gray-900 text-base'
                    : 'text-gray-600 text-sm hover:text-gray-900'
                }`}
              >
                {label}
                {isActive(href) && (
                  <span className="absolute -bottom-3 left-0 right-0 h-0.5 bg-black rounded-full"></span>
                )}
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex">
            <button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-200">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden flex flex-col items-center justify-center w-8 h-8 space-y-1.5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`w-6 h-0.5 bg-gray-700 transition-all duration-300 ${
                isMenuOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
          } overflow-hidden`}
        >
          <nav className="py-6 space-y-4 border-t border-gray-100">
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`block font-medium transition-colors duration-200 ${
                  isActive(href)
                    ? 'text-gray-900 text-lg'
                    : 'text-gray-600 text-base hover:text-gray-900'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {label}
                {isActive(href) && (
                  <span className="block w-8 h-0.5 bg-black rounded-full mt-1"></span>
                )}
              </Link>
            ))}
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
