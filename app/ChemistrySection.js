'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ChemistrySection() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const prefersReducedMotion = useReducedMotion()

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.15,
        delayChildren: prefersReducedMotion ? 0 : 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: prefersReducedMotion ? 0 : -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: prefersReducedMotion ? 0 : i * 0.08,
        duration: prefersReducedMotion ? 0 : 0.4,
        ease: 'easeOut'
      }
    })
  }

  return (
    <section className="bg-gradient-to-br from-[#191919] via-[#1a1a1a] to-[#151515] flex flex-col items-center justify-center py-6 sm:py-10 lg:py-16 px-3 sm:px-4 lg:px-8 relative overflow-hidden min-h-screen">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '48px 48px'
        }}></div>
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="max-w-7xl w-full space-y-4 sm:space-y-5 lg:space-y-7 relative z-10"
      >
        {/* Top Row - Mobile optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
          {/* Left Text Block - Mobile responsive */}
          <motion.div
            variants={itemVariants}
            className="group bg-gradient-to-br from-[#2a2a2a] to-[#242424] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 flex flex-col justify-between min-h-[320px] sm:min-h-[280px] lg:h-[340px] shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] transition-all duration-500 border border-white/5 hover:border-white/10 overflow-hidden"
          >
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: prefersReducedMotion ? 0 : 0.3, duration: prefersReducedMotion ? 0 : 0.6 }}
                className="font-bold text-white leading-tight mb-5 sm:mb-6 lg:mb-7 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
                style={{
                  fontSize: 'clamp(1.5rem, 5vw, 2.25rem)',
                }}
              >
                When Chemistry<br />Turns Ideas Into Impact
              </motion.h2>
              
              <ul className="space-y-2 sm:space-y-2.5 lg:space-y-3.5">
                {[
                  { label: 'Brains With Imagination' },
                  { label: 'Methods That Work' },
                  { label: 'Success You Can See' },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={listItemVariants}
                    className="flex items-start gap-2 sm:gap-2.5 group/item"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mt-1.5 group-hover/item:scale-150 transition-transform flex-shrink-0"></span>
                    <div className="flex-1 min-w-0">
                      <span 
                        className="font-bold italic text-white block mb-0.5 group-hover/item:text-blue-300 transition-colors"
                        style={{
                          fontSize: 'clamp(0.875rem, 3vw, 1.125rem)',
                        }}
                      >
                        {item.label}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <p 
              className="mt-3 sm:mt-4 text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors"
              style={{
                fontSize: 'clamp(0.75rem, 2.5vw, 1rem)',
              }}
            >
              From first glance to final sale, we help your brand grow with precision and purpose.
            </p>

            <div className="mt-3 sm:mt-4 flex justify-end">
              <motion.button
                whileHover={prefersReducedMotion ? {} : { scale: 1.05 }}
                whileTap={prefersReducedMotion ? {} : { scale: 0.95 }}
                className="text-white text-2xl sm:text-3xl lg:text-4xl font-bold hover:text-blue-400 active:text-blue-400 transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 active:bg-white/15 rounded-full w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 flex items-center justify-center flex-shrink-0 touch-manipulation"
                aria-label="Learn more about our chemistry"
              >
                ↗
              </motion.button>
            </div>
          </motion.div>

          {/* Right Large Image - Mobile optimized */}
          <motion.div
            variants={itemVariants}
            onHoverStart={() => setHoveredCard('main')}
            onHoverEnd={() => setHoveredCard(null)}
            onTouchStart={() => setHoveredCard('main')}
            onTouchEnd={() => setHoveredCard(null)}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden min-h-[220px] sm:min-h-[240px] lg:h-[340px] w-full shadow-2xl group border border-white/5"
          >
            <motion.div
              animate={hoveredCard === 'main' ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full"
              style={{ willChange: hoveredCard === 'main' ? 'transform' : 'auto' }}
            >
              <Image
                src="/images/home-bg.jpg"
                alt="Chemistry and collaboration visual"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                quality={85}
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </div>

        {/* Bottom Row - Mobile stacked, tablet/desktop grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 lg:gap-6">
          {/* Left Medium Image */}
          <motion.div
            variants={itemVariants}
            onHoverStart={() => setHoveredCard('left')}
            onHoverEnd={() => setHoveredCard(null)}
            onTouchStart={() => setHoveredCard('left')}
            onTouchEnd={() => setHoveredCard(null)}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden min-h-[200px] sm:min-h-[180px] lg:h-[240px] w-full shadow-2xl group border border-white/5"
          >
            <motion.div
              animate={hoveredCard === 'left' ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full"
              style={{ willChange: hoveredCard === 'left' ? 'transform' : 'auto' }}
            >
              <Image
                src="/images/home1.png"
                alt="Team collaboration"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
                className="object-cover"
                quality={85}
                loading="lazy"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>
          </motion.div>

          {/* Center Caption Card - Mobile full width */}
          <motion.div
            variants={itemVariants}
            whileHover={prefersReducedMotion ? {} : { y: -6 }}
            className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-7 flex flex-col justify-center items-center border-2 border-white/10 text-white text-center min-h-[280px] sm:min-h-[180px] lg:h-[240px] hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] group sm:col-span-2 lg:col-span-1"
          >
            <motion.div
              initial={{ opacity: 0, scale: prefersReducedMotion ? 1 : 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: prefersReducedMotion ? 0 : 0.8, duration: prefersReducedMotion ? 0 : 0.5 }}
              className="w-full"
            >
              <h3 
                className="uppercase font-bold tracking-widest mb-2 sm:mb-3 text-gray-400 group-hover:text-white transition-colors"
                style={{
                  fontSize: 'clamp(0.625rem, 2vw, 0.875rem)',
                }}
              >
                WE START WITH PEOPLE
              </h3>
              <div className="w-8 sm:w-10 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-2 sm:mb-3"></div>
              <p 
                className="font-light leading-relaxed text-gray-400 max-w-xs mx-auto group-hover:text-gray-300 transition-colors"
                style={{
                  fontSize: 'clamp(0.75rem, 2.5vw, 0.875rem)',
                }}
              >
                What drives them, what delights them, and what makes them choose.<br />
                Then we craft stories that stop the scroll and stay in the mind.<br />
                The result is simple: brands that feel alive,<br />
                campaigns that convert, and audiences that return.
              </p>
            </motion.div>
          </motion.div>

          {/* Right Medium Image */}
          <motion.div
            variants={itemVariants}
            onHoverStart={() => setHoveredCard('right')}
            onHoverEnd={() => setHoveredCard(null)}
            onTouchStart={() => setHoveredCard('right')}
            onTouchEnd={() => setHoveredCard(null)}
            className="relative rounded-xl sm:rounded-2xl overflow-hidden min-h-[200px] sm:min-h-[180px] lg:h-[240px] w-full shadow-2xl group border border-white/5 sm:col-span-2 lg:col-span-1"
          >
            <motion.div
              animate={hoveredCard === 'right' ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full"
              style={{ willChange: hoveredCard === 'right' ? 'transform' : 'auto' }}
            >
              <Image
                src="/images/home2.png"
                alt="Client success stories"
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, 33vw"
                className="object-cover"
                quality={85}
                loading="lazy"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </div>
      </motion.div>

      {/* Performance optimization */}
      <style jsx>{`
        /* GPU acceleration for smoother animations */
        section {
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }
      `}</style>
    </section>
  )
}
