'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function OurHowSection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="bg-white min-h-screen flex items-center justify-center px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          
          {/* Main Headline */}
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-tight">
            Our <span className="italic">How</span>
          </h2>

          {/* Body Text */}
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
            <p>
              We use neuromarketing, psychology, AI, and 
              storytelling to build strategy that speaks to how 
              people actually think, decide, and feel.
            </p>
          </div>

          {/* Quote */}
          <div className="space-y-4">
            <p className="text-2xl md:text-3xl text-gray-900 font-light italic">
              It&apos;s not hype. It&apos;s human.
            </p>
          </div>
        </div>

        {/* Right Side - Collage Visual */}
        <div className="flex justify-center lg:justify-end">
  <div className="relative">
    {/* Single rectangular image replacing the collage */}
    <div className="w-80 h-80 md:w-96 md:h-96 rounded-3xl overflow-hidden shadow-xl">
      <Image
        src="/images/about-2.png" // Replace with your image path
        alt="Our Image"
        width={384}
        height={384}
        className="w-full h-full object-cover"
      />
    </div>
  </div>
</div>

      </div>
    </section>
  )
}
