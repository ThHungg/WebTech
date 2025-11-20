"use client";
import formatVND from "@/utils/formatVND";
import { memo, useState } from "react";
import ToggleSwitch from "../../Common/ToggleSwitch";

const ProductDetailModal = ({ onClose }: { onClose: () => void }) => {
  const [statusProduct, setStatusProduct] = useState("");
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-screen-md  ">
        <div className="flex justify-between p-[24px] ">
          <h5 className="font-bold">
            {" "}
            Chi tiết sản phẩm: Laptop Gaming MSI GF63
          </h5>
          <div className="flex items-center gap-2">
            <ToggleSwitch isOn={isOn} onToggle={toggleSwitch} />
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
        </div>
        <div className=" border-b border-gray-200"></div>
        {/* Thông tin cơ bản */}
        <div className="px-[16px] pt-[16px] grid grid-cols-2 gap-3">
          <div className="p-[18px] bg-blue-50 rounded-xl border-blue-200 border">
            <h5 className="font-bold mb-[12px]">Thông tin cơ bản</h5>
            <div className="flex items-center gap-3 mb-[8px]">
              <img
                src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
                alt=""
                className="w-[64px] h-[64px] object-cover rounded-lg"
              />
              <p className="font-bold">
                Laptop Gaming MSI GF63
                <br />
                <span className="text-[14px] font-semibold text-gray-600">
                  {" "}
                  Giá: {formatVND(15000000)}
                </span>
              </p>
            </div>
            <ul>
              <li className="text-[14px] text-gray-600">
                Danh mục:{" "}
                <span className="text-black font-semibold">Laptop</span>
              </li>
              <li className="text-[14px] text-gray-600">
                Thương hiệu:{" "}
                <span className="text-black font-semibold">MSI</span>
              </li>
              <li className="text-[14px] text-gray-600">
                Model: <span className="text-black font-semibold">GF63</span>
              </li>
            </ul>
          </div>
          {/* Giá và tồn kho */}
          <div className="p-[18px] bg-green-50 rounded-xl border-green-200 border">
            <h5 className="font-bold mb-[12px]">Giá và tồn kho</h5>
            <ul>
              <li className="text-[14px] text-gray-600">
                Giá bán:{" "}
                <span className="text-blue-500 font-bold text-[18px]">
                  {formatVND(15000000)}
                </span>
              </li>
              <li className="text-[14px] text-gray-600">
                Thương hiệu:{" "}
                <span className="text-black font-semibold">MSI</span>
              </li>
              <li className="text-[14px] text-gray-600">
                Model: <span className="text-black font-semibold">GF63</span>
              </li>
              <li className="border-t border-green-200 my-3"></li>
              <li className="text-[14px] text-gray-600">
                Đã bán: <span className="text-red-500 font-semibold">123</span>
              </li>
              <li className="text-[14px] text-gray-600">
                Tồn kho: <span className="text-black font-semibold">50</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="p-[18px]">
          {/* Mô tả */}
          <div className="p-[18px] bg-purple-50 rounded-xl border border-purple-200 mb-[12px]">
            <h5 className="font-bold mb-[12px]">Mô tả</h5>
            <p className="text-[14px] text-gray-600">
              iPhone 15 Pro Max với chip A17 Pro mạnh mẽ
            </p>
          </div>
          {/* Thông số kỹ thuật */}
          <div className="p-[18px] bg-orange-50 rounded-xl border border-purple-200 overflow-y-auto max-h-[300px]">
            <h5 className="font-bold mb-[12px]">Thông số kỹ thuật</h5>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Màn hình:{" "}
                  <span className="font-semibold">
                    6.7 inch Super Retina XDR
                  </span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Chip: <span className="font-semibold">A17 Pro</span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Camera:{" "}
                  <span className="font-semibold">
                    48MP Main + 12MP Ultra Wide
                  </span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Camera:{" "}
                  <span className="font-semibold">
                    48MP Main + 12MP Ultra Wide
                  </span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Camera:{" "}
                  <span className="font-semibold">
                    48MP Main + 12MP Ultra Wide
                  </span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Camera:{" "}
                  <span className="font-semibold">
                    48MP Main + 12MP Ultra Wide
                  </span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Camera:{" "}
                  <span className="font-semibold">
                    48MP Main + 12MP Ultra Wide
                  </span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Camera:{" "}
                  <span className="font-semibold">
                    48MP Main + 12MP Ultra Wide
                  </span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Camera:{" "}
                  <span className="font-semibold">
                    48MP Main + 12MP Ultra Wide
                  </span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Camera:{" "}
                  <span className="font-semibold">
                    48MP Main + 12MP Ultra Wide
                  </span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Camera:{" "}
                  <span className="font-semibold">
                    48MP Main + 12MP Ultra Wide
                  </span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Camera:{" "}
                  <span className="font-semibold">
                    48MP Main + 12MP Ultra Wide
                  </span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Camera:{" "}
                  <span className="font-semibold">
                    48MP Main + 12MP Ultra Wide
                  </span>
                </p>
              </div>
              <div className="bg-white border border-orange-200 rounded-lg p-[12px]">
                <p className="flex justify-between text-[12px]">
                  Camera:{" "}
                  <span className="font-semibold">
                    48MP Main + 12MP Ultra Wide
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDetailModal);
