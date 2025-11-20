import formatVND from "@/utils/formatVND";
import { memo } from "react";

const OrderDetailModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-2xl  w-full">
        <div className="flex justify-between p-[24px] ">
          {" "}
          <h5 className="font-bold">Chi tiết đơn hàng</h5>
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 7l10 10M7 17L17 7"
              />
            </svg>
          </button>
        </div>
        <div className=" border-b border-gray-200"></div>
        <div className="p-[16px] w-full">
          <div className="flex items-center gap-2 w-full mb-[12px]">
            <div className="bg-blue-50 p-[16px] rounded-xl w-full">
              <h6 className="!text-[16px] font-bold flex items-center gap-2 mb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
                  />
                </svg>
                Thông tin khách hàng
              </h6>
              <ul className="text-[14px] text-gray-900 space-y-1.5">
                <li>
                  Tên: <span className="font-semibold">Đặng Thành Hưng</span>
                </li>
                <li>
                  SĐT: <span className="font-semibold">0348910968</span>
                </li>
                <li>
                  Địa chỉ:{" "}
                  <span className="font-semibold">123 ABC, 456 Thăng Long</span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-[16px] rounded-xl w-full">
              <h6 className="!text-[16px] font-bold flex items-center gap-1 mb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M7 2H5a3.5 3.5 0 1 0 0 7h2v3H2.5v2H7v2h2v-2h2a3.5 3.5 0 1 0 0-7H9V4h4.5V2H9V0H7zm2 7h2a1.5 1.5 0 0 1 0 3H9zM7 7H5a1.5 1.5 0 1 1 0-3h2z"
                  />
                </svg>
                Thông tin thanh toán
              </h6>
              <ul className="text-[14px] text-gray-900 space-y-1.5">
                <li>
                  Phương thức:{" "}
                  <span className="font-semibold">Chuyển khoản</span>
                </li>
                <li>
                  Trạng thái:{" "}
                  <span className="font-semibold text-green-500">
                    Đã thanh toán
                  </span>
                </li>
                <li>
                  Ngày đặt: <span className="font-semibold">2024-03-20</span>
                </li>
              </ul>
            </div>
          </div>
          {/* Danh sách sản phẩm */}
          <div className="mb-[16px]">
            <h6 className="font-bold !text-[16px] mb-[12px]">
              Danh sách sản phẩm
            </h6>
            <div className="border border-gray-200 rounded-lg overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr className="text-[12px]">
                    <th className="px-[16px] py-[8px] text-left text-gray-700">
                      Sản phẩm
                    </th>
                    <th className="px-[16px] py-[8px] text-left text-gray-700">
                      Số lượng
                    </th>
                    <th className="px-[16px] py-[8px] text-left text-gray-700">
                      Đơn giá
                    </th>
                    <th className="px-[16px] py-[8px] text-left text-gray-700">
                      Thành tiền
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  <tr>
                    <td className="px-[16px] py-[8px] text-left font-bold">
                      Laptop MSI GF63
                    </td>
                    <td className="px-[16px] py-[8px] text-left text-gray-700 font-semibold">
                      1
                    </td>
                    <td className="px-[16px] py-[8px] text-left">
                      {formatVND(1000000)}
                    </td>
                    <td className="px-[16px] py-[8px] text-left text-blue-500 font-bold">
                      {formatVND(15000000)}
                    </td>
                  </tr>
                </tbody>
                <tfoot className="bg-blue-50">
                  <tr>
                    <td
                      colSpan={3}
                      className="text-right px-[16px] py-[12px] font-bold"
                    >
                      Tổng cộng:
                    </td>
                    <td className="px-[16px] py-[12px] font-bold text-blue-600 text-[18px]">
                      15.500.000 đ
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
          {/* Ghi chú */}
          <div className="p-[16px] bg-yellow-50 border-[2px] border-yellow-200 rounded-lg">
            <h6 className="font-bold !text-[16px] mb-[8px]">Ghi chú</h6>
            <p>Giao hàng nhanh chóng vào sáng mai</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OrderDetailModal);
