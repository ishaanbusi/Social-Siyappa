'use client';

import React, { useMemo, useRef } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const DEFAULT_SERVICES = [
  'Visual Design & Production',
  'Branding & Marketing',
  'Web Design',
  'Web Development',
  'Performance Marketing',
  'Ad & Analytics',
  'Content Strategy & Campaigns',
  'AI-Integrated Marketing',
  'AI Photoshoot',
  'Narrative Design',
  'AI-Powered Branding',
];

const PILE_X = [25, 32, 38, 44, 50, 56, 62, 68, 74, 80];
const PILE_Y = [-15, -35, -65, -25, -45, -100, -30, -55, -80, -5];

// Lightweight PRNG for stable, per-mount randomness
function prng(seed) {
  let t = seed + 0x6d2b79f5;
  return () => {
    t |= 0;
    t = (t + 0x6d2b79f5) | 0;
    let r = Math.imul(t ^ (t >>> 15), 1 | t);
    r ^= r + Math.imul(r ^ (r >>> 7), 61 | r);
    return ((r ^ (r >>> 14)) >>> 0) / 4294967296;
  };
}

function randBetween(r, min, max) {
  return min + r() * (max - min);
}

export default function ServicesSection({
  headline = 'You bring the substance',
  subhead = 'We bring the structure',
  tagline = 'With a spoonful of strategy and a lot of sense.',
  ctaLabel = 'Work with Us',
  onCtaClick,
  services: servicesProp,
}) {
  const services = useMemo(
    () => Array.from(new Set(servicesProp || DEFAULT_SERVICES)),
    [servicesProp]
  );

  const prefersReducedMotion = useReducedMotion();
  const mountSeed = useRef(Math.floor(Math.random() * 1e9)).current;

  const layout = useMemo(() => {
    const count = services.length;
    const baseCount = Math.min(count, Math.min(PILE_X.length, PILE_Y.length));

    const xSlots = [];
    const ySlots = [];
    for (let i = 0; i < count; i++) {
      if (i < baseCount) {
        xSlots.push(PILE_X[i]);
        ySlots.push(PILE_Y[i]);
      } else {
        const cycle = i % baseCount;
        xSlots.push(Math.max(18, Math.min(82, PILE_X[cycle] + ((i - baseCount) % 3) * 2)));
        ySlots.push(PILE_Y[cycle] - ((i - baseCount) % 4) * 8);
      }
    }

    return services.map((_, i) => {
      const r = prng(mountSeed + i * 101);
      const startX = randBetween(r, 20, 80);
      const settleX = xSlots[i] + randBetween(r, -4, 4);
      const settleY = ySlots[i] + randBetween(r, -8, 8);
      const startRot = randBetween(r, -40, 40);
      const endRot = randBetween(r, -15, 15);
      const startScale = randBetween(r, 0.95, 1.08);
      const delay = randBetween(r, 0, 1.1);
      const duration = randBetween(r, 2.4, 3.4);

      return {
        startX,
        settleX,
        settleY,
        startRot,
        endRot,
        startScale,
        delay,
        duration,
        zIndex: 10 + i,
      };
    });
  }, [services, mountSeed]);

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
        <p className="text-lg md:text-2xl text-gray-700 font-medium mb-1">{subhead}</p>
        <p className="text-sm md:text-lg text-gray-600 mb-6 md:mb-8">{tagline}</p>

        {ctaLabel && (
          <button
            type="button"
            onClick={onCtaClick}
            className="bg-white border-2 border-gray-900 text-gray-900 px-6 md:px-8 py-3 rounded-full font-medium text-base md:text-lg hover:bg-gray-900 hover:text-white transition-colors duration-300 shadow focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-gray-900"
          >
            {ctaLabel}
          </button>
        )}
      </div>

      {/* Tags */}
      <div className="relative w-full max-w-5xl flex-1 flex items-end justify-center pb-8">
        {services.map((tag, i) => {
          const cfg = layout[i];

          if (prefersReducedMotion) {
            return (
              <motion.div
                key={tag + i}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0, transition: { delay: i * 0.04 } }}
                className="mx-1 my-1 px-4 sm:px-5 py-2 sm:py-2.5 bg-black text-white rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-md cursor-default whitespace-nowrap select-none"
                title={tag}
                aria-label={tag}
              >
                {tag}
              </motion.div>
            );
          }

          return (
            <motion.div
              key={tag + i}
              initial={{
                top: 0,
                left: `${cfg.startX}%`,
                opacity: 0,
                rotate: cfg.startRot,
                scale: cfg.startScale,
              }}
              animate={{
                top: `calc(100% + ${cfg.settleY}px)`,
                left: `${cfg.settleX}%`,
                opacity: 1,
                rotate: cfg.endRot,
                transition: {
                  duration: cfg.duration,
                  delay: cfg.delay,
                  type: 'spring',
                  stiffness: 45,
                  damping: 16,
                },
              }}
              whileHover={{
                scale: 1.08,
                rotate: cfg.endRot + 4,
                transition: { duration: 0.25 },
              }}
              className="absolute px-5 sm:px-6 py-2 sm:py-3 bg-black text-white rounded-full font-semibold text-xs sm:text-sm md:text-base shadow-lg cursor-default whitespace-nowrap select-none"
              style={{ zIndex: cfg.zIndex, userSelect: 'none' }}
              title={tag}
              aria-label={tag}
            >
              {tag}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
