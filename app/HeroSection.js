'use client'

import { useState } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [isImageHovered, setIsImageHovered] = useState(false)

  return (
    <section className="relative bg-gray-50 h-[100dvh] flex items-center justify-center px-4 sm:px-6">
      {/* Top Right Text */}
      <div className="absolute top-4 right-4 sm:top-8 sm:right-8 text-right">
        <p className="text-gray-800 font-medium text-xs sm:text-sm tracking-wider uppercase">
          WE DO BRANDING LIKE<br />
          NO ONE ELSE
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <div className="space-y-2 sm:space-y-3">
          {/* First Line */}
          <div
            className="
              leading-tight
              text-3xl sm:text-5xl lg:text-6xl xl:text-7xl
            "
            style={{
              // Optional fluid type using clamp for smoother scaling
              fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)',
            }}
          >
            <span className="font-light italic text-gray-400">Your</span>{' '}
            <span className="font-light italic text-gray-400">audience</span>{' '}
            <span className="font-bold text-gray-900">decides</span>
          </div>

          {/* Second Line with Image */}
          <div
            className="
              flex justify-center items-center gap-3 sm:gap-4
              flex-col sm:flex-row
              leading-tight
            "
          >
            <span
              className="font-bold text-gray-900
                         text-3xl sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)' }}
            >
              in 3 seconds.
            </span>

            {/* Image with Hover/Touch Effects */}
            <div
              className={`relative transition-all duration-500 ease-out cursor-pointer
                          ${isImageHovered ? 'scale-110 rotate-6' : 'scale-100'} 
                          mx-0 sm:mx-4`}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
              onTouchStart={() => setIsImageHovered(true)}
              onTouchEnd={() => setIsImageHovered(false)}
            >
              <Image
                src="/images/banner.png"
                alt="Brain Icon"
                width={200}
                height={200}
                sizes="(max-width: 640px) 32vw, (max-width: 1024px) 20vw, 200px"
                className={`transition-all duration-500 object-contain
                            ${isImageHovered
                              ? 'drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]'
                              : 'drop-shadow-md'}`}
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '160px',
                }}
              />
              {isImageHovered && (
                <div className="pointer-events-none absolute inset-0 rounded-full blur-3xl opacity-40 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
              )}
            </div>

            <span
              className="font-light italic text-gray-400
                         text-3xl sm:text-5xl lg:text-6xl xl:text-7xl"
              style={{ fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)' }}
            >
              We make
            </span>
          </div>

          {/* Third Line */}
          <div
            className="leading-tight
                       text-3xl sm:text-5xl lg:text-6xl xl:text-7xl"
            style={{ fontSize: 'clamp(1.75rem, 4.5vw, 4.5rem)' }}
          >
            <span className="font-bold text-gray-900">those seconds count</span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 sm:bottom-8">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
