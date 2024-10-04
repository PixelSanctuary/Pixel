"use client";

import React, { useState, useEffect } from 'react';

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [victoryLine, setVictoryLine] = useState([]);
  const [winner, setWinner] = useState(null);

  // Check for winner whenever the board changes
  useEffect(() => {
    const winnerResult = calculateWinner(board);
    if (winnerResult) {
      setWinner(winnerResult.winner);
      setVictoryLine(winnerResult.line);
    }
  }, [board]);

  const status = winner
    ? `${winner} is the Winner!`
    : board.every(Boolean)
    ? 'Match Draw!'
    : `Player ${isXNext ? 'X' : 'O'}`;

  const handleClick = (index) => {
    if (board[index] || winner) return;

    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index, customClass) => {
    return (
      <button
        className={`square ${customClass} ${victoryLine.includes(index) ? ' text-primary shadow glowTextGreen animate-pulse' : ''}`}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </button>
    );
  };

  return (
    <section className='flex flex-col gap-10 items-center justify-center'>
      <h1 className={`status text-4xl smooth ${status.includes('!') && ' text-primary'}`}>{status}</h1>
      <div className="grid grid-cols-3 grid-rows-3 w-80 h-80 mx-auto text-3xl font-medium rounded-md">
        {renderSquare(0)}{renderSquare(1, 'border-x-2')}{renderSquare(2)}
        {renderSquare(3, 'border-y-2')}{renderSquare(4, 'border-2')}{renderSquare(5, 'border-y-2')}
        {renderSquare(6)}{renderSquare(7, 'border-x-2 ')}{renderSquare(8)}
      </div>
      <button
        className={`reset-button border rounded-md w-fit px-3 py-1 ${status.includes('!') && 'border-primary text-primary animate-bounce'}`}
        onClick={() => {
          setBoard(Array(9).fill(null));
          setIsXNext(true);
          setVictoryLine([]);
          setWinner(null);
        }}
      >
        Click to Restart
      </button>
    </section>
  );
};

// Helper function to calculate the winner
function calculateWinner(board) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { winner: board[a], line: lines[i] }; // Return both winner and line
    }
  }
  return null;
}

export default TicTacToe;
