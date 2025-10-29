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
    <section className="relative min-h-screen flex items-center px-8 py-12">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/about.png" // Replace with your image
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl w-full">
        <div
          className={`ml-0 lg:ml-auto lg:w-2/3 space-y-6 text-right transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10'
          }`}
        >
          <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
            Our <span className="italic">Why</span>
          </h2>

          <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
            Because people don&apos;t connect with content <br />
            <span className="italic text-blue-300">
              They connect with emotion.
            </span>
          </p>

          <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl lg:ml-auto">
            We believe clarity builds trust, and trust builds brands. We&apos;re
            here for the founders, creators, and rebels who want to say
            something that actually matters.
          </p>
        </div>
      </div>
    </section>
  )
}
