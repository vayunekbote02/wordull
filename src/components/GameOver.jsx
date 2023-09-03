import { useContext } from "react";
import { BoardContext } from "../App";

const GameOver = () => {
  const { gameOver, setGameOver, correctWord, currAttempt } =
    useContext(BoardContext);
  return (
    <div>
      <h3 className="text-xl">
        {gameOver.guessedWord
          ? "You correctly guessed!"
          : "You failed to guess the word."}
      </h3>
      {gameOver.gameOver && !gameOver.guessedWord && (
        <h1 className="text-4xl">Correct word is: {correctWord}</h1>
      )}
      {gameOver.guessedWord && (
        <h3>You guessed the word in {currAttempt.row} attempts.</h3>
      )}
      <button
        className="p-5 bg-slate-600 text-white rounded-md mt-5"
        onClick={() => {
          window.location.reload();
        }}
      >
        New Game
      </button>
    </div>
  );
};

export default GameOver;
