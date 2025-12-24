"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const PaymentSuccessPage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [orderDetails, setOrderDetails] = useState<any>(null);

  const orderId = searchParams.get("orderId");
  const amount = searchParams.get("amount");

  useEffect(() => {
    if (orderId && amount) {
      setOrderDetails({
        orderId,
        amount: parseInt(amount),
      });
    } else {
      toast.error("Không tìm thấy thông tin đơn hàng");
      router.push("/");
    }
  }, [orderId, amount, router]);

  const handleContinueShopping = () => {
    router.push("/listproduct");
  };

  const handleViewOrder = () => {
    router.push(`/profile/orders/${orderId}`);
  };

  if (!orderDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500 mx-auto mb-4"></div>
          <p className="text-gray-600">Đang xử lý...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        {/* Success Icon */}
        <div className="bg-gradient-to-r from-green-400 to-green-600 px-6 py-12 text-center">
          <div className="flex justify-center">
            <div className="flex items-center justify-center h-24 w-24 rounded-full bg-white">
              <svg
                className="h-12 w-12 text-green-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="px-6 py-8">
          <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">
            Thanh toán thành công!
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Cảm ơn bạn đã mua hàng
          </p>

          {/* Order Details */}
          <div className="bg-gray-50 rounded-lg p-6 mb-6 space-y-4">
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-gray-600 font-medium">Mã đơn hàng:</span>
              <span className="text-gray-900 font-bold text-lg">
                {orderDetails.orderId}
              </span>
            </div>
            <div className="flex justify-between items-center border-b pb-3">
              <span className="text-gray-600 font-medium">Số tiền:</span>
              <span className="text-red-600 font-bold text-lg">
                {orderDetails.amount.toLocaleString("vi-VN")} VND
              </span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-600 font-medium">Trạng thái:</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                ✓ Thành công
              </span>
            </div>
          </div>

          {/* Message */}
          <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
            <p className="text-sm text-blue-800">
              📧 Hóa đơn và thông tin chi tiết đơn hàng đã được gửi đến email
              của bạn. Vui lòng kiểm tra email để theo dõi đơn hàng.
            </p>
          </div>

          {/* Buttons */}
          <div className="space-y-3">
            <button
              onClick={handleViewOrder}
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Xem chi tiết đơn hàng
            </button>
            <button
              onClick={handleContinueShopping}
              className="w-full bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-4 rounded-lg transition duration-200"
            >
              Tiếp tục mua sắm
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="bg-gray-50 px-6 py-4 text-center text-sm text-gray-600">
          <p>
            Nếu có thắc mắc, vui lòng{" "}
            <a href="/contact" className="text-red-500 hover:underline">
              liên hệ chúng tôi
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentSuccessPage;
