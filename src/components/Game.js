import React, { useState } from 'react';
import Squares from './Squares';

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));

  function renderSquare(i) {
    return (
      <Squares
        value={squares[i]}
        onClick={() => {
          const newSquares = squares.slice();
          newSquares[i] = 'X';
          setSquares(newSquares);
        }}
      />
    );
  }

  return (
    <>
      <h1>Game</h1>
      <div className="container">
        <div className="game">
          <div className="game-board">
            <div className="board-row">
              {renderSquare(0)}
              {renderSquare(1)}
              {renderSquare(2)}
            </div>
            <div className="board-row">
              {renderSquare(3)}
              {renderSquare(4)}
              {renderSquare(5)}
            </div>
            <div className="board-row">
              {renderSquare(6)}
              {renderSquare(7)}
              {renderSquare(8)}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
