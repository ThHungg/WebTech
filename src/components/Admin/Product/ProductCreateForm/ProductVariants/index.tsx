"use client";
import { memo, useState } from "react";

interface Variant {
  id: number;
  name: string;
  price: string;
  discountType: string;
  discountValue: string;
  salePrice: string;
  quantity: string;
}

const ProductVariants = () => {
  const [variants, setVariants] = useState<Variant[]>([
    {
      id: 1,
      name: "",
      price: "",
      discountType: "",
      discountValue: "",
      salePrice: "",
      quantity: "",
    },
  ]);

  const [nextId, setNextId] = useState(2);

  const handleAddVariant = () => {
    setVariants([
      ...variants,
      {
        id: nextId,
        name: "",
        price: "",
        discountType: "",
        discountValue: "",
        salePrice: "",
        quantity: "",
      },
    ]);
    setNextId(nextId + 1);
  };

  const handleVariantChange = (
    id: number,
    field: keyof Variant,
    value: string
  ) => {
    setVariants(
      variants.map((variant) =>
        variant.id === id ? { ...variant, [field]: value } : variant
      )
    );
  };

  const handleRemoveVariant = (id: number) => {
    if (variants.length > 1) {
      setVariants(variants.filter((variant) => variant.id !== id));
    }
  };

  const calculateSalePrice = (
    price: string,
    discountType: string,
    discountValue: string
  ) => {
    if (!price || !discountValue) return "";

    const priceNum = parseFloat(price);
    const discountNum = parseFloat(discountValue);

    if (discountType === "percent") {
      return (priceNum - (priceNum * discountNum) / 100).toFixed(0);
    } else if (discountType === "fixed") {
      return (priceNum - discountNum).toFixed(0);
    }
    return "";
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
            key={variant.id}
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
                  onClick={() => handleRemoveVariant(variant.id)}
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
                  handleVariantChange(variant.id, "name", e.target.value)
                }
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Giá và Giảm giá */}
            <div className="flex gap-4">
              <div className="flex flex-col mb-[12px] w-full">
                <label className="text-[14px] font-semibold mb-[6px]">
                  Giá
                </label>
                <input
                  type="number"
                  placeholder="Nhập giá sản phẩm"
                  value={variant.price}
                  onChange={(e) =>
                    handleVariantChange(variant.id, "price", e.target.value)
                  }
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              </div>

              <div className="flex gap-2 w-full">
                <div className="flex flex-col mb-[12px] w-3/5">
                  <label className="text-[14px] font-semibold mb-[6px]">
                    Giảm giá
                  </label>
                  <select
                    value={variant.discountType}
                    onChange={(e) =>
                      handleVariantChange(
                        variant.id,
                        "discountType",
                        e.target.value
                      )
                    }
                    className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                  >
                    <option value="">Chọn loại</option>
                    <option value="percent">Phần trăm (%)</option>
                    <option value="fixed">Mức giảm</option>
                  </select>
                </div>

                <div className="flex flex-col mb-[12px] w-2/5">
                  <label className="text-[14px] font-semibold mb-[6px]">
                    Giá trị
                  </label>
                  <input
                    type="number"
                    placeholder="Nhập giá trị giảm"
                    value={variant.discountValue}
                    onChange={(e) =>
                      handleVariantChange(
                        variant.id,
                        "discountValue",
                        e.target.value
                      )
                    }
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
                  value={calculateSalePrice(
                    variant.price,
                    variant.discountType,
                    variant.discountValue
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
                  value={variant.quantity}
                  onChange={(e) =>
                    handleVariantChange(variant.id, "quantity", e.target.value)
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
