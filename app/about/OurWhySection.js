'use client'

import { useState, useEffect } from 'react'

export default function OurWhySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 overflow-hidden flex items-center justify-center">
      
      {/* Background Pattern */}
      <div className="absolute inset-0">
        {/* Flowing lines and circuits */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 1200 800" fill="none">
          {/* Circuit board style lines */}
          <path d="M100 200 Q300 100 500 200 T900 300" stroke="rgba(59, 130, 246, 0.3)" strokeWidth="2" fill="none" />
          <path d="M200 400 Q400 300 600 400 T1000 500" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="2" fill="none" />
          <path d="M50 600 Q250 500 450 600 T850 700" stroke="rgba(236, 72, 153, 0.3)" strokeWidth="2" fill="none" />
          
          {/* Nodes */}
          {[...Array(20)].map((_, i) => (
            <circle
              key={i}
              cx={100 + (i * 60)}
              cy={200 + Math.sin(i) * 100}
              r="3"
              fill="rgba(255, 255, 255, 0.6)"
              className="animate-pulse"
              style={{ animationDelay: `${i * 0.2}s` }}
            />
          ))}
        </svg>

        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-ping"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Side - Futuristic Portrait */}
        <div className="relative flex justify-center lg:justify-start">
          <div className="relative">
            {/* Main portrait container */}
            <div className="w-80 h-96 md:w-96 md:h-[480px] bg-gradient-to-br from-purple-600 via-blue-600 to-pink-600 rounded-3xl overflow-hidden relative shadow-2xl">
              
              {/* Portrait silhouette */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-64 h-80 relative">
                  {/* Face silhouette */}
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-40 bg-gradient-to-t from-black via-gray-800 to-gray-600 rounded-t-full opacity-80"></div>
                  
                  {/* Hair/head area */}
                  <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-40 h-32 bg-gradient-to-b from-gray-700 to-gray-900 rounded-full opacity-70"></div>
                </div>
              </div>

              {/* Tech wing/feather overlay */}
              <div className="absolute top-0 right-0 w-full h-full">
                <svg viewBox="0 0 400 500" className="w-full h-full">
                  {/* Wing structure */}
                  <path
                    d="M200 100 Q300 150 350 250 Q320 350 280 400 Q250 420 220 400 Q200 380 200 350 Z"
                    fill="url(#wingGradient)"
                    opacity="0.7"
                  />
                  
                  {/* Feather details */}
                  {[...Array(8)].map((_, i) => (
                    <path
                      key={i}
                      d={`M${220 + i * 15} ${120 + i * 30} Q${240 + i * 20} ${140 + i * 35} ${210 + i * 18} ${160 + i * 40}`}
                      stroke="rgba(59, 130, 246, 0.6)"
                      strokeWidth="2"
                      fill="none"
                    />
                  ))}
                  
                  <defs>
                    <linearGradient id="wingGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="rgba(59, 130, 246, 0.4)" />
                      <stop offset="50%" stopColor="rgba(139, 92, 246, 0.4)" />
                      <stop offset="100%" stopColor="rgba(236, 72, 153, 0.4)" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              {/* Glowing orb */}
              <div className="absolute bottom-8 left-8">
                <div className="w-6 h-6 bg-blue-400 rounded-full shadow-lg animate-pulse"></div>
                <div className="absolute inset-0 w-6 h-6 bg-blue-400 rounded-full blur-md opacity-50"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Content */}
        <div className={`space-y-8 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
          
          {/* Main Headline */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white leading-tight">
            Our <span className="italic">Why</span>
          </h2>

          {/* Quote */}
          <div className="space-y-4">
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed">
              Because people don&apos;t connect with content<br />
              <span className="italic text-blue-300">— They connect with emotion.</span>
            </p>
          </div>

          {/* Body Text */}
          <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl">
            <p>
              We believe clarity builds trust, and trust builds brands. 
              We&apos;re here for the founders, creators, and rebels 
              who want to say something that actually matters.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
