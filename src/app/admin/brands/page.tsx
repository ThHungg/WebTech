import ListBrands from "@/components/Admin/Brands/ListBrands";
import { memo } from "react";

const AdminBrandsPage = () => {
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold mb-[24px]">Quản lý thương hiệu</h3>
        <button className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold">
          Thêm thương hiệu
        </button>
      </div>
      <ListBrands />
    </div>
  );
};

export default memo(AdminBrandsPage);
