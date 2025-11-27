'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

export default function NeuromarketingSection() {
  const [brainLoaded, setBrainLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setBrainLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  // Split text into characters for animation
  const text = "Your brand sparks curiosity, then fades away."
  const characters = text.split('')

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
        delayChildren: 0.2,
      }
    }
  }

  const child = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative h-[100dvh] overflow-hidden flex items-center justify-center">
      {/* Background Image - Filled & Fitted */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brain.png"
          alt="Background"
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${brainLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ objectPosition: 'center' }}
        />
        {/* Dark overlay for better text contrast */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8 z-10">
        {/* Mobile layout */}
        <div className="flex flex-col justify-between h-full py-12 md:hidden">
          {/* Top: Animated Heading - Single Line */}
          <div className="flex items-start justify-center pt-4 overflow-x-auto">
            <motion.h1 
              className="text-xl sm:text-2xl font-bold text-white drop-shadow-lg whitespace-nowrap px-4"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="inline-block"
                  style={{ 
                    fontStyle: index >= 37 ? 'italic' : 'normal', 
                    fontWeight: index >= 37 ? 300 : 700,
                    marginRight: char === ' ' ? '0.25em' : '0'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Bottom: Text */}
          <div className="flex flex-col gap-6 text-center px-4 pb-8">
            <p className="text-white text-base sm:text-lg leading-relaxed font-light drop-shadow-lg">
              People remember what moves them: stories that stir emotion, design that feels familiar, and messages that earn trust.
            </p>
            <p className="text-white text-base sm:text-lg leading-relaxed font-light drop-shadow-lg">
              We use the science of attention and the art of persuasion to turn curiosity into conversion.
            </p>
            <p className="text-white text-base sm:text-lg leading-relaxed font-light drop-shadow-lg">
              Because when emotion meets logic, buying becomes instinct.
            </p>
          </div>
        </div>

        {/* Desktop/tablet layout */}
        <div className="hidden md:block relative w-full h-full">
          {/* Main Headline with Animation - Single Line */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 px-6">
            <motion.h1 
              className="text-2xl md:text-3xl lg:text-5xl font-bold text-white drop-shadow-2xl whitespace-nowrap"
              variants={container}
              initial="hidden"
              animate="visible"
            >
              {characters.map((char, index) => (
                <motion.span
                  key={index}
                  variants={child}
                  className="inline-block"
                  style={{ 
                    fontStyle: index >= 37 ? 'italic' : 'normal', 
                    fontWeight: index >= 37 ? 300 : 700,
                    marginRight: char === ' ' ? '0.25em' : '0'
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Left Text */}
          <div className="absolute bottom-20 left-8 max-w-md pr-6">
            <p className="text-white text-lg md:text-xl leading-relaxed font-light drop-shadow-xl">
              People remember what moves them:<br />
              stories that stir emotion, design that feels<br />
              familiar, and messages that earn trust.
            </p>
          </div>

          {/* Right Text */}
          <div className="absolute bottom-20 right-8 max-w-md text-right pl-6">
            <p className="text-white text-lg md:text-xl leading-relaxed font-light drop-shadow-xl">
              We use the science of attention and the<br />
              art of persuasion to turn curiosity into<br />
              conversion.
            </p>
            <p className="text-white text-lg md:text-xl leading-relaxed font-light drop-shadow-xl mt-4">
              Because when emotion meets logic,<br />
              buying becomes instinct.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
