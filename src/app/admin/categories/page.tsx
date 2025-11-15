import { memo } from "react";

const AdminCategoriesPage = () => {
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold mb-[24px]">Quản lý danh mục sản phẩm</h3>
        <button className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold">
          + Thêm danh mục mới
        </button>
      </div>
    </div>
  );
};

export default memo(AdminCategoriesPage);
