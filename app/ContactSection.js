'use client'

import Image from 'next/image'

export default function ContactSection() {
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center py-24 relative">
      <div className="relative flex flex-col items-center">
        {/* Images positioned above and emerging from the black card */}
        <div className="relative flex items-end justify-center mb-[-60px] z-20">
          <div className="flex items-end">
            {/* First image - leftmost, rotated left */}
            <div className="relative -rotate-12 transform translate-y-4">
              <Image
                src="/images/1.png"
                alt="Contact Card 1"
                width={140}
                height={180}
                className="rounded-xl shadow-lg object-cover"
                priority
              />
            </div>
            
            {/* Second image - overlapping, slight left rotation */}
            <div className="relative -rotate-6 -ml-8 transform translate-y-2">
              <Image
                src="/images/2.jpg"
                alt="Contact Card 2"
                width={140}
                height={180}
                className="rounded-xl shadow-lg object-cover"
                priority
              />
            </div>
            
            {/* Third image - center, no rotation */}
            <div className="relative -ml-8">
              <Image
                src="/images/3.jpg"
                alt="Contact Card 3"
                width={140}
                height={180}
                className="rounded-xl shadow-lg object-cover"
                priority
              />
            </div>
            
            {/* Fourth image - slight right rotation */}
            <div className="relative rotate-6 -ml-8 transform translate-y-2">
              <Image
                src="/images/4.jpg"
                alt="Contact Card 4"
                width={140}
                height={180}
                className="rounded-xl shadow-lg object-cover"
                priority
              />
            </div>
            
            
          </div>
        </div>

        {/* Black contact card */}
        <div className="relative w-full bg-black rounded-2xl shadow-2xl py-16 px-20 z-20 mx-18 sm:mx-12 lg:mx-16">
          <h2 className="text-white text-5xl sm:text-6xl font-light mb-3 leading-tight">
            Let&apos;s get<br />
            <span className="italic font-normal">in touch</span>
          </h2>
          <button className="mt-8 px-8 py-3 border border-white text-white rounded-full text-lg font-light transition-all hover:bg-white hover:text-black">
            Book a Call
          </button>
        </div>
      </div>
    </section>
  )
}