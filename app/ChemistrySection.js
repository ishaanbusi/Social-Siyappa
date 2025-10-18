'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ChemistrySection() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const listItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
        ease: 'easeOut'
      }
    })
  }

  return (
    <section className="bg-gradient-to-br from-[#191919] via-[#1a1a1a] to-[#151515] flex flex-col items-center justify-center py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden min-h-screen">
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
        className="max-w-7xl w-full space-y-5 sm:space-y-6 lg:space-y-7 relative z-10"
      >
        {/* Top Row */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6">
          {/* Left Text Block */}
          <motion.div
            variants={itemVariants}
            className="group bg-gradient-to-br from-[#2a2a2a] to-[#242424] rounded-2xl p-6 sm:p-7 lg:p-8 flex flex-col justify-between min-h-[280px] lg:h-[340px] shadow-2xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] transition-all duration-500 border border-white/5 hover:border-white/10 overflow-hidden"
          >
            <div className="flex-1">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white leading-tight mb-6 sm:mb-7 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent"
              >
                When Chemistry<br />Creates Results
              </motion.h2>
              
              <ul className="space-y-2 sm:space-y-3.5">
                {[
                  { label: 'Expert Team', desc: 'Psychology + creativity combined' },
                  { label: 'Proven Methods', desc: 'Data-driven strategies that work' },
                  { label: 'Growing Success', desc: 'Happy clients, measurable results' },
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    custom={i}
                    variants={listItemVariants}
                    className="flex items-start gap-2.5 group/item"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 mt-1.5 group-hover/item:scale-150 transition-transform flex-shrink-0"></span>
                    <div className="flex-1 min-w-0">
                      <span className="font-bold italic text-white text-sm sm:text-base lg:text-lg block mb-0.5 group-hover/item:text-blue-300 transition-colors">
                        {item.label}
                      </span>
                      <span className="text-gray-400 text-xs sm:text-sm lg:text-base group-hover/item:text-gray-300 transition-colors">
                        {item.desc}
                      </span>
                    </div>
                  </motion.li>
                ))}
              </ul>
            </div>
            
            <div className="mt-4 flex justify-end">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-white text-3xl sm:text-4xl font-bold hover:text-blue-400 transition-all duration-300 cursor-pointer bg-white/5 hover:bg-white/10 rounded-full w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center flex-shrink-0"
                aria-label="Learn more"
              >
                ↗
              </motion.button>
            </div>
          </motion.div>

          {/* Right Large Image */}
          <motion.div
            variants={itemVariants}
            onHoverStart={() => setHoveredCard('main')}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative rounded-2xl overflow-hidden min-h-[240px] lg:h-[340px] w-full shadow-2xl group border border-white/5"
          >
            <motion.div
              animate={hoveredCard === 'main' ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/brain.png"
                alt="Chemistry visual"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {/* Left Medium Image */}
          <motion.div
            variants={itemVariants}
            onHoverStart={() => setHoveredCard('left')}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative rounded-2xl overflow-hidden min-h-[180px] lg:h-[240px] w-full shadow-2xl group border border-white/5"
          >
            <motion.div
              animate={hoveredCard === 'left' ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/home1.png"
                alt="Team visual"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>

          {/* Center Caption Card */}
          <motion.div
            variants={itemVariants}
            whileHover={{ y: -6 }}
            className="bg-gradient-to-br from-[#2a2a2a] to-[#1f1f1f] rounded-2xl p-6 sm:p-7 flex flex-col justify-center items-center border-2 border-white/10 text-white text-center min-h-[180px] lg:h-[240px] hover:border-white/20 transition-all duration-500 shadow-xl hover:shadow-[0_20px_60px_-15px_rgba(255,255,255,0.1)] group"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.5 }}
            >
              <h3 className="uppercase font-bold tracking-widest mb-3 text-xs sm:text-sm lg:text-base text-gray-400 group-hover:text-white transition-colors">
                LOREM IPSUM
              </h3>
              <div className="w-10 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 mx-auto mb-3"></div>
              <p className="font-light text-xs sm:text-sm lg:text-base leading-relaxed text-gray-400 max-w-xs group-hover:text-gray-300 transition-colors">
                Lorem Ipsum Lorem Ipsum<br />
                Ipsum Lorem Ipsum Lorem<br />
                Ipsum Lorem Ipsum Lorem<br />
                Ipsum Lorem Ipsum
              </p>
            </motion.div>
          </motion.div>

          {/* Right Medium Image */}
          <motion.div
            variants={itemVariants}
            onHoverStart={() => setHoveredCard('right')}
            onHoverEnd={() => setHoveredCard(null)}
            className="relative rounded-2xl overflow-hidden min-h-[180px] lg:h-[240px] w-full shadow-2xl group border border-white/5"
          >
            <motion.div
              animate={hoveredCard === 'right' ? { scale: 1.05 } : { scale: 1 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="relative w-full h-full"
            >
              <Image
                src="/images/home2.png"
                alt="Client visual"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                style={{ objectFit: 'cover' }}
                priority
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
