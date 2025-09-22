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
    <section className="relative min-h-screen overflow-hidden flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/contact.png" // your background image
          alt="Background"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full h-full flex flex-col justify-between px-6 md:px-16 py-12 md:py-20">
        
        {/* Top Left Headline */}
        <div
          className={`transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
          } max-w-3xl`}
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-light text-white leading-tight">
            If it <span className="italic">feels</span> alig
            <span className="inline-flex items-center mx-2">
              <div className="w-14 h-8 sm:w-20 sm:h-10 bg-white rounded-full flex items-center justify-center">
                <div className="w-6 h-6 sm:w-8 sm:h-8 bg-transparent border-2 border-white rounded-full"></div>
              </div>
            </span>
            ned,<br />
            <span className="font-semibold">Say Hello</span>
          </h1>
        </div>

        {/* Bottom Right Text */}
        <div className="text-right self-end mt-auto">
          <p className="text-white text-base sm:text-lg leading-relaxed max-w-sm">
            We&apos;ll take it from there.<br />
            <span className="text-sm opacity-80">
              because clarity starts with conversation.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
