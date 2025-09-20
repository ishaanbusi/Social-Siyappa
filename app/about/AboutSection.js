'use client'

export default function AboutSection() {
  return (
    <section className="bg-black text-white min-h-screen flex flex-col items-center justify-center px-8 py-16 relative">
      {/* Main Content */}
      <div className="max-w-4xl mx-auto text-center">
        {/* Main Headline */}
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
          <span className="italic">When brands make sense.</span>
          <br />
          <span className="font-normal">People pay attention.</span>
        </h2>

        {/* First Paragraph */}
        <div className="text-lg md:text-xl leading-relaxed mb-8 max-w-3xl mx-auto">
          <span className="italic font-medium">Social Siyappa</span> isn&apos;t here to just make you look good: we&apos;re here to make 
          you make sense.Because in a world full of noise, clarity is the real flex. 
          We blend <span className="font-semibold">neuromarketing, psychology,</span> and <span className="font-semibold">storytelling</span> to help brands 
          connect where it counts: the brain and the heart.
        </div>

        {/* Second Paragraph */}
        <div className="text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
          From <span className="font-semibold">strategy</span> to content, we don&apos;t do &quot;just post more.&quot; 
          We do meaning, memory, and messages that stick.
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 right-8">
        <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center cursor-pointer hover:bg-gray-200 transition-colors">
          <svg 
            className="w-6 h-6 text-black transform rotate-45" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            viewBox="0 0 24 24"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>
    </section>
  )
}
