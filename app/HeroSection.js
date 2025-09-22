'use client'

import { useState } from 'react'
import Image from 'next/image'

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

  {/* Image with Hover Effects */}
  <div
    className={`relative transition-all duration-500 ease-out cursor-pointer ${
      isImageHovered 
        ? 'scale-110 rotate-6' 
        : 'scale-100'
    } mx-4`}
    onMouseEnter={() => setIsImageHovered(true)}
    onMouseLeave={() => setIsImageHovered(false)}
  >
    <Image 
      src="/images/banner.png" // replace with your image
      alt="Brain Icon"
      width={200} 
      height={200}
      className={`transition-all duration-500 object-contain ${
        isImageHovered 
          ? 'drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]' 
          : 'drop-shadow-md'
      }`}
    />

    {/* Extra Glow Effect */}
    {isImageHovered && (
      <div className="absolute inset-0 rounded-full blur-3xl opacity-40 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"></div>
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
