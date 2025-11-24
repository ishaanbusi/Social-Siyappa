import React from "react";

export default function AKAtelierGrid() {
  return (
    <div className="w-full min-h-screen bg-white p-12 grid grid-cols-1 md:grid-cols-4 gap-10">

  {/* Tall Left Column Image */}
  <div className="md:col-span-1 h-[800px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/1.png" className="w-full h-full object-cover" />
  </div>

  {/* Right Block */}
  <div className="md:col-span-3 h-[380px] rounded-3xl shadow-xl bg-white p-14 flex flex-col justify-center">
    <h3 className="text-4xl font-semibold mb-6">Crafted Identity</h3>
    <p className="text-lg leading-relaxed text-gray-600 max-w-[75%]">
      Every detail reflects intention — from material language to visual balance, 
      AK Atelier embodies a contemporary narrative rooted in precision.
    </p>
  </div>

  <div className="md:col-span-3 h-[420px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-bag.png" className="w-full h-full object-cover" />
  </div>

  {/* Quote Tile */}
  <div className="h-[420px] rounded-3xl shadow-xl bg-white p-12 flex items-center justify-center text-center">
    <p className="text-xl leading-relaxed text-gray-700 max-w-[85%]">
      “Minimal yet expressive. A brand designed for the future.”
    </p>
  </div>

  {/* Bottom Images */}
  <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-box.png" className="w-full h-full object-cover" />
  </div>

  <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-post.png" className="w-full h-full object-cover" />
  </div>

  <div className="h-[500px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-pack.png" className="w-full h-full object-cover" />
  </div>

</div>


  );
}
