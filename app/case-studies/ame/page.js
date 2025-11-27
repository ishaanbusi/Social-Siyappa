import React from "react";

export default function AMEGrid() {
  return (
    <div className="w-full min-h-screen bg-white p-12 grid grid-cols-1 md:grid-cols-4 gap-10">

      {/* Wide Intro Section */}
      <div className="md:col-span-4 h-[420px] rounded-3xl shadow-xl bg-white p-16 flex flex-col items-center justify-center text-center">
        <h3 className="text-5xl font-semibold mb-6 tracking-tight">
          The AME Perspective
        </h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-[60%]">
          A refined architectural identity rooted in structure, precision, and modern clarity.
          AME blends minimalism with purposeful geometry to create a distinct visual language.
        </p>
      </div>

      {/* Large Left Image */}
      <div className="md:col-span-3 h-[520px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img
          src="/images/ame/1.png"
          alt="AME Branding"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Tall Quote Box */}
      <div className="h-[520px] rounded-3xl shadow-xl bg-white p-12 flex items-center justify-center text-center">
        <p className="text-xl leading-relaxed text-gray-700 max-w-[85%]">
          “Where form meets intention — elevated design shaped with architectural clarity.”
        </p>
      </div>

      {/* Brand Colors Image */}
      <div className="h-[480px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img
          src="/images/ame/2.png"
          alt="AME Color Palette"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Video Block */}
      <div className="h-[480px] rounded-3xl overflow-hidden shadow-xl bg-black">
        <video
          src="/images/ame/3.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>

      {/* Editorial Poster */}
      <div className="h-[480px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img
          src="/images/ame/4.png"
          alt="AME Editorial Layout"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Final Box Packaging */}
      <div className="md:col-span-4 h-[420px] rounded-3xl overflow-hidden shadow-xl bg-gray-200 flex items-center justify-center">
        <img
          src="/images/ame/AME Box Light.png"
          alt="AME Packaging"
          className="w-full h-full object-cover"
        />
      </div>

    </div>
  );
}
