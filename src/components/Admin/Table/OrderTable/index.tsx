"use client";
import { memo, useState } from "react";
import SearchWithFilter from "../../Common/SearchWithFilter";
import formatVND from "@/utils/formatVND";
import Pagination from "../../Common/Pagination";

const OrderTable = () => {
  const [statusProduct, setStatusProduct] = useState("");
  return (
    <div className="bg-white rounded-xl shadow-md border-[1px] border-gray-200">
      <SearchWithFilter />
      <div className="">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="uppercase">
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Mã đơn
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Khách hàng
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Sản phẩm
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Tổng tiền
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Ngày đặt
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Trạng thái
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b border-gray-200">
              <th className="py-[16px] text-left px-[24px] font-semibold">
                #ORD-001
              </th>
              <th className="py-[16px] text-left px-[24px] font-medium text-gray-600">
                Nguyễn Văn A
              </th>
              <th className="py-[16px] text-left px-[24px] font-semibold flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
                  alt=""
                  className="w-[50px] h-[50px] rounded-lg object-cover"
                />
                Laptop Gaming MSI GF63
              </th>
              <th className="py-[16px] text-left px-[24px] font-medium">
                {formatVND(25000000)}
              </th>
              <th className="px-[24px] py-[16px] text-left font-light">
                2024-03-20
              </th>
              <th className="px-[24px] py-[16px] text-left font-light">
                <select
                  value={statusProduct}
                  onChange={(e) => setStatusProduct(e.target.value)}
                  className={`p-2 border border-gray-300 rounded-lg ${
                    statusProduct === "on"
                      ? "bg-green-100 text-green-600"
                      : statusProduct === "off"
                      ? "bg-red-100 text-red-600"
                      : ""
                  }`}
                >
                  <option value="on" className="bg-white text-black">
                    Đang chờ duyệt
                  </option>
                  <option value="off" className="bg-white text-black">
                    Đã duyệt
                  </option>
                  <option value="on" className="bg-white text-black">
                    Đang vận chuyển
                  </option>
                  <option value="off" className="bg-white text-black">
                    Thành công
                  </option>
                </select>
              </th>
              <th className="px-[24px] py-[16px] text-left font-light">
                <div className="p-2 hover:bg-blue-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    className="mx-auto text-blue-500"
                  >
                    <path
                      fill="currentColor"
                      d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                    />
                  </svg>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
    </div>
  );
};

export default memo(OrderTable);
