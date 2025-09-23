'use client'

import Image from 'next/image'

export default function ChemistrySection() {
  return (
    <section className="bg-[#191919] flex flex-col items-center justify-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl w-full space-y-10">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left Text Block */}
          <div className="bg-[#292929] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[260px] md:min-h-[300px]">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug mb-6">
              When Chemistry<br />Creates Results
            </h2>
            <ul className="text-gray-300 text-base sm:text-lg space-y-2 sm:space-y-3">
              <li><span className="italic font-semibold">Expert Team </span>Psychology + creativity combined</li>
              <li><span className="italic font-semibold">Proven Methods </span>Data-driven strategies that work</li>
              <li><span className="italic font-semibold">Growing Success </span>Happy clients, measurable results</li>
              <li><span className="italic font-semibold">Future-Ready </span>Innovation – first approach</li>
            </ul>
            <div className="mt-4 sm:mt-6 flex justify-end">
              <span className="text-white text-3xl sm:text-4xl font-bold cursor-pointer hover:underline">&#8599;</span>
            </div>
          </div>

          {/* Right Large Image */}
          <div className="relative rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[280px] md:min-h-[320px] w-full">
            <Image
              src="/images/home3.png"
              alt="Chemistry visual"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>

        {/* Bottom Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {/* Left Medium Image */}
          <div className="relative rounded-3xl overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[260px] w-full">
            <Image
              src="/images/home1.png"
              alt="Team visual"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
              className="object-cover rounded-3xl"
              priority
            />
          </div>

          {/* Center Caption Card */}
          <div className="bg-[#222222] rounded-3xl p-6 sm:p-8 flex flex-col justify-center border border-white text-white text-center min-h-[180px] sm:min-h-[200px] md:min-h-[260px]">
            <h3 className="uppercase font-semibold mb-2 sm:mb-3 text-sm sm:text-base md:text-lg">LOREM IPSUM</h3>
            <p className="font-mono text-xs sm:text-sm md:text-base leading-relaxed">
              Lorem Ipsum Lorem Ipsum<br />
              IpsumLorem IpsumLorem<br />
              IpsumLorem IpsumLorem<br />
              IpsumLorem Ipsum
            </p>
          </div>

          {/* Right Medium Image */}
          <div className="relative rounded-3xl overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[260px] w-full">
            <Image
              src="/images/home2.png"
              alt="Client visual"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 33vw, 33vw"
              className="object-cover rounded-3xl"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  )
}
