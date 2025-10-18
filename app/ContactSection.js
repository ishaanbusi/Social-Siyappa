'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ContactSection() {
  const [hoveredImage, setHoveredImage] = useState(null)
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
      transition: {
        duration: 0.8,
        ease: [0.22, 1, 0.36, 1]
      }
    }
  }

  const imageVariants = {
    hidden: { opacity: 0, y: 100, rotate: 0 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotate: images[i].rotation,
      transition: {
        delay: 0.5 + i * 0.1,
        duration: 0.7,
        ease: [0.22, 1, 0.36, 1]
      }
    })
  }

  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex flex-col items-center justify-center py-16 sm:py-20 lg:py-24 px-4 sm:px-6 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-20 right-20 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
        <motion.div
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-20 left-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl"
        ></motion.div>
      </div>

      <div ref={ref} className="relative flex flex-col items-center max-w-6xl w-full">
        {/* Images positioned to be 10% inside, 90% outside the box */}
        <div className="relative flex items-end justify-center mb-[-18px] sm:mb-[-21px] lg:mb-[-26px] z-10 px-4">
          <div className="flex items-end gap-2 sm:gap-0">
            {images.map((image, i) => (
              <motion.div
                key={i}
                custom={i}
                variants={imageVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
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
                style={{
                  rotate: `${image.rotation}deg`,
                  translateY: `${image.translateY * 4}px`
                }}
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
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-blue-500/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Black contact card */}
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="relative w-full bg-gradient-to-br from-black via-gray-900 to-black rounded-3xl shadow-2xl py-12 sm:py-14 lg:py-16 px-6 sm:px-12 lg:px-20 z-20 border border-white/10 backdrop-blur-sm pt-10 sm:pt-12 lg:pt-14"
        >
          {/* Decorative elements */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-gradient-to-tr from-purple-500/10 to-pink-500/10 rounded-full blur-3xl"></div>

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
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 30px rgba(59, 130, 246, 0.5)"
              }}
              whileTap={{ scale: 0.95 }}
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
              {/* Gradient background on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </motion.button>
          </div>
        </motion.div>

        {/* Floating decorative elements */}
        <motion.div
          animate={{
            y: [0, -20, 0],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute -right-10 top-20 w-20 h-20 bg-gradient-to-br from-blue-400/20 to-purple-400/20 rounded-full blur-2xl"
        ></motion.div>

        <motion.div
          animate={{
            y: [0, 15, 0],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
          className="absolute -left-10 bottom-32 w-24 h-24 bg-gradient-to-br from-purple-400/20 to-pink-400/20 rounded-full blur-2xl"
        ></motion.div>
      </div>
    </section>
  )
}
