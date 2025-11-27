'use client';

import React from 'react';
import Link from 'next/link';

export default function ServicesSection({
  headline = 'You bring the substance',
  subhead = 'We bring the structure',
  tagline = 'With a spoonful of strategy and a lot of sense.',
  ctaLabel = 'Work with Us',
  onCtaClick,
  imageSrc = '/images/home4.png', // <-- just replace this
}) {
  return (
    <section
      role="region"
      aria-labelledby="services-title"
      className="relative bg-gray-50 min-h-[100dvh] flex flex-col items-center justify-between px-4 sm:px-6 py-12 overflow-hidden"
    >
      {/* Background accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute top-6 right-6 sm:top-10 sm:right-10 w-24 sm:w-32 h-24 sm:h-32 bg-gray-200 rounded-full opacity-30"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute bottom-6 left-6 sm:bottom-10 sm:left-10 w-20 sm:w-24 h-20 sm:h-24 bg-gray-200 rounded-full opacity-20"
      />

      {/* Header */}
      <div className="max-w-4xl w-full text-center pt-8 sm:pt-12 z-20">
        <h2
          id="services-title"
          className="leading-tight font-bold text-gray-900 mb-2 text-2xl md:text-4xl lg:text-5xl"
        >
          {headline}
        </h2>

        <p className="text-lg md:text-2xl text-gray-700 font-medium mb-1">
          {subhead}
        </p>
        <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">
          {tagline}
        </p>

        <Link
  href="/services"
  className="bg-white border-2 border-gray-900 text-gray-900 px-6 md:px-8 py-3 rounded-full font-medium text-base md:text-lg hover:bg-gray-900 hover:text-white transition-colors duration-300 shadow inline-block"
>
  {ctaLabel}
</Link>

      </div>

      {/* Bottom center image */}
      <div className="relative w-full max-w-5xl flex-1 flex items-end justify-center">
        <div className="relative w-full max-w-5xl flex-1 flex items-end justify-center pb-0">
  <img
    src={imageSrc}
    alt="Center Graphic"
    className="w-[32rem] sm:w-[38rem] md:w-[45rem] lg:w-[52rem] object-contain mx-auto translate-y-2"
  />
</div>


      </div>
    </section>
  );
}
