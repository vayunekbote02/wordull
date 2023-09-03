import { useContext } from "react";
import { BoardContext } from "../App";

const Key = ({ keyVal, disabled }) => {
  const { onSelectLetter, onSelectEnter, onSelectDelete } =
    useContext(BoardContext);

  const handleClick = () => {
    if (keyVal === "ENTER") {
      onSelectEnter();
    } else if (keyVal === "⌫") {
      // console.log(currAttempt.column);
      onSelectDelete();
    } else {
      // console.log(currAttempt.column);
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className={`p-4 m-[5px] rounded grid place-items-center text-key bg-gray-500 text-white font-sans cursor-pointer ${
        disabled && "bg-gray-800 cursor-auto"
      }`}
      onClick={handleClick}
    >
      {keyVal}
    </div>
  );
};

export default Key;
