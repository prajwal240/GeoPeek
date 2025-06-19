'use client'
import React from 'react';
import Image from 'next/image';
import Logo from '../../public/images/geopeek_logo.png';
import { useRouter } from 'next/navigation';

export default function Desktoplogo() {
    const router=useRouter();

    const handleClick=(evt:React.MouseEvent<HTMLSpanElement>)=>{
        evt.preventDefault();
        router.push('/');
    }

    return (
        <span className="h-full flex items-center hover:scale-110" onClick={handleClick}>
            <Image priority src={Logo} alt="logo" className="h-[10vh] w-auto object-contain" />
        </span>
    )
}
