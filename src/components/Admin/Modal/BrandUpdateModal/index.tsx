import getFullImg from "@/utils/getFullImg";
import { useQueryClient } from "@tanstack/react-query";
import { memo, useRef, useState } from "react";
import { toast } from "react-toastify";
import * as brandServices from "../../../../services/brandServices";

const BrandUpdateModal = ({
  brand,
  onClose,
}: {
  brand: any;
  onClose: () => void;
}) => {
  const queryClient = useQueryClient();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [formData, setFormData] = useState({
    name: brand.name,
    brandImage: null as File | null,
  });

  const handleEditImage = () => {
    fileInputRef.current?.click();
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, files } = e.target;
    if (name === "brandImage" && files) {
      setFormData({
        ...formData,
        brandImage: files[0],
      });
    } else {
      setFormData({
        ...formData,
        [name]: value,
      });
    }
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formDataSend = new FormData();
      formDataSend.append("name", formData.name);
      if (formData.brandImage) {
        formDataSend.append("brandImage", formData.brandImage);
      }
      console.log("formDataSend", formDataSend);
      const res = await brandServices.updateBrand(brand.id, formDataSend);
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      } else {
        queryClient.invalidateQueries({ queryKey: ["brands"] });
        toast.success(res.message);
      }
    } catch (e) {}
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-lg  w-full z-50">
        <div className="flex justify-between p-[24px] ">
          {" "}
          <h5 className="font-bold">Cập nhật thương hiệu</h5>
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
        <form onSubmit={handleUpdate}>
          <div className="">
            <div className="p-[16px]">
              <div className="flex flex-col mb-[8px]">
                <label
                  htmlFor=""
                  className="text-[14px] font-semibold mb-[8px]"
                >
                  Tên thương hiệu
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleOnChange}
                  placeholder="Nhập tên danh mục"
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              </div>
              <div className="flex flex-col mb-[8px]">
                <label
                  htmlFor=""
                  className="text-[14px] font-semibold mb-[8px]"
                >
                  Ảnh thương hiệu
                </label>
                <div className="relative w-1/2 h-1/2 mx-auto ">
                  <img
                    src={getFullImg(brand.logo)}
                    alt={brand.name}
                    className="object-cover rounded-md"
                  />
                  <button
                    onClick={handleEditImage}
                    className="absolute bottom-0 right-0 p-2 bg-blue-500 hover:bg-blue-600 rounded-lg transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      viewBox="0 0 24 24"
                    >
                      <g
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                      >
                        <path d="M7 7H6a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-1" />
                        <path d="M20.385 6.585a2.1 2.1 0 0 0-2.97-2.97L9 12v3h3zM16 5l3 3" />
                      </g>
                    </svg>
                  </button>
                </div>
                <input
                  type="file"
                  name="brandImage"
                  ref={fileInputRef}
                  onChange={handleOnChange}
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
                {/* <input
                  type="file"
                  name="brandImage"
                  //   onChange={handleOnChange}
                  placeholder="Nhập tên danh mục"
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                /> */}
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
        </form>
      </div>
    </div>
  );
};

export default memo(BrandUpdateModal);
