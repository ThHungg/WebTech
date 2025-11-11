import CheckoutButton from "@/components/Common/CheckoutButton";
import formatVND from "@/utils/formatVND";
import { memo } from "react";

const CartSummary = () => {
  return (
    <div className="p-[16px] bg-white shadow-lg border-t border-gray-200">
      <div className="space-y-2 border-b border-gray-200 pb-[12px]">
        <div className="flex justify-between text-gray-600 text-[14px]">
          <p>Tạm tính</p>
          <p className="font-medium">{formatVND(1200999)}</p>
        </div>
        <div className="flex justify-between text-gray-600 text-[14px]">
          <p>Giảm giá</p>
          <p className="font-medium text-green-400">- {formatVND(20000)}</p>
        </div>
      </div>
      <div className="pt-[8px] mb-[12px] flex items-center justify-between text-[18px] font-bold">
        <p>Tổng cộng</p>
        <p className="text-red-500">{formatVND(1180999)}</p>
      </div>
      <CheckoutButton />
    </div>
  );
};

export default memo(CartSummary);
