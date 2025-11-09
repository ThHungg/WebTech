// src/components/common/Quantity.jsx
import { useState, memo } from "react";

const Quantity = ({
  initial = 1,
  min = 1,
  max = 99,
  onChange,
}: {
  onChange: (value: number) => void;
  initial: number;
  min: number;
  max: number;
}) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < max) {
      const newCount = count + 1;
      setCount(newCount);
      onChange?.(newCount);
    }
  };

  const decrement = () => {
    if (count > min) {
      const newCount = count - 1;
      setCount(newCount);
      onChange?.(newCount);
    }
  };

  return (
    <div className="flex items-center border rounded-md overflow-hidden w-max">
      <button
        onClick={decrement}
        className="px-5 py-3 text-xl bg-white hover:bg-gray-300 font-bold border-r border-gray-300"
      >
        -
      </button>
      <span className="px-6 py-3 text-xl">{count}</span>
      <button
        onClick={increment}
        className="px-5 py-3 text-xl bg-white hover:bg-gray-300 font-bold border-l border-gray-300"
      >
        +
      </button>
    </div>
  );
};

export default memo(Quantity);
