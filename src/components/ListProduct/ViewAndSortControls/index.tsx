"use client";
import { memo, useState } from "react";

const ViewAndSortControls = () => {
  const [selectedView, setSelectedView] = useState("grid");

  return (
    <div className="p-[16px] bg-white w-full mb-[24px] rounded-lg shadow-md">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          Hiển thị:
          <button
            className={`p-2 bg-gray-100 rounded-md ${
              selectedView === "grid"
                ? "bg-red-600 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setSelectedView("grid")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              className=""
            >
              <path
                fill="currentColor"
                d="M10 4v4h4V4zm6 0v4h4V4zm0 6v4h4v-4zm0 6v4h4v-4zm-2 4v-4h-4v4zm-6 0v-4H4v4zm0-6v-4H4v4zm0-6V4H4v4zm2 6h4v-4h-4zM4 2h16a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H4c-1.08 0-2-.9-2-2V4a2 2 0 0 1 2-2"
              />
            </svg>
          </button>
          <button
            className={`p-2 bg-gray-100 rounded-md ${
              selectedView === "list"
                ? "bg-red-600 text-white"
                : "hover:bg-gray-200"
            }`}
            onClick={() => setSelectedView("list")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                d="M1 3a1 1 0 1 0 2 0a1 1 0 0 0-2 0m3 1h11V2H4zm11 5H4V7h11zM1 8a1 1 0 1 0 2 0a1 1 0 0 0-2 0m14 6H4v-2h11zM1 13a1 1 0 1 0 2 0a1 1 0 0 0-2 0"
              />
            </svg>
          </button>
        </div>
        <div>
          <select className="border border-gray-300 rounded-md p-2">
            <option value="default">Mặc định</option>
            <option value="price-asc">Giá: Thấp đến cao</option>
            <option value="price-desc">Giá: Cao đến thấp</option>
            <option value="newest">Mới nhất</option>
            <option value="oldest">Cũ nhất</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default memo(ViewAndSortControls);
