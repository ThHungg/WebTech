import CartItemCard from '@/components/Card/CartItemCard'
import React, { memo } from 'react'

const CartItemList = () => {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl">
        <label
          htmlFor=""
          className="flex items-center gap-2 font-semibold text-lg"
        >
          <input id="" type="checkbox" className="w-5 h-5 cursor-pointer" />
          Chọn tất cả (4)
        </label>
        <div className="flex items-center gap-2 text-red-500 font-semibold text-lg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g fill="none" stroke="currentColor" strokeWidth="1.5">
              <path
                strokeLinecap="round"
                d="M20.5 6h-17m15.333 2.5l-.46 6.9c-.177 2.654-.265 3.981-1.13 4.79s-2.196.81-4.856.81h-.774c-2.66 0-3.991 0-4.856-.81c-.865-.809-.954-2.136-1.13-4.79l-.46-6.9M9.5 11l.5 5m4.5-5l-.5 5"
              />
              <path d="M6.5 6h.11a2 2 0 0 0 1.83-1.32l.034-.103l.097-.291c.083-.249.125-.373.18-.479a1.5 1.5 0 0 1 1.094-.788C9.962 3 10.093 3 10.355 3h3.29c.262 0 .393 0 .51.019a1.5 1.5 0 0 1 1.094.788c.055.106.097.23.18.479l.097.291A2 2 0 0 0 17.5 6" />
            </g>
          </svg>
          <p>Xóa (4)</p>
        </div>
      </div>
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
      <CartItemCard />
    </div>
  );
}

export default memo(CartItemList)