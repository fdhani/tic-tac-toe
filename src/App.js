import "./App.css";
import { useState } from "react";

import Board from "./components/Board";
import GameInfo from "./components/GameInfo";
import calculateWinner from "./utils/calculateWinner";

const App = () => {
  const [isXNext, setIsXNext] = useState(false);
  const [board, setBoard] = useState(Array(9).fill(null));
  const winner = calculateWinner(board);

  const handleResetGameClick = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(false);
  };

  const handleSquareClick = (index) => {
    if (winner) return;
    setBoard((currBoard) => {
      const newBoard = [...currBoard];

      if (newBoard[index]) {
        return newBoard;
      }
      newBoard[index] = isXNext ? "X" : "O";

      setIsXNext(!isXNext);
      return newBoard;
    });
  };

  return (
    <div className="container">
      <Board board={board} onAction={handleSquareClick} />
      <GameInfo
        winner={winner}
        isXNext={isXNext}
        onReset={handleResetGameClick}
      />
    </div>
  );
};

export default App;
