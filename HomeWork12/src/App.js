import { useState } from "react";

function Square({ value, onSquareClick }) {
  const squareColorClass = value === "X" ? "text-cyan-500" : "text-yellow-500";
  return (
    <button className={`w-24 h-24 border-2 border-slate-800 font-semibold text-4xl bg-slate-600 rounded-md cursor-pointer ${squareColorClass}`} onClick={onSquareClick}>
      {value}
    </button>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  function handleClick(i) {
    if (squares[i] || calculateWinner(squares)) return;

    const nextSquares = squares.slice();

    nextSquares[i] = xIsNext ? "X" : "O";

    onPlay(nextSquares);
  }

  function isBoardFull(squares) {
    return squares.every(square => square !== null);
  }

  const winner = calculateWinner(squares);
  const isDraw = isBoardFull(squares) && !winner;

  let status = "";
  if (winner) {
    status = winner + " is the Winner!";
  } else if (isDraw) {
    status = "It's a Draw!";
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  return (
    <>
      <div className="text-xl font-medium text-green-400 my-5">{status}</div>
      <div className="flex m-auto flex-wrap w-72 h-72">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const xIsNext = currentMove % 2 === 0;
  const currentSquares = history[currentMove];

  function jumpTo(nextMove) {
    setCurrentMove(nextMove);
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length - 1);
  }

  const resetGame = () => {
    setHistory([Array(9).fill(null)]);
    setCurrentMove(0);
  };

  const moves = history.map((squares, move) => {
    let description = "";
    if (move > 0) {
      description = "Go to move #" + move;
    } else {
      description = "Go to game start";
    }

    return (
      <li key={move}>
        <button className={`m-2 ${move === currentMove ? 'p-1 bg-green-500 text-white rounded-lg' : 'p-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600'}`} onClick={() => jumpTo(move)}>{description}</button>
      </li>
    );
  });

  return (
    <div className="mt-20 text-center flex justify-center">
      <div className="p-4 rounded-lg">
        <h1 className="text-center text-4xl text-white font-bold">Tic Tac Toe In <span className="text-cyan-400">React</span></h1>
        <Board xIsNext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
        <button className="m-3 py-1 px-4 bg-red-500 text-white rounded-lg hover:bg-red-400" onClick={resetGame}>Reset</button>
      </div>
      <div className="font-medium bg-gray-600 p-3 rounded-md">
        <h3 className="text-xl font-medium text-white">Rewind Moves</h3>
        <ol>{moves}</ol>
      </div>
    </div>
  );
}

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

  return false;
}