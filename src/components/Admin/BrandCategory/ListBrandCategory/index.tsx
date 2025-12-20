"use client";
import { memo, useState } from "react";
import * as cateBrandLinkServices from "../../../../services/cateBrandLinkServices";
import * as brandServices from "../../../../services/brandServices";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import ParentCategoryCard from "./ParentCategoryCard";
import BrandUpdateModal from "../../Modal/BrandUpdateModal";
import ModalLinkBrandCategory from "../ModalLinkBrandCategory";
import getFullImg from "@/utils/getFullImg";
import { toast } from "react-toastify";

const ListBrandCategory = () => {
  const [isCollapsed, setIsCollapsed] = useState<Record<number, boolean>>({});
  const [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false);
  const [isOpenLinkModal, setIsOpenLinkModal] = useState(false);
  const [selectedUpdateBrand, setSelectedUpdateBrand] = useState<any>(null);
  const [selectedBrand, setSelectedBrand] = useState<{
    id: number;
    name: string;
  } | null>(null);

  const queryClient = useQueryClient();

  const fetchAllBrand = async () => {
    const res = await brandServices.getAllBrands();
    return res;
  };

  const { data: brands = [] } = useQuery({
    queryKey: ["brands"],
    queryFn: fetchAllBrand,
  });

  // const fetchAllCateBrandLink = async () => {
  //   const res = await cateBrandLinkServices.getAllLinks();
  //   return res;
  // };

  // const { data: allCateBrand } = useQuery({
  //   queryKey: ["all-cate-brand-link"],
  //   queryFn: fetchAllCateBrandLink,
  // });

  const toggleCollapse = (id: number) => {
    setIsCollapsed((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const handleDeleteBrand = async (id: number) => {
    try {
      const res = await brandServices.deleteBrand(id);
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      }
      queryClient.invalidateQueries({ queryKey: ["categories-by-brand"] });
      toast.success(res.message);
    } catch (e: any) {
      toast.error(e.response.data.message);
    }
  };

  return (
    <>
      <div className="p-[24px] bg-white rounded-xl shadow-md border-[1px] border-gray-200">
        {brands?.data?.length > 0 ? (
          brands.data.map((brand: any, index: number) => (
            <div
              className="border border-gray-200 rounded-lg mb-[8px]"
              key={index}
            >
              <div className="p-[16px] bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => toggleCollapse(index)}
                      className="p-1 rounded-md hover:bg-blue-200"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        className="text-blue-700"
                      >
                        <path
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="m7 10l5 5m0 0l5-5"
                        />
                      </svg>
                    </button>
                    <div className="flex gap-3 items-center">
                      <img
                        src={getFullImg(brand.logo)}
                        alt=""
                        className="aspect-square max-w-[48px] object-contain rounded-lg"
                      />
                      <div>
                        <h5 className="font-bold">{brand.name}</h5>
                        <p className="text-[12px] text-gray-500">
                          <span>3 thương hiệu</span> •{" "}
                          <span>9 mẫu sản phẩm</span>
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-3 items-center">
                    <button
                      onClick={() => {
                        setSelectedBrand({ id: brand.id, name: brand.name });
                        setIsOpenLinkModal(true);
                      }}
                      className="px-[12px] py-[8px] bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg"
                    >
                      + Thêm danh mục
                    </button>
                    <div className="flex gap-2">
                      {/* Update */}
                      <button
                        onClick={() => {
                          setIsOpenUpdateModal(true);
                          setSelectedUpdateBrand(brand);
                        }}
                        className="p-1 hover:bg-blue-200 rounded-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="text-blue-600"
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
                      </button>
                      {/* Delete */}
                      <button
                        onClick={() => handleDeleteBrand(brand.id)}
                        className="p-1 hover:bg-red-100 rounded-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="text-red-500"
                        >
                          <path
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            d="M4.687 6.213L6.8 18.976a2.5 2.5 0 0 0 2.466 2.092h3.348m6.698-14.855L17.2 18.976a2.5 2.5 0 0 1-2.466 2.092h-3.348m-1.364-9.952v5.049m3.956-5.049v5.049M2.75 6.213h18.5m-6.473 0v-1.78a1.5 1.5 0 0 0-1.5-1.5h-2.554a1.5 1.5 0 0 0-1.5 1.5v1.78z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              {isCollapsed[index] && <ParentCategoryCard brandId={brand.id} />}
              {isOpenLinkModal && selectedBrand?.id === brand.id && (
                <ModalLinkBrandCategory
                  brandId={selectedBrand!.id}
                  brandName={selectedBrand!.name}
                  onClose={() => {
                    setIsOpenLinkModal(false);
                    setSelectedBrand(null);
                  }}
                />
              )}
              {isOpenUpdateModal && (
                <BrandUpdateModal
                  brand={selectedUpdateBrand}
                  onClose={() => setIsOpenUpdateModal(false)}
                />
              )}
            </div>
          ))
        ) : (
          <div>Không có thương hiệu nào</div>
        )}
      </div>
    </>
  );
};

export default memo(ListBrandCategory);
