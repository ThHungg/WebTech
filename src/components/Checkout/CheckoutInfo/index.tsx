"use client";
import CheckoutItemCard from "@/components/Card/CheckoutItemCard";
import formatVND from "@/utils/formatVND";
import * as cartServices from "../../../services/cartServices";
import * as voucherServices from "../../../services/voucherServices";
import { memo, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const CheckoutInfo = ({
  formData,
  setFormData,
  finalTotal,
  setFinalTotal,
}: {
  formData: any;
  setFormData: any;
  finalTotal: number;
  setFinalTotal: any;
}) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [discountAmount, setDiscountAmount] = useState(0);

  const fetchCartSelected = async () => {
    const res = await cartServices.getCartSelectedByUserId();
    return res;
  };

  const { data: cartSelected } = useQuery({
    queryKey: ["cartSelected"],
    queryFn: fetchCartSelected,
  });

  useEffect(() => {
    setTotalPrice(
      cartSelected?.totalPrice || cartSelected?.data?.totalPrice || 0
    );
    setDiscountAmount(0);
  }, [cartSelected]);

  const handleApplyVoucher = async () => {
    try {
      const res = await voucherServices.applyVoucher(formData.voucher_code);
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      setDiscountAmount(Number(res.data.discount_amount));
    } catch (error) {
      toast.error("Lỗi khi áp dụng voucher");
    }
  };

  const handleVoucherChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev: any) => ({
      ...prev,
      voucher_code: e.target.value,
    }));
  };

  useEffect(() => {
    const calculated = totalPrice - discountAmount;
    setFinalTotal(calculated);
  }, [totalPrice, discountAmount, setFinalTotal]);

  return (
    <div className="self-start sticky top-[160px] p-[24px] rounded-lg w-full bg-white rounded-md border-[1px] border-gray-100 shadow-md">
      <h6 className="flex items-center gap-2 font-bold mb-[12px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-red-500"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m12 3l8 4.5v9L12 21l-8-4.5v-9zm0 9l8-4.5M12 12v9m0-9L4 7.5m12-2.25l-8 4.5"
          />
        </svg>
        Đơn hàng của bạn
      </h6>
      {cartSelected?.data?.items?.map((item: any) => (
        <CheckoutItemCard key={item.id} item={item} />
      ))}

      <div className="flex gap-2 mt-[16px]">
        <input
          type="text"
          value={formData.voucher_code}
          onChange={handleVoucherChange}
          placeholder="Mã giảm giá"
          className="px-[16px] py-[8px] border-[1px] border-gray-300 w-full rounded-lg focus:outline-none focus:border-red-600"
        />
        <button
          className="text-white whitespace-nowrap bg-red-500 hover:bg-red-600 font-bold rounded-lg text-[12px] px-4 py-2 inline-block"
          onClick={handleApplyVoucher}
        >
          Áp dụng
        </button>
      </div>

      <div className="mt-[16px] space-y-3 border-b border-gray-200 pb-[16px]">
        <div className="flex items-center justify-between text-[14px]">
          <span className="text-gray-600">Tạm tính</span>
          <span className="font-bold">{formatVND(totalPrice)}</span>
        </div>
        {discountAmount > 0 && (
          <div className="flex items-center justify-between text-[14px]">
            <span className="text-green-600">Giảm giá</span>
            <span className="font-bold text-green-600">
              -{formatVND(discountAmount)}
            </span>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between font-bold text-[16px] w-full mt-[16px]">
        <span>Tổng cộng</span>
        <span className="text-red-500 text-[18px]">
          {formatVND(finalTotal)}
        </span>
      </div>
    </div>
  );
};

export default memo(CheckoutInfo);
