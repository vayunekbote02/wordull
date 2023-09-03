import { useCallback, useEffect, useContext } from "react";
import Key from "./Key";
import { BoardContext } from "../App";

const Keyboard = () => {
  const keys1 = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
  const keys2 = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
  const keys3 = ["Z", "X", "C", "V", "B", "N", "M"];
  const { onSelectEnter, onSelectLetter, onSelectDelete, disabledLetters } =
    useContext(BoardContext);

  const handleKeyDown = useCallback((event) => {
    if (event.key === "Enter") {
      onSelectEnter();
    } else if (event.key === "Backspace") {
      onSelectDelete();
    } else {
      keys1.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys2.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
      keys3.forEach((key) => {
        if (event.key.toLowerCase() === key.toLowerCase()) {
          onSelectLetter(key);
        }
      });
    }
  });

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleKeyDown]);

  return (
    <div className="w-[700px] h-[300px] mt-[60px]">
      <div className="flex-1 flex justify-center m-[5px]">
        {keys1.map((key) => (
          <Key
            keyVal={key}
            key={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
      </div>
      <div className="flex-1 flex justify-center m-[5px]">
        {keys2.map((key) => (
          <Key
            keyVal={key}
            key={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
      </div>
      <div className="flex-1 flex justify-center m-[5px]">
        <Key keyVal={"⌫"} />
        {keys3.map((key) => (
          <Key
            keyVal={key}
            key={key}
            disabled={disabledLetters.includes(key)}
          />
        ))}
        <Key keyVal={"ENTER"} />
      </div>
    </div>
  );
};

export default Keyboard;
