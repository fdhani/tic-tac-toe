import Button from "./Button";

const GameInfo = ({ winner, isXNext, onReset }) => {
  const handleResetGameClick = () => {
    onReset();
  };

  return (
    <div className="game-info">
      {winner ? (
        <h2>Winner: {winner}</h2>
      ) : (
        <h2>Next player: {isXNext ? "X" : "O"}</h2>
      )}

      <Button onClick={handleResetGameClick}>Start Over</Button>
    </div>
  );
};

export default GameInfo;
