import { memo, useState, useEffect } from "react";
import * as cateAttributeLinkServices from "../../../../../services/cateAttributeLinkServices";
import * as attributeServices from "../../../../../services/attributeServices";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import ListAtributesDefault from "./ListAtributesDefault";

const ProductAttributes = ({
  setAttributesData,
  categoryId,
}: {
  setAttributesData: any;
  categoryId: number | null;
}) => {
  const [listDefault, setListDefault] = useState(false);
  const [productInfo, setProductInfo] = useState([
    { value: "", info: "", isFromApi: false, attribute_id: null },
    { value: "", info: "", isFromApi: false, attribute_id: null },
    { value: "", info: "", isFromApi: false, attribute_id: null },
    { value: "", info: "", isFromApi: false, attribute_id: null },
  ]);

  const fetchLinkedAttributes = async (categoryId: number) => {
    const res = await cateAttributeLinkServices.getAttributesByCategoryId(
      categoryId
    );
    return res;
  };
  const { data: linkedAttributes } = useQuery({
    queryKey: ["linked-attributes", categoryId],
    queryFn: () => fetchLinkedAttributes(categoryId!),
    enabled: !!categoryId,
  });

  const attributesList = linkedAttributes?.data || [];

  useEffect(() => {
    if (attributesList.length > 0) {
      const newProductInfo = attributesList.map((attr: any) => ({
        value: attr.attribute_name,
        info: "",
        isFromApi: true,
        attribute_id: attr.attribute_id, // ← Lưu ID từ API
      }));
      setProductInfo(newProductInfo);
    }
  }, [attributesList]);

  useEffect(() => {
    const syncDataToParent = () => {
      const formData = productInfo
        .filter((info) => info.value.trim() !== "" && info.info.trim() !== "")
        .map((info) => {
          // Nếu có attribute_id (từ API) → gửi ID
          if (info.attribute_id) {
            return {
              attribute_id: info.attribute_id,
              value: info.info,
            };
          }

          // Nếu không có ID (nhập mới) → gửi name
          if (!info.isFromApi) {
            return {
              name: info.value,
              value: info.info,
            };
          }

          return null;
        })
        .filter((item) => item !== null);

      setAttributesData(formData);
    };
    syncDataToParent();
  }, [productInfo, setAttributesData]);

  const [inputIndexes, setInputIndexes] = useState<Set<number>>(
    new Set<number>()
  );
  const handleAddInfo = () => {
    setProductInfo([
      ...productInfo,
      { value: "", info: "", isFromApi: false, attribute_id: null },
    ]);
  };

  const handleOnChange = (
    index: number,
    field: "value" | "info",
    value: string
  ) => {
    const updated = [...productInfo];
    updated[index][field] = value;
    setProductInfo(updated);
  };

  const handleSelectChange = (index: number, value: string) => {
    const updated = [...productInfo];

    if (value === "new") {
      setInputIndexes((prev) => new Set([...prev, index]));
      updated[index].value = "";
      updated[index].attribute_id = null;
      updated[index].isFromApi = false;
    } else {
      setInputIndexes((prev) => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });

      // Tìm attribute_id từ attributesList
      const selectedAttr = attributesList.find(
        (attr: any) => attr.attribute_name === value
      );

      updated[index].value = value;
      updated[index].attribute_id = selectedAttr
        ? selectedAttr.attribute_id
        : null;
      updated[index].isFromApi = true;
    }

    setProductInfo(updated);
  };

  const handleRemoveInfo = (index: number) => {
    setProductInfo(productInfo.filter((_, i) => i !== index));
    setInputIndexes((prev) => {
      const updated = new Set(prev);
      updated.delete(index);
      return updated;
    });
  };

  const handleSetDefault = async () => {
    if (!categoryId) {
      toast.error("Vui lòng chọn danh mục trước!");
      return;
    }

    const newAttributes = productInfo.filter(
      (info) => !info.isFromApi && info.value.trim() !== ""
    );
    if (newAttributes.length === 0) {
      toast.info("Không có thông số mới nào để đặt mặc định");
      return;
    }

    try {
      const res = await attributeServices.createAttributes(
        newAttributes.map((info) => ({ name: info.value }))
      );

      if (res.status === "Ok") {
        const attributeIds = res.data.map((attr: any) => attr.id);
        const link = await cateAttributeLinkServices.cateAttributeLinkServices(
          categoryId,
          attributeIds
        );

        if (link.status === "Ok") {
          toast.success("Đặt thông số kỹ thuật mặc định thành công!");

          // Cập nhật lại trạng thái local để các hàng này không bị tạo mới lần nữa
          const updatedInfo = productInfo.map((info) => {
            if (newAttributes.some((n) => n.value === info.value)) {
              return { ...info, isFromApi: true };
            }
            return info;
          });
          setProductInfo(updatedInfo);
        }
      }
    } catch (error) {
      toast.error("Lỗi khi thiết lập mặc định");
    }
  };

  return (
    <div className="flex flex-col mb-[16px] bg-gray-50 p-4 rounded-2xl border border-gray-200 shadow-xs">
      <div className="flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <label className="text-[16px] font-semibold mb-[8px]">
            Thông số kỹ thuật
          </label>
          <button
            onClick={() => handleSetDefault()}
            className="text-[12px] px-[12px] py-[8px] flex items-center gap-2 bg-blue-500 text-white border-[2px] border-gray-200 rounded-lg font-medium hover:scale-105 transition transition-all"
          >
            Đặt làm mặc định
          </button>
          <button
            onClick={() => setListDefault(true)}
            className="text-[12px] px-[12px] py-[8px] flex items-center gap-2 bg-blue-500 text-white border-[2px] border-gray-200 rounded-lg font-medium hover:scale-105 transition transition-all"
          >
            Danh sách mặc định
          </button>
        </div>
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
      <div className="max-h-[30vh] h-full overflow-y-auto pr-2">
        {productInfo.map((info, index) => (
          <div key={index} className="flex gap-2 mt-[8px]">
            <div className="w-full flex gap-2">
              {/* Nếu index này trong Set → hiển thị input, không thì hiển thị select */}
              {inputIndexes.has(index) ? (
                <input
                  type="text"
                  placeholder="Nhập tên thông số mới"
                  value={info.value}
                  onChange={(e) =>
                    handleOnChange(index, "value", e.target.value)
                  }
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              ) : (
                <select
                  value={info.value}
                  onChange={(e) => handleSelectChange(index, e.target.value)}
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                >
                  <option value="">Chọn thông số</option>
                  {attributesList.map((attr: any) => (
                    <option key={attr.attribute_id} value={attr.attribute_name}>
                      {attr.attribute_name}
                    </option>
                  ))}
                  <option value="new">+ Thông số mới</option>
                </select>
              )}

              <input
                type="text"
                placeholder="Nhập giá trị"
                value={info.info}
                onChange={(e) => handleOnChange(index, "info", e.target.value)}
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
              <button
                onClick={() => handleRemoveInfo(index)}
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
          </div>
        ))}
      </div>
      {listDefault && <ListAtributesDefault />}
    </div>
  );
};

export default memo(ProductAttributes);
