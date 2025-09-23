'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function NeuromarketingSection() {
  const [brainLoaded, setBrainLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setBrainLoaded(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-dvh overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/brain.png"
          alt="Background"
          fill
          priority
          sizes="100vw"
          className={`object-cover transition-opacity duration-700 ${brainLoaded ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>

      {/* Main Content Container */}
      <div className="relative w-full h-full flex items-center justify-center px-4 sm:px-8">
        {/* Mobile layout: stacked, centered */}
        <div className="flex flex-col items-center gap-6 text-center md:hidden px-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-white leading-snug">
            Your brand teases, then <span className="italic font-light">disappears.</span>
          </h1>
          <p className="text-white text-base sm:text-lg leading-relaxed font-light">
            The brain doesn’t buy that – it buys consistency, emotional resonance, and story that sticks.
          </p>
          <p className="text-white text-base sm:text-lg leading-relaxed font-light">
            We use neuromarketing, narrative, and design to turn attention into trust, because conversion is chemistry.
          </p>
        </div>

        {/* Desktop/tablet layout: positioned */}
        <div className="hidden md:block relative w-full h-full">
          {/* Main Headline */}
          <div className="absolute top-16 left-1/2 -translate-x-1/2 text-center px-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
              Your brand teases, then <span className="italic font-light">disappears.</span>
            </h1>
          </div>

          {/* Left Text */}
          <div className="absolute bottom-20 left-8 max-w-md pr-6">
            <p className="text-white text-lg md:text-xl leading-relaxed font-light">
              The brain doesn&apos;t buy that – it buys<br />
              consistency, emotional resonance, and story<br />
              that sticks.
            </p>
          </div>

          {/* Right Text */}
          <div className="absolute bottom-20 right-8 max-w-md text-right pl-6">
            <p className="text-white text-lg md:text-xl leading-relaxed font-light">
              We use neuromarketing, narrative, and<br />
              design to turn attention into trust,<br />
              because conversion is chemistry.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
