"use client";
import QuantityCart from "@/components/Common/QuantityCart";
import { formatPercentage } from "@/utils/formatPercentage";
import formatVND from "@/utils/formatVND";
import getFullImg from "@/utils/getFullImg";
import { memo, useEffect, useRef, useState } from "react";
import * as cartServices from "../../../services/cartServices";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

const CartItemCard = ({
  itemData,
  isSelected,
  onSelect,
  onUpdateQuantity,
}: {
  itemData: any;
  isSelected?: boolean;
  onSelect?: (id: any) => void;
  onUpdateQuantity?: (id: any, quantity: number) => void;
}) => {
  const [quantity, setQuantity] = useState(itemData?.quantity);
  const router = useRouter();
  const debounceTimeout = useRef<any>(null);
  useEffect(() => {
    return () => {
      if (debounceTimeout.current) {
        clearTimeout(debounceTimeout.current);
      }
    };
  }, []);
  const handleQuantityChange = (newQuantity: number) => {
    setQuantity(newQuantity);
    if (debounceTimeout.current) {
      clearTimeout(debounceTimeout.current);
    }
    debounceTimeout.current = setTimeout(async () => {
      // api sửa số lượng
      try {
        await cartServices.updateCart(itemData?.id, newQuantity);
        console.log("Update cart success");
        if (onUpdateQuantity) {
          onUpdateQuantity(itemData?.id, newQuantity);
        }
      } catch (error) {
        console.error("Update cart failed", error);
      } finally {
        debounceTimeout.current = null;
      }
    }, 700);
  };

  const handleDelete = () => {
    toast(
      ({ closeToast }) => (
        <div className="flex flex-col items-center justify-center p-2">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg text-gray-800 mb-1">Xóa sản phẩm?</h3>
          <p className="text-gray-600 text-center mb-5 text-base">
            Bạn có chắc muốn xóa sản phẩm này khỏi giỏ hàng?
          </p>
          <div className="flex gap-3 w-full">
            <button
              onClick={closeToast}
              className="flex-1 py-2.5 px-4 text-sm font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={async () => {
                try {
                  await cartServices.deleteCartItem(itemData?.id);
                  router.refresh();
                  toast.success("Đã xóa sản phẩm");
                } catch (error) {
                  console.error("Delete item failed", error);
                  toast.error("Xóa thất bại");
                }
                closeToast();
              }}
              className="flex-1 py-2.5 px-4 text-sm font-semibold text-white bg-red-500 rounded-xl hover:bg-red-600 shadow-sm transition-colors"
            >
              Xóa
            </button>
          </div>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  };

  return (
    <div className="p-4 bg-gray-50 rounded-sm shadow-md flex items-center gap-4 hover:shadow-md transition-shadow w-full">
      <label htmlFor={`item-${itemData?.id}`}>
        <input
          id={`item-${itemData?.id}`}
          checked={isSelected || false}
          onChange={() => onSelect && onSelect(itemData?.id)}
          type="checkbox"
          className="w-4 h-4 cursor-pointer"
        />
        <span className="text-white">|</span>
      </label>
      <div className="relative">
        <img
          src={getFullImg(itemData?.variant?.product?.images[0]?.image)}
          alt=""
          className="w-28 h-28 rounded-lg object-cover"
        />
        <div className="absolute top-0 right-0 bg-red-600 text-white rounded-bl-lg text-xs p-1 px-1.5">
          {Number(itemData?.variant?.discount_percent) > 0
            ? `-${formatPercentage(
                Number(itemData?.variant?.discount_percent)
              )}`
            : Number(itemData?.variant?.discount_amount) > 0
            ? `-${formatVND(Number(itemData?.variant?.discount_amount))}`
            : ""}
        </div>
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between">
          <p className="font-medium text-xl mb-[4px] text-gray-900 hover:text-red-500 cursor-pointer">
            {itemData?.variant?.product?.name}
          </p>
          <button
            onClick={handleDelete}
            className="p-1 hover:bg-red-100 rounded-lg"
          >
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
        <p className="text-xs text-gray-500">
          Thương hiệu: {itemData?.variant?.product?.brand?.name}
        </p>

        <div className="flex justify-between items-center">
          <div className="mt-2">
            {}
            <p
              className={`line-through text-xs ${
                itemData?.variant?.discount_amount === 0 &&
                itemData?.variant?.discount_percent === 0
                  ? "text-white"
                  : "text-gray-500"
              }`}
            >
              {formatVND(itemData?.variant?.original_price)}
            </p>
            <p className="font-bold text-xl text-red-500 mb-[8px]">
              {formatVND(itemData?.variant?.price)}
            </p>
          </div>
          <QuantityCart
            initial={quantity}
            min={1}
            max={10}
            onChange={handleQuantityChange}
          />
        </div>
      </div>
    </div>
  );
};

export default memo(CartItemCard);
