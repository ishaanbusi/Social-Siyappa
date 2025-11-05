import React from 'react';

export default function AKAtelierCaseStudy() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Row 1 - Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Hero Image - Orange card */}
          <div className="relative bg-gradient-to-br from-orange-600 to-orange-800 rounded-lg aspect-[3/4] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-32 h-32 bg-orange-900 rounded-full blur-3xl"></div>
            </div>
            <div className="text-center text-white px-8 z-10 relative">
              <h1 className="text-3xl md:text-4xl font-light mb-2">Case Study: AK Atelier</h1>
              <div className="absolute bottom-4 left-4 text-xs opacity-70">Frame 43</div>
              <div className="absolute bottom-4 right-4 text-xs opacity-70">Frame 43</div>
            </div>
          </div>

          {/* Gray minimalist card - Logo mockup */}
          <div className="bg-gray-200 rounded-lg aspect-[3/4] flex items-center justify-center relative overflow-hidden">
            <div className="text-center">
              <div className="w-24 h-32 bg-white shadow-lg mx-auto mb-4 flex items-center justify-center">
                <span className="text-4xl font-serif text-gray-800">ak</span>
              </div>
            </div>
            <div className="absolute bottom-6 right-6 text-right">
              <p className="text-[8px] text-gray-600 leading-tight max-w-[120px]">
                Minimalist branding elements and logo design showcasing the AK signature
              </p>
            </div>
          </div>

          {/* Text Card - From Signature to Studio */}
          <div className="bg-white rounded-lg p-6 md:p-8 flex flex-col justify-center border border-gray-100">
            <h2 className="text-xl md:text-2xl font-serif italic mb-4">From Signature to Studio</h2>
            <p className="text-sm text-gray-700 leading-relaxed">
              We transformed designer Ann Karia&apos;s celebrated label into AK Atelier: a contemporary fashion house with a global outlook.
            </p>
          </div>
        </div>

        {/* Row 2 - Middle Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Business card photo */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg aspect-square flex items-center justify-center relative overflow-hidden">
            <div className="relative">
              <div className="w-48 h-28 bg-white shadow-2xl rounded transform rotate-12 flex items-center justify-center">
                <span className="text-2xl">✋</span>
              </div>
              <div className="absolute top-4 left-4 w-32 h-20 bg-gray-100 shadow-xl rounded transform -rotate-6"></div>
            </div>
          </div>

          {/* Instagram grid mockup */}
          <div className="bg-white rounded-lg p-6 flex items-center justify-center border border-gray-100">
            <div className="w-full max-w-[200px]">
              <div className="border-2 border-gray-300 rounded-lg overflow-hidden">
                {/* Instagram header mockup */}
                <div className="bg-white p-3 border-b border-gray-200 flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-br from-orange-400 to-pink-400"></div>
                  <div className="flex-1">
                    <div className="h-2 bg-gray-800 rounded w-16 mb-1"></div>
                    <div className="h-1.5 bg-gray-400 rounded w-12"></div>
                  </div>
                </div>
                {/* Grid of images */}
                <div className="grid grid-cols-3 gap-[2px] bg-white">
                  <div className="aspect-square bg-gradient-to-br from-orange-300 to-orange-400"></div>
                  <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400"></div>
                  <div className="aspect-square bg-gradient-to-br from-orange-700 to-orange-800"></div>
                  <div className="aspect-square bg-gradient-to-br from-gray-400 to-gray-500"></div>
                  <div className="aspect-square bg-gradient-to-br from-orange-500 to-orange-600"></div>
                  <div className="aspect-square bg-gradient-to-br from-gray-300 to-gray-400"></div>
                  <div className="aspect-square bg-gradient-to-br from-orange-300 to-orange-500"></div>
                  <div className="aspect-square bg-gradient-to-br from-gray-500 to-gray-600"></div>
                  <div className="aspect-square bg-gradient-to-br from-orange-800 to-orange-900"></div>
                </div>
                <div className="bg-white p-2 border-t border-gray-200">
                  <div className="flex justify-around">
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                    <div className="w-5 h-5 bg-gray-300 rounded"></div>
                  </div>
                </div>
              </div>
              <div className="mt-3 text-center">
                <p className="text-[10px] font-semibold text-gray-700">AK ATELIER</p>
              </div>
            </div>
          </div>

          {/* Leather goods photo */}
          <div className="bg-gradient-to-br from-amber-900 via-amber-800 to-amber-950 rounded-lg aspect-[4/3] flex items-center justify-center relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="w-40 h-32 bg-amber-700 rounded-lg shadow-2xl flex items-center justify-center">
                  <div className="text-center text-amber-200">
                    <div className="text-3xl font-serif mb-1">ak</div>
                    <div className="flex gap-2 justify-center mt-3">
                      <div className="w-8 h-12 bg-amber-600 rounded"></div>
                      <div className="w-8 h-12 bg-amber-500 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 - About Section and Stationery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* About text card with small images */}
          <div className="bg-white rounded-lg overflow-hidden border border-gray-100">
            <div className="grid grid-cols-3">
              {/* Text section */}
              <div className="col-span-2 p-6 md:p-8">
                <h3 className="text-2xl font-serif italic mb-3">About</h3>
                <p className="text-xs text-gray-700 leading-relaxed mb-2">
                  <span className="font-semibold">Where&apos;s Day-to-day Living.</span>
                </p>
                <p className="text-xs text-gray-700 leading-relaxed">
                  After a decade as Nairobi&apos;s leading designer, Ann Karia evolved her label into a global fashion house, blending East African craft with future-ready cool built for the world.
                </p>
              </div>
              {/* Small image thumbnails */}
              <div className="flex flex-col gap-2 p-2">
                <div className="flex-1 bg-gradient-to-br from-amber-600 to-amber-800 rounded flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-8 h-8 bg-amber-700 rounded-full"></div>
                  </div>
                </div>
                <div className="flex-1 bg-gradient-to-br from-amber-700 to-amber-900 rounded flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-xs text-amber-300">∞</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Stationery photo */}
          <div className="bg-gray-50 rounded-lg p-8 flex items-center justify-center relative overflow-hidden">
            <div className="relative">
              <div className="w-64 h-40 bg-white shadow-2xl rounded transform -rotate-3 overflow-hidden">
                <div className="h-full bg-gradient-to-br from-pink-200 via-rose-200 to-pink-300 p-4">
                  <div className="grid grid-cols-3 gap-1 h-full">
                    <div className="bg-rose-300 rounded opacity-60"></div>
                    <div className="bg-pink-300 rounded opacity-60"></div>
                    <div className="bg-rose-400 rounded opacity-60"></div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-4 -right-4 w-64 h-40 bg-gray-200 shadow-xl rounded transform rotate-2"></div>
            </div>
          </div>
        </div>

        {/* Row 4 - Bottom Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Tag/Label photo */}
          <div className="bg-gradient-to-br from-amber-700 to-amber-900 rounded-lg aspect-[3/4] flex items-center justify-center relative overflow-hidden">
            <div className="relative">
              <div className="w-32 h-48 bg-white shadow-2xl rounded-sm transform -rotate-6 p-4 flex flex-col justify-between">
                <div>
                  <div className="text-4xl font-serif text-amber-800 mb-1">ak</div>
                  <div className="text-[10px] text-gray-500">ATELIER</div>
                </div>
                <div className="space-y-1">
                  <div className="h-1 bg-gray-200 w-20"></div>
                  <div className="h-1 bg-gray-200 w-16"></div>
                  <div className="h-1 bg-gray-200 w-12"></div>
                </div>
              </div>
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-16 h-1 bg-amber-400 rounded-full shadow-lg"></div>
            </div>
          </div>

          {/* Quote text card */}
          <div className="bg-gray-100 rounded-lg p-8 flex items-center justify-center">
            <div className="text-center">
              <p className="text-[10px] text-gray-600 leading-relaxed italic">
                &quot;We made being ready the designer<br />
                Atelier &apos;An&apos; Atelier means<br />
                a thought process&quot;
              </p>
            </div>
          </div>

          {/* Orange box photo */}
          <div className="bg-gradient-to-br from-orange-500 to-orange-700 rounded-lg aspect-square flex items-center justify-center relative overflow-hidden">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-br from-orange-400 to-orange-600 shadow-2xl rounded transform rotate-6 flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-3xl font-serif mb-1">ak</div>
                  <div className="text-[8px]">ATELIER</div>
                </div>
              </div>
              <div className="absolute -top-2 -right-2 w-24 h-24 bg-orange-600 rounded transform -rotate-12 opacity-50"></div>
            </div>
          </div>
        </div>

        {/* Additional small text cards at bottom */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
          <div className="bg-white rounded-lg p-6 border border-gray-100">
            <p className="text-[10px] text-gray-500 leading-relaxed">
              Elevating timeless design with<br />
              contemporary craftsmanship and<br />
              sophisticated attention to detail
            </p>
          </div>
          <div className="bg-white rounded-lg p-6 border border-gray-100">
            <p className="text-[10px] text-gray-500 leading-relaxed">
              Creating an identity that honors<br />
              heritage while embracing<br />
              modern luxury aesthetics
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}