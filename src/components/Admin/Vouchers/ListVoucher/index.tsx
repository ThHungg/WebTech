import { memo } from "react";
import VoucherCard from "../VoucherCard";

const ListVouchers = () => {
  return (
    <div className="flex gap-3">
      <VoucherCard />
      <VoucherCard />
      <VoucherCard />
      <VoucherCard />
    </div>
  );
};

export default memo(ListVouchers);
