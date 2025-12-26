import React, { useEffect } from "react";
import CartVoucher from "../CartVoucher";
import formatVND from "@/utils/formatVND";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CartSummary = ({
  cartData,
  selected,
}: {
  cartData: any;
  selected: any[];
}) => {
  console.log("summary ", selected);
  
  const router = useRouter();
  const cartItems = cartData?.cart?.items || [];
  // Lọc ra các sản phẩm có id nằm trong mảng selected
  const selectedItems = cartItems.filter((item: any) =>
    selected.includes(item?.id)
  );
  // Tính tổng tiền từ selectedItems
  const total = selectedItems.reduce(
    (sum: number, item: any) =>
      sum + Number(item?.variant?.price || 0) * Number(item?.quantity || 0),
    0
  );

  const handleCheckOut = () => {
    if (selectedItems.length === 0) {
      toast.error("Vui lòng chọn sản phẩm trước khi thanh toán");
      return;
    }
    router.push("/checkout");
  };
  return (
    <div className="bg-white p-4 rounded-xl sticky top-30 space-y-4 shadow-sm">
      <div className="flex gap-2 text-blue-600 bg-blue-50 rounded-lg p-3 items-center font-semibold">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 24 24"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12" />
            <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15" />
          </g>
        </svg>
        <span className="text-sm">Bạn được miễn phí vận chuyển!</span>
      </div>
      <CartVoucher />
      <div className="space-y-2 text-sm border-t border-b border-gray-200 py-4">
        <div className="flex justify-between">
          <span className="text-gray-600">
            Tạm tính ({selectedItems.length} sản phẩm)
          </span>
          <span className="font-medium">{formatVND(total)}</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Phí vận chuyển</span>
          <span className="text-green-500 font-medium">Miễn phí</span>
        </div>
      </div>

      <div className="flex justify-between font-semibold text-lg">
        <span>Tổng cộng</span>
        <span className="text-red-500">{formatVND(total)}</span>
      </div>

      <button
        onClick={handleCheckOut}
        className="w-full flex items-center justify-center gap-2 bg-linear-to-r from-red-600 to-orange-500 text-white py-3  font-bold hover:shadow-lg transition-all disabled:opacity-50  rounded-xl "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1.5em"
          height="1.5em"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M2 9.5A4.5 4.5 0 0 1 6.5 5h19A4.5 4.5 0 0 1 30 9.5v13a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5zM6.5 7A2.5 2.5 0 0 0 4 9.5V11h24V9.5A2.5 2.5 0 0 0 25.5 7zM4 22.5A2.5 2.5 0 0 0 6.5 25h19a2.5 2.5 0 0 0 2.5-2.5V13H4zM21 19h3a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2"
          />
        </svg>
        Thanh toán
      </button>
    </div>
  );
};

export default CartSummary;
