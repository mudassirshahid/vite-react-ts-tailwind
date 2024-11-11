import React from "react";
import { useCounter } from "../../provider/Counter";

const ContextCounter: React.FC = () => {
  const context = useCounter();

  const handleCount = () => {
    context?.setCount(context.value + 1);
  };
  return (
    <>
      <h2 className="text-white text-2xl">{context?.value}</h2>
      <button
        className={`text-white border px-4 py-2 rounded hover:bg-cyan-500 hover:-rotate-3 hover:animate-pulse duration-150`}
        onClick={handleCount}
      >
        Click to Add
      </button>
    </>
  );
};

export default ContextCounter;
