import data from "@emoji-mart/data";
import Picker from "@emoji-mart/react";
import { memo, useState } from "react";
import * as categoryServices from "../../../../../services/categoryServices";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const CategoryUpdateModal = ({
  onClose,
  category,
  refetch,
}: {
  onClose: () => void;
  category: any;
  refetch: () => void;
}) => {
  const [formData, setFormData] = useState(() => ({
    name: category?.name || "",
    parent_id: category?.parent_id || null,
    icon_emoji: category?.icon_emoji || "",
  }));

  console.log("category", formData);
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: name === "parent_id" ? (value ? parseInt(value) : null) : value,
    });
  };
  console.log(category.parent.name);
  const handleEmojiSelect = (emoji: any) => {
    setFormData({
      ...formData,
      icon_emoji: emoji.native,
    });
    setShowEmojiPicker(false);
  };

  const fetchCategoryParents = async () => {
    const res = await categoryServices.getAllParent();
    return res;
  };

  const { data: categoryParents = [] } = useQuery({
    queryKey: ["categoryParents"],
    queryFn: fetchCategoryParents,
  });

  const handleUpdateCategory = async () => {
    try {
      const res = await categoryServices.updateCategory(
        category.id,
        formData.name,
        formData.parent_id ? String(formData.parent_id) : null,
        formData.icon_emoji
      );
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      refetch();
      onClose();
    } catch (e: any) {
      toast.error(
        e.response.data.message || "Đã có lỗi xảy ra khi cập nhật danh mục"
      );
    }
  };
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between p-[24px] sticky top-0 bg-white border-b border-gray-200">
          <h5 className="font-bold">Chỉnh sửa danh mục</h5>
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
        <div className="p-[16px] overflow-y-auto flex-1">
          <div className="flex flex-col mb-[16px]">
            <label className="text-[14px] font-semibold mb-[8px]">
              Tên danh mục
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

          <div className="flex flex-col mb-[16px]">
            <label className="text-[14px] font-semibold mb-[8px]">
              Danh mục cha
            </label>
            <select
              name="parent_id"
              value={formData.parent_id || ""}
              onChange={handleOnChange}
              className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
            >
              <option value="">Chọn danh mục</option>
              {categoryParents?.data?.map((category: any) => (
                <option key={category.id} value={category.id}>
                  {category.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col mb-[16px] relative">
            <label className="text-[14px] font-semibold mb-[8px]">
              Icon Emoji
            </label>
            <div className="flex items-center gap-2 mb-[8px]">
              <div className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] flex-1 bg-gray-50">
                {formData.icon_emoji ? (
                  <span className="text-[24px]">{formData.icon_emoji}</span>
                ) : (
                  <span className="text-gray-400">Chọn emoji</span>
                )}
              </div>
              <button
                type="button"
                onClick={() => setShowEmojiPicker(!showEmojiPicker)}
                className="px-[16px] py-[8px] bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
              >
                Chọn
              </button>
            </div>
            {showEmojiPicker && (
              <div className="absolute top-[100%] left-0 z-[100] mt-2">
                <Picker
                  data={data}
                  onEmojiSelect={handleEmojiSelect}
                  theme="light"
                />
              </div>
            )}
          </div>
        </div>

        <div className="px-[16px] pb-[16px] flex justify-end border-t border-gray-200 pt-[16px]">
          <div className="flex gap-2">
            <button
              onClick={onClose}
              className="px-[24px] py-[10px] border-[2px] border-gray-200 rounded-lg font-medium hover:bg-gray-100 transition"
            >
              Huỷ
            </button>
            <button
              onClick={() => handleUpdateCategory()}
              className="px-[24px] py-[10px] flex items-center gap-2 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
            >
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
              </svg>
              Cập nhật
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CategoryUpdateModal);
