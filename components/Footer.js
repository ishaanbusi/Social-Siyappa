import React from 'react';
import { Linkedin, Facebook, Mail, Instagram } from 'lucide-react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">

        {/* Top section with dividers and social icons */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="h-px bg-white flex-1 max-w-xs"></div>

          {/* Social Icons */}
          <div className="flex gap-6">
            
            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/company/social-siyappa1/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Linkedin className="w-8 h-8" strokeWidth={1.5} />
            </a>

            {/* Facebook */}
            <a
              href="https://www.facebook.com/share/1JU87D26vr/?mibextid=wwXIfr"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Facebook className="w-8 h-8" strokeWidth={1.5} />
            </a>

            {/* Email */}
            <a
              href="mailto:contact@socialsiyappa.com"
              className="hover:opacity-80 transition-opacity"
            >
              <Mail className="w-8 h-8" strokeWidth={1.5} />
            </a>

            {/* Instagram */}
            <a
              href="https://www.instagram.com/social.siyappa?igsh=ZDdsMHVpZW4zNTNy"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Instagram className="w-8 h-8" strokeWidth={1.5} />
            </a>
          </div>

          <div className="h-px bg-white flex-1 max-w-xs"></div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          
          {/* Left Column - Navigation */}
          <div className="space-y-6">
            <a href="" className="block text-white hover:text-gray-300 transition-colors text-lg">
              Home
            </a>
            <a href="/case-studies" className="block text-white hover:text-gray-300 transition-colors text-lg">
              Case Studies
            </a>
            <a href="/services" className="block text-white hover:text-gray-300 transition-colors text-lg">
              Service
            </a>
            <a href="/about" className="block text-white hover:text-gray-300 transition-colors text-lg">
              About
            </a>
            <a href="/contact" className="block text-white hover:text-gray-300 transition-colors text-lg">
              Contact Us
            </a>
          </div>

          {/* Middle Column - Legal */}
          <div className="space-y-6">
            <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg">
              Privacy Statement
            </a>
            <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg">
              Terms & Conditions
            </a>
            <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg">
              Cookies Policy / Settings
            </a>
            
          </div>

          {/* Right Column - Logo & Copyright */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-74 h-74 relative">
                <Image
                  src="/images/footer-logo.png"
                  alt="Social Siyappa Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            <p className="text-sm tracking-wider">© 2025 Social Siyappa. All rights reserved.</p>
          </div>

        </div>
      </div>
    </footer>
  );
}
