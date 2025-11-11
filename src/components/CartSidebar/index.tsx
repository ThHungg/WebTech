import { memo } from "react";
import CartItemCard from "../Card/CartItemCard";
import CartSummary from "./CartSummary";

const CartSidebar = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/80 z-[50]">
      <div
        onClick={(e) => e.stopPropagation()}
        className={`fixed top-0 right-0 h-screen bg-white z-[51] shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-[16px] bg-gradient-to-r from-red-600 min-w-[400px] to-orange-500 text-white whitespace-nowrap flex justify-between items-center">
          <h4 className="text-lg font-bold">Giỏ Hàng Của Bạn</h4>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={onClose}
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M18 6L6 18M6 6l12 12"
            />
          </svg>
        </div>
        <div className="flex flex-col h-screen p-[16px]">
          {/* Danh sách có thể cuộn */}
          <div className="flex-1 overflow-y-auto pb-[60px]">
            <div className="flex flex-col gap-4">
              <CartItemCard />
              <CartItemCard />
              <CartItemCard />
              <CartItemCard />
              <CartItemCard />
              <CartItemCard />
              <CartItemCard />
              <CartItemCard />
              <CartItemCard />
              <CartItemCard />
            </div>
          </div>

          {/* Phần tóm tắt thanh toán */}
          <div className="sticky bottom-0 left-0 w-full bg-white">
            <CartSummary />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CartSidebar);
