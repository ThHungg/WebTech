import ListVoucher from "@/components/Admin/Vouchers/ListVoucher";
import { memo } from "react";

const AdminVouchersPage = () => {
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold mb-[24px]">Quản lý Voucher</h3>
        <button className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold">
          + Thêm voucher mới
        </button>
      </div>
      <ListVoucher />
    </div>
  );
};

export default memo(AdminVouchersPage);
