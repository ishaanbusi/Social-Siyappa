'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function PortfolioSection() {
  const [hoveredItem, setHoveredItem] = useState(null)
  const [activeItem, setActiveItem] = useState(null) // for touch/click

  const isActive = (id) => hoveredItem === id || activeItem === id

  return (
    <section className="bg-gray-900 py-16 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="leading-tight mb-4 sm:mb-6 text-3xl md:text-5xl lg:text-6xl">
            <span className="font-light italic text-gray-400">See the work.</span>{' '}
            <span className="font-normal text-white">Feel the difference.</span>
          </h2>

          <div className="text-gray-300 text-sm sm:text-base md:text-lg max-w-lg mx-auto">
            <p className="mb-1">Every brand here started with siyappa</p>
            <p>and ended with a solid &quot;wah!&quot;</p>
          </div>
        </div>

        {/* Card row */}
        <div
          className="
            flex flex-col items-stretch
            gap-4 sm:gap-6
            lg:flex-row lg:items-center lg:justify-center
          "
        >
          {/* Card 1 */}
          <button
            type="button"
            className="
              relative group cursor-pointer z-40
              transition-transform duration-300
              hover:scale-105 hover:z-50
              w-full sm:w-[28rem] h-56 sm:h-64
              rounded-3xl overflow-hidden shadow-2xl
              bg-gradient-to-br from-pink-100 via-green-50 to-blue-100
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
            "
            onMouseEnter={() => setHoveredItem(1)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => setActiveItem(activeItem === 1 ? null : 1)}
          >
            {/* Floral bg */}
            <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-white to-green-200">
              <div className="absolute top-4 left-4 w-3 h-3 bg-pink-400 rounded-full opacity-60" />
              <div className="absolute top-8 right-8 w-2 h-2 bg-yellow-400 rounded-full opacity-70" />
              <div className="absolute bottom-12 left-8 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
              <div className="absolute top-12 left-12 w-2 h-2 bg-blue-400 rounded-full opacity-70" />
              <div className="absolute bottom-8 right-12 w-3 h-3 bg-green-400 rounded-full opacity-60" />
            </div>

            {/* Laptop mockup */}
            <div className="absolute bottom-6 sm:bottom-8 left-6 right-6">
              <div className="bg-gray-800 rounded-lg p-1">
                <div className="bg-white rounded h-24 flex items-center justify-center">
                  <div className="w-full h-full bg-white rounded flex">
                    <div className="w-1/3 bg-gray-100 flex flex-col p-2 space-y-1">
                      <div className="w-4 h-4 bg-red-500 rounded" />
                      <div className="w-full h-1 bg-gray-300 rounded" />
                      <div className="w-full h-1 bg-gray-300 rounded" />
                      <div className="w-2/3 h-1 bg-gray-300 rounded" />
                    </div>
                    <div className="w-2/3 bg-white flex items-center justify-center">
                      <div className="w-16 h-16 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold text-sm">
                        ik
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Overlay */}
            <div
              className={`
                absolute inset-0 bg-black/50
                flex items-center justify-center
                transition-opacity duration-300
                ${isActive(1) ? 'opacity-100' : 'opacity-0'}
              `}
            >
              <span className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                View Project
              </span>
            </div>
          </button>

          {/* Card 2 */}
          <button
            type="button"
            className="
              relative group cursor-pointer z-30
              transition-transform duration-300
              hover:scale-105 hover:z-50
              w-full sm:w-80 h-48
              rounded-3xl overflow-hidden shadow-2xl
              bg-gradient-to-br from-green-800 to-green-900 text-white
              lg:-ml-8
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
            "
            onMouseEnter={() => setHoveredItem(2)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => setActiveItem(activeItem === 2 ? null : 2)}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-xl font-bold mb-2">AME BY AMI KARIA</div>
              <div className="text-lg font-medium tracking-widest">BRANDING</div>
            </div>
            <div
              className={`
                absolute inset-0 bg-black/50
                flex items-center justify-center
                transition-opacity duration-300
                ${isActive(2) ? 'opacity-100' : 'opacity-0'}
              `}
            >
              <span className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium">
                View Project
              </span>
            </div>
          </button>

          {/* Card 3 */}
          <button
            type="button"
            className="
              relative group cursor-pointer z-20
              transition-transform duration-300
              hover:scale-105 hover:z-50
              w-full sm:w-64 h-40
              rounded-3xl overflow-hidden shadow-2xl
              bg-gradient-to-br from-pink-200 to-pink-300
              lg:-ml-6
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
            "
            onMouseEnter={() => setHoveredItem(3)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => setActiveItem(activeItem === 3 ? null : 3)}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="text-gray-700 text-sm mb-1">Looking For</div>
              <div className="text-gray-900 font-bold text-base">Gull Benali</div>
            </div>
            <div
              className={`
                absolute inset-0 bg-black/50
                flex items-center justify-center
                transition-opacity duration-300
                ${isActive(3) ? 'opacity-100' : 'opacity-0'}
              `}
            >
              <span className="bg-white text-gray-900 px-5 py-2 rounded-full font-medium text-sm">
                View Project
              </span>
            </div>
          </button>

          {/* Card 4 */}
          <button
            type="button"
            className="
              relative group cursor-pointer z-10
              transition-transform duration-300
              hover:scale-105 hover:z-50
              w-full sm:w-52 h-36
              rounded-3xl overflow-hidden shadow-2xl
              bg-gradient-to-br from-gray-800 to-gray-900 text-white
              lg:-ml-4
              focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60
            "
            onMouseEnter={() => setHoveredItem(4)}
            onMouseLeave={() => setHoveredItem(null)}
            onClick={() => setActiveItem(activeItem === 4 ? null : 4)}
          >
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center mb-2">
                <div className="text-xl font-light">A</div>
              </div>
              <div className="text-xs font-medium tracking-wider">ALINAH</div>
            </div>
            <div
              className={`
                absolute inset-0 bg-black/50
                flex items-center justify-center
                transition-opacity duration-300
                ${isActive(4) ? 'opacity-100' : 'opacity-0'}
              `}
            >
              <span className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm">
                View Project
              </span>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
