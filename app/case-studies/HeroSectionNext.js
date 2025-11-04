"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BrandingSection = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">
        
        {/* First Card - Image */}
        <Link href="/page-3" className="group">
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-96 lg:h-[500px] transition-transform duration-300 group-hover:scale-105 cursor-pointer">
            <Image
              src="/images/frame-3.png"
              alt="Branding Image 1"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Link>

        {/* Second Card - Image */}
        <Link href="/page-4" className="group">
          <div className="relative rounded-3xl overflow-hidden shadow-xl h-96 lg:h-[500px] transition-transform duration-300 group-hover:scale-105 cursor-pointer">
            <Image
              src="/images/frame-4.png"
              alt="Branding Image 2"
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </Link>

      </div>
    </div>
  );
};

export default BrandingSection;