"use client";
import { memo, useState } from "react";
import SearchWithFilter from "../../Common/SearchWithFilter";
import formatVND from "@/utils/formatVND";

const ProductTable = () => {
  const [statusProduct, setStatusProduct] = useState("");
  return (
    <div className="bg-white rounded-xl shadow-md border-[1px] border-gray-200">
      <SearchWithFilter />
      <div className="">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="uppercase">
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Sản phẩm
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Danh mục
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Thương hiệu
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Giá
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Tồn kho
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
              <th className="py-[16px] text-left px-[24px] font-semibold flex items-center gap-2">
                <img
                  src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
                  alt=""
                  className="w-[50px] h-[50px] rounded-lg object-cover"
                />
                Laptop Gaming MSI GF63
              </th>
              <th className="py-[16px] text-left px-[24px] font-medium text-gray-600">
                Laptop
              </th>
              <th className="py-[16px] text-left px-[24px] font-medium text-gray-600">
                MSI
              </th>
              <th className="py-[16px] text-left px-[24px] font-medium">
                {formatVND(25000000)}
              </th>
              <th className="px-[24px] py-[16px] text-left font-light">45</th>
              <th className="px-[24px] py-[16px] text-left font-light">
                {/* <span className="bg-green-100 rounded-2xl px-3 py-2 text-[12px] text-green-600">
                  Hoạt động
                </span> */}
                <select
                  name=""
                  id=""
                  className="p-2 border border-gray-300 rounded-lg "
                >
                  <option value="">Hoạt động</option>
                  <option value="">Ngưng b</option>
                </select>
              </th>
              <th className="px-[24px] py-[16px] text-left font-light">
                <div className="flex">
                  <button className="p-2 hover:bg-blue-100 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="text-blue-500"
                    >
                      <path
                        fill="currentColor"
                        d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"
                      />
                      <path
                        fill="currentColor"
                        d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"
                      />
                    </svg>
                  </button>
                  <button className="p-2 hover:bg-red-100 rounded-lg">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      className="text-red-500"
                    >
                      <path
                        fill="currentColor"
                        d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                      />
                    </svg>
                  </button>
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default memo(ProductTable);
