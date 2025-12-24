"use client";
import { memo, useState, useEffect } from "react";

interface Variant {
  // id: number;
  name: string;
  original_price: string;
  price: string;
  discount_amount: string;
  discount_percent: string;
  stock: string;
}

const ProductVariants = ({
  setVariantsData,
}: {
  setVariantsData: (data: any[]) => void;
}) => {
  const [variants, setVariants] = useState<Variant[]>([
    {
      name: "",
      original_price: "",
      price: "",
      discount_amount: "",
      discount_percent: "",
      stock: "",
    },
  ]);

  // Sync data to parent whenever variants change
  useEffect(() => {
    const formattedVariants = variants
      .filter((v) => v.original_price.trim() !== "" && v.stock.trim() !== "")
      .map((variant) => ({
        name: variant.name || "Default",
        original_price: parseInt(variant.original_price) || 0,
        price: parseInt(variant.price) || parseInt(variant.original_price) || 0,
        discount_amount: parseInt(variant.discount_amount) || 0,
        discount_percent: parseInt(variant.discount_percent) || 0,
        stock: parseInt(variant.stock) || 0,
      }));
    setVariantsData(formattedVariants);
  }, [variants, setVariantsData]);

  const handleAddVariant = () => {
    setVariants([
      ...variants,
      {
        name: "",
        original_price: "",
        price: "",
        discount_amount: "",
        discount_percent: "",
        stock: "",
      },
    ]);
  };

  const handleVariantChange = (
    index: number,
    field: keyof Variant,
    value: string
  ) => {
    setVariants(
      variants.map((variant, i) =>
        i === index ? { ...variant, [field]: value } : variant
      )
    );
  };

  const handleRemoveVariant = (index: number) => {
    if (variants.length > 1) {
      setVariants(variants.filter((_, i) => i !== index));
    }
  };

  const calculatePrice = (
    original_price: string,
    discount_type: string,
    discount_value: string
  ) => {
    if (!original_price || !discount_value) return original_price;

    const priceNum = parseFloat(original_price);
    const discountNum = parseFloat(discount_value);

    if (discount_type === "percent") {
      return (priceNum - (priceNum * discountNum) / 100).toFixed(0);
    } else if (discount_type === "fixed") {
      return (priceNum - discountNum).toFixed(0);
    }
    return original_price;
  };

  return (
    <div className="flex flex-col mb-[16px] p-4 rounded-2xl border border-gray-200 shadow-xs">
      <div className="flex justify-between items-center">
        <label className="text-[16px] font-semibold mb-[8px]">
          Biến thể sản phẩm
        </label>
        <button
          className="p-1 hover:bg-blue-100 rounded-lg"
          onClick={handleAddVariant}
          type="button"
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

      <div className="max-h-[60vh] overflow-y-auto pr-2">
        {variants.map((variant, index) => (
          <div
            key={index}
            className="mb-6 pb-6 border border-gray-200 rounded-2xl p-3"
          >
            {/* Tên biến thể */}
            <div className="flex justify-between items-center mb-3">
              <label className="text-[14px] font-semibold">
                Biến thể {index + 1}
              </label>
              {variants.length > 1 && (
                <button
                  type="button"
                  onClick={() => handleRemoveVariant(index)}
                  className="text-red-500 hover:bg-red-100 p-1 rounded-lg transition"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    viewBox="-2 -5 24 24"
                    className="text-red-500"
                  >
                    <path
                      fill="currentColor"
                      d="M7.828 0H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.828a2 2 0 0 1-1.414-.586L.707 7.707a1 1 0 0 1 0-1.414L6.414.586A2 2 0 0 1 7.828 0m0 12H18V2H7.828l-5 5zm6.586-5l1.414 1.414a1 1 0 0 1-1.414 1.414L13 8.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L11.586 7l-1.414-1.414a1 1 0 1 1 1.414-1.414L13 5.586l1.414-1.414a1 1 0 1 1 1.414 1.414z"
                    />
                  </svg>
                </button>
              )}
            </div>

            <div className="flex flex-col mb-[12px] w-full">
              <label className="text-[14px] font-semibold mb-[6px]">
                Tên biến thể
              </label>
              <input
                type="text"
                placeholder="Nhập tên biến thể (vd: Màu đen, 8GB RAM, ...)"
                value={variant.name}
                onChange={(e) =>
                  handleVariantChange(index, "name", e.target.value)
                }
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Giá gốc và Giảm giá */}
            <div className="flex gap-4">
              <div className="flex flex-col mb-[12px] w-full">
                <label className="text-[14px] font-semibold mb-[6px]">
                  Giá gốc
                </label>
                <input
                  type="number"
                  placeholder="Nhập giá gốc sản phẩm"
                  value={variant.original_price}
                  onChange={(e) =>
                    handleVariantChange(index, "original_price", e.target.value)
                  }
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              </div>

              <div className="flex gap-2 w-full">
                <div className="flex flex-col mb-[12px] w-1/2">
                  <label className="text-[14px] font-semibold mb-[6px]">
                    Loại giảm
                  </label>
                  <select
                    value={
                      variant.discount_percent
                        ? "percent"
                        : variant.discount_amount
                        ? "fixed"
                        : ""
                    }
                    onChange={(e) => {
                      if (e.target.value === "percent") {
                        handleVariantChange(index, "discount_amount", "");
                      } else {
                        handleVariantChange(index, "discount_percent", "");
                      }
                    }}
                    className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                  >
                    <option value="">Không giảm</option>
                    <option value="percent">Phần trăm (%)</option>
                    <option value="fixed">Mức giảm (VNĐ)</option>
                  </select>
                </div>

                <div className="flex flex-col mb-[12px] w-1/2">
                  <label className="text-[14px] font-semibold mb-[6px]">
                    Giá trị
                  </label>
                  <input
                    type="number"
                    placeholder="Nhập giá trị"
                    value={variant.discount_percent || variant.discount_amount}
                    onChange={(e) => {
                      if (variant.discount_percent) {
                        handleVariantChange(
                          index,
                          "discount_percent",
                          e.target.value
                        );
                      } else {
                        handleVariantChange(
                          index,
                          "discount_amount",
                          e.target.value
                        );
                      }
                    }}
                    className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>
              </div>
            </div>

            {/* Giá bán và Số lượng */}
            <div className="flex gap-4">
              <div className="flex flex-col mb-[12px] w-full">
                <label className="text-[14px] font-semibold mb-[6px]">
                  Giá bán
                </label>
                <input
                  readOnly
                  type="text"
                  value={calculatePrice(
                    variant.original_price,
                    variant.discount_percent ? "percent" : "fixed",
                    variant.discount_percent || variant.discount_amount
                  )}
                  className="border-[1px] bg-gray-50 border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              </div>

              <div className="flex flex-col mb-[12px] w-full">
                <label className="text-[14px] font-semibold mb-[6px]">
                  Số lượng tồn
                </label>
                <input
                  type="number"
                  placeholder="Nhập số lượng tồn kho"
                  value={variant.stock}
                  onChange={(e) =>
                    handleVariantChange(index, "stock", e.target.value)
                  }
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ProductVariants);
