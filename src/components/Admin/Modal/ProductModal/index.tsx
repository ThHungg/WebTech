import { memo, useState } from "react";

const ProductModal = ({ onClose }: { onClose: () => void }) => {
  const [productInfo, setProductInfo] = useState([
    {
      value: "",
      info: "",
    },
    {
      value: "",
      info: "",
    },
    {
      value: "",
      info: "",
    },
  ]);

  const handleAddInfo = () => {
    setProductInfo([...productInfo, { value: "", info: "" }]);
  };

  const handleOnChange = (
    index: number,
    field: "value" | "info",
    value: string
  ) => {
    const updatedInfo = [...productInfo];
    updatedInfo[index][field] = value;
    setProductInfo(updatedInfo);
  };

  const handleRemoveInfo = (index: number) => {
    const updatedInfo = productInfo.filter((_, i) => i !== index);
    setProductInfo(updatedInfo);
  };
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-screen-md  ">
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
        <div className="grid grid-cols-2">
          <div className="p-[18px] col-span-1">
            <div className="flex flex-col mb-[8px]">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Tên sản phẩm
              </label>
              <input
                type="text"
                placeholder="Nhập tên sản phẩm"
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            {/* Danh mục và thương hiệu */}
            <div className="flex gap-4 w-full">
              <div className="flex flex-col mb-[8px] w-1/2">
                <label
                  htmlFor=""
                  className="text-[14px] font-semibold mb-[8px]"
                >
                  Danh mục
                </label>
                <select
                  name=""
                  id=""
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] w-full"
                >
                  <option value="">Chọn danh mục</option>
                  <option value="">Laptop</option>
                  <option value="">Dien thoai</option>
                </select>
              </div>
              <div className="flex flex-col mb-[8px] w-1/2">
                <label
                  htmlFor=""
                  className="text-[14px] font-semibold mb-[8px]"
                >
                  Thương hiệu
                </label>
                <select
                  name=""
                  id=""
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] w-full"
                >
                  <option value="">Chọn thương hiệu</option>
                  <option value="">Asus</option>
                  <option value="">Lenovo</option>
                </select>
              </div>
            </div>
            <div className="flex flex-col mb-[8px]">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Model
              </label>
              <select
                name=""
                id=""
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] w-full"
              >
                <option value="">Chọn model</option>
                <option value="">ROG Strix</option>
                <option value="">Lenovo Series thoai</option>
              </select>
            </div>
            {/* Giá và tồn kho */}
            <div className="flex gap-4">
              <div className="flex flex-col mb-[8px] w-1/2">
                <label
                  htmlFor=""
                  className="text-[14px] font-semibold mb-[8px]"
                >
                  Giá
                </label>
                <input
                  type="text"
                  placeholder="Nhập giá sản phẩm"
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              </div>
              <div className="flex flex-col mb-[16px] w-1/2">
                <label
                  htmlFor=""
                  className="text-[14px] font-semibold mb-[8px]"
                >
                  Tồn kho
                </label>
                <input
                  type="text"
                  placeholder="Nhập số lượng tồn kho"
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              </div>
            </div>
          </div>
          {/* Thông tin sản phẩm */}
          <div className="p-[18px] col-span-1">
            <div className="flex flex-col mb-[16px]  ">
              <div className="flex justify-between items-center">
                {" "}
                <label
                  htmlFor=""
                  className="text-[14px] font-semibold mb-[8px]"
                >
                  Thông tin sản phẩm
                </label>
                <button
                  className="p-1 hover:bg-blue-100 rounded-lg"
                  onClick={handleAddInfo}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 48 48"
                    className="text-blue-500"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinejoin="round"
                      strokeWidth="4"
                    >
                      <rect width="36" height="36" x="6" y="6" rx="3" />
                      <path strokeLinecap="round" d="M24 16v16m-8-8h16" />
                    </g>
                  </svg>
                </button>
              </div>
              <div className="overflow-y-auto max-h-[300px]">
                {productInfo.map((info, index) => (
                  <div key={index} className="flex gap-2 mt-[8px]">
                    <input
                      type="text"
                      placeholder="Nhập giá trị"
                      value={info.value}
                      onChange={(e) =>
                        handleOnChange(index, "value", e.target.value)
                      }
                      className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-1/2"
                    />
                    <input
                      type="text"
                      placeholder="Nhập thông tin"
                      value={info.info}
                      onChange={(e) =>
                        handleOnChange(index, "info", e.target.value)
                      }
                      className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-1/2"
                    />
                    <button
                      onClick={(e) => handleRemoveInfo(index)}
                      className="w-10 h-10 flex items-center justify-center hover:bg-red-100 rounded-lg"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="-2 -5 24 24"
                        className="text-red-500"
                      >
                        <path
                          fill="currentColor"
                          d="M7.828 0H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.828a2 2 0 0 1-1.414-.586L.707 7.707a1 1 0 0 1 0-1.414L6.414.586A2 2 0 0 1 7.828 0m0 12H18V2H7.828l-5 5zm6.586-5l1.414 1.414a1 1 0 0 1-1.414 1.414L13 8.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L11.586 7l-1.414-1.414a1 1 0 1 1 1.414-1.414L13 5.586l1.414-1.414a1 1 0 1 1 1.414 1.414z"
                        />
                      </svg>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="px-[12px] pb-[12px] flex justify-end">
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-[24px] py-[10px] border-[2px] border-gray-200 rounded-lg font-medium hover:scale-105 transition transition-all"
            >
              Huỷ
            </button>
            <button className="px-[24px] py-[10px] flex items-center gap-2 bg-blue-500 text-white border-[2px] border-gray-200 rounded-lg font-medium hover:scale-105 transition transition-all">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
                />
              </svg>{" "}
              Thêm mới
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductModal);
