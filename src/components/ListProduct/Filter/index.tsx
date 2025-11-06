"use client";
import { memo, useState } from "react";

const Filter = () => {
  const [selectedPriceOption, setSelectedPriceOption] = useState("");

  const listBrand = [
    "AOC",
    "LG",
    "Samsung",
    "Sony",
    "Dell",
    "HP",
    "Asus",
    "Acer",
  ];

  const priceOptions = [
    { label: "Dưới 1 triệu", value: "under-1m" },
    { label: "1-5 triệu", value: "1m-5m" },
    { label: "5-10 triệu", value: "5m-10m" },
    { label: "Trên 10 triệu", value: "above-10m" },
  ];
  return (
    <div className="w-64 flex-shrink-0 lg:block hidden">
      <div className="bg-white rounded-lg shadow-sm sticky p-[16px]">
        <div className="mb-[12px] flex items-center gap-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M22 3H2l8 9.46V19l4 2v-8.54z"
            />
          </svg>
          <h6 className="font-bold">Bộ lọc</h6>
        </div>
        <button className="text-[14px] font-medium text-red-600 mb-[24px]">
          Xoá tất cả
        </button>
        {/* Thương hiệu */}
        <div className=" mb-[24px]">
          <h6 className="font-bold">Thương hiệu</h6>
          <div className="max-h-48 space-y-2 overflow-y-auto">
            {listBrand.map((brand) => (
              <label className="flex items-center gap-2 cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors">
                <input
                  className="rounded border-gray-300 text-red-600 focus:ring-red-600"
                  type="checkbox"
                />
                <span className="text-sm text-gray-700">{brand}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Khoảng giá */}
        <div className="">
          <h6 className="font-bold">Khoảng giá</h6>
          {priceOptions.map((option) => (
            <div className="mb-[12px]" key={option.value}>
              <button
                className={`px-[12px] py-[8px] w-full bg-gray-100 rounded-xl ${
                  selectedPriceOption === option.value
                    ? "bg-red-600 text-white"
                    : "text-gray-700 hover:bg-gray-200 transition-colors "
                }`}
                onClick={() => setSelectedPriceOption(option.value)}
              >
                {option.label}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default memo(Filter);
