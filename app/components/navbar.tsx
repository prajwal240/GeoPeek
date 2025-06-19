import React from 'react'
import Desktopnav from './desktopnav';
import Mobilenav from './mobilenav';

export default function Navbar() {
    return (
        <>
            <div className="hidden lg:block">
                <Desktopnav />
            </div>
            <div className="block lg:hidden">
                <Mobilenav />
            </div>
        </>
    )
}
