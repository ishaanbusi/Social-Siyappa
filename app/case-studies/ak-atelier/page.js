import React from "react";

export default function AKAtelierGrid() {
  return (
    <div className="w-full min-h-screen bg-white p-12 grid grid-cols-1 md:grid-cols-4 gap-10">

      {/** -------------------- ROW 1 (Perfect Height Match) -------------------- */}
      <div className="md:col-span-1 h-[520px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img src="/images/ak/ak-grid.png" className="w-full h-full object-cover" />
      </div>

      <div className="h-[520px] rounded-3xl shadow-xl bg-white p-12 flex items-center justify-center text-center">
        <p className="text-xl leading-relaxed text-gray-700 font-light tracking-wide max-w-[90%]">
          “We’re helping young brands redefine their voice through timeless identity design.”
        </p>
      </div>

      <div className="md:col-span-2 h-[520px] rounded-3xl shadow-xl bg-white p-14 flex flex-col justify-center text-center">
        <h3 className="text-4xl font-semibold mb-6 tracking-tight">From Signature to Studio</h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-[80%] mx-auto">
          We transformed designer Ami Karia’s celebrated label into AK Atelier — 
          a contemporary fashion house with a global outlook.
        </p>
      </div>


      {/** -------------------- ROW 2 (Elegant Stagger) -------------------- */}
      <div className="md:col-span-1 h-[600px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img src="/images/ak/1.png" className="w-full h-full object-cover" />
      </div>

      <div className="h-[360px] rounded-3xl shadow-xl bg-white p-12 flex items-center justify-center text-center md:mt-24">
        <p className="text-xl leading-relaxed text-gray-700 font-light tracking-wide max-w-[85%]">
          “A bold identity rooted in elegance.” — AK Atelier
        </p>
      </div>

      <div className="md:col-span-2 h-[600px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img src="/images/ak/ak-bag.png" className="w-full h-full object-cover" />
      </div>


      {/** -------------------- ROW 3 (Perfect Height Match With Bag Image) -------------------- */}
      <div className="md:col-span-2 h-[600px] rounded-3xl shadow-xl bg-white p-14 flex flex-col justify-center">
        <h3 className="text-4xl font-semibold mb-6 tracking-tight">About</h3>
        <p className="text-lg text-gray-600 leading-relaxed max-w-[85%]">
          10 Years. One Vision. A New Identity. After a decade in fashion leading iconic 
          brands, Ami Karia refined her personal brand into AK Atelier — refined, 
          future-ready, and built for the world.
        </p>
      </div>


      {/** -------------------- ROW 4 (3 Even Images) -------------------- */}
      <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img src="/images/ak/ak-box.png" className="w-full h-full object-cover" />
      </div>

      <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img src="/images/ak/ak-pack.png" className="w-full h-full object-cover" />
      </div>

      <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
        <img src="/images/ak/ak-post.png" className="w-full h-full object-cover" />
      </div>


      {/** -------------------- ROW 5 (Matched Editorial Text Blocks) -------------------- */}
      <div className="h-[320px] rounded-3xl shadow-xl bg-white p-12 flex items-center justify-center text-center">
        <p className="text-xl leading-relaxed text-gray-700 font-light tracking-wide max-w-[85%]">
          “Design language that blends luxury with contemporary minimalism.”
        </p>
      </div>

      <div className="h-[320px] rounded-3xl shadow-xl bg-white p-12 flex items-center justify-center text-center">
        <p className="text-xl leading-relaxed text-gray-700 font-light tracking-wide max-w-[85%]">
          “Crafted to evolve with a future-first mindset.”
        </p>
      </div>
    </div>
  );
}
