'use client'

import Image from 'next/image'

export default function ChemistrySection() {
  return (
    <section className="bg-[#191919] flex flex-col items-center justify-center min-h-dvh p-6 sm:p-8 lg:p-12">
      {/* Top Row */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-8 md:mb-10">
        {/* Left Text Block */}
        <div className="bg-[#292929] rounded-3xl p-6 sm:p-8 lg:p-10 flex flex-col justify-between min-h-[240px] md:min-h-[260px]">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-white leading-snug mb-4 sm:mb-6">
            When Chemistry<br />Creates Results
          </h2>
          <ul className="text-gray-300 text-base sm:text-lg space-y-2.5 sm:space-y-3">
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
        <div className="relative rounded-3xl overflow-hidden min-h-[220px] sm:min-h-[260px]">
          <Image
            src="/chemistry-top.jpg"
            alt="Chemistry visual"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 700px"
            className="object-cover rounded-3xl"
            priority
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {/* Left Medium Image */}
        <div className="relative rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[160px]">
          <Image
            src="/chemistry-bottom-left.jpg"
            alt="Team visual"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Center Caption Card */}
        <div className="bg-[#222222] rounded-3xl p-6 sm:p-8 flex flex-col justify-center min-h-[180px] sm:min-h-[200px] md:min-h-[160px] border border-white text-white text-center">
          <h3 className="uppercase font-semibold mb-2 sm:mb-3 text-sm sm:text-base">LOREM IPSUM</h3>
          <p className="font-mono text-sm sm:text-base leading-relaxed">
            Lorem Ipsum Lorem Ipsum<br />
            IpsumLorem IpsumLorem<br />
            IpsumLorem IpsumLorem<br />
            IpsumLorem Ipsum
          </p>
        </div>

        {/* Right Medium Image */}
        <div className="relative rounded-2xl overflow-hidden min-h-[180px] sm:min-h-[200px] md:min-h-[160px]">
          <Image
            src="/chemistry-bottom-right.jpg"
            alt="Client visual"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1280px) 33vw, 420px"
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}
