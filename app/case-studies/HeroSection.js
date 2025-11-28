"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

const BrandingSection = () => {
  return (
    <div className="bg-black min-h-screen flex items-center justify-center p-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl w-full">

        {/* First Card */}
        <Link href="/case-studies/ak-atelier" className="group">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-900 transition-transform duration-300 group-hover:scale-105 cursor-pointer p-6 flex items-center justify-center">
            <Image
              src="/images/frame-1.png"
              alt="Branding Image 1"
              width={900}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </Link>

        {/* Second Card */}
        <Link href="/case-studies/riddhi-benani" className="group">
          <div className="rounded-3xl overflow-hidden shadow-xl bg-gray-900 transition-transform duration-300 group-hover:scale-105 cursor-pointer p-6 flex items-center justify-center">
            <Image
              src="/images/frame-2.png"
              alt="Branding Image 2"
              width={900}
              height={900}
              className="w-full h-auto object-contain"
            />
          </div>
        </Link>

      </div>
    </div>
  );
};

export default BrandingSection;
