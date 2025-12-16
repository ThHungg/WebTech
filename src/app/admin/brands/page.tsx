"use client";
import ListBrands from "@/components/Admin/Brands/ListBrands";
import BrandAddModal from "@/components/Admin/Modal/BrandAddModal";
import ProductModal from "@/components/Admin/Modal/ProductModal";
import { memo, useState } from "react";

const AdminBrandsPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-[24px]">Quản lý thương hiệu</h3>
        <button
          onClick={() => setIsOpenModal(true)}
          className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold"
        >
          Thêm thương hiệu
        </button>
      </div>
      <ListBrands />
      {isOpenModal && <BrandAddModal onClose={() => setIsOpenModal(false)} />}
    </div>
  );
};

export default memo(AdminBrandsPage);
