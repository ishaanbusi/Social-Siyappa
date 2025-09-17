'use client'

import Image from 'next/image'

export default function ChemistrySection() {
  return (
    <section className="bg-[#191919] flex flex-col items-center justify-center min-h-screen p-8 sm:p-12">
      {/* Top Row */}
      <div className="max-w-7xl w-full grid grid-cols-2 gap-8 mb-10">
        {/* Left Text Block */}
        <div className="bg-[#292929] rounded-3xl p-10 flex flex-col justify-between min-h-[260px]">
          <h2 className="text-4xl font-semibold text-white leading-snug mb-6">
            When Chemistry<br />Creates Results
          </h2>
          <ul className="text-gray-300 text-lg space-y-3">
            <li><span className="italic font-semibold">Expert Team </span>Psychology + creativity combined</li>
            <li><span className="italic font-semibold">Proven Methods </span>Data-driven strategies that work</li>
            <li><span className="italic font-semibold">Growing Success </span>Happy clients, measurable results</li>
            <li><span className="italic font-semibold">Future-Ready </span>Innovation – first approach</li>
          </ul>
          <div className="mt-6 flex justify-end">
            <span className="text-white text-4xl font-bold cursor-pointer hover:underline">&#8599;</span>
          </div>
        </div>

        {/* Right Large Image */}
        <div className="relative rounded-3xl overflow-hidden min-h-[260px]">
          <Image
            src="/chemistry-top.jpg" // Place actual image in public/
            alt="Chemistry visual"
            fill
            className="object-cover rounded-3xl"
            priority
          />
        </div>
      </div>

      {/* Bottom Row */}
      <div className="max-w-7xl w-full grid grid-cols-3 gap-8">
        {/* Left Medium Image */}
        <div className="relative rounded-2xl overflow-hidden min-h-[160px]">
          <Image
            src="/chemistry-bottom-left.jpg" // Place actual image in public/
            alt="Team visual"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>

        {/* Center Caption Card */}
        <div className="bg-[#222222] rounded-3xl p-8 flex flex-col justify-center min-h-[160px] border border-white text-white text-center">
          <h3 className="uppercase font-semibold mb-3">LOREM IPSUM</h3>
          <p className="font-mono text-base leading-relaxed">
            Lorem Ipsum Lorem Ipsum<br />
            IpsumLorem IpsumLorem<br />
            IpsumLorem IpsumLorem<br />
            IpsumLorem Ipsum
          </p>
        </div>

        {/* Right Medium Image */}
        <div className="relative rounded-2xl overflow-hidden min-h-[160px]">
          <Image
            src="/chemistry-bottom-right.jpg" // Place actual image in public/
            alt="Client visual"
            fill
            className="object-cover rounded-2xl"
            priority
          />
        </div>
      </div>
    </section>
  )
}
