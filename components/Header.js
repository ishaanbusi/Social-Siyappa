'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    service: ''
  })
  
  const pathname = usePathname()

  const isActive = (path) => pathname === path

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/case-studies', label: 'Case Studies' },
    // { href: '/blogs', label: 'Blogs' },
    { href: '/contact', label: 'Contact' },
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your form submission logic here
    console.log('Form submitted:', formData)
    
    // Reset form and close popup
    setFormData({
      name: '',
      email: '',
      mobile: '',
      city: '',
      service: ''
    })
    setIsPopupOpen(false)
  }

  return (
    <>
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <div className="w-24 h-24 rounded-lg overflow-hidden flex items-center justify-center">
                  <Image
                    src="/images/logo.png"
                    alt="Social Siyappa Logo"
                    width={76}
                    height={76}
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
                  className={`relative font-large transition-colors duration-200 ${
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
              <button 
                onClick={() => setIsPopupOpen(true)}
                className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-6 py-2.5 rounded-lg transition-all duration-200"
              >
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
                  className={`block font-large transition-colors duration-200 ${
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
                  onClick={() => {
                    setIsMenuOpen(false)
                    setIsPopupOpen(true)
                  }}
                >
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        </div>
      </header>

      {/* Popup Form */}
      <AnimatePresence>
        {isPopupOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            />

            {/* Popup */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl shadow-2xl z-50 border border-white/10 overflow-hidden"
            >
              {/* Close button */}
              <button
                onClick={() => setIsPopupOpen(false)}
                className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white z-10"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row">
                {/* Form Section - Left */}
                <div className="w-full md:w-1/2 p-8">
                  {/* Form Header */}
                  <h3 className="text-2xl font-semibold text-white mb-2">We&apos;d love to hear from you!</h3>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="space-y-4 mt-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">Mobile</label>
                      <input
                        type="tel"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">City</label>
                      <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full px-4 py-2.5 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                        placeholder="Your city"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-1">
                        Services Required <span className="text-red-400">*</span>
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900"
                      >
                        <option value="">Select here</option>
                        <option value="branding">Branding</option>
                        <option value="web-design">Web Design</option>
                        <option value="marketing">Marketing</option>
                        <option value="consulting">Consulting</option>
                      </select>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl mt-6"
                    >
                      Submit
                    </motion.button>
                  </form>
                </div>

                {/* Image Section - Right */}
                <div className="hidden md:block w-1/2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <Image
                    src="/images/about-2.png"
                    alt="Contact us"
                    width={500}
                    height={600}
                    className="w-full h-full object-cover"
                    priority
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40" />
                  
                  {/* Optional decorative content on image */}
                  <div className="absolute bottom-8 left-8 right-8 text-white">
                    <h4 className="text-2xl font-bold mb-2">Let&apos;s Create Together</h4>
                    <p className="text-gray-200">Transform your vision into reality</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}
