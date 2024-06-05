import "./App.css";
import { useState } from "react";

import Board from "./components/Board";
import GameInfo from "./components/GameInfo";
import calculateWinner from "./utils/calculateWinner";
import Timeline from "./components/Timeline";

const App = () => {
  const [timeline, setTimeline] = useState([
    {
      isXNext: false,
      board: Array(9).fill(null),
    },
  ]);
  const [currentStep, setCurrentStep] = useState(0);
  const board = timeline[currentStep].board;
  const isXNext = timeline[currentStep].isXNext;
  const winner = calculateWinner(board);

  const handleSquareClick = (index) => {
    if (winner) return;

    const newBoard = [...board];

    if (newBoard[index]) {
      return newBoard;
    }
    newBoard[index] = isXNext ? "X" : "O";

    setTimeline([
      ...timeline.slice(0, currentStep + 1),
      {
        board: newBoard,
        isXNext: !isXNext,
      },
    ]);
    setCurrentStep(currentStep + 1);
  };

  const handleTimelineItemClick = (index) => {
    setCurrentStep(index);
  };

  return (
    <div className="container">
      <Board board={board} onAction={handleSquareClick} />
      <div>
        <GameInfo winner={winner} isXNext={isXNext} />
        <Timeline
          currentStep={currentStep}
          timeline={timeline}
          onTimelineItemClick={handleTimelineItemClick}
        />
      </div>
    </div>
  );
};

export default App;
