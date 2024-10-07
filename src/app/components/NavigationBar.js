"use client";

import Link from 'next/link';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { faLayerGroup, faCircleXmark } from '@fortawesome/free-solid-svg-icons';

export default function NavigationBar() {
    const [showMenu, setShowMenu] = useState(false);
    
    return (
        <section className='flex items-center justify-between max-w-3xl lg:max-w-4xl w-full mx-auto sticky z-50 top-0 sm:top-3 border border-primary text-primary bg-black sm:rounded-full py-3 px-4 shadow-md shadow-primary/80'>
            <Link href="/" className="text-2xl" aria-label="Home">
                <FontAwesomeIcon icon={faPlaystation} />
            </Link>

            <div className='flex gap-5'>
                <Link href="/games">Games</Link>
                <Link href="/services">Services</Link>
                <Link href="/about">About</Link>
            </div>

            <div onClick={() => setShowMenu(!showMenu)} className='flex items-center justify-center w-6 cursor-pointer'><FontAwesomeIcon
                icon={showMenu ? faCircleXmark : faLayerGroup}
                className={`text-2xl smooth`} 
            /> </div>
            
        </section>
    );
}
