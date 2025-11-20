"use client";
import ProductModal from "@/components/Admin/Modal/ProductModal";
import ProductTable from "@/components/Admin/Table/ProductTable";
import { memo, useState } from "react";

const AdminUsersPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-[24px]">Quản lý sản phẩm</h3>
        <button
          onClick={() => setIsOpenModal(true)}
          className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold"
        >
          + Thêm sản phẩm mới
        </button>
      </div>
      <div>
        <ProductTable />
      </div>
      {isOpenModal && <ProductModal onClose={() => setIsOpenModal(false)} />}
    </div>
  );
};

export default memo(AdminUsersPage);
