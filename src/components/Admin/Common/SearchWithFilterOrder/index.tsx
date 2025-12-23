"use client";
import { memo, useEffect, useState } from "react";

interface SearchWithFilterOrderProps {
  onSearch: (searchValue: string) => void;
  onFilterStatus: (status: string) => void;
}

const SearchWithFilterOrder = ({
  onSearch,
  onFilterStatus,
}: SearchWithFilterOrderProps) => {
  const [searchValue, setSearchValue] = useState("");

  const orderStatuses = [
    { id: 1, value: "pending", label: "Đang chờ duyệt" },
    { id: 2, value: "confirmed", label: "Đã duyệt" },
    { id: 3, value: "shipping", label: "Đang vận chuyển" },
    { id: 4, value: "delivered", label: "Thành công" },
    { id: 5, value: "cancelled", label: "Đã huỷ" },
  ];

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      onSearch(searchValue);
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchValue, onSearch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handleFilterStatus = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onFilterStatus(e.target.value);
  };

  return (
    <div className="p-[24px] border-b border-gray-200">
      <div className="flex w-full gap-2">
        <div className="relative w-full">
          <input
            type="text"
            placeholder="Tìm kiếm đơn hàng (mã, tên khách, SĐT)"
            onChange={handleSearch}
            className="border-[1px] border-gray-200 py-[8px] pl-[40px] pr-[16px] w-full rounded-lg text-[16px]  focus:outline-none focus:border-blue-500 focus:border-[2px]"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            className="absolute left-2 top-0 translate-y-1/2 text-gray-400"
          >
            <path
              fill="currentColor"
              d="m19.6 21l-6.3-6.3q-.75.6-1.725.95T9.5 16q-2.725 0-4.612-1.888T3 9.5t1.888-4.612T9.5 3t4.613 1.888T16 9.5q0 1.1-.35 2.075T14.7 13.3l6.3 6.3zM9.5 14q1.875 0 3.188-1.312T14 9.5t-1.312-3.187T9.5 5T6.313 6.313T5 9.5t1.313 3.188T9.5 14"
            />
          </svg>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="mt-[18px]">
          <select
            onChange={handleFilterStatus}
            className="border-gray-300 border-[1px] px-4 py-2 rounded-lg"
          >
            <option value="">Chọn trạng thái</option>
            {orderStatuses.map((status) => (
              <option key={status.id} value={status.value}>
                {status.label}
              </option>
            ))}
          </select>
        </div>
      </div>
    </div>
  );
};

export default memo(SearchWithFilterOrder);
