'use client'

import { useState, useEffect } from 'react'
import Image from 'next/image'

export default function HeroSection() {
  const [isImageHovered, setIsImageHovered] = useState(false)
  const [isLoaded, setIsLoaded] = useState(false)
  const [count, setCount] = useState(0)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCount((prev) => (prev === 3 ? 0 : prev + 1))
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative bg-gradient-to-br from-gray-50 via-white to-gray-100 min-h-[100dvh] flex items-center justify-center px-4 sm:px-6 lg:px-12 overflow-hidden border-2 sm:border-4 border-purple-500 animate-pulse-border-inset">
      {/* Animated Background Elements - reduced on mobile */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 sm:top-20 right-10 sm:right-20 w-40 sm:w-72 h-40 sm:h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 animate-blob"></div>
        <div className="absolute bottom-10 sm:bottom-20 left-10 sm:left-20 w-40 sm:w-72 h-40 sm:h-72 bg-purple-100 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 w-40 sm:w-72 h-40 sm:h-72 bg-pink-100 rounded-full mix-blend-multiply filter blur-2xl sm:blur-3xl opacity-20 sm:opacity-30 animate-blob animation-delay-4000"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto text-center py-4 sm:py-8">
        <div className="space-y-3 sm:space-y-6 lg:space-y-8">
          {/* First Line */}
          <div
            className={`leading-tight transition-all duration-1000 delay-100 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{
              fontSize: 'clamp(1.75rem, 8vw, 5rem)',
            }}
          >
            <span className="font-light italic text-gray-500 animate-fade-in">Your</span>{' '}
            <span className="font-light italic text-gray-500 animate-fade-in animation-delay-200">audience</span>{' '}
            <span className="font-bold text-gray-900 animate-scale-in animation-delay-400">decides</span>
          </div>

          {/* Second Line with Counter - improved mobile layout */}
          <div
            className={`flex justify-center items-center gap-2 sm:gap-4 lg:gap-6 flex-wrap leading-tight transition-all duration-1000 delay-300 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            {/* Counter */}
            <span
              key={count}
              className="font-bold text-gray-900 transition-all duration-600 order-1"
              style={{ fontSize: 'clamp(1.75rem, 8vw, 5rem)' }}
            >
              in {count} seconds.
            </span>

            {/* Hover Image - better mobile sizing */}
            <div
              className={`relative transition-all duration-700 ease-out cursor-pointer animate-float order-2 sm:order-2
                          ${isImageHovered ? 'scale-110 sm:scale-125 rotate-6 sm:rotate-12' : 'scale-100'} 
                          my-2 sm:my-0`}
              onMouseEnter={() => setIsImageHovered(true)}
              onMouseLeave={() => setIsImageHovered(false)}
              onTouchStart={() => setIsImageHovered(true)}
              onTouchEnd={() => setIsImageHovered(false)}
              style={{
                WebkitTapHighlightColor: 'transparent',
              }}
            >
              <Image
                src="/images/banner.png"
                alt="Brain Icon"
                width={280}
                height={280}
                priority
                sizes="(max-width: 640px) 120px, (max-width: 1024px) 180px, 280px"
                className={`transition-all duration-700 object-contain
                            ${
                              isImageHovered
                                ? 'drop-shadow-[0_0_25px_rgba(59,130,246,0.8)] sm:drop-shadow-[0_0_40px_rgba(59,130,246,0.9)] brightness-110'
                                : 'drop-shadow-xl sm:drop-shadow-2xl'
                            }`}
                style={{
                  width: 'auto',
                  height: 'auto',
                  maxWidth: 'clamp(100px, 25vw, 200px)',
                }}
              />

              {/* Glow Effects - reduced on mobile */}
              {isImageHovered && (
                <>
                  <div className="pointer-events-none absolute inset-0 rounded-full blur-2xl sm:blur-3xl opacity-40 sm:opacity-60 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 animate-spin-slow"></div>
                  <div className="pointer-events-none absolute inset-0 rounded-full blur-xl sm:blur-2xl opacity-30 sm:opacity-40 bg-gradient-to-r from-yellow-400 via-red-400 to-pink-400"></div>
                </>
              )}
            </div>

            {/* "We make" text - moves to new line on mobile */}
            <span
              className="font-light italic text-gray-500 animate-fade-in animation-delay-800 order-3 w-full sm:w-auto"
              style={{ fontSize: 'clamp(1.75rem, 8vw, 5rem)' }}
            >
              We make
            </span>
          </div>

          {/* Third Line */}
          <div
            className={`leading-tight transition-all duration-1000 delay-500 ${
              isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
            style={{ fontSize: 'clamp(1.75rem, 8vw, 5rem)' }}
          >
            <span className="font-bold text-gray-900 animate-scale-in animation-delay-1000 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 bg-clip-text text-transparent">
              those seconds count
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator - better mobile positioning */}
      <div
        className={`absolute bottom-4 sm:bottom-8 lg:bottom-12 left-1/2 -translate-x-1/2 transition-all duration-1000 delay-700 ${
          isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="w-6 h-10 sm:w-7 sm:h-12 border-2 border-gray-400 rounded-full flex justify-center hover:border-gray-600 transition-colors cursor-pointer touch-manipulation">
          <div className="w-1 h-2 sm:w-1.5 sm:h-3 bg-gray-600 rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-xs text-gray-500 mt-1 sm:mt-2 animate-pulse">Scroll</p>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes blob {
          0%, 100% { transform: translate(0, 0) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
        }

        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }

        @media (min-width: 640px) {
          @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-20px); }
          }
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

        @keyframes pulse-border-inset {
          0%, 100% { 
            border-color: rgba(168, 85, 247, 1);
            box-shadow: inset 0 0 15px rgba(168, 85, 247, 0.6), 
                        inset 0 0 30px rgba(168, 85, 247, 0.4);
          }
          50% { 
            border-color: rgba(168, 85, 247, 0.5);
            box-shadow: inset 0 0 25px rgba(168, 85, 247, 0.8), 
                        inset 0 0 50px rgba(168, 85, 247, 0.6);
          }
        }

        @media (min-width: 640px) {
          @keyframes pulse-border-inset {
            0%, 100% { 
              border-color: rgba(168, 85, 247, 1);
              box-shadow: inset 0 0 20px rgba(168, 85, 247, 0.8), 
                          inset 0 0 40px rgba(168, 85, 247, 0.6),
                          inset 0 0 60px rgba(168, 85, 247, 0.4);
            }
            50% { 
              border-color: rgba(168, 85, 247, 0.5);
              box-shadow: inset 0 0 30px rgba(168, 85, 247, 1), 
                          inset 0 0 60px rgba(168, 85, 247, 0.8),
                          inset 0 0 90px rgba(168, 85, 247, 0.6);
            }
          }
        }

        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 3s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
        .animate-fade-in { animation: fade-in 0.8s ease-out forwards; }
        .animate-scale-in { animation: scale-in 0.8s ease-out forwards; }
        .animate-ping-slow { animation: ping-slow 2s cubic-bezier(0, 0, 0.2, 1) infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-pulse-border-inset { animation: pulse-border-inset 2s ease-in-out infinite; }

        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }

        /* Prevent text selection on double-tap */
        @media (hover: none) and (pointer: coarse) {
          * {
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            user-select: none;
          }
        }
      `}</style>
    </section>
  )
}
