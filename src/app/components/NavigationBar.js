"use client";

import Link from 'next/link';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlaystation } from '@fortawesome/free-brands-svg-icons';
import { faLayerGroup, faCircleXmark, faBookAtlas } from '@fortawesome/free-solid-svg-icons';

export default function NavigationBar() {
    const [showMenu, setShowMenu] = useState(false);

    const tabList = [
        {
            title: 'Play XO',
            link: '/game/TicTackToe'
        },
        {
            title: 'Play Sudoku',
            link: '/game/Sudoku'
        }
    ]

    return (
        <section className='sticky max-w-3xl lg:max-w-4xl w-full mx-auto z-50 top-0 sm:top-3'>
            <section className='flex items-center justify-between w-full border border-primary text-primary bg-white dark:bg-black sm:rounded-full py-3 px-4 shadow-md shadow-primary/80'>
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
            <section className={`bg-primary text-black sm:outline outline-white dark:outline-black outline-[3px] -outline-offset-[3px] rounded-b-lg w-full absolute top-6 -left-[.35px] -z-10 px-5 transition-all duration-1000 ${showMenu ? 'h-screen sm:h-80 py-10' : 'h-3'}`}>
                {showMenu &&
                    <div className='grid grid-cols-3 sm:grid-cols-5 gap-3 animate-fade'>
                        <h2 className='text-2xl col-span-3 sm:col-span-5 font-semibold'><FontAwesomeIcon icon={faBookAtlas} className='mr-2.5' />Available Spells</h2>
                        {tabList.map((tab) => <Link href={tab.link} key={tab.title} onClick={() => setShowMenu(false)} >{tab.title}</Link>)}
                    </div>
                }

            </section>
        </section>
    );
}
