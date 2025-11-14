import ProductTable from "@/components/Admin/Table/ProductTable";
import { memo } from "react";

const AdminUsersPage = () => {
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold mb-[24px]">Quản lý sản phẩm</h3>
        <button className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold">
          + Thêm sản phẩm mới
        </button>
      </div>
      <div>
        <ProductTable />
      </div>
    </div>
  );
};

export default memo(AdminUsersPage);
