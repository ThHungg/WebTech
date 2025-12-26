"use client";
import { memo } from "react";
import { useRouter } from "next/navigation";

const CheckoutConfirm = ({ orderCode }: { orderCode?: string }) => {
  const router = useRouter();

  return (
    <div className="p-[24px] rounded-lg w-full bg-white border-[1px] border-gray-100 shadow-md text-center">
      <div className="flex flex-col items-center justify-center mb-6">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            className="text-green-500"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M20 6L9 17l-5-5"
            />
          </svg>
        </div>
        <h5 className="text-2xl font-bold text-gray-900 mb-2">
          Đặt hàng thành công!
        </h5>
        <p className="text-gray-600">
          Cảm ơn bạn đã mua hàng. Mã đơn hàng của bạn là:
        </p>
        <p className="text-xl font-bold text-red-500 mt-2">{orderCode}</p>
      </div>

      <div className="p-[16px] mb-[24px] bg-gray-50 rounded-lg text-left">
        <p className="text-sm text-gray-600 mb-2">
          Chúng tôi sẽ sớm liên hệ với bạn để xác nhận đơn hàng.
          Thông tin chi tiết về đơn hàng đã được gửi đến email của bạn.
        </p>
      </div>

      <div className="flex gap-3 justify-center">
        <button
          onClick={() => router.push("/listproduct")}
          className="px-6 py-3 bg-white text-gray-700 font-semibold rounded-lg border border-gray-300 hover:bg-gray-50 transition-all"
        >
          Tiếp tục mua sắm
        </button>
        <button
          onClick={() => router.push(`/profile/orders/${orderCode}`)}
          className="px-6 py-3 bg-red-500 text-white font-bold rounded-lg hover:bg-red-600 transition-all shadow-md"
        >
          Xem chi tiết đơn hàng
        </button>
      </div>
    </div>
  );
};

export default memo(CheckoutConfirm);
