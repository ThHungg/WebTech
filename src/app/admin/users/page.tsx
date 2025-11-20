"use client";
import UserAddModal from "@/components/Admin/Modal/UserAddModal";
import UserTable from "@/components/Admin/Table/UserTable";

import { memo, useState } from "react";

const AdminProductsPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-[24px]">Quản lý người dùng</h3>
        <button
          onClick={() => setIsOpenModal(true)}
          className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold"
        >
          + Thêm người dùng
        </button>
      </div>
      <UserTable />
      {isOpenModal && <UserAddModal onClose={() => setIsOpenModal(false)} />}
    </div>
  );
};

export default memo(AdminProductsPage);
