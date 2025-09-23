'use client'

import Image from 'next/image'

export default function PortfolioSection() {
  return (
    <section className="w-full bg-black text-white py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-6 sm:mb-8">
          <h2 className="leading-tight mb-3 sm:mb-4 text-3xl md:text-5xl lg:text-6xl text-center">
            <span className="font-light italic text-gray-400">See the work.</span>{' '}
            <span className="font-normal text-white">Feel the difference.</span>
          </h2>

          <div className="text-gray-300 text-sm sm:text-base md:text-lg text-center">
            <p className="mb-1">Every brand here started with siyappa</p>
            <p>and ended with a solid &quot;wah!&quot;</p>
          </div>
        </div>

        {/* Image */}
        <div className="w-full">
          <Image
            src="/images/home5.png"
            alt="Project"
            width={1200}
            height={600}
            className="object-cover w-full rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </section>
  )
}
