import React from 'react';

export default function RiddhiBenaniCaseStudy() {
  return (
    <div className="min-h-screen bg-white p-4 md:p-8">
      <div className="max-w-7xl mx-auto">
        {/* Row 1 - Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Hero Image - Gold/Cream abstract */}
          <div className="relative bg-gradient-to-br from-yellow-100 via-amber-50 to-yellow-200 rounded-lg aspect-[3/4] flex items-start justify-start overflow-hidden p-6">
            <div className="absolute inset-0">
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-yellow-200 to-transparent opacity-60"></div>
              <div className="absolute bottom-0 left-0 w-3/4 h-3/4 bg-gradient-to-tr from-amber-100 to-transparent opacity-40"></div>
              <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
                <path d="M 10,50 Q 30,20 50,50 T 90,50" stroke="rgb(217,119,6)" strokeWidth="0.5" fill="none"/>
                <path d="M 20,60 Q 40,30 60,60 T 100,60" stroke="rgb(217,119,6)" strokeWidth="0.5" fill="none"/>
              </svg>
            </div>
            <div className="relative z-10">
              <h1 className="text-2xl md:text-3xl font-light text-gray-800 mb-2">Case Study: Riddhi Benani</h1>
              <div className="absolute bottom-6 left-6 text-xs text-gray-600">Frame 53</div>
              <div className="absolute bottom-6 right-6 text-xs text-gray-600">Frame 53</div>
            </div>
          </div>

          {/* Text card - Center */}
          <div className="bg-gray-100 rounded-lg p-6 md:p-8 flex flex-col justify-center">
            <p className="text-[10px] text-gray-600 leading-relaxed text-center">
              We transformed Riddhi&apos;s vibrant<br />
              jewelry designs into a cohesive<br />
              brand identity that celebrates<br />
              color, artistry, and contemporary<br />
              Indian craftsmanship.<br /><br />
              AXG • BENANI • XYZ
            </p>
          </div>

          {/* Black card with text */}
          <div className="bg-black rounded-lg p-6 md:p-8 flex flex-col justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-xl md:text-2xl font-serif italic text-white mb-4">Sanctuary of Colour</h2>
              <p className="text-xs text-white leading-relaxed">
                We transformed Riddhi&apos;s colorful nature into a cohesive brand story celebrating a living brand and a store.
              </p>
            </div>
            <div className="absolute bottom-4 right-4 text-xs text-white opacity-50">Frame 53</div>
          </div>
        </div>

        {/* Row 2 - Images Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
          {/* Dark portrait with white silhouette */}
          <div className="relative bg-gradient-to-br from-green-900 to-green-950 rounded-lg aspect-[3/4] flex items-center justify-center overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-32 h-48 bg-white rounded-full opacity-90 transform -rotate-12"></div>
              <div className="absolute w-20 h-20 bg-green-800 rounded-full top-1/3 left-1/3"></div>
            </div>
            <div className="absolute bottom-4 left-4 text-xs text-white opacity-70">Frame 53</div>
          </div>

          {/* Mood board collage */}
          <div className="bg-gray-50 rounded-lg p-4 flex items-center justify-center">
            <div className="grid grid-cols-2 gap-3 w-full">
              <div className="space-y-3">
                <div className="aspect-square bg-gradient-to-br from-amber-100 to-amber-200 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">🌸</span>
                </div>
                <div className="aspect-[4/3] bg-gradient-to-br from-pink-100 to-rose-200 rounded-lg flex items-center justify-center text-xs text-gray-600">
                  good<br />vibes<br />only
                </div>
              </div>
              <div className="space-y-3">
                <div className="aspect-[3/4] bg-white rounded-lg shadow-md overflow-hidden">
                  <div className="grid grid-cols-2 gap-1 p-2">
                    <div className="aspect-square bg-orange-300 rounded"></div>
                    <div className="aspect-square bg-pink-300 rounded"></div>
                    <div className="aspect-square bg-red-300 rounded"></div>
                    <div className="aspect-square bg-yellow-300 rounded"></div>
                  </div>
                </div>
                <div className="aspect-square bg-gradient-to-br from-rose-200 to-pink-300 rounded-lg flex items-center justify-center">
                  <div className="w-12 h-12 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Colorful waves with palette */}
          <div className="rounded-lg overflow-hidden">
            <div className="relative aspect-[3/4]">
              {/* Colorful abstract waves */}
              <div className="h-2/3 bg-white relative overflow-hidden">
                <div className="absolute inset-0">
                  <div className="absolute top-0 left-0 w-full h-12 bg-gradient-to-r from-pink-400 via-rose-400 to-red-400 rounded-b-full transform -translate-y-6"></div>
                  <div className="absolute top-8 left-0 w-full h-16 bg-gradient-to-r from-orange-400 via-yellow-400 to-pink-400 rounded-full transform translate-y-2"></div>
                  <div className="absolute top-20 left-0 w-full h-12 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-500 rounded-t-full transform translate-y-8"></div>
                </div>
                <div className="absolute bottom-4 left-4 text-xs text-gray-800">Frame 54</div>
              </div>
              {/* Color palette grid */}
              <div className="h-1/3 grid grid-cols-6 gap-0">
                <div className="bg-orange-500"></div>
                <div className="bg-red-500"></div>
                <div className="bg-blue-600"></div>
                <div className="bg-teal-600"></div>
                <div className="bg-amber-700"></div>
                <div className="bg-gray-600"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 3 - About and Store Front */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* About text card */}
          <div className="bg-white rounded-lg p-6 md:p-8 border border-gray-100">
            <h3 className="text-2xl font-serif italic mb-4">About</h3>
            <p className="text-xs text-gray-700 leading-relaxed mb-3">
              We created Riddhi Benani&apos;s art practice into a diversified brand with flourishing identity, online system, and in-store experience. Our custom wordmark adds elegance to the contemporary, thoughtful, joyful, and sustainable aesthetic.
            </p>
          </div>

          {/* Store front image */}
          <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg overflow-hidden flex items-center justify-center p-8">
            <div className="w-full max-w-md">
              <div className="bg-white shadow-2xl rounded-lg overflow-hidden">
                <div className="h-3 bg-gray-800"></div>
                <div className="aspect-video bg-gradient-to-br from-orange-200 via-pink-100 to-amber-100 p-6 flex items-center justify-center">
                  <div className="grid grid-cols-3 gap-4">
                    <div className="w-12 h-16 bg-red-400 rounded shadow"></div>
                    <div className="w-12 h-16 bg-pink-400 rounded shadow"></div>
                    <div className="w-12 h-16 bg-orange-400 rounded shadow"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 4 - Mobile and Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
          {/* Left side - Product cards grid */}
          <div className="grid grid-cols-3 gap-3">
            {/* Card 1 - Orange figure */}
            <div className="bg-gradient-to-br from-orange-400 to-red-500 rounded-lg aspect-[3/4] flex items-center justify-center relative overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-24 bg-orange-600 rounded-full opacity-60"></div>
              </div>
            </div>

            {/* Card 2 - Landscape */}
            <div className="bg-gradient-to-br from-green-400 to-teal-500 rounded-lg aspect-[3/4] flex items-center justify-center">
              <div className="w-full h-1/2 bg-green-600 rounded-t-full"></div>
            </div>

            {/* Card 3 - Abstract */}
            <div className="bg-gradient-to-br from-red-500 to-pink-600 rounded-lg aspect-[3/4]"></div>

            {/* Card 4 - Profile */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg aspect-square flex items-center justify-center p-2">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                <div className="text-[8px] font-semibold">RIDDHI<br />Benani</div>
              </div>
            </div>

            {/* Card 5 - Dark portrait */}
            <div className="bg-gradient-to-br from-gray-800 to-black rounded-lg aspect-square flex items-center justify-center">
              <div className="w-12 h-16 bg-gray-700 rounded-full"></div>
            </div>

            {/* Card 6 - Profile 2 */}
            <div className="bg-gradient-to-br from-amber-100 to-orange-100 rounded-lg aspect-square flex items-center justify-center p-2">
              <div className="text-center">
                <div className="w-12 h-12 bg-gray-300 rounded-full mx-auto mb-2"></div>
                <div className="text-[8px] font-semibold">Designer</div>
              </div>
            </div>
          </div>

          {/* Right side - Mobile mockup */}
          <div className="bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg p-8 flex items-center justify-center">
            <div className="relative">
              <div className="w-48 h-96 bg-black rounded-3xl shadow-2xl p-2">
                <div className="w-full h-full bg-white rounded-2xl overflow-hidden">
                  {/* Status bar */}
                  <div className="h-6 bg-gray-50 flex items-center justify-center">
                    <div className="w-20 h-4 bg-black rounded-full"></div>
                  </div>
                  {/* Content */}
                  <div className="bg-gradient-to-br from-orange-50 to-pink-50 h-full p-4">
                    <div className="text-center mb-4">
                      <h3 className="text-xl font-serif text-orange-800">Riddhi</h3>
                      <p className="text-[8px] text-gray-600">Benani Jewelry</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2">
                      <div className="aspect-square bg-red-400 rounded"></div>
                      <div className="aspect-square bg-pink-400 rounded"></div>
                      <div className="aspect-square bg-orange-400 rounded"></div>
                      <div className="aspect-square bg-yellow-400 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Row 5 - Lotus Letter */}
        <div className="grid grid-cols-1 gap-4">
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-8 md:p-12 relative overflow-hidden">
            <div className="max-w-4xl mx-auto text-center relative z-10">
              <p className="text-xs text-gray-600 mb-6 italic">Page 3</p>
              <h2 className="text-4xl md:text-5xl font-serif mb-8">Lotus Letter</h2>
              <div className="flex items-center justify-center mb-8">
                <div className="relative w-64 h-32">
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-20">
                    <div className="w-full h-full bg-pink-300 rounded-full opacity-60"></div>
                  </div>
                  <div className="absolute top-4 left-1/3 w-24 h-24">
                    <div className="w-full h-full bg-pink-400 rounded-full opacity-70"></div>
                  </div>
                  <div className="absolute top-4 right-1/3 w-24 h-24">
                    <div className="w-full h-full bg-pink-400 rounded-full opacity-70"></div>
                  </div>
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-16 h-16">
                    <div className="w-full h-full bg-green-700 rounded-full"></div>
                  </div>
                </div>
              </div>
              <p className="text-sm text-gray-700 leading-relaxed mb-4 italic">
                &quot;I don&apos;t heal the soul without shop.&quot;
              </p>
              <p className="text-xs text-gray-600 leading-relaxed max-w-2xl mx-auto">
                Through thoughtful design and meaningful storytelling, we created<br />
                a brand experience that celebrates the beauty of handcrafted jewelry<br />
                and the artisan spirit behind each piece.
              </p>
              <p className="text-xs text-gray-500 mt-6">Riddhi Benani Studio</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}