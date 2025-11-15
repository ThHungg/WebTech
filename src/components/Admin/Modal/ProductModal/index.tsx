import { memo } from "react";

const ProductModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-screen-md w-full">
        <div className="flex justify-between p-[24px] ">
          <h5 className="font-bold">Thêm sản phẩm mới</h5>
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
        <div className="p-[24px] w-full">
          <div className="flex flex-col mb-[16px] w-full">
            <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
              Tên sản phẩm
            </label>
            <input
              type="text"
              placeholder="Nhập tên sản phẩm"
              className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500"
            />
          </div>
          {/* Danh mục và thương hiệu */}
          <div className="flex gap-2 w-full">
            <div className="flex flex-col mb-[16px] w-full">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Danh mục
              </label>
              <input
                type="text"
                placeholder="Nhập tên sản phẩm"
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px]"
              />
            </div>
            <div className="flex flex-col mb-[16px] w-full">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Thuơng hiệu
              </label>
              <input
                type="text"
                placeholder="Nhập tên sản phẩm"
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductModal);
