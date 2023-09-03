import Letter from "./Letter";

const Board = () => {
  return (
    <div className="w-[300px] h-[360px] border-solid border-black border-[1] flex flex-col">
      <div className="flex flex-[33%] m-[5px] ">
        <Letter rowNum={0} colNum={0} />
        <Letter rowNum={0} colNum={1} />
        <Letter rowNum={0} colNum={2} />
        <Letter rowNum={0} colNum={3} />
        <Letter rowNum={0} colNum={4} />
      </div>
      <div className="flex flex-[33%] m-[5px]">
        <Letter rowNum={1} colNum={0} />
        <Letter rowNum={1} colNum={1} />
        <Letter rowNum={1} colNum={2} />
        <Letter rowNum={1} colNum={3} />
        <Letter rowNum={1} colNum={4} />
      </div>
      <div className="flex flex-[33%] m-[5px]">
        <Letter rowNum={2} colNum={0} />
        <Letter rowNum={2} colNum={1} />
        <Letter rowNum={2} colNum={2} />
        <Letter rowNum={2} colNum={3} />
        <Letter rowNum={2} colNum={4} />
      </div>
      <div className="flex flex-[33%] m-[5px]">
        <Letter rowNum={3} colNum={0} />
        <Letter rowNum={3} colNum={1} />
        <Letter rowNum={3} colNum={2} />
        <Letter rowNum={3} colNum={3} />
        <Letter rowNum={3} colNum={4} />
      </div>
      <div className="flex flex-[33%] m-[5px]">
        <Letter rowNum={4} colNum={0} />
        <Letter rowNum={4} colNum={1} />
        <Letter rowNum={4} colNum={2} />
        <Letter rowNum={4} colNum={3} />
        <Letter rowNum={4} colNum={4} />
      </div>
      <div className="flex flex-[33%] m-[5px]">
        <Letter rowNum={5} colNum={0} />
        <Letter rowNum={5} colNum={1} />
        <Letter rowNum={5} colNum={2} />
        <Letter rowNum={5} colNum={3} />
        <Letter rowNum={5} colNum={4} />{" "}
      </div>
    </div>
  );
};

export default Board;
