import React from "react";

export default function RiddhiBenaniGrid() {
  return (
    <div className="w-full min-h-screen bg-white p-16">

      {/* Intro Section */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        
        {/* Large Intro Text */}
        <div className="rounded-3xl shadow-xl bg-white p-14 flex flex-col justify-center">
          <h3 className="text-4xl text-black font-semibold mb-6 tracking-tight">
            Riddhi Benani – A New Chapter
          </h3>
          <p className="text-lg leading-relaxed text-black max-w-[75%]">
            A creative evolution rooted in clarity, refinement, and meaningful expression.
            A brand language that is timeless, modern, and intentionally designed.
          </p>
        </div>

        {/* Hero Image */}
        <div className="rounded-3xl overflow-hidden shadow-xl bg-white">
          <img
            src="/images/riddhi/1.png"
            alt="Riddhi Benani Hero"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>

      {/* Masonry Grid Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">

        {/* Middle Stagger Image */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img
            src="/images/riddhi/2.png"
            alt="Brand Element"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Quote Block */}
        <div className="break-inside-avoid rounded-3xl shadow-xl bg-white p-12 flex items-center text-center justify-center">
          <p className="text-xl text-black leading-relaxed max-w-[75%]">
            “Design that breathes, moves, and speaks — crafted with honesty and intention.”
          </p>
        </div>

        {/* Big Video Section */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-black">
          <video
            src="/images/riddhi/3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Studio Vision */}
        <div className="break-inside-avoid rounded-3xl shadow-xl bg-white p-14 flex flex-col justify-center text-left">
          <h3 className="text-4xl text-black font-semibold mb-6">Studio Vision</h3>
          <p className="text-lg text-black leading-relaxed">
            A practice shaped by balance, gentle storytelling, meaningful identity design,
            and a visual language that blends emotion with structure.
          </p>
        </div>

        {/* Small Images */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img src="/images/riddhi/4.png" className="w-full h-auto object-contain" alt="Work 1" />
        </div>

        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img src="/images/riddhi/5.png" className="w-full h-auto object-contain" alt="Work 2" />
        </div>

        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img src="/images/riddhi/6.png" className="w-full h-auto object-contain" alt="Work 3" />
        </div>

        {/* Bottom Images */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img src="/images/riddhi/7.png" className="w-full h-auto object-contain" alt="Work 4" />
        </div>

        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img src="/images/riddhi/8.png" className="w-full h-auto object-contain" alt="Work 5" />
        </div>

        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img src="/images/riddhi/9.png" className="w-full h-auto object-contain" alt="Work 6" />
        </div>

      </div>
    </div>
  );
}
