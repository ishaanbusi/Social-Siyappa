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
    <section className="relative h-screen bg-gradient-to-br from-blue-500 via-purple-600 to-pink-500 overflow-hidden flex items-center justify-center">
      
      {/* Main Content Container */}
      <div className="relative w-full h-full flex flex-col items-center justify-center px-8">
        
        {/* Main Headline - Centered at Top */}
        <div className="absolute top-16 left-1/2 transform -translate-x-1/2 text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your brand teases, then <span className="italic font-light">disappears.</span>
          </h1>
        </div>

        {/* Central Brain Image */}
        <div className={`relative transition-all duration-1000 ${
          brainLoaded ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
        }`}>
          {/* Brain Container - Exact positioning as image */}
          <div className="w-96 h-80 md:w-[500px] md:h-[400px] flex items-center justify-center">
            
            {/* Realistic 3D Brain - Using gradient to simulate the brain from image */}
            <div className="relative w-80 h-64 md:w-96 md:h-80">
              {/* Main brain shape with realistic gradients */}
              <div className="absolute inset-0 transform rotate-12">
                {/* Brain cortex layers */}
                <div className="w-full h-full bg-gradient-to-br from-pink-300 via-purple-400 to-blue-400 rounded-full opacity-90 shadow-2xl">
                  {/* Brain folds simulation */}
                  <div className="absolute inset-4 bg-gradient-to-br from-pink-200 via-purple-300 to-blue-300 rounded-full opacity-80"></div>
                  <div className="absolute inset-8 bg-gradient-to-br from-pink-100 via-purple-200 to-blue-200 rounded-full opacity-70"></div>
                  
                  {/* Brain stem */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-8 h-16 bg-gradient-to-b from-purple-300 to-blue-400 rounded-b-full"></div>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-400 via-purple-400 to-pink-400 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Left Text Block - Bottom Left */}
        <div className="absolute bottom-20 left-8 max-w-md">
          <p className="text-white text-lg md:text-xl leading-relaxed font-light">
            The brain doesn&apos;t buy that – it buys<br />
            consistency, emotional resonance, and story<br />
            that sticks.
          </p>
        </div>

        {/* Right Text Block - Bottom Right */}
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
