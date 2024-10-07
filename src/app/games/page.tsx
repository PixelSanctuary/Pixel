// src/app/games/page.tsx

import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Games | Pixel Sanctuary',
  description: 'Explore and play free online games at Pixel Sanctuary. Enjoy a curated collection of fun and engaging games for all ages.',
};

// Optimized game data with detailed descriptions and links
const games = [
  {
    id: 'LeArcade',
    title: 'Le Arcade',
    description: 'A collection of classic arcade games.',
    externalLink: "https://pixelsanctuary.github.io/Le-Arcade/"
  },
  {
    id: 'TicTackToe',
    title: 'Tic Tack Toe',
    description: 'Classic Tic Tack Toe, Play against friends or AI.',
  },
  {
    id: 'NewGame',
    title: 'New Game',
    description: 'Concept of the Game is Under Development.',
  },
  {
    id: 'Sudoku',
    title: 'Sudoku',
    description: 'Test your logic skills, Fill the grid with numbers.',
  },
];

const GamesListing = () => {
  return (
    <section className="games-listing flex flex-col max-w-screen-2xl mx-auto px-5 sm:px-8 lg:px-16 py-10 sm:py-20 text-center w-full h-full overflow-auto">
      <h1 className="text-3xl sm:text-4xl font-bold text-primary">Explore and Play Free Online Games at Pixel Sanctuary</h1>
      <section className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mt-10 h-full">
        {games.map((game) => (
          <div
            key={game.id}
            className="flex flex-col items-center border border-primary bg-black rounded-md px-4 py-8 sm:py-10 cursor-pointer hover:shadow-lg transition-shadow"
          >
            <Link className='flex flex-col sm:gap-5' href={game.externalLink || `/game/${game.id}`}>
              <h2 className="text-2xl sm:text-3xl font-semibold text-white">{game.title}</h2>
              <p className="mt-2 sm:text-lg text-white/80 h-full grow">{game.description}</p>
            </Link>
          </div>
        ))}
      </section>
    </section>
  );
};

export default GamesListing;
