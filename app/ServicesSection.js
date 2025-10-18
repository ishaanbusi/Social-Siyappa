'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

export default function ServicesSection() {
  const services = [
    'Visual Design & Production',
    'Branding & Marketing',
    'Web Design',
    'Web Development',
    'Branding',
    'Marketing',
    'Performance Marketing',
    'AD & Analytics',
    'Web Development',
    'Content Strategy & Campaign',
  ]

  const [initialized, setInitialized] = useState(false)

  // Tighter horizontal pile spread (20% to 80% - more centered)
  const pileX = [25, 32, 38, 44, 50, 56, 62, 68, 74, 80]
  // Reduced vertical spread (-100px to 0px)
  const pileY = [-15, -35, -65, -25, -45, -100, -30, -55, -80, -5]

  useEffect(() => {
    setInitialized(true)
  }, [])

  const generateRandom = (min, max) => Math.random() * (max - min) + min

  return (
    <section className="relative bg-gray-100 min-h-[100dvh] flex flex-col items-center justify-between px-4 sm:px-6 py-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gray-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-20 sm:w-24 h-20 sm:h-24 bg-gray-200 rounded-full opacity-20"></div>

      {/* Header Section */}
      <div className="max-w-4xl w-full text-center pt-8 sm:pt-12 z-20">
        <h2 className="leading-tight font-bold text-gray-900 mb-2 text-2xl md:text-4xl lg:text-5xl">
          You bring the <span className="italic font-light">substance</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 font-medium mb-1">
          We bring the structure
        </p>
        <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">
          with a spoonful of strategy and a lot of sense.
        </p>
        <button className="bg-white border-2 border-gray-900 text-gray-900 px-6 md:px-8 py-3 rounded-full font-medium text-base md:text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow">
          Work with Us
        </button>
      </div>

      {/* Falling Tags Container - Full Height */}
      <div className="relative w-full max-w-5xl flex-1 flex items-end justify-center pb-8">
        {initialized &&
          services.map((tag, index) => {
            const randomDelay = generateRandom(0, 1.2)
            const randomDuration = generateRandom(2.5, 3.5)
            const startRotation = generateRandom(-40, 40)
            const settleRotation = generateRandom(-15, 15)
            const startScale = generateRandom(0.95, 1.1)
            // Tag starts at a random horizontal position
            const startX = generateRandom(20, 80)
            // Tighter horizontal spread with reduced noise
            const pileSlotX = pileX[index] + generateRandom(-4, 4)
            // Tighter vertical spread with reduced noise
            const pileSlotY = pileY[index] + generateRandom(-8, 8)

            return (
              <motion.div
                key={index}
                initial={{
                  top: 0,
                  left: startX + '%',
                  opacity: 0,
                  rotate: startRotation,
                  scale: startScale,
                }}
                animate={{
                  top: `calc(100% + ${pileSlotY}px)`,
                  left: pileSlotX + '%',
                  opacity: 1,
                  rotate: settleRotation,
                  transition: {
                    duration: randomDuration,
                    delay: randomDelay,
                    type: 'spring',
                    stiffness: 45,
                    damping: 16,
                  },
                }}
                className="absolute px-5 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-lg cursor-default whitespace-nowrap select-none"
                style={{
                  userSelect: 'none',
                  zIndex: 10 + index,
                }}
                whileHover={{
                  scale: 1.12,
                  rotate: settleRotation + 5,
                  transition: { duration: 0.3 },
                }}
              >
                {tag}
              </motion.div>
            )
          })}
      </div>
    </section>
  )
}
