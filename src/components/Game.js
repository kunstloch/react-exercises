import React, { useState } from 'react';
import Squares from './Squares';
import CalculateWinner from './CalculateWinner';
import IsBoardFull from './IsBoardFull';
import Restart from './Restart';

export default function Game() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const winner = CalculateWinner(squares);
  const nextSymbol = isXNext ? 'X' : 'O';

  function getStatus() {
    if (winner) {
      return 'Winner: ' + winner;
    } else if (IsBoardFull(squares)) {
      return 'Draw!';
    } else {
      return 'Next player: ' + nextSymbol;
    }
  }

  function renderSquare(i) {
    return (
      <Squares
        value={squares[i]}
        onClick={() => {
          if (squares[i] != null || winner != null) {
            return;
          }
          const newSquares = squares.slice();
          newSquares[i] = nextSymbol;
          setSquares(newSquares);
          setIsXNext(!isXNext);
        }}
      />
    );
  }

  function renderRestartButton() {
    return (
      <Restart
        onClick={() => {
          setSquares(Array(9).fill(null));
          setIsXNext(true);
        }}
      />
    );
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
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
          <div className="game-info">{getStatus()}</div>
          <div className="restart-button">{renderRestartButton()}</div>
        </div>
      </div>
    </>
  );
}
