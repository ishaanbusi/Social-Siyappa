import React from "react";

export default function AKAtelierGrid() {
  return (
    <div className="w-full min-h-screen bg-white p-16">

      {/* HERO */}
      <div className="w-full rounded-3xl overflow-hidden shadow-xl mb-20">
        <img 
          src="/images/ak/ak-bag.png"
          className="w-full h-auto object-contain"
        />
      </div>

      {/* TITLE */}
      <div className="text-center mb-20">
        <h1 className="text-6xl font-semibold tracking-tight mb-4">AK Atelier</h1>
        <p className="text-xl text-gray-600 leading-relaxed max-w-[60%] mx-auto">
          A brand built on timeless silhouettes, refined craftsmanship & modern identity.
        </p>
      </div>

      {/* MASONRY GALLERY */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-8 space-y-8">

        {/* Card 1 */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img 
            src="/images/ak/ak-box.png"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Card 2 */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img 
            src="/images/ak/ak-pack.png"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Card 3 */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img 
            src="/images/ak/ak-post.png"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Card 4 */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white p-12">
          <h3 className="text-4xl font-semibold mb-6">The Essence</h3>
          <p className="text-lg text-gray-600 leading-relaxed">
            Pure shapes, thoughtful forms and an identity driven by elegance.
          </p>
        </div>

        {/* Card 5 */}
        <div className="break-inside-avoid rounded-3xl overflow-hidden shadow-xl bg-white">
          <img 
            src="/images/ak/1.png"
            className="w-full h-auto object-contain"
          />
        </div>

      </div>
    </div>
  );
}
