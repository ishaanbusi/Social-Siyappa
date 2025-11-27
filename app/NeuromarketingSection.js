'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'
import { motion, useReducedMotion } from 'framer-motion'

export default function NeuromarketingSection() {
  const [brainLoaded, setBrainLoaded] = useState(false)
  const prefersReducedMotion = useReducedMotion()

  useEffect(() => {
    const timer = setTimeout(() => setBrainLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  // Split text into characters for animation
  const text = "Your brand sparks curiosity, then fades away."
  const characters = text.split('')

  // Animation variants - optimized for mobile
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: prefersReducedMotion ? 0 : 0.03,
        delayChildren: prefersReducedMotion ? 0 : 0.2,
      }
    }
  }

  const child = {
    hidden: { opacity: 0, y: prefersReducedMotion ? 0 : 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: prefersReducedMotion ? 0 : 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative min-h-[100dvh] h-screen overflow-hidden flex items-center justify-center">
      {/* Background Image - Optimized */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/brain.png"
          alt="Neuromarketing brain visualization background"
          fill
          priority
          sizes="100vw"
          quality={85}
          className={`object-cover transition-opacity duration-700 ${brainLoaded ? 'opacity-100' : 'opacity-0'}`}
          style={{ objectPosition: 'center' }}
        />
        {/* Dark overlay with gradient for better mobile readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/35 to-black/40 sm:bg-black/30"></div>
      </div>

      {/* Main Content Container */}
      <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-6 lg:px-8 z-10">
        {/* Mobile layout - optimized */}
        <div className="flex flex-col justify-between h-full py-8 sm:py-12 md:hidden w-full max-w-2xl">
          {/* Top: Animated Heading - Responsive wrapping */}
          <div className="flex items-start justify-center pt-2 sm:pt-4">
            <motion.h1 
              className="font-bold text-white text-center leading-tight px-2"
              style={{
                fontSize: 'clamp(1.25rem, 5vw, 1.75rem)',
                textShadow: '0 2px 8px rgba(0,0,0,0.8), 0 4px 16px rgba(0,0,0,0.6)',
                WebkitFontSmoothing: 'antialiased',
              }}
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
                    marginRight: char === ' ' ? '0.25em' : '0',
                    willChange: prefersReducedMotion ? 'auto' : 'opacity, transform',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Bottom: Text - improved mobile spacing */}
          <div className="flex flex-col gap-4 sm:gap-6 text-center px-2 pb-6 sm:pb-8">
            <p 
              className="text-white leading-relaxed font-light"
              style={{
                fontSize: 'clamp(0.9rem, 3.5vw, 1.125rem)',
                textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              People remember what moves them: stories that stir emotion, design that feels familiar, and messages that earn trust.
            </p>
            <p 
              className="text-white leading-relaxed font-light"
              style={{
                fontSize: 'clamp(0.9rem, 3.5vw, 1.125rem)',
                textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              We use the science of attention and the art of persuasion to turn curiosity into conversion.
            </p>
            <p 
              className="text-white leading-relaxed font-light"
              style={{
                fontSize: 'clamp(0.9rem, 3.5vw, 1.125rem)',
                textShadow: '0 2px 6px rgba(0,0,0,0.9), 0 1px 3px rgba(0,0,0,0.8)',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              Because when emotion meets logic, buying becomes instinct.
            </p>
          </div>
        </div>

        {/* Desktop/tablet layout - optimized */}
        <div className="hidden md:block relative w-full h-full max-w-7xl mx-auto">
          {/* Main Headline with Animation */}
          <div className="absolute top-12 lg:top-16 left-1/2 -translate-x-1/2 px-6 w-full">
            <motion.h1 
              className="text-center font-bold text-white"
              style={{
                fontSize: 'clamp(1.75rem, 4vw, 3rem)',
                textShadow: '0 4px 12px rgba(0,0,0,0.8), 0 2px 6px rgba(0,0,0,0.9)',
                WebkitFontSmoothing: 'antialiased',
              }}
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
                    marginRight: char === ' ' ? '0.25em' : '0',
                    willChange: prefersReducedMotion ? 'auto' : 'opacity, transform',
                  }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </motion.span>
              ))}
            </motion.h1>
          </div>

          {/* Left Text */}
          <div className="absolute bottom-16 lg:bottom-20 left-6 lg:left-8 max-w-md">
            <p 
              className="text-white leading-relaxed font-light"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                textShadow: '0 3px 8px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              People remember what moves them:<br />
              stories that stir emotion, design that feels<br />
              familiar, and messages that earn trust.
            </p>
          </div>

          {/* Right Text */}
          <div className="absolute bottom-16 lg:bottom-20 right-6 lg:right-8 max-w-md text-right">
            <p 
              className="text-white leading-relaxed font-light"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                textShadow: '0 3px 8px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              We use the science of attention and the<br />
              art of persuasion to turn curiosity into<br />
              conversion.
            </p>
            <p 
              className="text-white leading-relaxed font-light mt-4"
              style={{
                fontSize: 'clamp(1rem, 1.5vw, 1.25rem)',
                textShadow: '0 3px 8px rgba(0,0,0,0.9), 0 1px 4px rgba(0,0,0,0.8)',
                WebkitFontSmoothing: 'antialiased',
              }}
            >
              Because when emotion meets logic,<br />
              buying becomes instinct.
            </p>
          </div>
        </div>
      </div>

      {/* Performance optimization styles */}
      <style jsx>{`
        /* Force GPU acceleration for better mobile performance */
        section {
          transform: translateZ(0);
          -webkit-transform: translateZ(0);
        }

        /* Optimize text rendering on mobile */
        @media (max-width: 768px) {
          p, h1 {
            text-rendering: optimizeLegibility;
            -webkit-text-size-adjust: 100%;
          }
        }
      `}</style>
    </section>
  )
}
