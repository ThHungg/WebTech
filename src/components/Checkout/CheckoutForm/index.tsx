"use client";
import { memo, startTransition } from "react";
import DeliveryMethod from "./DeliveryMethod";
import { useRouter } from "next/navigation";
import PaymentMethod from "./PaymentMethod";
import Link from "next/link";

const CheckoutForm = () => {
  const router = useRouter();

  return (
    <div className="p-[24px] rounded-lg w-full bg-white rounded-md border-[1px] border-gray-100 shadow-md">
      <h5 className="flex items-center gap-2 font-bold mb-[12px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-red-500"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <circle cx="12" cy="10" r="3" />
            <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
          </g>
        </svg>
        Thông tin giao hàng
      </h5>
      <form action="">
        <div className="space-y-4 border-b border-gray-200 pb-[20px]">
          {/* Họ và tên & Số điện thoại */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-gray-700 font-medium text-[14px]"
              >
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Vui lòng nhập tên người nhận"
                className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-gray-700 font-medium text-[14px]"
              >
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Vui lòng nhập số điện thoại người nhận"
                className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-700 font-medium text-[14px]">
              Email
            </label>
            <input
              type="text"
              placeholder="Vui lòng nhập email của bạn"
              className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
            />
          </div>
          {/* Địa chỉ */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-gray-700 font-medium text-[14px]"
              >
                Tỉnh/Thành phố <span className="text-red-500">*</span>
              </label>
              <select
                name=""
                id=""
                className="px-[16px] py-[8px] text-[16px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              >
                <option value="">Chọn Tỉnh/Thành phố</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-gray-700 font-medium text-[14px]"
              >
                Quận/Huyện <span className="text-red-500">*</span>
              </label>
              <select
                name=""
                id=""
                className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              >
                <option value="">Chọn Quận/Huyện</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label
                htmlFor=""
                className="text-gray-700 font-medium text-[14px]"
              >
                Phường/Xã <span className="text-red-500">*</span>
              </label>
              <select
                name=""
                id=""
                className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              >
                <option value="">Chọn Phường/Xã</option>
                <option value="">2</option>
                <option value="">3</option>
              </select>
            </div>
          </div>
          {/* Địa chỉ chụ thể */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-700 font-medium text-[14px]">
              Địa chỉ cụ thể
            </label>
            <input
              type="text"
              placeholder="Số nhà, tên đường"
              className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
            />
          </div>
          {/* Ghi chú */}
          <div className="flex flex-col gap-2">
            <label htmlFor="" className="text-gray-700 font-medium text-[14px]">
              Ghi chú
            </label>
            <textarea
              rows={3}
              placeholder="Ghi chú đơn hàng"
              className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
            />
          </div>
          {/* Phương thức giao hàng */}
          <DeliveryMethod />
          <PaymentMethod />
        </div>
        <Link
          href="/checkout/confirmInfo"
          className="py-4 bg-red-500 text-[16px] hover:bg-red-600 text-white w-full text-center font-bold rounded-2xl mt-[20px] block text-center"
        >
          Tiếp tục
        </Link>
      </form>
    </div>
  );
};

export default memo(CheckoutForm);
