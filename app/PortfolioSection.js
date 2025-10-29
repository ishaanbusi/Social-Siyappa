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
    { src: '/images/frame-1.png', alt: 'Project 1' },
    { src: '/images/home2.png', alt: 'Project 2' },
    { src: '/images/brain.png', alt: 'Project 3' },
    { src: '/images/about.png', alt: 'Project 4' },
    { src: '/images/banner.png', alt: 'Project 5' }
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
            speed={900}
            coverflowEffect={{
              rotate: 15,
              stretch: 20,
              depth: 150,
              modifier: 2,
              slideShadows: true,
            }}
            navigation
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
            className="portfolio-swiper-centered"
          >
            {portfolioImages.map((image, index) => (
              <SwiperSlide key={index}>
                <div className="slide-content group">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={1000}
                    height={500}
                    className="object-cover w-full rounded-2xl transition-all duration-700 transform group-hover:scale-[1.05]"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 transition-all duration-500 opacity-0 group-hover:opacity-30 bg-gradient-to-t from-black via-gray-700 to-transparent"></div>
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
          width: 60%;
          max-width: 800px;
          transition: all 0.6s ease-in-out;
          opacity: 0.4;
          transform: scale(0.8);
        }

        .portfolio-swiper-centered .swiper-slide-active {
          opacity: 1;
          transform: scale(1);
          z-index: 3;
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
          transition: all 0.5s ease-in-out;
        }

        .portfolio-swiper-centered .slide-content:hover {
          transform: translateY(-10px);
        }

        .portfolio-swiper-centered .swiper-button-next,
        .portfolio-swiper-centered .swiper-button-prev {
          color: white;
          background: rgba(0, 0, 0, 0.6);
          width: 45px;
          height: 45px;
          border-radius: 50%;
          transition: all 0.4s ease;
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

        .portfolio-swiper-centered .swiper-pagination-bullet {
          background: white;
          opacity: 0.4;
          width: 10px;
          height: 10px;
          transition: all 0.3s ease;
        }

        .portfolio-swiper-centered .swiper-pagination-bullet-active {
          opacity: 1;
          background: white;
          transform: scale(1.2);
        }

        /* Responsive adjustments */
        @media (max-width: 1024px) {
          .portfolio-swiper-centered .swiper-slide {
            width: 75%;
            max-width: 700px;
          }
        }

        @media (max-width: 768px) {
          .portfolio-swiper-centered {
            padding: 30px 0;
          }
          .portfolio-swiper-centered .swiper-slide {
            width: 85%;
            transform: scale(0.85);
          }
        }

        @media (max-width: 640px) {
          .portfolio-swiper-centered .swiper-slide {
            width: 90%;
          }

          .portfolio-swiper-centered .swiper-button-next,
          .portfolio-swiper-centered .swiper-button-prev {
            width: 38px;
            height: 38px;
          }

          .portfolio-swiper-centered .swiper-button-next::after,
          .portfolio-swiper-centered .swiper-button-prev::after {
            font-size: 16px;
          }
        }
      `}</style>
    </section>
  )
}
