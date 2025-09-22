'use client'

import { useState, useEffect } from 'react'

export default function NeuromarketingSection() {
  const [brainLoaded, setBrainLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setBrainLoaded(true)
    }, 500)
    
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative h-screen overflow-hidden flex items-center justify-center">
      
      {/* Background Image */}
      <img
        src="/images/brain.png" // replace with your image path
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover z-0"
      />

      {/* Main Content Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-8 z-10">
        
        {/* Main Headline */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your brand teases, then <span className="italic font-light">disappears.</span>
          </h1>
        </div>

        {/* Central Brain Image */}
        

        {/* Left Text */}
        <div className="absolute bottom-20 left-8 max-w-md">
          <p className="text-white text-lg md:text-xl leading-relaxed font-light">
            The brain doesn&apos;t buy that – it buys<br />
            consistency, emotional resonance, and story<br />
            that sticks.
          </p>
        </div>

        {/* Right Text */}
        <div className="absolute bottom-20 right-8 max-w-md text-right">
          <p className="text-white text-lg md:text-xl leading-relaxed font-light">
            We use neuromarketing, narrative, and<br />
            design to turn attention into trust,<br />
            because conversion is chemistry.
          </p>
        </div>
      </div>
    </section>
  )
}
