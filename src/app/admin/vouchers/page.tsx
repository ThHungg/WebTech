"use client";
import VoucherModal from "@/components/Admin/Modal/VoucherModal";
import ListVoucher from "@/components/Admin/Vouchers/ListVoucher";
import { memo, useState } from "react";

const AdminVouchersPage = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold mb-[24px]">Quản lý Voucher</h3>
        <button
          onClick={() => setIsOpenModal(true)}
          className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold"
        >
          + Thêm voucher mới
        </button>
      </div>
      <ListVoucher />
      {isOpenModal && <VoucherModal onClose={() => setIsOpenModal(false)} />}
    </div>
  );
};

export default memo(AdminVouchersPage);
