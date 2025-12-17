"use client";
import ListBrandCategory from "@/components/Admin/BrandCategory/ListBrandCategory";
import BrandAddModal from "@/components/Admin/Modal/BrandAddModal";
import CategoryAddModal from "@/components/Admin/Modal/Category/CategoryAddModal";
import { memo, useState } from "react";

const AdminBrandCategoryPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-[24px]">Quản lý danh mục thương hiệu</h3>
        <button
          onClick={() => setIsOpenModal(true)}
          className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold"
        >
          + Thêm thương hiệu
        </button>
      </div>
      <ListBrandCategory />

      {isOpenModal && <BrandAddModal onClose={() => setIsOpenModal(false)} />}
    </div>
  );
};

export default memo(AdminBrandCategoryPage);
