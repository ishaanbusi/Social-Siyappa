'use client'

import { useState } from 'react'

export default function ServicesPage() {
  const [hoveredCard, setHoveredCard] = useState(null)
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    mobile: '',
    city: '',
    service: ''
  })

  const services = [
    {
      id: '01',
      title: 'Branding Strategy & Voice',
      color: 'bg-gray-200',
      textColor: 'text-black',
      image: '/images/section-home/1.png',
      imageAlt: 'Branding strategy background'
    },
    {
      id: '02',
      title: 'Content Strategy & Campaign',
      color: 'bg-purple-600',
      textColor: 'text-white',
      image: '/images/section-home/2.png',
      imageAlt: 'Content strategy background'
    },
    {
      id: '03',
      title: 'Website Design & Development',
      color: 'bg-gray-200',
      textColor: 'text-black',
      image: '/images/section-home/3.png',
      imageAlt: 'Website development background'
    },
    {
      id: '04',
      title: 'Visual Design & Production',
      color: 'bg-gray-200',
      textColor: 'text-black',
      image: '/images/section-home/4.png',
      imageAlt: 'Visual design background'
    },
    {
      id: '05',
      title: 'Ad & Analytics',
      color: 'bg-gray-200',
      textColor: 'text-black',
      image: '/images/brain.png',
      imageAlt: 'Analytics background'
    },
    {
      id: '06',
      title: 'Performance Marketing',
      color: 'bg-purple-600',
      textColor: 'text-white',
      image: '/images/about.png',
      imageAlt: 'Performance marketing background'
    },
    {
      id: '07',
      title: 'AI Integrated Marketing',
      color: 'bg-gray-200',
      textColor: 'text-black',
      image: '/images/section-home/4.png',
      imageAlt: 'Visual design background'
    },
    {
      id: '08',
      title: 'Narrative Design',
      color: 'bg-gray-200',
      textColor: 'text-black',
      image: '/images/brain.png',
      imageAlt: 'Analytics background'
    },
    {
      id: '09',
      title: 'AI-Powered Branding',
      color: 'bg-purple-600',
      textColor: 'text-white',
      image: '/images/about.png',
      imageAlt: 'Performance marketing background'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    if (!formData.name || !formData.email || !formData.service) {
      alert('Please fill in all required fields')
      return
    }
    
    console.log('Form submitted:', formData)
    alert('Thank you for your submission! We will get back to you soon.')
    setIsPopupOpen(false)
    setFormData({ name: '', email: '', mobile: '', city: '', service: '' })
  }

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
              <div className="relative rounded-3xl h-64 overflow-hidden shadow-lg">
                
                {/* Full Cover Background Image */}
                <img
                  src={service.image}
                  alt={service.imageAlt}
                  className="absolute inset-0 w-full h-full object-cover"
                />

                {/* Dark Overlay for Better Text Readability */}
                <div className="absolute inset-0 bg-black/40 rounded-3xl"></div>

                {/* Card Content */}
                <div className="relative z-10 p-8 h-full flex flex-col justify-between">
                  
                  {/* Service Number */}
                  <div className="mb-4">
                    <span className="text-sm font-medium text-white opacity-70">
                      {service.id}
                    </span>
                  </div>

                  {/* Service Title */}
                  <div className="flex-1 flex items-end">
                    <h3 className="text-xl md:text-2xl font-semibold leading-tight text-white">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl opacity-0 transition-opacity duration-300 flex items-center justify-center z-20 ${
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
          <button 
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-300 hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* Popup Form */}
      {isPopupOpen && (
        <>
          {/* Backdrop */}
          <div
            onClick={() => setIsPopupOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fadeIn"
          />

          {/* Popup */}
          <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-4xl bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl shadow-2xl z-50 border border-white/10 overflow-hidden animate-scaleIn max-h-[90vh] overflow-y-auto">
            {/* Close button */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition-colors text-white z-10"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <div className="flex flex-col md:flex-row">
              {/* Form Section - Left */}
              <div className="w-full md:w-1/2 p-8">
                {/* Form Header */}
                <h3 className="text-2xl font-semibold text-white mb-2">We&apos;d love to hear from you!</h3>

                {/* Form */}
                <div className="space-y-4 mt-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">Mobile</label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">City</label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900 placeholder-gray-500"
                      placeholder="Your city"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-1">
                      Services Required <span className="text-red-400">*</span>
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all text-gray-900"
                    >
                      <option value="">Select here</option>
                      <option value="branding">Branding Strategy & Voice</option>
                      <option value="content">Content Strategy & Campaign</option>
                      <option value="web-design">Website Design & Development</option>
                      <option value="visual">Visual Design & Production</option>
                      <option value="analytics">Ad & Analytics</option>
                      <option value="performance">Performance Marketing</option>
                      <option value="ai-marketing">AI Integrated Marketing</option>
                      <option value="narrative">Narrative Design</option>
                      <option value="ai-branding">AI-Powered Branding</option>
                    </select>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all shadow-lg hover:shadow-xl mt-6 hover:scale-[1.02] active:scale-[0.98]"
                  >
                    Submit
                  </button>
                </div>
              </div>

              {/* Image Section - Right */}
              <div className="hidden md:block w-1/2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20" />
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=1000&fit=crop"
                  alt="Contact us"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40" />
                
                {/* Decorative content on image */}
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <h4 className="text-2xl font-bold mb-2">Let&apos;s Create Together</h4>
                  <p className="text-gray-200">Transform your vision into reality</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: translate(-50%, -50%) scale(0.9);
          }
          to {
            opacity: 1;
            transform: translate(-50%, -50%) scale(1);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 0.2s ease-out;
        }
        .animate-scaleIn {
          animation: scaleIn 0.3s ease-out;
        }
      `}</style>
    </main>
  )
}