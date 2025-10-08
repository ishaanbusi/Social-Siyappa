'use client'

import { useState } from 'react'

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState(null)

  const services = [
    {
      id: '01',
      title: 'Branding Strategy & Voice',
      color: 'bg-gray-200',
      textColor: 'text-black'
    },
    {
      id: '02',
      title: 'Content Strategy & Campaign',
      color: 'bg-purple-600',
      textColor: 'text-white'
    },
    {
      id: '03',
      title: 'Website Design & Development',
      color: 'bg-gray-200',
      textColor: 'text-black'
    },
    {
      id: '04',
      title: 'Visual Design & Production',
      color: 'bg-gray-200',
      textColor: 'text-black'
    },
    {
      id: '05',
      title: 'Ad & Analytics',
      color: 'bg-gray-200',
      textColor: 'text-black'
    },
    {
      id: '06',
      title: 'Performance Marketing',
      color: 'bg-purple-600',
      textColor: 'text-white'
    }
  ]

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-4">
              <span className="italic">What</span> We Offer
            </h1>
            <p className="text-lg text-gray-300 max-w-md">
              Smart strategy. Sharp storytelling. Systems that scale with you
            </p>
          </div>

          {/* Circle Icon - Top Right */}
          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <svg 
              className="w-6 h-6 text-black transform rotate-45" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              viewBox="0 0 24 24"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className={`relative group cursor-pointer transition-all duration-300 ${
                hoveredCard === service.id ? 'transform scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
            >
              {/* Service Card */}
              <div className={`${service.color} rounded-3xl p-8 h-64 flex flex-col justify-between relative overflow-hidden shadow-lg`}>
                
                

                {/* Service Number */}
                <div className="mb-4">
                  <span className={`text-sm font-medium ${service.textColor} opacity-70`}>
                    {service.id}
                  </span>
                </div>

                {/* Service Title */}
                <div className="flex-1 flex items-end">
                  <h3 className={`text-xl md:text-2xl font-semibold leading-tight ${service.textColor}`}>
                    {service.title}
                  </h3>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl opacity-0 transition-opacity duration-300 flex items-center justify-center ${
                  hoveredCard === service.id ? 'opacity-95' : ''
                }`}>
                  <div className="text-center text-white p-6">
                    <h4 className="text-xl font-semibold mb-3">{service.title}</h4>
                    <p className="text-sm opacity-90 leading-relaxed">
                      Comprehensive solutions tailored to your brand&apos;s unique needs and goals.
                    </p>
                    <button className="mt-4 bg-white text-purple-600 px-6 py-2 rounded-full font-medium hover:bg-gray-100 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-400 text-lg mb-8">
            Ready to scale your brand with strategy that works?
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105">
            Start Your Project
          </button>
        </div>
      </div>
    </main>
  )
}
