'use client'
import { useState, useEffect } from 'react'

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
        <img
          src="/images/about.png"
          alt="Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl w-full mx-auto">
        <div
          className={`ml-0 lg:ml-auto lg:w-2/3 transition-all duration-1000 ${
            isVisible
              ? 'opacity-100 translate-x-0'
              : 'opacity-0 translate-x-10'
          }`}
        >
          {/* Translucent Card */}
          <div className="backdrop-blur-md bg-white/10 rounded-2xl p-8 md:p-12 shadow-2xl border border-white/20 max-w-xl mx-auto">
  <div className="space-y-6 text-right">
    <h2 className="text-5xl md:text-6xl font-light text-white leading-tight">
      Our <span className="italic">Why</span>
    </h2>

    <p className="text-xl md:text-2xl text-gray-100 leading-relaxed">
      Because people don&apos;t connect with content <br />
      <span className="italic text-blue-300 font-medium">
        They connect with emotion.
      </span>
    </p>

    <p className="text-lg md:text-xl text-gray-200 leading-relaxed max-w-xl lg:ml-auto">
      We believe clarity builds trust, and trust builds brands. We&apos;re
      here for the founders, creators, and rebels who want to say
      something that actually matters.
    </p>
  </div>
</div>

        </div>
      </div>
    </section>
  )
}