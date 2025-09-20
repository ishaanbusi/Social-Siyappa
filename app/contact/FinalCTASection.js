'use client'

import { useState, useEffect } from 'react'

export default function FinalCTASection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-400 via-gray-500 to-gray-600 overflow-hidden flex items-center justify-center">
      
      {/* Background Elements */}
      <div className="absolute inset-0">
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
          
          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
            If it <span className="italic">feels</span> alig
            <span className="inline-flex items-center mx-2">
              <div className="w-16 h-8 bg-white bg-opacity-20 rounded-full border-2 border-white flex items-center justify-center">
                <div className="w-6 h-6 bg-white rounded-full"></div>
              </div>
            </span>
            ned,<br />
            Say Hello
          </h2>
        </div>

        {/* Right Side - 3D Crystal with Moss */}
        <div className="flex justify-center lg:justify-end">
          <div className="relative">
            {/* Main 3D Crystal Structure */}
            <div className="relative w-80 h-96 md:w-96 md:h-[480px]">
              
              {/* Crystal Base */}
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-64 h-32">
                {/* Glass/Crystal effect with perspective */}
                <div className="relative w-full h-full transform perspective-1000 rotate-y-12">
                  {/* Front face */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-gray-100/40 to-gray-300/50 backdrop-blur-sm border border-white/30 transform skew-y-2"></div>
                  
                  {/* Top face */}
                  <div className="absolute -top-4 left-2 right-2 h-8 bg-gradient-to-r from-white/40 to-gray-200/50 backdrop-blur-sm border border-white/30 transform -skew-x-12"></div>
                  
                  {/* Side face */}
                  <div className="absolute top-2 -right-4 w-8 bottom-0 bg-gradient-to-b from-gray-200/40 to-gray-400/50 backdrop-blur-sm border border-white/30 transform skew-y-12"></div>
                </div>
              </div>

              {/* Moss/Vegetation on top */}
              <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-56 h-40">
                {/* Organic moss shapes */}
                <div className="relative w-full h-full">
                  {/* Main moss cluster */}
                  <div className="absolute inset-0 bg-gradient-to-br from-green-400 via-green-600 to-green-800 rounded-full opacity-80 transform rotate-12"></div>
                  <div className="absolute top-4 left-8 w-32 h-24 bg-gradient-to-br from-green-300 via-green-500 to-green-700 rounded-full opacity-70 transform -rotate-6"></div>
                  <div className="absolute top-8 right-6 w-24 h-20 bg-gradient-to-br from-lime-400 via-green-500 to-green-700 rounded-full opacity-75 transform rotate-18"></div>
                  
                  {/* Small moss details */}
                  <div className="absolute top-2 left-12 w-8 h-6 bg-green-500 rounded-full opacity-60"></div>
                  <div className="absolute bottom-4 right-8 w-6 h-8 bg-green-600 rounded-full opacity-70"></div>
                  <div className="absolute top-12 left-20 w-4 h-4 bg-lime-500 rounded-full opacity-80"></div>
                  
                  {/* Texture overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-green-300/20 to-green-800/30 rounded-full"></div>
                </div>
              </div>

              {/* Inner crystal reflections */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-48 h-20">
                {/* Internal structure lines */}
                <div className="absolute inset-0">
                  {[...Array(6)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-px h-full bg-white/30"
                      style={{
                        left: `${(i + 1) * 16}%`,
                        transform: `skewX(${-20 + i * 8}deg)`
                      }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating particles */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
                  style={{
                    top: `${20 + Math.random() * 60}%`,
                    left: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.5}s`,
                    animationDuration: `${2 + Math.random() * 2}s`
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Right Text */}
      <div className="absolute bottom-16 right-16 text-right">
        <p className="text-white text-lg md:text-xl leading-relaxed max-w-sm">
          We&apos;ll take it from there,<br />
          <span className="text-sm opacity-80">because clarity starts with conversation.</span>
        </p>
      </div>
    </section>
  )
}
