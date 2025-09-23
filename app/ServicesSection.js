'use client'

import { useState, useEffect } from 'react'

export default function ServicesSection() {
  const [animatedTags, setAnimatedTags] = useState([])
  const services = [
    'Visual Design & Production',
    'Branding & Marketing',
    'Web Design',
    'Web Development',
    'Branding',
    'Marketing',
    'Performance Marketing',
    'AD & Analytics',
    'Web Development',
    'Content Strategy & Campaign',
  ]

  useEffect(() => {
    const timer = setTimeout(() => {
      setAnimatedTags(services.map((_, index) => index))
    }, 300)
    return () => clearTimeout(timer)
  }, [])

  // Responsive positions: tighter cluster on mobile, wider spread on md+
  const positionsMobile = [
    { top: '18%', left: '50%', rotation: '-8deg' },
    { top: '30%', left: '22%', rotation: '6deg' },
    { top: '28%', left: '78%', rotation: '-5deg' },
    { top: '45%', left: '15%', rotation: '8deg' },
    { top: '42%', left: '50%', rotation: '-7deg' },
    { top: '46%', left: '85%', rotation: '10deg' },
    { top: '62%', left: '25%', rotation: '-6deg' },
    { top: '66%', left: '50%', rotation: '7deg' },
    { top: '70%', left: '80%', rotation: '-4deg' },
    { top: '84%', left: '50%', rotation: '5deg' },
  ]

  const positionsDesktop = [
    { top: '15%', left: '25%', rotation: '-12deg' },
    { top: '8%', left: '55%', rotation: '8deg' },
    { top: '20%', left: '75%', rotation: '-5deg' },
    { top: '35%', left: '15%', rotation: '10deg' },
    { top: '30%', left: '45%', rotation: '-8deg' },
    { top: '25%', left: '65%', rotation: '12deg' },
    { top: '50%', left: '25%', rotation: '-10deg' },
    { top: '55%', left: '50%', rotation: '8deg' },
    { top: '60%', left: '75%', rotation: '-6deg' },
    { top: '75%', left: '40%', rotation: '7deg' },
  ]

  // Choose positions based on a simple viewport width check
  const isDesktop = typeof window !== 'undefined' ? window.innerWidth >= 768 : true
  const positions = isDesktop ? positionsDesktop : positionsMobile

  return (
    <section className="relative bg-gray-100 h-[100dvh] flex flex-col items-center justify-center px-4 sm:px-6 py-12 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-6 right-6 sm:top-10 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gray-200 rounded-full opacity-30"></div>
      <div className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-20 sm:w-24 h-20 sm:h-24 bg-gray-200 rounded-full opacity-20"></div>

      {/* Header Section */}
      <div className="max-w-4xl w-full text-center mb-8">
        <h2 className="leading-tight font-bold text-gray-900 mb-2 text-2xl md:text-4xl lg:text-5xl">
          You bring the <span className="italic font-light">substance</span>
        </h2>
        <p className="text-lg md:text-2xl text-gray-700 font-medium mb-1">
          We bring the structure
        </p>
        <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">
          with a spoonful of strategy and a lot of sense.
        </p>

        <button className="bg-white border-2 border-gray-900 text-gray-900 px-6 md:px-8 py-3 rounded-full font-medium text-base md:text-lg hover:bg-gray-900 hover:text-white transition-all duration-300 shadow">
          Work with Us
        </button>
      </div>

      {/* Floating Service Tags - Responsive stage */}
      <div className="relative w-full max-w-5xl h-56 sm:h-64 md:h-72 lg:h-80 flex items-center justify-center">
        {services.map((service, index) => {
          const pos = positions[index] || { top: '50%', left: '50%', rotation: '0deg' }
          return (
            <div
              key={index}
              className={`absolute bg-gray-900 text-white px-3 py-1.5 rounded-full text-xs md:text-sm font-medium whitespace-nowrap cursor-pointer transition-all duration-500 hover:scale-110 hover:bg-gray-800 hover:shadow-lg ${
                animatedTags.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                top: pos.top,
                left: pos.left,
                transform: `translate(-50%, -50%) rotate(${pos.rotation})`,
                transitionDelay: `${index * 80}ms`,
              }}
            >
              {service}
            </div>
          )
        })}
      </div>
    </section>
  )
}
