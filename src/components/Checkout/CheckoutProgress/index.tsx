import { memo } from "react";

const CheckoutProgress = () => {
  return (
    <div className="flex items-center-safe justify-center md:justify-start gap-4 md:gap-8">
      <div className="flex flex-col items-center gap-2">
        <div className="inline-flex flex-col items-center justify-center bg-red-500 rounded-full p-[12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="text-white"
          >
            <g fill="none">
              <path
                d="M12 2a8 8 0 0 1 8 8c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 0 1 8-8m0 5a3 3 0 1 0 0 6a3 3 0 0 0 0-6"
                clipRule="evenodd"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M20 10c0 6.5-8 12-8 12s-8-5.5-8-12a8 8 0 1 1 16 0Z"
              />
              <path
                stroke="currentColor"
                strokeWidth="2"
                d="M15 10a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z"
              />
            </g>
          </svg>
        </div>
        <p className="text-[14px] max-w-[100px] text-center font-semibold">
          Thông tin giao hàng
        </p>
      </div>
      <div className="hidden md:block w-24 h-1 bg-gray-200 mb-10"></div>
      <div className="flex flex-col items-center gap-2">
        <div className="inline-flex flex-col items-center justify-center bg-gray-300 rounded-full p-[12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 20 20"
            className="text-gray-600"
          >
            <path
              fill="currentColor"
              d="M13.5 13a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1zM2 6.75A2.75 2.75 0 0 1 4.75 4h10.5A2.75 2.75 0 0 1 18 6.75v6.5A2.75 2.75 0 0 1 15.25 16H4.75A2.75 2.75 0 0 1 2 13.25zM4.75 5A1.75 1.75 0 0 0 3 6.75V8h14V6.75A1.75 1.75 0 0 0 15.25 5zM17 9H3v4.25c0 .966.784 1.75 1.75 1.75h10.5A1.75 1.75 0 0 0 17 13.25z"
            />
          </svg>
        </div>
        <p className="text-[14px] max-w-[100px] text-center font-semibold text-gray-500">
          Phương thức thanh toán
        </p>
      </div>
      <div className="hidden md:block w-24 h-1 bg-gray-200 mb-10"></div>
      <div className="flex flex-col items-center gap-2">
        <div className="inline-flex flex-col items-center justify-center bg-gray-300 rounded-full p-[12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 15 15"
            className="text-gray-600"
          >
            <path
              fill="none"
              stroke="currentColor"
              d="M4 7.5L7 10l4-5m-3.5 9.5a7 7 0 1 1 0-14a7 7 0 0 1 0 14Z"
            />
          </svg>
        </div>
        <p className="text-[14px] max-w-[100px] text-center font-semibold text-gray-500">
          Thông tin giao hàng
        </p>
      </div>
    </div>
  );
};

export default memo(CheckoutProgress);
