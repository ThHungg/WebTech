"use client";
import { memo, useState } from "react";
import SearchWithFilter from "../../Common/SearchWithFilter";
import formatVND from "@/utils/formatVND";
import Pagination from "../../Common/Pagination";
import ProductDetailModal from "../../Modal/ProductDetailModal";
import * as productServices from "../../../../services/productServices";
import ToggleSwitch from "../../Common/ToggleSwitch";
import { useQuery } from "@tanstack/react-query";
import getFullImg from "@/utils/getFullImg";
import { toast } from "react-toastify";

const ProductTable = () => {
  const [showProductDetailModal, setShowProductDetailModal] = useState(false);
  const [selectedProductId, setSelectedProductId] = useState<number | null>(
    null
  );
  const [productStates, setProductStates] = useState<{
    [key: number]: boolean;
  }>({});

  console.log("Selected Product ID:", selectedProductId);

  const fetchAllProducts = async () => {
    const res = await productServices.getAllProducts();
    return res;
  };

  const { data: products, refetch } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
    refetchOnWindowFocus: false,
  });

  const handleUpdateStatus = async (
    productId: number,
    currentStatus: boolean
  ) => {
    const newStatus = !currentStatus;
    setProductStates((prev) => ({ ...prev, [productId]: newStatus }));

    try {
      const res = await productServices.updateProductStatus(
        productId,
        newStatus
      );
      if (res.status === "Err") {
        toast.error(res.message);
        setProductStates((prev) => ({ ...prev, [productId]: currentStatus }));
        return;
      }
      toast.success(res.message);
      refetch();
    } catch (e: any) {
      setProductStates((prev) => ({ ...prev, [productId]: currentStatus }));
      toast.error(e.response?.data?.message);
    }
  };

  const handleDelete = async (id: number) => {
    try {
      const res = await productServices.deleteProduct(id);
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      refetch();
      console.log(res);
      return res;
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Xóa sản phẩm thất bại");
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-md border-[1px] border-gray-200">
      {/* <SearchWithFilter /> */}
      <div className="">
        <table className="w-full">
          <thead className="bg-gray-100">
            <tr className="uppercase">
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Sản phẩm
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Danh mục
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Thương hiệu
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Giá
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Tồn & Đã bán
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Trạng thái
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Trạng thái kho
              </th>
              <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                Thao tác
              </th>
            </tr>
          </thead>
          <tbody>
            {products?.data && products.data.length > 0 ? (
              products.data.map((product: any) => (
                <tr key={product.id} className="border-b border-gray-200">
                  <th className="py-[16px] text-left px-[24px] font-semibold flex items-center gap-2">
                    <img
                      src={getFullImg(product.images[0].image)}
                      alt={product.name}
                      className="w-[50px] h-[50px] rounded-lg object-cover"
                    />
                    {product.name}
                  </th>
                  <th className="py-[16px] text-left px-[24px] font-medium text-gray-600">
                    <span className="px-3 py-1 whitespace-nowrap bg-purple-100 text-purple-500 rounded-full">
                      {product.category.name}
                    </span>
                  </th>
                  <th className="py-[16px] text-left px-[24px] font-medium text-gray-600">
                    <span className="px-3 py-1 whitespace-nowrap bg-gray-100 text-gray-600 rounded-full">
                      {product.brand.name}
                    </span>
                  </th>
                  <th className="py-[16px] text-left px-[24px] font-medium">
                    <div className="flex flex-col">
                      <span className="text-blue-600 whitespace-nowrap font-semibold">
                        {formatVND(
                          parseInt(product.variants?.[0]?.price || "0")
                        )}
                      </span>
                      <span className="text-gray-500 whitespace-nowrap line-through text-sm">
                        {formatVND(
                          parseInt(product.variants?.[0]?.original_price || "0")
                        )}
                      </span>
                    </div>
                  </th>
                  <th className="px-[24px] py-[16px] text-left font-light">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-blue-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            className="text-blue-600"
                          >
                            <path
                              fill="currentColor"
                              d="M4 20q-.825 0-1.412-.587T2 18V6q0-.825.588-1.412T4 4h16q.825 0 1.413.588T22 6v12q0 .825-.587 1.413T20 20zm0-2h16V8H4zm2-2h3q0-.825-.587-1.412T7 14q-.825 0-1.412.588T5 16m5 0h4q0-1.25-.875-2.125T11 13t-2.125.875T8 16m6 0h3q0-.825-.587-1.412T15 14q-.825 0-1.412.588T13 16"
                            />
                          </svg>
                        </span>
                        <span className="text-sm whitespace-nowrap">
                          <span className="font-semibold text-gray-700">
                            {product.total_stock}
                          </span>
                          <span className="text-gray-500 ml-1">sản phẩm</span>
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center w-7 h-7 rounded-md bg-green-100">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            className="text-green-600"
                          >
                            <path
                              fill="currentColor"
                              d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2m-2 15l-5-5l1.41-1.41L10 14.17l7.59-7.59L19 8z"
                            />
                          </svg>
                        </span>
                        <span className="text-sm whitespace-nowrap">
                          <span className="font-semibold text-gray-700">
                            {product.total_sold}
                          </span>
                          <span className="text-gray-500 ml-1">đã bán</span>
                        </span>
                      </div>
                    </div>
                  </th>
                  <th className="px-[24px] py-[16px] text-left font-light">
                    <ToggleSwitch
                      isOn={productStates[product.id] ?? product.is_active}
                      onToggle={() =>
                        handleUpdateStatus(
                          product.id,
                          productStates[product.id] ?? product.is_active
                        )
                      }
                    />
                  </th>
                  <th className="px-[24px] py-[16px] text-left font-light">
                    <p className="px-3 py-1 rounded-full whitespace-nowrap bg-green-100 text-green-600 inline-flex gap-2 items-center font-semibold">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="22"
                        height="22"
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="4"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="m43.5 15.13l-1.733 8.534M4.5 32.87l11.768-11.768l10.63 10.63l15.016-15.016L43.5 15.13l-8.44 1.6"
                        />
                      </svg>
                      Còn hàng
                    </p>
                  </th>
                  <th className="px-[24px] py-[16px] text-left font-light">
                    <div className="flex">
                      <button
                        onClick={() => {
                          setShowProductDetailModal(true);
                          setSelectedProductId(product.id);
                        }}
                        className="p-2 hover:bg-green-100 rounded-lg group relative"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 32 32"
                          className="text-green-500"
                        >
                          <g
                            fill="none"
                            stroke="currentColor"
                            strokeLinejoin="round"
                            strokeWidth="2"
                          >
                            <path d="M29 16c0 3-5.82 9-13 9S3 19 3 16s5.82-9 13-9s13 6 13 9Z" />
                            <path d="M21 16a5 5 0 1 1-10 0a5 5 0 0 1 10 0Z" />
                          </g>
                        </svg>
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                          Chi tiết
                        </span>
                      </button>
                      <button className="p-2 hover:bg-blue-100 rounded-lg group relative">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="text-blue-500"
                        >
                          <path
                            fill="currentColor"
                            d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"
                          />
                          <path
                            fill="currentColor"
                            d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"
                          />
                        </svg>
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                          Chỉnh sửa
                        </span>
                      </button>
                      <button
                        onClick={() => handleDelete(product.id)}
                        className="p-2 hover:bg-red-100 rounded-lg group relative"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="text-red-500"
                        >
                          <path
                            fill="currentColor"
                            d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                          />
                        </svg>
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-800 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none z-10">
                          Xóa
                        </span>
                      </button>
                    </div>
                  </th>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={8} className="py-8 text-center text-gray-500">
                  <p className="font-medium">Không có sản phẩm nào</p>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* <Pagination /> */}
      {showProductDetailModal && (
        <ProductDetailModal
          selectedProductId={selectedProductId}
          onClose={() => setShowProductDetailModal(false)}
        />
      )}
    </div>
  );
};

export default memo(ProductTable);
