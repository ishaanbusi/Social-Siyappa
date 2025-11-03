'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence } from 'framer-motion'

export default function ContactSection() {
  const [hoveredImage, setHoveredImage] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    service: ''
  })
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.3 })

  const images = [
    { src: '/images/1.png', alt: 'Contact Card 1', rotation: -12, translateY: 4 },
    { src: '/images/2.jpg', alt: 'Contact Card 2', rotation: -6, translateY: 2 },
    { src: '/images/3.jpg', alt: 'Contact Card 3', rotation: 0, translateY: 0 },
    { src: '/images/4.jpg', alt: 'Contact Card 4', rotation: 6, translateY: 2 }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, y: 100, rotate: 0 },
    visible: (i) => ({
      opacity: [0, 1, 1],
      y: [100, 0, -6, 0],
      rotate: [0, images[i].rotation, images[i].rotation - 3, images[i].rotation],
      transition: {
        delay: 0.4 + i * 0.12,
        duration: 0.9,
        ease: [0.22, 1, 0.36, 1],
        repeat: 10,
        repeatType: 'mirror',
        repeatDelay: 0.35
      }
    })
  }

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    // Add your form submission logic here
    setIsPopupOpen(false)
    setFormData({ name: '', email: '', mobile: '', city: '', service: '' })
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"
        />
      </div>

      <div ref={ref} className="relative flex flex-col items-center max-w-6xl w-full">
        {/* Image stack */}
        <div className="relative flex items-end justify-center mb-[-18px] sm:mb-[-21px] lg:mb-[-26px] z-10 px-4">
          <div className="flex items-end gap-2 sm:gap-0">
            {images.map((image, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                whileHover={{
                  scale: 1.1,
                  rotate: hoveredImage === i ? 0 : image.rotation,
                  y: -15,
                  zIndex: 50,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredImage(i)}
                onHoverEnd={() => setHoveredImage(null)}
                className={`relative cursor-pointer ${i > 0 ? '-ml-8 sm:-ml-10 lg:-ml-12' : ''}`}
                style={{ rotate: `${image.rotation}deg`, translateY: `${image.translateY * 4}px` }}
              >
                <div className="relative group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={260}
                    className="rounded-xl shadow-2xl object-cover w-32 h-44 sm:w-40 sm:h-52 lg:w-48 lg:h-64 border-4 border-white transition-all duration-300 group-hover:border-blue-400"
                    priority
                  />
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative w-full bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl shadow-2xl py-12 sm:py-14 lg:py-16 px-6 sm:px-12 lg:px-20 z-20 border border-white/10 backdrop-blur-sm pt-10 sm:pt-12 lg:pt-14"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl" />

          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-white text-4xl sm:text-5xl lg:text-6xl font-light mb-3 leading-tight"
            >
              Let&apos;s get<br />
              <span className="italic font-normal bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                in touch
              </span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="text-gray-400 text-base sm:text-lg mb-8 sm:mb-10 max-w-md"
            >
              Ready to transform your brand? Schedule a call and let&apos;s create something amazing together.
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.7, duration: 0.6 }}
              whileHover={{ scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsPopupOpen(true)}
              className="group relative px-8 sm:px-10 py-3 sm:py-4 border-2 border-white/80 text-white rounded-full text-base sm:text-lg font-medium transition-all hover:bg-white hover:text-black overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                Book a Call
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
            </motion.button>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-10 top-20 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -left-10 bottom-32 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
        />
      </div>

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
        className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-md bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl shadow-2xl z-50 p-8 border border-white/10"
      >
        {/* Close button */}
        <button
          onClick={() => setIsPopupOpen(false)}
          className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

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
      </motion.div>
    </>
  )}
</AnimatePresence>

    </section>
  )
}
