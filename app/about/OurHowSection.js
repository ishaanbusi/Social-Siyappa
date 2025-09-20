'use client'

import { useState, useEffect } from 'react'

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
            {/* Main container with gray background */}
            <div className="w-80 h-80 md:w-96 md:h-96 bg-gray-300 rounded-3xl overflow-hidden relative shadow-xl">
              
              {/* Collage elements - scattered photos/images */}
              <div className="absolute inset-0 p-4">
                
                {/* Photo 1 - Top left */}
                <div className="absolute top-4 left-4 w-24 h-32 bg-green-600 rounded-lg transform -rotate-12 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-green-400 to-green-700 rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-white rounded-full"></div>
                  </div>
                </div>

                {/* Photo 2 - Top center */}
                <div className="absolute top-8 left-1/2 transform -translate-x-1/2 rotate-6 w-20 h-28 bg-blue-500 rounded-lg shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-blue-400 to-blue-700 rounded-lg"></div>
                </div>

                {/* Photo 3 - Top right */}
                <div className="absolute top-6 right-6 w-16 h-20 bg-purple-500 rounded-lg transform rotate-12 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-purple-400 to-purple-700 rounded-lg"></div>
                </div>

                {/* Photo 4 - Center left */}
                <div className="absolute top-1/2 left-8 transform -translate-y-1/2 -rotate-6 w-28 h-20 bg-yellow-500 rounded-lg shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg"></div>
                </div>

                {/* Photo 5 - Center */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rotate-3 w-32 h-24 bg-red-500 rounded-lg shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-red-400 to-red-700 rounded-lg"></div>
                </div>

                {/* Photo 6 - Center right */}
                <div className="absolute top-1/2 right-4 transform -translate-y-1/2 rotate-12 w-18 h-24 bg-teal-500 rounded-lg shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-teal-400 to-teal-700 rounded-lg"></div>
                </div>

                {/* Photo 7 - Bottom left */}
                <div className="absolute bottom-8 left-6 w-20 h-16 bg-orange-500 rounded-lg transform -rotate-12 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-orange-400 to-orange-700 rounded-lg"></div>
                </div>

                {/* Photo 8 - Bottom center */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 rotate-6 w-24 h-20 bg-pink-500 rounded-lg shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-pink-400 to-pink-700 rounded-lg"></div>
                </div>

                {/* Photo 9 - Bottom right */}
                <div className="absolute bottom-6 right-8 w-16 h-22 bg-indigo-500 rounded-lg transform rotate-12 shadow-lg">
                  <div className="w-full h-full bg-gradient-to-br from-indigo-400 to-indigo-700 rounded-lg"></div>
                </div>

                {/* Small scattered elements */}
                <div className="absolute top-20 right-20 w-3 h-3 bg-gray-600 rounded-full"></div>
                <div className="absolute bottom-20 left-20 w-2 h-2 bg-gray-600 rounded-full"></div>
                <div className="absolute top-32 left-16 w-1 h-8 bg-gray-600 rounded-full transform rotate-45"></div>
                <div className="absolute bottom-24 right-16 w-1 h-6 bg-gray-600 rounded-full transform -rotate-12"></div>
              </div>

              {/* Overlay effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/10 to-gray-200/20 rounded-3xl"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
