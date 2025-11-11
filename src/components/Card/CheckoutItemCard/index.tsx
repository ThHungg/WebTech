"use client";
import QuantityCart from "@/components/Common/QuantityCart";
import formatVND from "@/utils/formatVND";
import { memo, useState } from "react";

const CheckoutItemCard = () => {
  const [quantity, setQuantity] = useState(1);
  return (
    <div className="flex gap-3 border-b border-gray-200 pb-[12px] mb-[12px]">
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
          alt=""
          className="w-[64px] h-[64px] rounded-lg object-cover"
        />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          1
        </span>
      </div>
      <div className="">
        <p className="text-[13px] font-semibold">
          Laptop Gaming ASUS ROG Strix G16 i9-13980HX
        </p>
        <div className="flex gap-3 items-center">
          <p className="text-red-500 font-bold text-[13px]">
            {formatVND(29990000)}
          </p>
          <QuantityCart initial={1} min={1} max={10} onChange={setQuantity} />
        </div>
      </div>
    </div>
  );
};

export default memo(CheckoutItemCard);
