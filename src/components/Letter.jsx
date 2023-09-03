import { useContext, useEffect } from "react";
import { BoardContext } from "../App";

const Letter = ({ rowNum, colNum }) => {
  const { board, correctWord, currAttempt, setDisabledLetters } =
    useContext(BoardContext);
  const letter = board[rowNum][colNum];

  //since this is a single letter
  const correct = correctWord.toUpperCase()[colNum] === letter;
  const almost =
    !correct && letter !== "" && correctWord.toUpperCase().includes(letter);

  useEffect(() => {
    if (letter !== "" && !correct && !almost) {
      setDisabledLetters((prev) => [...prev, letter]);
    }
  }, [currAttempt.row]);

  return (
    <div
      className={`flex-[33%] h-[50px] border-solid border-[1px] border-gray-500 grid place-items-center ml-2 gap-y-[0.5rem] text-letter font-bold text-white font-sans ${
        currAttempt.row > rowNum &&
        (correct
          ? "bg-correct w-full h-full"
          : almost
          ? "bg-almost w-full h-full"
          : "bg-error w-full h-full")
      }`}
    >
      {letter}
    </div>
  );
};

export default Letter;
