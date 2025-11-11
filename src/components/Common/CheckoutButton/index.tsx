import { memo } from "react";

const CheckoutButton = () => {
  return (
    <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 48 48"
      >
        <path
          fill="currentColor"
          d="M4 15.25A6.25 6.25 0 0 1 10.25 9h27.5A6.25 6.25 0 0 1 44 15.25v17.5A6.25 6.25 0 0 1 37.75 39h-27.5A6.25 6.25 0 0 1 4 32.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v3.25h35v-3.25a3.75 3.75 0 0 0-3.75-3.75zM6.5 32.75a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75V21h-35zm24.75-3.25a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5z"
        />
      </svg>
      Thanh toán ngay
    </button>
  );
};

export default memo(CheckoutButton);
