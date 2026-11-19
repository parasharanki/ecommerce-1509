import React, { useState } from 'react';
import { MinusIcon, PlusIcon } from '../Iconsvg/Iconsvg';

const Counter = ({ initial = 1, min = 1, max = Infinity }) => {
  const [count, setCount] = useState(initial);

  const decrement = () => {
    setCount(prev => Math.max(prev - 1, min));
  };

  const increment = () => {
    setCount(prev => Math.min(prev + 1, max));
  };

  return (
    <div className="flex items-center gap-4">
      {/* Decrement Button */}
      <button
        onClick={decrement}
        className="w-8 h-8 rounded-full backgroundgradient text-white flex items-center justify-center cursor-pointer "
        disabled={count <= min}
      >
        <MinusIcon />
      </button>

      {/* Number Display */}
      <div className=" w-4 flex justify-center font-gordita font-medium text-[18px] text-black">
        {count}
      </div>

      {/* Increment Button */}
      <button
        onClick={increment}
        className="w-8 h-8 rounded-full backgroundgradient text-white flex items-center justify-center "
        disabled={count >= max}
      >
        <PlusIcon />
      </button>
    </div>
  );
};

export default Counter;
