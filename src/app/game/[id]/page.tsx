import React from 'react';
import dynamic from 'next/dynamic';
import ProgressBar from '@/app/components/ProgressBar';
import { Metadata } from 'next';

// Dynamic imports for games
const TicTacToe = dynamic(() => import('@/app/components/games/TickTackToe'), { ssr: false });
const Sudoku = dynamic(() => import('@/app/components/games/Sudoku'), { ssr: false });

export const metadata: Metadata = {
    title: 'Online Game | Pixel Sanctuary',
    description: 'Explore and play free online games at Pixel Sanctuary. Enjoy a curated collection of fun and engaging games for all ages.',
    keywords: 'online games, free games, Pixel Sanctuary, play games, fun games, engaging games, family-friendly games, indie games, multiplayer games, browser games, casual games, game collection, best online games, play now, gaming platform, arcade games',
};

const GameDetail = ({ params }: { params: { id: string } }) => {
  const { id } = params;

  const renderGame = () => {
    switch (id) {
      case 'TicTackToe':
        return <TicTacToe />;
      case 'Sudoku':
        return <Sudoku />;
      default:
        return (
          <div className='flex flex-col gap-5'>
            <h1 className='text-4xl'>{id} is Under Construction...</h1>
            <ProgressBar total={90} completed={39} />
          </div>
        );
    }
  };

  return (
    <section className="game-detail flex flex-col gap-5 h-screen text-center py-20 max-w-screen-2xl mx-auto">
      {renderGame()}
    </section>
  );
};

export default GameDetail;
