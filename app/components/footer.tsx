import React from 'react';
import Image from 'next/image';
import Logo from '../../public/images/geopeek_logo.png';

export default function Footer() {
  return (
    <footer className="bg-emerald-900 text-white py-6 px-4">
      <div className="text-xs text-gray-200 mb-4 text-center sm:text-left max-w-6xl mx-auto flex justify-center">
        Note: If you search a country by its short form or if there are spelling mistakes,
        you may not get the expected results.
      </div>

      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4 text-center sm:text-left">
        <div className="text-2xl font-semibold tracking-wide">
          Geo<span className="text-emerald-300">Peek</span>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 text-sm">
          <span className="hover:underline cursor-pointer">Country List</span>
          <span className="hover:underline cursor-pointer">About</span>
          <span className="hover:underline cursor-pointer">Contact</span>
        </div>

        <div className="text-xs text-gray-300">
          © {new Date().getFullYear()} GeoPeek. All rights reserved.
        </div>
      </div>

      <div className="mt-4 flex justify-center">
        <Image
          priority
          src={Logo}
          alt="GeoPeek Logo"
          className="h-12 w-auto bg-white rounded"
        />
      </div>
    </footer>
  );
}
