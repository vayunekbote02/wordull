import { useState, createContext, useEffect } from "react";
import Board from "./components/Board";
import Keyboard from "./components/Keyboard";
import { boardDefault, generateWordSet } from "./Words";
import GameOver from "./components/GameOver";

export const BoardContext = createContext();

function App() {
  const [board, setBoard] = useState(boardDefault);
  const [currAttempt, setCurrentAttempt] = useState({ row: 0, column: 0 });
  const [wordSet, setWordSet] = useState(new Set());
  const [disabledLetters, setDisabledLetters] = useState([]);
  const [gameOver, setGameOver] = useState({
    guessedWord: false,
    gameOver: false,
  });
  const [correctWord, setCorrectWord] = useState("");

  useEffect(() => {
    generateWordSet().then(({ wordSet, todaysWord }) => {
      setWordSet(wordSet);
      setCorrectWord(todaysWord);
    });
  }, []);

  const onSelectLetter = (keyVal) => {
    if (currAttempt.column > 4) return;
    const currBoard = [...board];
    currBoard[currAttempt.row][currAttempt.column] = keyVal;
    setBoard(currBoard);
    setCurrentAttempt({ ...currAttempt, column: currAttempt.column + 1 });
  };

  const onSelectEnter = () => {
    if (currAttempt.column !== 5) return;

    let currWord = "";
    for (let i = 0; i < 5; i++) {
      currWord += board[currAttempt.row][i].toLowerCase();
    }

    if (wordSet.has(currWord)) {
      setCurrentAttempt({ row: currAttempt.row + 1, column: 0 });
    } else {
      alert("The typed word does not exist!");
      return;
    }

    if (currWord === correctWord) {
      setGameOver({ guessedWord: true, gameOver: true });
      return;
    }

    if (currAttempt.row === 5) {
      setGameOver({ guessedWord: false, gameOver: true });
    }
  };

  const onSelectDelete = () => {
    if (currAttempt.column === 0) return;
    const currBoard = [...board];
    currBoard[currAttempt.row][currAttempt.column - 1] = "";
    setBoard(currBoard);
    setCurrentAttempt({ ...currAttempt, column: currAttempt.column - 1 });
  };

  return (
    <div className="text-center bg-[#121212] text-white max-sm:absolute min-h-screen">
      <nav className="h-16 w-full m-0 border-b-[1px] border-solid border-b-gray-500">
        <h1 className="m-0 text-wordle text-white font-sans">Wordull</h1>
      </nav>
      <BoardContext.Provider
        value={{
          board,
          setBoard,
          currAttempt,
          setCurrentAttempt,
          onSelectLetter,
          onSelectEnter,
          onSelectDelete,
          correctWord,
          disabledLetters,
          setDisabledLetters,
          gameOver,
          setGameOver,
        }}
      >
        <div className="flex items-center pt-[50px] flex-col h-screen">
          <Board />
          {gameOver.gameOver ? <GameOver /> : <Keyboard />}
        </div>
      </BoardContext.Provider>
    </div>
  );
}

export default App;
