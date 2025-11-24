import React from "react";

export default function AKAtelierGrid() {
  return (
    <div className="w-full min-h-screen bg-white p-16 grid grid-cols-1 md:grid-cols-4 gap-14">

  {/* HERO – GIANT FULL-COLUMN IMAGE */}
  <div className="md:col-span-4 h-[720px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-bag.png" className="w-full h-full object-cover" />
  </div>

  {/* TITLED STATEMENT */}
  <div className="md:col-span-4 text-center py-6">
    <h1 className="text-6xl font-semibold tracking-tight mb-4">AK Atelier</h1>
    <p className="text-xl text-gray-600 leading-relaxed max-w-[60%] mx-auto">
      A brand built on timeless silhouettes, refined craftsmanship & modern identity.
    </p>
  </div>

  {/* LEFT TEXT + RIGHT TALL IMAGE */}
  <div className="md:col-span-2 h-[520px] rounded-3xl shadow-xl bg-white p-16 flex flex-col justify-center">
    <h3 className="text-4xl font-semibold mb-6">The Essence</h3>
    <p className="text-lg text-gray-600 leading-relaxed max-w-[75%]">
      Pure shapes, thoughtful forms and an identity driven by elegance.
    </p>
  </div>

  <div className="md:col-span-2 h-[520px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/1.png" className="w-full h-full object-cover" />
  </div>

  {/* LARGE CINEMATIC TRIPTYCH */}
  <div className="h-[480px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-box.png" className="w-full h-full object-cover" />
  </div>

  <div className="h-[480px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-pack.png" className="w-full h-full object-cover" />
  </div>

  <div className="h-[480px] rounded-3xl overflow-hidden shadow-xl bg-gray-200">
    <img src="/images/ak/ak-post.png" className="w-full h-full object-cover" />
  </div>

</div>

  );
}
