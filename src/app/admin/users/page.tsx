import UserTable from "@/components/Admin/Table/UserTable";
import { memo } from "react";

const AdminProductsPage = () => {
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold mb-[24px]">Quản lý người dùng</h3>
        <button className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold">
          + Thêm người dùng
        </button>
      </div>
      <UserTable />
    </div>
  );
};

export default memo(AdminProductsPage);
