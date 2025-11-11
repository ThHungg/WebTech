// src/components/common/Quantity.jsx
import { useState, memo } from "react";

const QuantityCart = ({
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
    <div className="flex items-center rounded-md overflow-hidden w-max">
      <button
        onClick={decrement}
        className="px-2 py-1 text-xs bg-white hover:bg-gray-300 font-bold border border-gray-300 rounded-md"
      >
        -
      </button>
      <span className="px-3 py-1 text-xs bg-gray-50">{count}</span>
      <button
        onClick={increment}
        className="px-2 py-1 text-xs bg-white hover:bg-gray-300 font-bold border border-gray-300 rounded-md"
      >
        +
      </button>
    </div>
  );
};

export default memo(QuantityCart);
