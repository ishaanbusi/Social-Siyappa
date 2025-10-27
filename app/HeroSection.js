'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [isImageHovered, setIsImageHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 h-[100dvh] flex items-center justify-center px-6 sm:px-8 lg:px-12 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Top Right Text with Animation */}
      {/* <div className={`absolute top-6 right-6 sm:top-10 sm:right-12 text-right transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <p className="text-gray-700 font-semibold text-sm sm:text-base lg:text-lg tracking-widest uppercase animate-pulse-slow">
          WE DO BRANDING LIKE<br />
          NO ONE ELSE
        </p>
      </div> */}

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto text-center py-8">
        <div className="space-y-4 sm:space-y-6 lg:space-y-8">
          {/* First Line with Stagger Animation */}
          <div
            className={`leading-tight transition-all duration-1000 delay-100 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{
              fontSize: 'clamp(2rem, 5.5vw, 5rem)',
            }}
          >
            <span className="font-light italic text-gray-500 animate-fade-in">Your</span>{' '}
            <span className="font-light italic text-gray-500 animate-fade-in animation-delay-200">audience</span>{' '}
            <span className="font-bold text-gray-900 animate-scale-in animation-delay-400">decides</span>
          </div>

          {/* Second Line with Image */}
          <div
            className={`flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 flex-wrap sm:flex-nowrap leading-tight transition-all duration-1000 delay-300 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          >
            <span
              className="font-bold text-gray-900 animate-scale-in animation-delay-600"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }}
            >
              in 3 seconds.
            </span>

            {/* Enhanced Image with Hover/Touch Effects */}
            <div
              className={`relative transition-all duration-700 ease-out cursor-pointer animate-float
                          ${isImageHovered ? 'scale-125 rotate-12' : 'scale-100'} 
                          mx-2 sm:mx-4`}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
              onTouchStart={() => setIsImageHovered(true)}
              onTouchEnd={() => setIsImageHovered(false)}
            >
              

              <Image
                src="/images/banner.png"
                alt="Brain Icon"
                width={280}
                height={280}
                priority
                sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 280px"
                className={`transition-all duration-700 object-contain
                            ${isImageHovered
                              ? 'drop-shadow-[0_0_40px_rgba(59,130,246,0.9)] brightness-110'
                              : 'drop-shadow-2xl'}`}
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: '200px',
                }}
              />
              
              {/* Enhanced Glow Effect */}
              {isImageHovered && (
                <>
                  <div className="pointer-events-none absolute inset-0 rounded-full blur-3xl opacity-60 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
                  <div className="pointer-events-none absolute inset-0 rounded-full blur-2xl opacity-40 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400"></div>
                </>
              )}
            </div>

            <span
              className="font-light italic text-gray-500 animate-fade-in animation-delay-800"
              style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }}
            >
              We make
            </span>
          </div>

          {/* Third Line with Final Animation */}
          <div
            className={`leading-tight transition-all duration-1000 delay-500 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ fontSize: 'clamp(2rem, 5.5vw, 5rem)' }}
          >
            <span className="font-bold text-gray-900 animate-scale-in animation-delay-1000 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              those seconds count
            </span>
          </div>
        </div>
      </div>

      {/* Enhanced Scroll Indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 sm:bottom-12 transition-all duration-1000 delay-700 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
        <div className="w-7 h-12 border-2 border-gray-400 rounded-full flex justify-center hover:border-gray-600 transition-colors cursor-pointer">
          <div className="w-1.5 h-3 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-xs text-gray-500 mt-2 animate-pulse">Scroll</p>
      </div>

      {/* Add custom animations to your globals.css or tailwind.config.js */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }

        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.8); }
          to { opacity: 1; transform: scale(1); }
        }

        @keyframes ping-slow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animate-float {
          animation: float 3s ease-in-out infinite;
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s ease-in-out infinite;
        }

        .animate-fade-in {
          animation: fade-in 0.8s ease-out forwards;
        }

        .animate-scale-in {
          animation: scale-in 0.8s ease-out forwards;
        }

        .animate-ping-slow {
          animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        .animate-spin-slow {
          animation: spin-slow 3s linear infinite;
        }

        .animation-delay-200 {
          animation-delay: 0.2s;
        }

        .animation-delay-400 {
          animation-delay: 0.4s;
        }

        .animation-delay-600 {
          animation-delay: 0.6s;
        }

        .animation-delay-800 {
          animation-delay: 0.8s;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </section>
  )
}
