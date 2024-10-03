import React from 'react';
import ProgressBar from '@/app/components/ProgressBar'
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
    <div className="game-detail flex flex-col gap-5 h-full text-center py-20 max-w-screen-2xl mx-auto">
      <h1 className='text-4xl'>{id} is Under Construction...</h1>
      <ProgressBar total={90} completed={33} />
    </div>
  );
};

export default GameDetail;
