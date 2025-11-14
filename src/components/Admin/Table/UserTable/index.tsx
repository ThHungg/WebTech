import { memo } from "react";
import SearchWithFilter from "../../Common/SearchWithFilter";
import Pagination from "../../Common/Pagination";

const UserTable = () => {
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
                Email
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
              <th className="py-[16px] text-left px-[24px] font-medium text-gray-600">
                hungthanhdang05@gmail.com
              </th>
              <th className="px-[24px] py-[16px] text-left font-light">
                <span className="bg-blue-100 rounded-2xl px-3 py-2 text-[12px] text-blue-500">
                  Nhân viên
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
    </div>
  );
};

export default memo(UserTable);
