import React from "react";

export default function AKAtelierGrid() {
  return (
    <div className="w-full min-h-screen bg-white p-12 grid grid-cols-1 md:grid-cols-4 gap-10">

  {/* Large Intro Text */}
  <div className="md:col-span-2 h-[520px] rounded-3xl shadow-xl bg-white p-14 flex flex-col justify-center">
    <h3 className="text-4xl font-semibold mb-6 tracking-tight">A New Chapter</h3>
    <p className="text-lg leading-relaxed text-gray-600 max-w-[75%]">
      Where creativity meets purpose — AK Atelier continues to evolve into a brand built 
      on clarity, global language, and timeless expression.
    </p>
  </div>

  {/* Hero Image */}
  <div className="md:col-span-2 h-[520px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-grid.png" className="w-full h-full object-cover" />
  </div>

  {/* Middle Stagger */}
  <div className="h-[380px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/1.png" className="w-full h-full object-cover" />
  </div>

  <div className="md:col-span-3 h-[380px] rounded-3xl shadow-xl bg-white p-12 flex items-center text-center justify-center">
    <p className="text-xl text-gray-700 leading-relaxed max-w-[75%]">
      “Identity that speaks with confidence, crafted with intention and care.”
    </p>
  </div>

  {/* Big Bag Image */}
  <div className="md:col-span-3 h-[540px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-bag.png" className="w-full h-full object-cover" />
  </div>

  {/* Small About Block */}
  <div className="h-[540px] rounded-3xl shadow-xl bg-white p-14 flex flex-col justify-center text-left">
    <h3 className="text-4xl font-semibold mb-6">Studio Vision</h3>
    <p className="text-lg text-gray-600 leading-relaxed">
      A design philosophy rooted in balance, purity, and storytelling — built to grow with
      modern aspirations.
    </p>
  </div>

  {/* Three small images */}
  <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-box.png" className="w-full h-full object-cover" />
  </div>

  <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-pack.png" className="w-full h-full object-cover" />
  </div>

  <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-post.png" className="w-full h-full object-cover" />
  </div>

</div>

  );
}
