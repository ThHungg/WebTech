import CheckoutProgress from "@/components/Common/Checkout/CheckoutProgress";
import { memo } from "react";

const CheckoutPage = () => {
  return (
    <div className="container px-[16px] py-[32px] flex justify-center items-center">
      <CheckoutProgress />
    </div>
  );
};

export default memo(CheckoutPage);
