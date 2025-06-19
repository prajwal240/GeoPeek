'use client'
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import MenuIcon from '../../public/images/hamburger_menu_icon.svg';
import Logo from '../../public/images/geopeek_logo.png';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { NationContext } from '../globalstates/nationinfo';

type Data = [{
    flags: {
        png: string,
    }, name: {
        common: string,
    },
}]

export default function Mobilenav() {
    const router = useRouter();
    const handleHomeNavigator = (evt: React.MouseEvent<HTMLImageElement>) => {
        router.push('/');
    }

    const [menuopen, isMenuopen] = useState<Boolean>(false);
    const handleMenu = (evt: React.MouseEvent<HTMLImageElement>) => {
        evt.preventDefault();
        menuopen ? isMenuopen(false) : isMenuopen(true);
    }

    const [name, setName] = useState<string>("");
    const { setNationdata } = useContext(NationContext);

    const handleSearch = async (evt: React.MouseEvent<HTMLDivElement> | React.FormEvent<HTMLFormElement>) => {
        evt.preventDefault();

        try {
            const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fields=name,flags`);
            const data: Data = await res.json();

            setNationdata({
                flag: data[0].flags.png,
                name: data[0].name.common,
                loc: `https://maps.google.com/maps?q=${data[0].name.common}&output=embed`,
            });

            router.push('/info');
        } catch (error) {
            console.log("Enter Valid Country");
        }
    }

    return (
        <>
            {menuopen &&
                <div className="fixed top-0 left-0 h-full w-1/3 bg-white shadow-lg z-50 flex flex-col justify-between">

                    < div className="p-4 flex items-center justify-start border-b border-gray-300" style={{ backgroundColor: "#91D3AE" }}>
                        <Image
                            onClick={handleMenu}
                            src={MenuIcon}
                            alt="Menu"
                            className="h-[4vh] w-auto object-contain"
                        />
                    </div >
                    <nav className="flex flex-col px-6 py-[2vh] text-emerald-900 font-semibold text-[2.2vh] sm:text-[1.8vh] divide-y divide-emerald-300 flex-grow">
                        <Link
                            href="/list"
                            className="py-[2vh] hover:text-emerald-700 hover:scale-105 transform transition duration-200"
                        >
                            Country List
                        </Link>

                        <Link
                            href="/infobot"
                            className="py-[2vh] hover:text-emerald-700 hover:scale-105 transform transition duration-200"
                        >
                            InfoBot
                        </Link>

                        <Link
                            href="/about"
                            className="py-[2vh] hover:text-emerald-700 hover:scale-105 transform transition duration-200"
                        >
                            About
                        </Link>
                        <form className="pt-[2vh]" onSubmit={handleSearch}>
                            <input
                                type="text"
                                placeholder="Search..."
                                value={name}
                                onChange={(evt: React.ChangeEvent<HTMLInputElement>) => setName(evt.target.value)}
                                className="w-full rounded-md border border-emerald-500 placeholder-emerald-500 focus:outline-none focus:ring-2 focus:ring-emerald-400 bg-white text-emerald-900 px-3 py-2 text-[2vh]"
                            />
                            <div className="pt-[1.5vh]">
                                <button
                                    className="w-full bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white font-medium py-2 px-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-2 touch-manipulation text-[1.6vh] shadow-md hover:shadow-lg"
                                    onClick={() => handleSearch}
                                >
                                    Enter
                                </button>
                            </div>
                        </form>
                    </nav>
                    <div className="bg-black text-white text-center py-2 text-[1.8vh]">
                        © GeoPeek
                    </div>
                </div >}

            <div
                className="w-full h-[10vh] bg-cover bg-center flex items-center justify-between px-4"
                style={{ backgroundImage: "url(/images/nav_background.png)" }}
            >
                <div className="w-[6vh] h-[6vh] flex items-center">
                    <Image onClick={handleMenu} src={MenuIcon} alt="Menu" className="h-full w-auto object-contain cursor-pointer" />
                </div>

                <div className="absolute left-1/2 transform -translate-x-1/2 h-[7vh] flex items-center">
                    <Image priority src={Logo} alt="Logo" className="h-full w-auto object-contain" onClick={handleHomeNavigator} />
                </div>
            </div>
        </>
    )
}
