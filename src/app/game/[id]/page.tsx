import React from 'react';

import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Online Game | Pixel Sanctuary',
    description: 'Explore and play free online games at Pixel Sanctuary. Enjoy a curated collection of fun and engaging games for all ages.',
    keywords: 'online games, free games, Pixel Sanctuary, play games, fun games, engaging games, family-friendly games, indie games, multiplayer games, browser games, casual games, game collection, best online games, play now, gaming platform, arcade games',
};

// Fetch the dynamic params (id) from the route
const GameDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  return (
    <div className="game-detail h-full text-center py-20">
      <h1 className='text-4xl'>{id} is Coming Soon...</h1>
    </div>
  );
};

export default GameDetail;
