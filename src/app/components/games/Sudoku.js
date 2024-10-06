"use client";

import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faHeartCrack } from '@fortawesome/free-solid-svg-icons';

const initialGrid = [
    [null, null, null, null, 3, null, null, 8, 4],
    [5, null, null, null, 2, null, null, 1, null],
    [null, 1, 3, null, null, 9, null, 5, null],
    [1, null, null, null, null, 6, null, null, null],
    [null, null, null, null, 1, null, null, null, null],
    [2, null, 8, 7, null, null, null, 9, 6],
    [null, null, 1, 9, null, null, 3, 7, null],
    [null, 3, 6, null, 8, 5, 4, null, 9],
    [9, 8, null, null, null, null, null, null, null],
];

const solutionGrid =  [
    [6, 2, 7, 5, 3, 1, 9, 8, 4],
    [5, 9, 4, 8, 2, 7, 6, 1, 3],
    [8, 1, 3, 6, 4, 9, 2, 5, 7],
    [1, 7, 5, 4, 9, 6, 8, 3, 2],
    [3, 6, 9, 2, 1, 8, 7, 4, 5],
    [2, 4, 8, 7, 5, 3, 1, 9, 6],
    [4, 5, 1, 9, 6, 2, 3, 7, 8],
    [7, 3, 6, 1, 8, 5, 4, 2, 9],
    [9, 8, 2, 3, 7, 4, 5, 6, 1],
];


const Sudoku = () => {
    const [grid, setGrid] = useState(initialGrid);
    const [lifes, setLifes] = useState([1, 1, 1]);

    const startNewGame = () => {
        setLifes([1, 1, 1]); // Reset lives
    };

    // Handle the change in input values
    const handleChange = (row, col, value) => {
        if (!isValidInput(value)) return; // Validate input (only 1-9)

        const correct = isCorrectInput(row, col, value);

        if (!correct) {
            setLifes(updateLife()); // Update lives if the input is incorrect
        }

        const newGrid = [...grid];
        newGrid[row][col] = value ? parseInt(value) : null;
        setGrid(newGrid);
    };

    // Validate input (numbers 1-9)
    const isValidInput = (value) => {
        const num = parseInt(value);
        return !isNaN(num) && num >= 1 && num <= 9;
    };

    // Check if input is correct based on solution grid
    const isCorrectInput = (row, col, value) => {
        const num = parseInt(value);
        return solutionGrid[row][col] === num;
    };

    // Update lives if incorrect input is made
    const updateLife = () => {
        let lifeList = [...lifes]; // Copy life list to prevent mutation of state
        const targetIndex = lifeList.indexOf(1); // Find the first available life (1)

        if (targetIndex !== -1) {
            lifeList[targetIndex] = 0; // Remove a life by setting it to 0
        }

        return lifeList;
    };

    const generateClass = (rowIndex, colIndex) => {
        switch (rowIndex) {
            case 2:
                switch (colIndex) {
                    case 2:
                    case 5:
                        return 'border-b-primary border-r-primary';
                    case 3:
                    case 6:
                        return 'border-b-primary border-l-primary';
                    default:
                        return 'border-b-primary'; // for other values of colIndex
                }
            case 5:
                switch (colIndex) {
                    case 2:
                    case 5:
                        return 'border-b-primary border-r-primary';
                    case 3:
                    case 6:
                        return 'border-b-primary border-l-primary';
                    default:
                        return 'border-b-primary'; // for other values of colIndex
                }
            case 3:
                switch (colIndex) {
                    case 2:
                    case 5:
                        return 'border-t-primary border-r-primary';
                    case 3:
                    case 6:
                        return 'border-t-primary border-l-primary';
                    default:
                        return 'border-t-primary'; // for other values of colIndex
                }
            case 6:
                switch (colIndex) {
                    case 2:
                    case 5:
                        return 'border-t-primary border-r-primary';
                    case 3:
                    case 6:
                        return 'border-t-primary border-l-primary';
                    default:
                        return 'border-t-primary'; // for other values of colIndex
                }
            default:
                switch (colIndex) {
                    case 2:
                    case 5:
                        return 'border-r-primary';
                    case 3:
                    case 6:
                        return 'border-l-primary';
                    default:
                        return ''; // for other values of colIndex
                }
        }
    };

    // Render the Sudoku grid
    return (
        <section className="sudoku-container flex flex-col max-w-lg mx-auto">
            <div className="flex items-center justify-between mb-5">
                <h1 className="text-4xl font-medium text-primary text-center">Sudoku </h1>
                <div className="flex flex-row-reverse text-2xl items-center mt-1 gap-3 text-[#ff1818]">
                    {
                        lifes.map((life, index) => (<FontAwesomeIcon icon={life ? faHeart : faHeartCrack} className={` ${life || 'opacity-50'} `} key={index} />))
                    }</div>
            </div>
            <div className="grid grid-cols-9 grid-rows-9 border-2 border-primary rounded-md relative">
                {!lifes.includes(1) && <div onClick={startNewGame} className="absolute flex flex-col items-center justify-center bg-white/50 col-span-9 row-span-9 w-full h-full px-3 py-1 text-black cursor-pointer"> 
                <h2 className="text-3xl font-medium text-primary bg-black w-full rounded-t-md py-1">Game Over!</h2>
                <p className="text-xl bg-primary w-full  rounded-b-md py-1">
                    click to start a new Game
                    </p>
                </div> }
                {grid.map((row, rowIndex) =>
                    row.map((num, colIndex) => (
                        <input
                            key={`${rowIndex}-${colIndex}`}
                            className={` w-10 h-10 sm:w-12 sm:h-12 text-center text-xl bg-black text-white border border-white/50 ${generateClass(rowIndex, colIndex)}`}
                            type="text"
                            maxLength={1}
                            value={num === null ? "" : num}
                            onChange={(e) => handleChange(rowIndex, colIndex, e.target.value)}
                            disabled={initialGrid[rowIndex][colIndex] !== null} // Disable original numbers
                        />
                    ))
                )}
            </div>
        </section>
    );
};

export default Sudoku;
