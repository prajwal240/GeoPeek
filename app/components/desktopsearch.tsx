'use client'
import React, { useContext, useState } from 'react';
import Image from 'next/image';
import Search_Logo from '../../public/images/search_icon_svg.svg';
import { NationContext } from '../globalstates/nationinfo';
import { useRouter } from 'next/navigation';

type Data = [{
    flags: {
        png: string,
    },
    name: {
        common: string,
    },
}]

export default function Desktopsearch() {

    const [name, setName] = useState<string>('');
    const { setNationdata } = useContext(NationContext);

    const handleChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
        setName(evt.target.value);
    }

    const router = useRouter();

    const handleSubmit = async (evt: React.MouseEvent<HTMLDivElement> | React.FormEvent<HTMLFormElement>) => {
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
    };

    return (
        <form className="relative inline-block" onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Search..."
                className="px-3 py-1 rounded-md border border-emerald-700 text-emerald-900 placeholder-emerald-600 focus:outline-none focus:ring-2 focus:ring-emerald-600 bg-white bg-opacity-80"
                style={{ paddingRight: '32px' }}
                value={name}
                onChange={handleChange}
            />
            <div onClick={handleSubmit} className="absolute right-0 top-0 h-full flex items-center px-2 bg-emerald-700 rounded-r-md cursor-pointer">
                <Image src={Search_Logo} alt='search_logo' />
            </div>
        </form>
    )
}
