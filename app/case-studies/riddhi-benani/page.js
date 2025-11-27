import React from "react";

export default function RiddhiBenaniGrid() {
  return (
    <div className="w-full min-h-screen bg-white p-12 grid grid-cols-1 md:grid-cols-4 gap-10">

      {/* Large Intro Text */}
      <div className="md:col-span-2 h-[520px] rounded-3xl shadow-xl bg-white p-14 flex flex-col justify-center">
        <h3 className="text-4xl font-semibold mb-6 tracking-tight">
          Riddhi Benani – A New Chapter
        </h3>
        <p className="text-lg leading-relaxed text-gray-600 max-w-[75%]">
          A creative evolution rooted in clarity, refinement, and meaningful expression.
          A brand language that is timeless, modern, and intentionally designed.
        </p>
      </div>

      {/* Hero Image */}
      <div className="md:col-span-2 h-[520px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img
          src="/images/riddhi/1.png"
          alt="Riddhi Benani Hero"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Middle Stagger Image */}
      <div className="h-[380px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img
          src="/images/riddhi/2.png"
          alt="Brand Element"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Quote Block */}
      <div className="md:col-span-3 h-[380px] rounded-3xl shadow-xl bg-white p-12 flex items-center text-center justify-center">
        <p className="text-xl text-gray-700 leading-relaxed max-w-[75%]">
          “Design that breathes, moves, and speaks — crafted with honesty and intention.”
        </p>
      </div>

      {/* Big Video Section */}
      <div className="md:col-span-3 h-[540px] rounded-3xl overflow-hidden shadow-xl bg-black">
        <video
          src="/images/riddhi/3.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Studio Vision */}
      <div className="h-[540px] rounded-3xl shadow-xl bg-white p-14 flex flex-col justify-center text-left">
        <h3 className="text-4xl font-semibold mb-6">Studio Vision</h3>
        <p className="text-lg text-gray-600 leading-relaxed">
          A practice shaped by balance, gentle storytelling, meaningful identity design,
          and a visual language that blends emotion with structure.
        </p>
      </div>

      {/* Three Small Images */}
      <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img
          src="/images/riddhi/4.png"
          className="w-full h-full object-cover"
          alt="Work 1"
        />
      </div>

      <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img
          src="/images/riddhi/5.png"
          className="w-full h-full object-cover"
          alt="Work 2"
        />
      </div>

      <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img
          src="/images/riddhi/6.png"
          className="w-full h-full object-cover"
          alt="Work 3"
        />
      </div>

      {/* Additional Bottom Images */}
      <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img
          src="/images/riddhi/7.png"
          className="w-full h-full object-cover"
          alt="Work 4"
        />
      </div>

      <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img
          src="/images/riddhi/8.png"
          className="w-full h-full object-cover"
          alt="Work 5"
        />
      </div>

      <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img
          src="/images/riddhi/9.png"
          className="w-full h-full object-cover"
          alt="Work 6"
        />
      </div>

    </div>
  );
}
