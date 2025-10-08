import React from 'react';
import { Linkedin, Facebook, Mail, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black text-white py-16 px-8">
      <div className="max-w-7xl mx-auto">
        {/* Top section with dividers and social icons */}
        <div className="flex items-center justify-center gap-8 mb-12">
          <div className="h-px bg-white flex-1 max-w-xs"></div>
          
          {/* Social Icons */}
          <div className="flex gap-6">
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Linkedin className="w-8 h-8" strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Facebook className="w-8 h-8" strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Mail className="w-8 h-8" strokeWidth={1.5} />
            </a>
            <a href="#" className="hover:opacity-80 transition-opacity">
              <Instagram className="w-8 h-8" strokeWidth={1.5} />
            </a>
          </div>
          
          <div className="h-px bg-white flex-1 max-w-xs"></div>
        </div>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Left Column - Navigation */}
          <div className="space-y-6">
            <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg">
              Home
            </a>
            <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg">
              Blogs
            </a>
            <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg">
              Service
            </a>
            <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg">
              About
            </a>
            <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg">
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
            <a href="#" className="block text-white hover:text-gray-300 transition-colors text-lg flex items-center">
              Locations
              <span className="ml-2 text-gray-500 text-sm">...</span>
              <span className="ml-1 text-gray-500">&gt;</span>
            </a>
          </div>

          {/* Right Column - Logo and Copyright */}
          <div className="flex flex-col items-start md:items-end">
            <div className="flex items-center gap-3 mb-8">
              {/* Colorful puzzle logo */}
              <div className="flex flex-wrap w-12 h-12">
                <div className="w-6 h-6 bg-yellow-400 rounded-tl-lg"></div>
                <div className="w-6 h-6 bg-green-400 rounded-tr-lg"></div>
                <div className="w-6 h-6 bg-blue-400 rounded-bl-lg"></div>
                <div className="w-6 h-6 bg-pink-500 rounded-br-lg"></div>
              </div>
              <div className="text-left">
                <div className="text-2xl font-bold leading-tight">Social</div>
                <div className="text-2xl font-bold leading-tight">Siyappa</div>
              </div>
            </div>
            <p className="text-sm tracking-wider">copyright @2024</p>
          </div>
        </div>
      </div>
    </footer>
  );
}