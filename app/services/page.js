'use client'

import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'

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

  const headerRef = useRef(null)
  const isInView = useInView(headerRef, { once: true, margin: '-100px' })

  // ✅ UPDATED CONTENT
  const services = [
    {
      id: '01',
      title: 'Brand Strategy & Voice',
      image: '/images/services/branding.png',
      imageAlt: 'Brand Strategy visuals',
      description:
        'Define what you stand for and how to say it. Positioning, messaging, and founder narrative clarity that aligns your entire brand.'
    },
    {
      id: '02',
      title: 'Content & Campaign Direction',
      image: '/images/services/content.png',
      imageAlt: 'Content and campaign direction',
      description:
        'Content that connects and performs. Platform strategy, campaign planning, and AI-powered workflows built for consistency.'
    },
    {
      id: '03',
      title: 'Website & Narrative Design',
      image: '/images/section-home/3.png',
      imageAlt: 'Website narrative design',
      description:
        'Structure your story with intent. Site messaging, conversion-focused copy, and story-led design for clarity and impact.'
    },
    {
      id: '04',
      title: 'Visual Identity & Creative Assets',
      image: '/images/services/visual-design.png',
      imageAlt: 'Visual identity design',
      description:
        'Design that looks good and sounds like you. Brand systems, social templates, creative assets, and founder presentation decks.'
    },
    {
      id: '05',
      title: 'Ad Creative & Performance Content',
      image: '/images/services/analytics.png',
      imageAlt: 'Ad creative visuals',
      description:
        'Scale reach without losing depth. High-performing ads, emails, and content that blends creativity with measurable performance.'
    },
    {
      id: '06',
      title: 'Humanised Frameworks™',
      image: '/images/services/performance-marketing.png',
      imageAlt: 'Frameworks system',
      description:
        'Consistency with confidence. Voice maps, POV lenses, and content archetypes that make team-wide communication effortless.'
    },
    {
      id: '07',
      title: 'AI Ads & AI Photoshoots',
      image: '/images/services/ai-marketing.png',
      imageAlt: 'AI photoshoot visuals',
      description:
        'Your product, anywhere on earth—no studio needed. 20+ concepts, photoreal images, cinematic compositions, zero production hassle.'
    },
    {
      id: '08',
      title: 'AI-Powered Branding',
      image: '/images/services/narrative-design.png',
      imageAlt: 'AI branding visuals',
      description:
        'Pretty is nice. Clear is cash. AI-driven messaging, story, and tone systems your entire team can use and scale.'
    },
    {
      id: '09',
      title: 'AI Content & Strategy',
      image: '/images/services/ai-branding.png',
      imageAlt: 'AI content creation visuals',
      description:
        'One strong idea, ten smart formats. Plan, script, produce, and publish weekly—on autopilot with AI-powered workflows.'
    }
  ]

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
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

  const subtitle =
    'Smart strategy. Sharp storytelling. Systems that scale with you'
  const words = subtitle.split(' ')

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.2 }
    }
  }

  const wordVariant = {
    hidden: { opacity: 0, filter: 'blur(10px)', y: 20 },
    visible: {
      opacity: 1,
      filter: 'blur(0px)',
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.4, 0.25, 1] }
    }
  }

  return (
    <main className="min-h-screen bg-black text-white px-8 py-16">
      <div className="max-w-7xl mx-auto">
        {/* HEADER */}
        <div ref={headerRef} className="flex justify-between items-start mb-16">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light mb-6">
              <span className="italic">What</span> We Offer
            </h1>

            <motion.p
  className="
    text-xl md:text-2xl lg:text-3xl text-gray-300 leading-relaxed
    max-w-xl md:max-w-2xl
    mx-auto
    flex flex-wrap gap-x-2 gap-y-1
    text-left md:text-center
  "
  variants={container}
  initial="hidden"
  animate={isInView ? "visible" : "hidden"}
>
  {words.map((word, index) => (
    <motion.span
      key={index}
      variants={wordVariant}
      className="inline-block"
    >
      {word}
    </motion.span>
  ))}
</motion.p>

          </div>

          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center">
            <svg
              className="w-6 h-6 text-black rotate-45"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </div>
        </div>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="flip-card-container h-[340px] sm:h-[360px] md:h-[380px]"
              onMouseEnter={() => setHoveredCard(service.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onClick={() => {
                if (window.innerWidth < 768) {
                  setHoveredCard((prev) =>
                    prev === service.id ? null : service.id
                  )
                }
              }}
            >
              <div
                className={`flip-card ${
                  hoveredCard === service.id ? 'flipped' : ''
                }`}
              >
                {/* FRONT */}
                <div className="flip-card-face flip-card-front rounded-3xl overflow-hidden shadow-xl">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-black/40" />

                  <div className="relative z-10 p-6 h-full flex flex-col justify-between">
                    <span className="text-sm text-white/80">{service.id}</span>
                    <h3 className="text-xl sm:text-2xl font-semibold text-white leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                {/* BACK */}
                <div className="flip-card-face flip-card-back rounded-3xl bg-gradient-to-br from-purple-600 to-purple-800 shadow-xl p-6 flex flex-col items-center justify-center text-center">
                  <h4 className="text-lg sm:text-xl font-semibold mb-3">
                    {service.title}
                  </h4>
                  <p className="text-sm sm:text-base opacity-90 leading-relaxed px-2">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-20">
          <p className="text-gray-400 text-lg mb-8">
            Ready to scale your brand with strategy that works?
          </p>
          <button
            onClick={() => setIsPopupOpen(true)}
            className="bg-white text-black px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all hover:scale-105"
          >
            Start Your Project
          </button>
        </div>
      </div>

      {/* POPUP FORM (same as before) */}
      {isPopupOpen && (
        <>
          <div
            onClick={() => setIsPopupOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 animate-fadeIn"
          />

          <div className="fixed top-1/2 left-1/2 w-[90%] max-w-4xl -translate-x-1/2 -translate-y-1/2 bg-gradient-to-br from-black via-gray-900 to-black rounded-2xl shadow-2xl z-50 border border-white/10 overflow-hidden animate-scaleIn max-h-[90vh] overflow-y-auto">
            {/* Close */}
            <button
              onClick={() => setIsPopupOpen(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 text-white"
            >
              ✕
            </button>

            <div className="flex flex-col md:flex-row">
              {/* LEFT - FORM */}
              <div className="w-full md:w-1/2 p-8">
                <h3 className="text-2xl font-semibold text-white mb-2">
                  We&apos;d love to hear from you!
                </h3>

                <div className="space-y-4 mt-6">
                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border rounded-lg text-gray-900"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      Email <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border rounded-lg text-gray-900"
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border rounded-lg text-gray-900"
                      placeholder="Your phone number"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      City
                    </label>
                    <input
                      type="text"
                      name="city"
                      value={formData.city}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border rounded-lg text-gray-900"
                      placeholder="Your city"
                    />
                  </div>

                  <div>
                    <label className="block text-sm text-gray-300 mb-1">
                      Services Required <span className="text-red-400">*</span>
                    </label>

                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2.5 bg-white border rounded-lg text-gray-900"
                    >
                      <option value="">Select here</option>
                      {services.map((s) => (
                        <option key={s.id} value={s.title}>
                          {s.title}
                        </option>
                      ))}
                    </select>
                  </div>

                  <button
                    onClick={handleSubmit}
                    className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-medium py-3 rounded-lg mt-6 hover:scale-[1.02]"
                  >
                    Submit
                  </button>
                </div>
              </div>

              {/* RIGHT IMAGE */}
              <div className="hidden md:block w-1/2 relative">
                <img
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=800&h=1000&fit=crop"
                  alt="Contact"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-black/40" />
              </div>
            </div>
          </div>
        </>
      )}

      {/* FLIP CARD CSS */}
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
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

        .flip-card-container {
          perspective: 1100px;
        }

        .flip-card {
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.6s;
          position: relative;
        }

        .flipped {
          transform: rotateY(180deg);
        }

        .flip-card-face {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
        }

        .flip-card-back {
          transform: rotateY(180deg);
        }

        /* Mobile improvements */
        @media (max-width: 767px) {
          .flip-card-container {
            height: 300px !important;
          }
          .flip-card {
            transition: transform 0.4s ease;
          }
        }
      `}</style>
    </main>
  )
}
