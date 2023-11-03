import React, { useState } from 'react';


function Board() {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function selectSquare(square) {
    if (squares[square] || calculateWinner(squares)) {
      return;
    }
    const newSquares = [...squares];
    newSquares[square] = xIsNext ? 'X' : 'O';
    setSquares(newSquares);
    setXIsNext(!xIsNext);
  }


  function restart() {
    setSquares(Array(9).fill(null));
    setXIsNext(true);
  }

}
  function renderSquare(i) {
    return (
      <button
        className="square bg-blue-500 text-white font-bold text-2xl w-16 h-16 m-1 rounded"
        onClick={() => selectSquare(i)}
      >
        {squares[i]}
      </button>
    );
  }

  const winner = calculateWinner(squares);
  const nextValue = calculateNextValue(squares);
  const status = calculateStatus(winner, squares, nextValue);

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button
        className="mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-full font-semibold shadow-md transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
        onClick={restart}
      >
        Restart
      </button>
    </div>
  );



function Game() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <Board />
      </div>
    </div>
  );
}

// eslint-disable-next-line no-unused-vars
function calculateStatus(winner, squares, nextValue) {
  if (winner) {
    return winner === 'X' ? 'Winner: Xyla' : 'Winner: Jes';
  } else {
    return squares.every(Boolean) ? `Scratch: Cat's game` : `Next player: ${nextValue}`;
  }
}

// eslint-disable-next-line no-unused-vars
function calculateNextValue(squares) {
  return squares.filter(Boolean).length % 2 === 0 ? 'Adel' : 'Ulan';
}


// eslint-disable-next-line no-unused-vars
function calculateWinner(squares) {
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
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

function App() {
  const status = calculateStatus(winner, squares, nextValue);

  return (
    <div className="flex flex-col items-center">
      <div className="text-2xl font-bold mb-4">{status}</div>
      <div className="grid grid-cols-3 gap-1">
        {/* ...other JSX code */}
      </div>
    </div>
  );

}

export default App;
