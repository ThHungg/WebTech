import { memo, useState } from "react";
import * as brandServices from "../../../../services/branServices";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";

const BrandAddModal = ({ onClose }: { onClose: () => void }) => {
  const queryClient = useQueryClient();
  const [formData, setFormData] = useState({
    name: "",
    brandImage: null as File | null,
  });

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

  const handleCreateBrand = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const formDataSend = new FormData();
      formDataSend.append("name", formData.name);
      if (formData.brandImage) {
        formDataSend.append("brandImage", formData.brandImage);
      }
      const res = await brandServices.createBrand(formDataSend);
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      } else {
        queryClient.invalidateQueries({ queryKey: ["brands"] });
        toast.success(res.message);
      }
      console.log(res);
      onClose();
      return res;
    } catch (e) {
      console.log(e);
    }
  };

  console.log("formData", formData);
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-lg  w-full">
        <div className="flex justify-between p-[24px] ">
          {" "}
          <h5 className="font-bold">Thêm danh mục mới</h5>
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
        <form onSubmit={handleCreateBrand}>
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
                <input
                  type="file"
                  name="brandImage"
                  onChange={handleOnChange}
                  placeholder="Nhập tên danh mục"
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
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

export default memo(BrandAddModal);
