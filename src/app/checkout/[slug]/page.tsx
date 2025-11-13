import CheckoutConfirm from "@/components/Checkout/CheckoutConfirm";
import CheckoutInfo from "@/components/Checkout/CheckoutInfo";
import CheckoutProgress from "@/components/Checkout/CheckoutProgress";
import { memo } from "react";

const CheckoutPage = async ({ params }: { params: { slug?: string[] } }) => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="px-[16px] py-[32px] flex justify-center items-center border-b-[1px] border-gray-200 bg-white">
        <CheckoutProgress />
      </div>
      <div className="container py-[32px] grid grid-cols-3 gap-3">
        <div className="col-span-2">
        <CheckoutConfirm />
        </div>
        <CheckoutInfo />
      </div>
    </div>
  );
};

export default memo(CheckoutPage);
