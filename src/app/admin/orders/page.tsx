import OrderTable from "@/components/Admin/Table/OrderTable";
import { memo } from "react";

const AdminOrdersPage = () => {
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-[24px]">Quản lý đơn hàng</h3>
        <button className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold">
          Xuất file
        </button>
      </div>
      <OrderTable />
    </div>
  );
};

export default memo(AdminOrdersPage);
