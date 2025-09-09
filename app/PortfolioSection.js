'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function PortfolioSection() {
  const [hoveredItem, setHoveredItem] = useState(null)

  return (
    <section className="bg-gray-900 py-16 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">
            <span className="font-light italic text-gray-400">See the work.</span>{' '}
            <span className="font-normal text-white">Feel the difference.</span>
          </h2>
          
          <div className="text-gray-300 text-base md:text-lg max-w-lg mx-auto">
            <p className="mb-1">Every brand here started with siyappa</p>
            <p>and ended with a solid &quot;wah!&quot;</p>
          </div>
        </div>

        {/* Portfolio Grid - With Overlapping Cards */}
        <div className="flex flex-col lg:flex-row items-center justify-center">
          
          {/* First Card - LARGEST - Laptop with Flowers */}
          <div
            className="relative group cursor-pointer z-40 transition-transform duration-300 hover:scale-105 hover:z-50"
            onMouseEnter={() => setHoveredItem(1)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="w-96 h-64 bg-gradient-to-br from-pink-100 via-green-50 to-blue-100 rounded-3xl overflow-hidden relative shadow-2xl">
              {/* Floral background with scattered flowers */}
              <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-white to-green-200">
                {/* Scattered flower elements */}
                <div className="absolute top-4 left-4 w-3 h-3 bg-pink-400 rounded-full opacity-60"></div>
                <div className="absolute top-8 right-8 w-2 h-2 bg-yellow-400 rounded-full opacity-70"></div>
                <div className="absolute bottom-12 left-8 w-2 h-2 bg-purple-400 rounded-full opacity-60"></div>
                <div className="absolute top-12 left-12 w-2 h-2 bg-blue-400 rounded-full opacity-70"></div>
                <div className="absolute bottom-8 right-12 w-3 h-3 bg-green-400 rounded-full opacity-60"></div>
              </div>
              
              {/* Laptop mockup */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-gray-800 rounded-lg p-1">
                  <div className="bg-white rounded h-24 flex items-center justify-center">
                    <div className="w-full h-full bg-white rounded flex">
                      <div className="w-1/3 bg-gray-100 flex flex-col p-2 space-y-1">
                        <div className="w-4 h-4 bg-red-500 rounded"></div>
                        <div className="w-full h-1 bg-gray-300 rounded"></div>
                        <div className="w-full h-1 bg-gray-300 rounded"></div>
                        <div className="w-2/3 h-1 bg-gray-300 rounded"></div>
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

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 rounded-3xl ${
                hoveredItem === 1 ? 'opacity-100' : 'opacity-0'
              }`}>
                <button className="bg-white text-gray-900 px-6 py-3 rounded-full font-medium">
                  View Project
                </button>
              </div>
            </div>
          </div>

          {/* Second Card - MEDIUM - AME BY AMI KARIA BRANDING - Overlapping */}
          <div
            className="relative group cursor-pointer z-30 -ml-8 transition-transform duration-300 hover:scale-105 hover:z-50"
            onMouseEnter={() => setHoveredItem(2)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="w-72 h-52 bg-gradient-to-br from-green-800 to-green-900 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center text-white shadow-2xl">
              <div className="text-xl font-bold mb-2">AME BY AMI KARIA</div>
              <div className="text-lg font-medium tracking-widest">BRANDING</div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 rounded-3xl ${
                hoveredItem === 2 ? 'opacity-100' : 'opacity-0'
              }`}>
                <button className="bg-white text-gray-900 px-6 py-2 rounded-full font-medium">
                  View Project
                </button>
              </div>
            </div>
          </div>

          {/* Third Card - SMALL - Looking For Gull Benali - Overlapping */}
          <div
            className="relative group cursor-pointer z-20 -ml-6 transition-transform duration-300 hover:scale-105 hover:z-50"
            onMouseEnter={() => setHoveredItem(3)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="w-56 h-40 bg-gradient-to-br from-pink-200 to-pink-300 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center shadow-2xl">
              <div className="text-gray-700 text-sm mb-1">Looking For</div>
              <div className="text-gray-900 font-bold text-base">Gull Benali</div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 rounded-3xl ${
                hoveredItem === 3 ? 'opacity-100' : 'opacity-0'
              }`}>
                <button className="bg-white text-gray-900 px-5 py-2 rounded-full font-medium text-sm">
                  View Project
                </button>
              </div>
            </div>
          </div>

          {/* Fourth Card - SMALLEST - ALINAH Logo - Overlapping */}
          <div
            className="relative group cursor-pointer z-10 -ml-4 transition-transform duration-300 hover:scale-105 hover:z-50"
            onMouseEnter={() => setHoveredItem(4)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div className="w-48 h-36 bg-gradient-to-br from-gray-800 to-gray-900 rounded-3xl overflow-hidden relative flex flex-col items-center justify-center text-white shadow-2xl">
              {/* Logo symbol */}
              <div className="w-12 h-12 border-2 border-white rounded-lg flex items-center justify-center mb-2">
                <div className="text-xl font-light">A</div>
              </div>
              <div className="text-xs font-medium tracking-wider">ALINAH</div>

              {/* Hover overlay */}
              <div className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 rounded-3xl ${
                hoveredItem === 4 ? 'opacity-100' : 'opacity-0'
              }`}>
                <button className="bg-white text-gray-900 px-4 py-2 rounded-full font-medium text-sm">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
