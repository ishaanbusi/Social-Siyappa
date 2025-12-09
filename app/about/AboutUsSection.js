'use client'

import Image from 'next/image'

export default function AboutUsSection() {
  return (
    <section className="bg-gray-50 min-h-screen flex items-center justify-center px-8 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Content */}
        <div className="space-y-8">
          <h2 className="text-6xl md:text-7xl lg:text-8xl font-light text-gray-900 leading-tight">
            About <span className="italic">Us</span>
          </h2>
          
          <div className="space-y-6 text-lg md:text-xl text-gray-700 leading-relaxed max-w-xl">
            <p>
              We&apos;re a strategy-first studio that believes branding 
              should feel like a conversation not a pitch.
            </p>
            
            <p>
              Our work is built on a mix of deep thinking, sharp 
              instincts, and human behaviour. We use brain science, 
              creative strategy, and a little sass to turn scattered 
              ideas into brand clarity.
            </p>
          </div>
        </div>

        {/* Right Brain Visual */}
       <div className="flex justify-center lg:justify-end">
  <div className="relative">
    {/* Replace gradient card & brain with a single image */}
    <Image
      src="/images/brain-1.png" // replace with your image path
      alt="Brain"
        width={384} 
        height={384}
      className="w-80 h-80 md:w-96 md:h-96 rounded-3xl object-cover shadow-2xl 
             transition-transform duration-500 ease-out hover:scale-105"
    />
  </div>
</div>

      </div>
    </section>
  )
}
