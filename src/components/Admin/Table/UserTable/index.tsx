"use client";
import { memo, useState } from "react";
import SearchWithFilter from "../../Common/SearchWithFilter";
import Pagination from "../../Common/Pagination";
import UserDetailModal from "../../Modal/UserDetailModal";

const UserTable = () => {
  const [isOpenDetail, setIsOpenDetail] = useState(false);
  return (
    <div className="bg-white rounded-xl shadow-md border-[1px] border-gray-200">
      <SearchWithFilter />
      <div className="">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="">
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Người dùng
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Liên hệ
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Vai trò
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Ngày tham gia
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
                <span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  Đ
                </span>
                Đặng Thành Hưng
              </th>
              <th className="py-[16px] text-left px-[24px] font-medium text-gray-500">
                <div className="text-[14px] space-y-1">
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"
                      />
                    </svg>
                    hungthanhdang05@gmail.com
                  </p>
                  <p className="flex items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M19.44 13c-.22 0-.45-.07-.67-.12a9.4 9.4 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.2 12.2 0 0 1-2.66-2a12.2 12.2 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10 10 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9m.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.1 1.1 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11 11 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.5 14.5 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a14 14 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z"
                      />
                    </svg>
                    0348910968
                  </p>
                </div>
              </th>
              <th className="px-[24px] py-[16px] text-left font-light">
                <span className="bg-blue-100 rounded-2xl font-semibold px-3 py-2 text-[12px] text-blue-500">
                  Nhân viên
                </span>
              </th>
              <th className="py-[16px] text-left px-[24px] font-medium text-gray-600">
                12-12-2025
              </th>
              <th className="px-[24px] py-[16px] text-left font-light">
                <span className="bg-green-100 rounded-2xl font-semibold px-3 py-2 text-[12px] text-green-600">
                  Hoạt động
                </span>
              </th>
              <th className="flex gap-2 justify-center items-center py-[16px]">
                <button
                  onClick={() => setIsOpenDetail(true)}
                  className="p-2 hover:bg-green-100 rounded-lg group relative"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                    className="text-green-500"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M29 16c0 3-5.82 9-13 9S3 19 3 16s5.82-9 13-9s13 6 13 9Z" />
                      <path d="M21 16a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z" />
                    </g>
                  </svg>
                  <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                    Chi tiết
                  </span>
                </button>
                <div className="p-2 hover:bg-blue-100 rounded-lg">
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
                </div>
                <div className="p-2 hover:bg-red-100 rounded-lg">
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
                </div>
              </th>
            </tr>
            <tr>
              <th className="py-[16px] text-left px-[24px] font-semibold flex items-center gap-2">
                <span className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  Đ
                </span>
                Đặng Thành Hưng
              </th>
              <th className="py-[16px] text-left px-[24px] font-medium text-gray-600">
                hungthanhdang05@gmail.com
              </th>
              <th className="px-[24px] py-[16px] text-left font-light">
                <span className="bg-red-100 rounded-2xl px-3 py-2 text-[12px] text-red-500">
                  Quản trị viên
                </span>
              </th>
              <th className="py-[16px] text-left px-[24px] font-medium text-gray-600">
                12-12-2025
              </th>
              <th className="px-[24px] py-[16px] text-left font-light">
                <span className="bg-green-100 rounded-2xl px-3 py-2 text-[12px] text-green-600">
                  Hoạt động
                </span>
              </th>
              <th className="flex gap-2 justify-center items-center py-[16px]">
                <div className="p-2 hover:bg-blue-100 rounded-lg">
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
                </div>
                <div className="p-2 hover:bg-red-100 rounded-lg">
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
                </div>
              </th>
            </tr>
          </tbody>
        </table>
      </div>
      <Pagination />
      {isOpenDetail && (
        <UserDetailModal onClose={() => setIsOpenDetail(false)} />
      )}
    </div>
  );
};

export default memo(UserTable);
