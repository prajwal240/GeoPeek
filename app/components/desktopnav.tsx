import React from 'react';
import Link from 'next/link';
import Desktopsearch from './desktopsearch';
import Desktoplogo from './desktoplogo';

export default function Desktopnav() {
    return (
        <div
            className="bg-center bg-cover w-full h-[13vh] fixed z-[1000]"
            style={{ backgroundImage: "url(/images/nav_background.png)" }}
        >
            <nav className="flex items-center justify-between h-full px-4">
                <Desktoplogo />
                <div className="flex items-center gap-6">
                    <Link href="/list" className="text-emerald-900 hover:text-emerald-700 hover:scale-110 transform transition duration-200">Country List</Link>
                    <Link href="/infobot" className="text-emerald-900 hover:text-emerald-700 hover:scale-110 transform transition duration-200">InfoBot</Link>
                    <Link href="/about" className="text-emerald-900 hover:text-emerald-700 hover:scale-110 transform transition duration-200">About</Link>
                    <Desktopsearch />
                </div>
            </nav>
        </div>
    )
}
