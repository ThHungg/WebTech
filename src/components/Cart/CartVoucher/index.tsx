import React from "react";

const CartVoucher = () => {
  return (
    <div>
      <p className="text-sm font-medium text-gray-7 mb-2">Mã giảm giá</p>
      <div className="flex gap-2">
        <input
          placeholder="Nhập mã giảm giá"
          className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
        />
        <button className="px-4 py-2 bg-red-600 text-white rounded-lg font-medium hover:bg-red-700 transition-colors">
          Áp dụng
        </button>
      </div>
    </div>
  );
};

export default CartVoucher;
