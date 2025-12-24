"use client";
import QuantityCart from "@/components/Common/QuantityCart";
import formatVND from "@/utils/formatVND";
import { memo, useState } from "react";

const CartItemCard = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="p-4 bg-gray-50 rounded-sm shadow-md flex items-center gap-4 hover:shadow-md transition-shadow w-full">
      <label htmlFor="">
        <input type="checkbox" className="w-4 h-4 cursor-pointer" />
        <span className="text-white">|</span>
      </label>
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500"
          alt=""
          className="w-28 h-28 rounded-lg object-cover"
        />
        <div className="absolute top-0 right-0 bg-red-600 text-white rounded-bl-lg text-xs p-1 px-1.5">
          -80%
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-medium text-xl mb-[4px] text-gray-900 hover:text-red-500 cursor-pointer">
            Microphone Blue Yeti USB
          </p>
          <button className="p-1 hover:bg-red-100 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-red-500"
              fill="currentColor"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              <path d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1zM6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7zm12-1V5h-4l-1-1h-3L9 5H5v1zM8 9h1v10H8zm6 0h1v10h-1z" />
            </svg>
          </button>
        </div>
        <p className="text-xs text-gray-500">Thương hiệu: Asus</p>

        <div className="flex justify-between items-center">
          <div className="mt-2">
            <p className="text-gray-400 line-through text-xs">{formatVND(22000000)}</p>
            <p className="font-bold text-xl text-red-500 mb-[8px]">
              {formatVND(12000000)}
            </p>
          </div>
          <QuantityCart initial={1} min={1} max={10} onChange={setQuantity} />
        </div>
      </div>
    </div>
  );
};

export default memo(CartItemCard);
