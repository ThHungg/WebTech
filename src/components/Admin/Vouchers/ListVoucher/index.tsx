import { memo } from "react";
import VoucherCard from "../VoucherCard";
import * as voucherServices from "../../../../services/voucherServices";
import { useQuery } from "@tanstack/react-query";

const ListVouchers = () => {
  const fetchAllVoucher = async () => {
    const res = await voucherServices.getAllVouchers();
    return res;
  };

  const { data: vouchers = [], refetch } = useQuery({
    queryKey: ["vouchers"],
    queryFn: fetchAllVoucher,
  });


  return (
    <div className="grid grid-cols-3 gap-3">
      {vouchers?.data?.map((voucher: any) => (
        <VoucherCard key={voucher.id} voucher={voucher} refetch={refetch} />
      ))}
    </div>
  );
};

export default memo(ListVouchers);
