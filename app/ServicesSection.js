'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function ServicesSection({
  headline = 'You bring the substance',
  subhead = 'We bring the structure',
  tagline = 'With a spoonful of strategy and a lot of sense.',
  ctaLabel = 'Work with Us',
  onCtaClick,
  imageSrc = '/images/home4.png',
}) {
  return (
    <section
      role="region"
      aria-labelledby="services-title"
      className="relative bg-gray-50 min-h-[100dvh] flex flex-col items-center justify-between px-4 sm:px-6 lg:px-8 py-8 sm:py-12 overflow-hidden"
    >
      {/* Background accents - responsive sizing */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute top-4 right-4 sm:top-8 sm:right-8 lg:top-10 lg:right-10 w-16 h-16 sm:w-24 sm:h-24 lg:w-32 lg:h-32 bg-gray-200 rounded-full opacity-30 animate-pulse"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-4 left-4 sm:bottom-8 sm:left-8 lg:bottom-10 lg:left-10 w-14 h-14 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-gray-200 rounded-full opacity-20 animate-pulse animation-delay-1000"
      />

      {/* Header - improved mobile spacing */}
      <div className="max-w-4xl w-full text-center pt-6 sm:pt-8 lg:pt-12 z-20 flex-shrink-0">
        <h2
          id="services-title"
          className="leading-tight font-bold text-gray-900 mb-2 sm:mb-3"
          style={{
            fontSize: 'clamp(1.75rem, 6vw, 3rem)',
          }}
        >
          {headline}
        </h2>

        <p 
          className="text-gray-700 font-medium mb-1 sm:mb-2"
          style={{
            fontSize: 'clamp(1.125rem, 3.5vw, 1.5rem)',
          }}
        >
          {subhead}
        </p>
        
        <p 
          className="text-gray-600 mb-5 sm:mb-6 lg:mb-8 px-2"
          style={{
            fontSize: 'clamp(0.875rem, 2.5vw, 1.125rem)',
          }}
        >
          {tagline}
        </p>

        <Link
          href="/services"
          className="inline-block bg-white border-2 border-gray-900 text-gray-900 px-5 sm:px-6 lg:px-8 py-2.5 sm:py-3 rounded-full font-medium text-sm sm:text-base lg:text-lg hover:bg-gray-900 hover:text-white active:scale-95 transition-all duration-300 shadow-md hover:shadow-lg touch-manipulation"
          aria-label="Navigate to services page"
        >
          {ctaLabel}
        </Link>
      </div>

      {/* Bottom center image - fully responsive */}
      <div className="relative w-full max-w-6xl flex-1 flex items-end justify-center min-h-0">
        <div className="relative w-full h-auto flex items-end justify-center pb-0">
          <Image
            src={imageSrc}
            alt="Services illustration showing our design approach"
            width={1200}
            height={600}
            sizes="(max-width: 640px) 95vw, (max-width: 768px) 90vw, (max-width: 1024px) 85vw, 80vw"
            className="w-full h-auto object-contain object-bottom max-w-[90vw] sm:max-w-[85vw] md:max-w-[75vw] lg:max-w-[65vw] translate-y-1 sm:translate-y-2"
            priority
            quality={90}
          />
        </div>
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.2;
            transform: scale(1.05);
          }
        }

        .animate-pulse {
          animation: pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-1000 {
          animation-delay: 1s;
        }

        /* Ensure smooth transitions on mobile */
        @media (prefers-reduced-motion: reduce) {
          .animate-pulse {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
