import React from 'react';
import Logo from '../../public/images/geopeek_logo.png';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-6 px-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div className="text-2xl font-semibold tracking-wide">
          Geo<span className="text-emerald-300">Peek</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 text-sm">
          <span>Country List</span>
          <span>About</span>
          <span>Contact</span>
        </div>

        <div className="text-xs text-gray-300">
          © {new Date().getFullYear()} GeoPeek. All rights reserved.
        </div>
      </div>
      <div className="mt-4 flex justify-center">
        <Image priority src={Logo} alt="GeoPeek Logo" className="h-12 bg-white w-auto" />
      </div>
    </footer>
  )
}
