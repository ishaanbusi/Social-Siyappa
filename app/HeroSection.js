'use client'

import { useState } from 'react'

export default function HeroSection() {
  const [isImageHovered, setIsImageHovered] = useState(false)

  return (
    <section className="relative bg-gray-50 h-screen flex items-center justify-center px-6">
      {/* Top Right Text */}
      <div className="absolute top-8 right-8 text-right">
        <p className="text-gray-800 font-medium text-sm tracking-wider uppercase">
          WE DO BRANDING LIKE<br />
          NO ONE ELSE
        </p>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <div className="space-y-1">
          {/* First Line */}
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            <span className="font-light italic text-gray-400">Your</span>{' '}
            <span className="font-light italic text-gray-400">audience</span>
            <span className="font-bold text-gray-900">decides</span>
          </div>

          {/* Second Line with Brain Icon */}
          <div className="flex items-center justify-center flex-wrap gap-4 text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            <span className="font-bold text-gray-900">in 3 seconds.</span>
            
            {/* Brain Icon Container with Hover Animation */}
            <div 
              className={`relative transition-all duration-500 ease-out cursor-pointer ${
                isImageHovered 
                  ? 'w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 scale-110 rotate-6' 
                  : 'w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24'
              } bg-gradient-to-br from-blue-100 to-blue-200 rounded-2xl flex items-center justify-center shadow-lg mx-4`}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
            >
              {/* Brain SVG Icon */}
              <svg 
                className={`transition-all duration-500 ${
                  isImageHovered 
                    ? 'w-20 h-20 md:w-24 md:h-24 lg:w-32 lg:h-32' 
                    : 'w-10 h-10 md:w-12 md:h-12 lg:w-16 lg:h-16'
                }`}
                viewBox="0 0 100 100" 
                fill="none"
              >
                <circle cx="30" cy="40" r="8" fill="#10B981" className="animate-pulse" />
                <circle cx="50" cy="35" r="10" fill="#3B82F6" className="animate-pulse" />
                <circle cx="70" cy="40" r="8" fill="#8B5CF6" className="animate-pulse" />
                <circle cx="40" cy="55" r="7" fill="#EF4444" className="animate-pulse" />
                <circle cx="60" cy="55" r="7" fill="#F59E0B" className="animate-pulse" />
                <path 
                  d="M25 45 Q50 25 75 45 Q70 65 50 70 Q30 65 25 45" 
                  stroke="#6B7280" 
                  strokeWidth="2" 
                  fill="none"
                  className="animate-pulse"
                />
              </svg>

              {/* Glow Effect on Hover */}
              {isImageHovered && (
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-2xl opacity-20 animate-pulse"></div>
              )}
            </div>

            <span className="font-light italic text-gray-400">We make</span>
          </div>

          {/* Third Line */}
          <div className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight">
            <span className="font-bold text-gray-900">those seconds count</span>
          </div>
        </div>
      </div>

      {/* Optional: Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-gray-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  )
}
