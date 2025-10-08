"use client";

import React from "react";
import Image from "next/image";

const BrandingSection = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
        
        {/* First Card - Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl h-96 lg:h-[500px]">
          <Image
            src="/images/frame-1.png" // replace with your actual image path
            alt="Branding Image 1"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

        {/* Second Card - Image */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl h-96 lg:h-[500px]">
          <Image
            src="/images/frame-2.png" // replace with your actual image path
            alt="Branding Image 2"
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>

      </div>
    </div>
  );
};

export default BrandingSection;
