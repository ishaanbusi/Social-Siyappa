'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function OurWhySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gray-900 px-8">
      
      <div className="relative max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="w-80 md:w-96 lg:w-[400px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/images/about.png" // Replace with your image path
              alt="Our Why"
                width={400}
                height={400}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Right Side - Text */}
        <div className={`space-y-6 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          
          <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
            Our <span className="italic">Why</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Because people don&apos;t connect with content<br />
            <span className="italic text-blue-300">— They connect with emotion.</span>
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            We believe clarity builds trust, and trust builds brands. We&apos;re here for the founders, creators, and rebels who want to say something that actually matters.
          </p>

        </div>
      </div>
    </section>
  )
}
