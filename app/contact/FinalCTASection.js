'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact.png"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full min-h-screen px-6 md:px-16 py-12 md:py-20">
        
        {/* Top Left Headline */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          } max-w-3xl absolute top-6 md:top-12 left-6 md:left-16`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            If it <span className="italic">feels</span> alig
            <span className="inline-flex items-center mx-2">
  <img
    src="/images/toggle.png"
    alt="toggle"
    className="w-14 h-8 sm:w-20 sm:h-10 object-contain"
  />
</span>

            ned,<br />
            <span className="font-semibold">Say Hello</span>
          </h1>
        </div>

        {/* Bottom Right Text */}
        <div className="absolute bottom-6 md:bottom-12 right-6 md:right-16 text-right">
  <p className="text-white text-lg sm:text-xl md:text-2xl leading-relaxed max-w-sm">
    We&apos;ll take it from there.<br />
    <span className="text-base md:text-lg opacity-80">
      because clarity starts with conversation.
    </span>
  </p>
</div>

      </div>
    </section>
  )
}
