'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'

// Import Swiper styles
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

export default function PortfolioSection() {
  const portfolioImages = [
    {
      src: '/images/home1.png',
      alt: 'Project 1'
    },
    {
      src: '/images/home2.png',
      alt: 'Project 2'
    },
    {
      src: '/images/brain.png',
      alt: 'Project 3'
    },
    {
      src: '/images/about.png',
      alt: 'Project 4'
    },
    {
      src: '/images/banner.png',
      alt: 'Project 5'
    }
  ]

  return (
    <section className="w-full bg-black text-white py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 sm:mb-12">
          <h2 className="leading-tight mb-3 sm:mb-4 text-3xl md:text-5xl lg:text-6xl text-center">
            <span className="font-light italic text-gray-400">See the work.</span>{' '}
            <span className="font-normal text-white">Feel the difference.</span>
          </h2>

          <div className="text-gray-300 text-sm sm:text-base md:text-lg text-center">
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
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 2.5,
              slideShadows: false,
            }}
            navigation
            pagination={{ 
              clickable: true,
              dynamicBullets: true
            }}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            loop={true}
            className="portfolio-swiper-centered"
          >
            {portfolioImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1200}
                    height={600}
                    className="object-cover w-full rounded-2xl"
                    priority={index === 0}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      <style jsx global>{`
        .portfolio-swiper-centered {
          padding: 50px 0;
        }

        .portfolio-swiper-centered .swiper-slide {
          width: 70%;
          max-width: 900px;
          transition: all 0.3s ease;
          opacity: 0.4;
          transform: scale(0.85);
        }

        .portfolio-swiper-centered .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 2;
        }

        .portfolio-swiper-centered .swiper-slide-active .slide-content {
          box-shadow: 0 25px 50px -12px rgba(255, 255, 255, 0.25);
        }

        .portfolio-swiper-centered .swiper-slide-prev,
        .portfolio-swiper-centered .swiper-slide-next {
          opacity: 0.6;
          transform: scale(0.85);
        }

        .portfolio-swiper-centered .slide-content {
          position: relative;
          border-radius: 1rem;
          overflow: hidden;
          transition: all 0.3s ease;
        }

        .portfolio-swiper-centered .swiper-button-next,
        .portfolio-swiper-centered .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.6);
          width: 50px;
          height: 50px;
          border-radius: 50%;
          transition: all 0.3s ease;
        }

        .portfolio-swiper-centered .swiper-button-next:hover,
        .portfolio-swiper-centered .swiper-button-prev:hover {
          background: rgba(0, 0, 0, 0.8);
          transform: scale(1.1);
        }

        .portfolio-swiper-centered .swiper-button-next::after,
        .portfolio-swiper-centered .swiper-button-prev::after {
          font-size: 22px;
          font-weight: bold;
        }

        .portfolio-swiper-centered .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 12px;
          height: 12px;
        }

        .portfolio-swiper-centered .swiper-pagination-bullet-active {
          opacity: 1;
          background: white;
          transform: scale(1.3);
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .portfolio-swiper-centered .swiper-slide {
            width: 85%;
          }
          
          .portfolio-swiper-centered {
            padding: 30px 0;
          }
        }

        @media (max-width: 640px) {
          .portfolio-swiper-centered .swiper-slide {
            width: 90%;
          }

          .portfolio-swiper-centered .swiper-button-next,
          .portfolio-swiper-centered .swiper-button-prev {
            width: 40px;
            height: 40px;
          }

          .portfolio-swiper-centered .swiper-button-next::after,
          .portfolio-swiper-centered .swiper-button-prev::after {
            font-size: 18px;
          }
        }
      `}</style>
    </section>
  )
}
