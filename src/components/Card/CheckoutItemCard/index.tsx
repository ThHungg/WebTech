"use client";
import QuantityCart from "@/components/Common/QuantityCart";
import formatVND from "@/utils/formatVND";
import getFullImg from "@/utils/getFullImg";
import { memo, useState, useEffect } from "react";

const CheckoutItemCard = ({ item }: { item: any }) => {
  const [quantity, setQuantity] = useState(item.quantity || 1);

  useEffect(() => {
    setQuantity(item.quantity || 1);
  }, [item.quantity]);

  return (
    <div className="flex gap-3 border-b border-gray-200 pb-[12px] mb-[12px]">
      <div className="relative w-[64px] h-[64px]">
        <img
          src={getFullImg(item.variant.product.images[0]?.image)}
          alt=""
          className="w-full h-full rounded-lg object-cover"
        />
        <span className="absolute -top-2 -right-2 bg-red-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
          {item.quantity}
        </span>
      </div>
      <div className="flex-1">
        <p className="text-[13px] font-semibold">
          {item.variant.product.name}
          {item.variant.name !== "Default" && ` - ${item.variant.name}`}
        </p>
        <div className="flex gap-3 items-center">
          <p className="text-red-500 font-bold text-[13px]">
            {formatVND(item.variant.price * quantity)}
          </p>
          {/* <QuantityCart
            initial={quantity}
            min={1}
            max={10}
            onChange={setQuantity}
          /> */}
        </div>
      </div>
    </div>
  );
};

export default memo(CheckoutItemCard);
