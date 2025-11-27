'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default function PortfolioSection() {
  const portfolioImages = [
    { src: '/images/section-home/1.png', alt: 'Project 1', slug: 'ak-atelier' },
    { src: '/images/section-home/2.png', alt: 'Project 2', slug: 'riddhi-benani' },
    { src: '/images/section-home/3.png', alt: 'Project 3', slug: 'ame' },
    { src: '/images/section-home/4.png', alt: 'Project 4', slug: 'alinah' },
  ]

  return (
    <section className="w-full bg-black text-white py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-8 sm:mb-10 lg:mb-12">
          <h2 className="leading-tight mb-3 sm:mb-4 text-2xl sm:text-3xl md:text-5xl lg:text-6xl text-center">
            <span className="font-light italic text-gray-400">See the work.</span>{' '}
            <span className="font-normal text-white">Feel the difference.</span>
          </h2>

          <div className="text-gray-300 text-xs sm:text-sm md:text-base lg:text-lg text-center px-4">
            <p className="mb-1">Every brand here started with siyappa</p>
            <p>and ended with a solid &quot;wah!&quot;</p>
          </div>
        </div>

        {/* Centered Slider with Side Previews */}
        <div className="w-full">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            effect="coverflow"
            grabCursor={true}
            centeredSlides={true}
            slidesPerView="auto"
            speed={700}
            touchRatio={1}
            touchAngle={45}
            threshold={5}
            longSwipesRatio={0.5}
            longSwipesMs={300}
            followFinger={true}
            coverflowEffect={{
              rotate: 15,
              stretch: 20,
              depth: 150,
              modifier: 2,
              slideShadows: true,
            }}
            navigation={{
              enabled: true,
            }}
            pagination={{
              clickable: true,
              dynamicBullets: true,
            }}
            autoplay={{
              delay: 4000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            loop={true}
            breakpoints={{
              320: {
                coverflowEffect: {
                  rotate: 10,
                  stretch: 10,
                  depth: 100,
                  modifier: 1.5,
                },
                navigation: {
                  enabled: false,
                },
              },
              640: {
                coverflowEffect: {
                  rotate: 12,
                  stretch: 15,
                  depth: 120,
                  modifier: 1.8,
                },
                navigation: {
                  enabled: false,
                },
              },
              1024: {
                coverflowEffect: {
                  rotate: 15,
                  stretch: 20,
                  depth: 150,
                  modifier: 2,
                },
                navigation: {
                  enabled: true,
                },
              },
            }}
            className="portfolio-swiper-centered"
          >
            {portfolioImages.map((image, index) => (
              <SwiperSlide key={index}>
                <Link 
                  href={`/case-studies/${image.slug}`} 
                  className="slide-content group block"
                  aria-label={`View ${image.alt}`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={500}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 75vw, 60vw"
                    className="object-cover w-full rounded-xl sm:rounded-2xl transition-all duration-700 transform group-hover:scale-[1.05] group-active:scale-[0.98]"
                    priority={index === 0}
                    quality={85}
                    loading={index === 0 ? 'eager' : 'lazy'}
                  />
                  <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-30 group-active:opacity-40 bg-gradient-to-t from-black via-gray-700 to-transparent rounded-xl sm:rounded-2xl"></div>
                  
                  {/* Hover/Active overlay with "View Project" text */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-active:opacity-100 transition-opacity duration-500">
                    <span className="bg-white text-black px-4 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-xs sm:text-sm md:text-base transform translate-y-4 group-hover:translate-y-0 group-active:translate-y-0 transition-transform duration-500 touch-manipulation">
                      View Project
                    </span>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Mobile Swipe Hint */}
        <div className="block sm:hidden text-center mt-6">
          <p className="text-gray-400 text-xs animate-pulse">
            ← Swipe to explore →
          </p>
        </div>
      </div>

      <style jsx global>{`
        .portfolio-swiper-centered {
          padding: 40px 0 50px;
          touch-action: pan-y pinch-zoom;
        }

        @media (min-width: 640px) {
          .portfolio-swiper-centered {
            padding: 50px 0;
          }
        }

        .portfolio-swiper-centered .swiper-slide {
          width: 90%;
          max-width: 800px;
          transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
          opacity: 0.4;
          transform: scale(0.75);
        }

        @media (min-width: 640px) {
          .portfolio-swiper-centered .swiper-slide {
            width: 85%;
            transform: scale(0.8);
          }
        }

        @media (min-width: 1024px) {
          .portfolio-swiper-centered .swiper-slide {
            width: 75%;
            opacity: 0.4;
          }
        }

        @media (min-width: 1280px) {
          .portfolio-swiper-centered .swiper-slide {
            width: 60%;
          }
        }

        .portfolio-swiper-centered .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 3;
        }

        .portfolio-swiper-centered .swiper-slide-prev,
        .portfolio-swiper-centered .swiper-slide-next {
          opacity: 0.5;
          transform: scale(0.82);
        }

        @media (min-width: 1024px) {
          .portfolio-swiper-centered .swiper-slide-prev,
          .portfolio-swiper-centered .swiper-slide-next {
            opacity: 0.6;
            transform: scale(0.85);
          }
        }

        .portfolio-swiper-centered .slide-content {
          position: relative;
          border-radius: 0.75rem;
          overflow: hidden;
          transition: all 0.4s ease-in-out;
          cursor: pointer;
          -webkit-tap-highlight-color: transparent;
        }

        @media (min-width: 640px) {
          .portfolio-swiper-centered .slide-content {
            border-radius: 1rem;
          }
        }

        @media (hover: hover) and (pointer: fine) {
          .portfolio-swiper-centered .slide-content:hover {
            transform: translateY(-10px);
          }
        }

        /* Active state for touch devices */
        @media (hover: none) and (pointer: coarse) {
          .portfolio-swiper-centered .slide-content:active {
            transform: scale(0.98);
          }
        }

        /* Navigation buttons - hidden on mobile */
        .portfolio-swiper-centered .swiper-button-next,
        .portfolio-swiper-centered .swiper-button-prev {
          display: none;
        }

        @media (min-width: 1024px) {
          .portfolio-swiper-centered .swiper-button-next,
          .portfolio-swiper-centered .swiper-button-prev {
            display: flex;
            color: white;
            background: rgba(0, 0, 0, 0.6);
            width: 45px;
            height: 45px;
            border-radius: 50%;
            transition: all 0.3s ease;
          }

          .portfolio-swiper-centered .swiper-button-next:hover,
          .portfolio-swiper-centered .swiper-button-prev:hover {
            background: rgba(255, 255, 255, 0.15);
            transform: scale(1.1);
          }

          .portfolio-swiper-centered .swiper-button-next::after,
          .portfolio-swiper-centered .swiper-button-prev::after {
            font-size: 20px;
            font-weight: bold;
          }
        }

        /* Pagination dots */
        .portfolio-swiper-centered .swiper-pagination {
          bottom: 10px;
        }

        .portfolio-swiper-centered .swiper-pagination-bullet {
          background: white;
          opacity: 0.4;
          width: 8px;
          height: 8px;
          transition: all 0.3s ease;
          margin: 0 4px;
        }

        @media (min-width: 640px) {
          .portfolio-swiper-centered .swiper-pagination-bullet {
            width: 10px;
            height: 10px;
            margin: 0 5px;
          }
        }

        .portfolio-swiper-centered .swiper-pagination-bullet-active {
          opacity: 1;
          background: white;
          transform: scale(1.3);
        }

        /* Improve touch scrolling performance */
        .portfolio-swiper-centered .swiper-wrapper {
          will-change: transform;
        }

        /* Prevent text selection during swipe */
        .portfolio-swiper-centered * {
          -webkit-user-select: none;
          user-select: none;
          -webkit-touch-callout: none;
        }
      `}</style>
    </section>
  )
}
