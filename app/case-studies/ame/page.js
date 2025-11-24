import React from "react";

export default function AKAtelierGrid() {
  return (
    <div className="w-full min-h-screen bg-white p-12 grid grid-cols-1 md:grid-cols-4 gap-10">

  {/* Wide Intro Spread */}
  <div className="md:col-span-4 h-[420px] rounded-3xl shadow-xl bg-white p-16 flex flex-col items-center justify-center text-center">
    <h3 className="text-5xl font-semibold mb-6 tracking-tight">The Atelier Perspective</h3>
    <p className="text-lg text-gray-600 leading-relaxed max-w-[60%]">
      A refined lens on style, craft, and visual storytelling. Each piece is designed to 
      create emotion, clarity, and connection.
    </p>
  </div>

  {/* Bag Image Large */}
  <div className="md:col-span-3 h-[520px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-bag.png" className="w-full h-full object-cover" />
  </div>

  {/* Tall Quote Box */}
  <div className="h-[520px] rounded-3xl shadow-xl bg-white p-12 flex items-center justify-center text-center">
    <p className="text-xl leading-relaxed text-gray-700 max-w-[85%]">
      “Where luxury meets contemporary expression — elevated with intention.”
    </p>
  </div>

  {/* Middle Triptych */}
  <div className="h-[480px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-box.png" className="w-full h-full object-cover" />
  </div>

  <div className="h-[480px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-pack.png" className="w-full h-full object-cover" />
  </div>

  <div className="h-[480px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-post.png" className="w-full h-full object-cover" />
  </div>

  {/* Final Editorial Block */}
  <div className="md:col-span-4 h-[420px] rounded-3xl shadow-xl bg-white p-16 flex flex-col items-center justify-center text-center">
    <p className="text-xl text-gray-700 leading-relaxed max-w-[70%]">
      “Created with precision and built with clarity — a brand that moves with the world,
      yet stands timeless.”
    </p>
  </div>

</div>



  );
}
