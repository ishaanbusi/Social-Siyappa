import React from "react";

export default function AMEGrid() {
  return (
    <div className="w-full min-h-screen bg-white p-16">

      {/* Intro Section */}
      <div className="w-full rounded-3xl shadow-xl bg-white p-16 flex flex-col items-center justify-center text-center mb-20">
        <h3 className="text-5xl text-black font-semibold mb-6 tracking-tight">
          The AME Perspective
        </h3>
        <p className="text-lg text-black leading-relaxed max-w-[60%]">
          A refined architectural identity rooted in structure, precision, and modern clarity.
          AME blends minimalism with purposeful geometry to create a distinct visual language.
        </p>
      </div>

      {/* Masonry Layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">

        {/* Large Left Image */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img
            src="/images/ame/1.png"
            alt="AME Branding"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Tall Quote Box */}
        <div className="break-inside-avoid rounded-3xl shadow-xl bg-white p-12 flex items-center justify-center text-center">
          <p className="text-xl leading-relaxed text-black max-w-[85%]">
            “Where form meets intention — elevated design shaped with architectural clarity.”
          </p>
        </div>

        {/* Brand Colors Image */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img
            src="/images/ame/2.png"
            alt="AME Color Palette"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Video Block */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-black">
          <video
            src="/images/ame/3.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Editorial Poster */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img
            src="/images/ame/4.png"
            alt="AME Editorial Layout"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Final Packaging Box (Full Width Equivalent) */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img
            src="/images/ame/AME Box Light.png"
            alt="AME Packaging"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
}
