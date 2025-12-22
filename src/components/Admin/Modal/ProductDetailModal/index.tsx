"use client";
import formatVND from "@/utils/formatVND";
import { memo, useState } from "react";
import ToggleSwitch from "../../Common/ToggleSwitch";
import * as productService from "../../../../services/productServices";
import { useQuery } from "@tanstack/react-query";
import getFullImg from "@/utils/getFullImg";

const ProductDetailModal = ({
  onClose,
  selectedProductId,
}: {
  onClose: () => void;
  selectedProductId: number | null;
}) => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  const fetchDetailProduct = async (id: number) => {
    const res = await productService.getDetailProduct(id);
    return res;
  };

  const { data: productDetail, isLoading } = useQuery({
    queryKey: ["productDetail", selectedProductId],
    queryFn: () => fetchDetailProduct(selectedProductId!),
    enabled: selectedProductId !== null,
  });

  const product = productDetail?.data;
  const firstImage = product?.images?.[0];

  // Map attributeValues to create lookup
  const attributeValueMap: Record<number, string> = {};
  if (product?.attributeValues) {
    product.attributeValues.forEach((av: any) => {
      attributeValueMap[av.attribute_id] = av.value;
    });
  }

  // Lấy các biến thể từ vị trí 1 trở đi (bỏ qua vị trí 0)
  const otherVariants = product?.variants?.slice(1) || [];

  if (isLoading) {
    return (
      <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
        <div className="bg-white rounded-xl p-8">
          <p className="text-gray-600">Đang tải dữ liệu...</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between p-[24px] sticky top-0 bg-white border-b">
          <h5 className="font-bold text-lg">
            Chi tiết sản phẩm: {product.name}
          </h5>
          <div className="flex items-center gap-2">
            <ToggleSwitch isOn={isOn} onToggle={toggleSwitch} />
            <button
              onClick={onClose}
              className="hover:bg-gray-100 p-1 rounded-lg transition"
            >
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
        <div className="border-b border-gray-200"></div>

        {/* Content */}
        <div className="p-[18px]">
          {/* Thông tin cơ bản */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {/* Thông tin cơ bản */}
            <div className="p-[18px] bg-blue-50 rounded-xl border border-blue-200">
              <h5 className="font-bold mb-[12px]">Thông tin</h5>
              <div className="flex items-center gap-3 mb-[12px]">
                <img
                  src={getFullImg(firstImage?.image)}
                  alt={product.name}
                  className="w-[78px] h-[78px] object-cover rounded-lg"
                  onError={(e) => {
                    e.currentTarget.src =
                      "https://via.placeholder.com/78?text=No+Image";
                  }}
                />
                <div>
                  <p className="font-bold text-[14px] line-clamp-2">
                    {product.name}
                  </p>
                  <p className="text-[13px] text-gray-600">
                    {/* Slug: {product.slug} */}
                  </p>
                </div>
              </div>
            </div>

            {/* Danh mục và tồn kho */}
            <div className="p-[18px] bg-green-50 rounded-xl border border-green-200">
              <h5 className="font-bold mb-[12px]">Danh mục & Tồn kho</h5>
              <ul className="space-y-2 text-[14px]">
                <li className="text-gray-600">
                  Danh mục:{" "}
                  <span className="text-black font-semibold">
                    {product.category.name}
                  </span>
                </li>
                <li className="text-gray-600">
                  Thương hiệu:{" "}
                  <span className="text-black font-semibold">
                    {product.brand.name}
                  </span>
                </li>
                <li className="text-gray-600">
                  Tồn kho:{" "}
                  <span className="text-black font-semibold">
                    {product.total_stock}
                  </span>
                </li>
                <li className="text-gray-600">
                  Đã bán:{" "}
                  <span className="text-red-500 font-semibold">
                    {product.total_sold}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Mô tả */}
          <div className="p-[18px] bg-purple-50 rounded-xl border border-purple-200 mb-4">
            <h5 className="font-bold mb-[12px]">Mô tả</h5>
            <p className="text-[14px] text-gray-600 whitespace-pre-wrap max-h-[150px] overflow-y-auto">
              {product.description || "Không có mô tả"}
            </p>
          </div>

          {/* Các biến thể */}
          {otherVariants && otherVariants.length > 0 && (
            <div className="p-[18px] bg-cyan-50 rounded-xl border border-cyan-200 mb-4">
              <h5 className="font-bold mb-[12px]">
                Biến thể ({otherVariants.length})
              </h5>
              <div className="space-y-3 max-h-[300px] overflow-y-auto">
                {otherVariants.map((variant: any) => (
                  <div
                    key={variant.id}
                    className="bg-white border border-cyan-200 rounded-lg p-[12px]"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <p className="font-semibold text-[13px] text-gray-900">
                          {variant.name}
                        </p>
                      </div>
                      <span className="text-[12px] bg-cyan-100 text-cyan-700 px-2 py-1 rounded-full font-semibold">
                        Tồn: {variant.stock}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-[12px]">
                      <div>
                        <span className="text-gray-600">Giá gốc:</span>
                        <p className="font-semibold text-gray-900">
                          {formatVND(parseInt(variant.original_price || "0"))}
                        </p>
                      </div>
                      <div>
                        <span className="text-gray-600">Giá bán:</span>
                        <p className="font-semibold text-blue-600">
                          {formatVND(parseInt(variant.price || "0"))}
                        </p>
                      </div>
                      {variant.discount_percent > 0 && (
                        <div>
                          <span className="text-gray-600">Chiết khấu:</span>
                          <p className="font-semibold text-red-600">
                            -{variant.discount_percent}%
                          </p>
                        </div>
                      )}
                      {variant.discount_amount > 0 && (
                        <div>
                          <span className="text-gray-600">Giảm:</span>
                          <p className="font-semibold text-red-600">
                            -{formatVND(parseInt(variant.discount_amount))}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Thông số kỹ thuật */}
          {product.attributes && product.attributes.length > 0 && (
            <div className="p-[18px] bg-orange-50 rounded-xl border border-orange-200 mb-4">
              <h5 className="font-bold mb-[12px]">Thông số kỹ thuật</h5>
              <div className="grid grid-cols-2 gap-2 max-h-[300px] overflow-y-auto">
                {product.attributes.map((attr: any) => (
                  <div
                    key={attr.id}
                    className="bg-white border border-orange-200 rounded-lg p-[12px]"
                  >
                    <p className="text-[12px]">
                      <span className="font-semibold text-gray-700">
                        {attr.name}:
                      </span>
                      <br />
                      <span className="text-gray-600">
                        {attributeValueMap[attr.id] || "N/A"}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Hình ảnh */}
          {product.images && product.images.length > 0 && (
            <div className="p-[18px] bg-gray-50 rounded-xl border border-gray-200">
              <h5 className="font-bold mb-[12px]">
                Hình ảnh sản phẩm ({product.images.length})
              </h5>
              <div className="grid grid-cols-4 gap-3 max-h-[250px] overflow-y-auto">
                {product.images.map((img: any, idx: number) => (
                  <img
                    key={idx}
                    src={getFullImg(img.image)}
                    alt={`Product image ${idx + 1}`}
                    className="w-full h-[150px] object-cover rounded-lg border border-gray-300"
                    onError={(e) => {
                      e.currentTarget.src =
                        "https://via.placeholder.com/150?text=Error";
                    }}
                  />
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDetailModal);
