"use client";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import CheckoutInfo from "@/components/Checkout/CheckoutInfo";
import CheckoutProgress from "@/components/Checkout/CheckoutProgress";
import { memo, useState } from "react";

const CheckoutPage = () => {
  const [finalTotal, setFinalTotal] = useState(0);
  const [formData, setFormData] = useState({
    recipient_name: "",
    phone: "",
    email: "",
    shipping_address: "",
    note: "",
    payment_method: "",
    voucher_code: "",
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <div className="px-[16px] py-[32px] flex justify-center items-center border-b-[1px] border-gray-200 bg-white">
        <CheckoutProgress />
      </div> */}
      <div className="container py-[32px] grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <CheckoutForm
            formData={formData}
            setFormData={setFormData}
            finalTotal={finalTotal}
          />
        </div>
        <CheckoutInfo
          formData={formData}
          setFormData={setFormData}
          finalTotal={finalTotal}
          setFinalTotal={setFinalTotal}
        />
      </div>
    </div>
  );
};

export default memo(CheckoutPage);
