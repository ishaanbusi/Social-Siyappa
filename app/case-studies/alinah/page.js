import React from "react";

export default function AlinahGrid() {
  return (
    <div className="w-full min-h-screen bg-white p-16">

      {/* Intro Row */}
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-10 mb-20">

        {/* Tall Intro Image */}
        <div className="md:col-span-1 rounded-3xl overflow-hidden shadow-xl bg-white">
          <img
            src="/images/alinah/1.png"
            alt="Alinah Branding"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Intro Text Block */}
        <div className="md:col-span-3 rounded-3xl shadow-xl bg-white p-14 flex flex-col justify-center">
          <h3 className="text-4xl font-semibold mb-6">Alinah – Crafted for Calm Living</h3>
          <p className="text-lg leading-relaxed text-gray-600 max-w-[75%]">
            A brand rooted in harmony, soft elegance, and intentional aesthetics.  
            Alinah blends nature, clarity, and modern craft to create an immersive visual identity.
          </p>
        </div>
      </div>

      {/* Masonry Layout for All Images */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">

        {/* Wide Hero Image */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img
            src="/images/alinah/3.png"
            alt="Alinah Visual Identity"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Quote Tile */}
        <div className="break-inside-avoid rounded-3xl shadow-xl bg-white p-12 flex items-center justify-center text-center">
          <p className="text-xl leading-relaxed text-gray-700 max-w-[85%]">
            “Where nature’s stillness meets thoughtful design — a visual identity that breathes.”
          </p>
        </div>

        {/* Bottom Images */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img
            src="/images/alinah/4.png"
            alt="Alinah Design Detail"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img
            src="/images/alinah/5.png"
            alt="Alinah Packaging"
            className="w-full h-auto object-contain"
          />
        </div>

        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img
            src="/images/alinah/6.png"
            alt="Alinah Identity Showcase"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
}
