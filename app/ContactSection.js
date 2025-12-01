'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import { motion, useInView, AnimatePresence, useReducedMotion } from 'framer-motion'

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
  const prefersReducedMotion = useReducedMotion()

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isPopupOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isPopupOpen])

  const images = [
    { src: '/images/1.png', alt: 'Contact Card 1', rotation: -12, translateY: 4 },
    { src: '/images/2.jpg', alt: 'Contact Card 2', rotation: -6, translateY: 2 },
    { src: '/images/3.jpg', alt: 'Contact Card 3', rotation: 0, translateY: 0 },
    { src: '/images/portrait-young-african-american-man-with-vr-glasses.jpg', alt: 'Contact Card 4', rotation: 6, translateY: 2 }
  ]

  const cardVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 50, scale: prefersReducedMotion ? 1 : 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: prefersReducedMotion ? 0 : 0.8, ease: [0.22, 1, 0.36, 1] }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 100, rotate: 0 },
    visible: (i) => ({
      opacity: [0, 1, 1],
      y: prefersReducedMotion ? [0, 0] : [100, 0, -6, 0],
      rotate: prefersReducedMotion ? [0, images[i].rotation] : [0, images[i].rotation, images[i].rotation - 3, images[i].rotation],
      transition: {
        delay: prefersReducedMotion ? 0 : 0.4 + i * 0.12,
        duration: prefersReducedMotion ? 0.3 : 0.9,
        ease: [0.22, 1, 0.36, 1],
        repeat: prefersReducedMotion ? 0 : 10,
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
    setIsPopupOpen(false)
    setFormData({ name: '', email: '', mobile: '', city: '', service: '' })
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center py-12 sm:py-16 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background blobs - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: prefersReducedMotion ? 1 : [1, 1.2, 1], opacity: prefersReducedMotion ? 0.3 : [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-10 sm:top-20 right-10 sm:right-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30"
        />
        <motion.div
          animate={{ scale: prefersReducedMotion ? 1 : [1, 1.3, 1], opacity: prefersReducedMotion ? 0.2 : [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-48 sm:w-72 lg:w-96 h-48 sm:h-72 lg:h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-15 sm:opacity-20"
        />
      </div>

      <div ref={ref} className="relative flex flex-col items-center max-w-6xl w-full">
        {/* Image stack - mobile responsive */}
        <div className="relative flex items-end justify-center mb-[-16px] sm:mb-[-18px] lg:mb-[-26px] z-10 px-2 sm:px-4">
          <div className="flex items-end gap-1 sm:gap-2">
            {images.map((image, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                whileHover={prefersReducedMotion ? {} : {
                  scale: 1.1,
                  rotate: hoveredImage === i ? 0 : image.rotation,
                  y: -15,
                  zIndex: 50,
                  transition: { duration: 0.3 }
                }}
                onHoverStart={() => setHoveredImage(i)}
                onHoverEnd={() => setHoveredImage(null)}
                onTouchStart={() => setHoveredImage(i)}
                onTouchEnd={() => setHoveredImage(null)}
                className={`relative cursor-pointer ${i > 0 ? '-ml-6 sm:-ml-8 lg:-ml-12' : ''}`}
                style={{ 
                  rotate: `${image.rotation}deg`, 
                  translateY: `${image.translateY * 3}px`,
                  willChange: hoveredImage === i ? 'transform' : 'auto'
                }}
              >
                <div className="relative group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={200}
                    height={260}
                    sizes="(max-width: 640px) 25vw, (max-width: 1024px) 20vw, 200px"
                    className="rounded-lg sm:rounded-xl shadow-xl sm:shadow-2xl object-cover w-24 h-32 sm:w-32 sm:h-44 lg:w-48 lg:h-64 border-3 sm:border-4 border-white transition-all duration-300 group-hover:border-blue-400 group-active:border-blue-400"
                    priority={i < 2}
                    quality={85}
                  />
                  <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Contact Card - mobile responsive */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative w-full bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl sm:rounded-3xl shadow-2xl py-8 sm:py-12 lg:py-16 px-5 sm:px-8 lg:px-20 z-20 border border-white/10 backdrop-blur-sm pt-8 sm:pt-10 lg:pt-14"
        >
          <div className="absolute top-0 right-0 w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-2xl sm:blur-3xl" />
          <div className="absolute bottom-0 left-0 w-28 sm:w-40 h-28 sm:h-40 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-2xl sm:blur-3xl" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center lg:items-start justify-between gap-6 sm:gap-8">
            {/* Left Content */}
            <div className="flex-1 text-center lg:text-left w-full">
              <motion.h2
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: prefersReducedMotion ? 0 : 0.3, duration: prefersReducedMotion ? 0 : 0.6 }}
                className="text-white font-light leading-tight"
                style={{
                  fontSize: 'clamp(4rem, 8vw, 3.75rem)',
                  marginBottom: 'clamp(0.75rem, 3vw, 1rem)',
                }}
              >
                Let&apos;s get<br />
                <span className="italic font-normal bg-gradient-to-r from-white via-blue-100 to-purple-100 bg-clip-text text-transparent">
                  in touch
                </span>
              </motion.h2>

              {/* <motion.p
                initial={{ opacity: 0 }}
                animate={isInView ? { opacity: 1 } : {}}
                transition={{ delay: prefersReducedMotion ? 0 : 0.5, duration: prefersReducedMotion ? 0 : 0.6 }}
                className="text-gray-400 leading-relaxed mb-6 sm:mb-8 lg:mb-10 max-w-md mx-auto lg:mx-0"
                style={{
                  fontSize: 'clamp(0.875rem, 3vw, 1.125rem)',
                }}
              >
                Ready to transform your brand? Schedule a call and let&apos;s create something amazing together.
              </motion.p> */}

              <motion.button
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: prefersReducedMotion ? 0 : 0.7, duration: prefersReducedMotion ? 0 : 0.6 }}
                whileHover={prefersReducedMotion ? {} : { scale: 1.05, boxShadow: '0 0 30px rgba(59, 130, 246, 0.5)' }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setIsPopupOpen(true)}
                className="group relative px-6 sm:px-8 lg:px-10 py-2.5 sm:py-3 lg:py-4 border-2 border-white/80 text-white rounded-full font-medium transition-all hover:bg-white hover:text-black active:bg-white active:text-black overflow-hidden touch-manipulation"
                style={{
                  fontSize: 'clamp(0.875rem, 3vw, 1.125rem)',
                }}
                aria-label="Book a call with us"
              >
                <span className="relative z-10 flex items-center gap-2">
                  Book a Call
                  <motion.span
                    animate={prefersReducedMotion ? {} : { x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
              </motion.button>
            </div>

            <motion.div
              initial={{ opacity: 0, x: prefersReducedMotion ? 0 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: prefersReducedMotion ? 0 : 0.5, duration: prefersReducedMotion ? 0 : 0.8 }}
              className="hidden lg:block relative flex-shrink-0"
            >
              {/* <div className="relative w-56 xl:w-64 h-72 xl:h-80 rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/portrait-young-african-american-man-with-vr-glasses.jpg"
                  alt="Contact us - Team member"
                  width={300}
                  height={400}
                  sizes="(max-width: 1280px) 224px, 256px"
                  className="w-full h-full object-cover"
                  quality={85}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute inset-0 border-2 border-white/20 rounded-2xl" />
              </div> */}
              
              <motion.div
                animate={prefersReducedMotion ? {} : { y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 w-16 xl:w-20 h-16 xl:h-20 bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full blur-xl"
              />
            </motion.div>
          </div>
        </motion.div>

        {/* Floating decorative elements - reduced on mobile */}
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, -20, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute -right-6 sm:-right-10 top-16 sm:top-20 w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-xl sm:blur-2xl"
        />
        <motion.div
          animate={prefersReducedMotion ? {} : { y: [0, 15, 0], rotate: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          className="absolute -left-6 sm:-left-10 bottom-24 sm:bottom-32 w-18 sm:w-24 h-18 sm:h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-xl sm:blur-2xl"
        />
      </div>

      {/* Popup Form - Fully Mobile Responsive */}
      <AnimatePresence>
        {isPopupOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsPopupOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
              aria-hidden="true"
            />

            {/* Popup - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9, y: prefersReducedMotion ? 0 : 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.9, y: prefersReducedMotion ? 0 : 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 300 }}
              className="fixed inset-0 sm:inset-auto sm:top-1/2 sm:left-1/2 sm:-translate-x-1/2 sm:-translate-y-1/2 w-full sm:w-[90%] sm:max-w-4xl h-full sm:h-auto sm:max-h-[90vh] bg-gradient-to-br from-black via-gray-900 to-black sm:rounded-2xl shadow-2xl z-50 border-0 sm:border sm:border-white/10 overflow-y-auto overflow-x-hidden"
              role="dialog"
              aria-modal="true"
              aria-labelledby="contact-modal-title"
            >
              {/* Close button - mobile optimized */}
              <button
                onClick={() => setIsPopupOpen(false)}
                className="sticky sm:absolute top-4 right-4 w-10 h-10 sm:w-8 sm:h-8 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 active:bg-white/25 transition-colors text-white z-10 touch-manipulation"
                aria-label="Close contact form"
              >
                <svg className="w-6 h-6 sm:w-5 sm:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="flex flex-col md:flex-row h-full">
                {/* Form Section - Mobile friendly */}
                <div className="w-full md:w-1/2 p-6 sm:p-8">
                  <h3 id="contact-modal-title" className="text-xl sm:text-2xl font-semibold text-white mb-1 sm:mb-2">
                    We&apos;d love to hear from you!
                  </h3>

                  {/* Form - optimized for mobile */}
                  <form onSubmit={handleSubmit} className="space-y-3 sm:space-y-4 mt-4 sm:mt-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                        Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        autoComplete="name"
                        className="w-full px-4 py-2.5 sm:py-3 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 text-base touch-manipulation"
                        placeholder="Your name"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        autoComplete="email"
                        inputMode="email"
                        className="w-full px-4 py-2.5 sm:py-3 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 text-base touch-manipulation"
                        placeholder="your.email@example.com"
                      />
                    </div>

                    <div>
                      <label htmlFor="mobile" className="block text-sm font-medium text-gray-300 mb-1">Mobile</label>
                      <input
                        type="tel"
                        id="mobile"
                        name="mobile"
                        value={formData.mobile}
                        onChange={handleInputChange}
                        autoComplete="tel"
                        inputMode="tel"
                        className="w-full px-4 py-2.5 sm:py-3 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 text-base touch-manipulation"
                        placeholder="Your phone number"
                      />
                    </div>

                    <div>
                      <label htmlFor="city" className="block text-sm font-medium text-gray-300 mb-1">City</label>
                      <input
                        type="text"
                        id="city"
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        autoComplete="address-level2"
                        className="w-full px-4 py-2.5 sm:py-3 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500 text-base touch-manipulation"
                        placeholder="Your city"
                      />
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-300 mb-1">
                        Services Required <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-2.5 sm:py-3 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 text-base touch-manipulation appearance-none"
                        style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236b7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                          backgroundRepeat: 'no-repeat',
                          backgroundPosition: 'right 0.75rem center',
                          backgroundSize: '1.5em 1.5em',
                        }}
                      >
                        <option value="">Select here</option>
                        <option value="branding">Branding</option>
                        <option value="web-design">Web Design</option>
                        <option value="marketing">Marketing</option>
                        <option value="consulting">Consulting</option>
                      </select>
                    </div>

                    <motion.button
                      whileHover={prefersReducedMotion ? {} : { scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 sm:py-3.5 rounded-lg hover:from-blue-700 hover:to-purple-700 active:from-blue-800 active:to-purple-800 transition-all shadow-lg hover:shadow-xl mt-4 sm:mt-6 text-base touch-manipulation"
                    >
                      Submit
                    </motion.button>
                  </form>
                </div>

                {/* Image Section - Hidden on mobile */}
                <div className="hidden md:block w-1/2 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                  <Image
                    src="/images/about-2.png"
                    alt="Contact us visual"
                    width={500}
                    height={600}
                    sizes="50vw"
                    className="w-full h-full object-cover"
                    quality={85}
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40" />
                  
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
    </section>
  )
}
