import { memo, useState } from "react";
import * as categoryServices from "../../../../services/categoryServices";
import * as cateBrandLinkServices from "../../../../services/cateBrandLinkServices";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const ModalLinkBrandCategory = ({
  onClose,
  brandId,
  brandName,
}: {
  onClose: () => void;
  brandId: number;
  brandName: string;
}) => {
  const [selectedCategoryId, setSelectedCategoryId] = useState<number | null>(
    null
  );

  const queryClient = useQueryClient();

  const handleOnChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { value } = e.target;
    setSelectedCategoryId(parseInt(value));
  };
  const fetchAllChildren = async () => {
    const res = await categoryServices.getAllChildren();
    return res;
  };

  const { data: childrenCategories = [] } = useQuery({
    queryKey: ["childrenCategories"],
    queryFn: fetchAllChildren,
  });

  const handleLinkCategory = async (categoryId: number, brandId: number) => {
    try {
      const res = await cateBrandLinkServices.createCateBrandLink(
        categoryId,
        brandId
      );
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["categories-by-brand"] });
      onClose();
      toast.success(res.message);
    } catch (e: any) {
      toast.error(
        e.response.data.message || "Đã có lỗi xảy ra khi liên kết danh mục"
      );
    }
  };
  console.log("childrenCategories", childrenCategories);
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between p-[24px] sticky top-0 bg-white border-b border-gray-200">
          <h5 className="font-bold">Thêm liên kết danh mục</h5>
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
            <div className="flex flex-col mb-[16px]">
              <select
                value={selectedCategoryId || ""}
                onChange={handleOnChange}
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              >
                <option value="">Chọn danh mục liên kết</option>
                {childrenCategories?.data?.map((category: any) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label className="text-[14px] font-semibold mb-[8px]">
              Thương thiệu
            </label>
            <div className="border-[1px] bg-gray-50 border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full">
              {brandName}
            </div>
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
              onClick={() => handleLinkCategory(selectedCategoryId!, brandId)}
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
              Thêm mới
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ModalLinkBrandCategory);
