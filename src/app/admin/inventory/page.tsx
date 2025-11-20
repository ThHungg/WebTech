import ListInventory from "@/components/Admin/Inventory/ListInventory";
import { memo } from "react";

const AdminInventoryPage = () => {
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-[24px]">Quản lý kho hàng</h3>
        <button className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold">
          Xuất file
        </button>
      </div>
      <ListInventory />
    </div>
  );
};

export default memo(AdminInventoryPage);
