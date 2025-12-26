"use client";
import CheckoutForm from "@/components/Checkout/CheckoutForm";
import CheckoutInfo from "@/components/Checkout/CheckoutInfo";
import { memo, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as authServices from "../../services/authServices";
import { formatAddress } from "@/utils/formatAddress";

const CheckoutPage = () => {
  const {data: userData = {}} = useQuery({
    queryKey: ['userData'],
    queryFn: () => authServices.getDetail(),
  })
  console.log('userData', userData)
  const [finalTotal, setFinalTotal] = useState(0);
  const [formData, setFormData] = useState({
    recipient_name:  "",
    phone: "",
    email: "",
    shipping_address:  "",
    note: "",
    payment_method: "",
    voucher_code: "",
  });

  useEffect(() => {
    if (!userData?.data) return;

    const defaultAddress = formatAddress(userData?.address?.find((addr: any) => addr?.is_default))    
    setFormData((prev) => ({
      ...prev,
      recipient_name: userData.data.username || "",
      phone: userData.data.phone || "",
      email: userData.data.email || "",
      shipping_address: defaultAddress,
    }));
  }, [userData]);
  console.log("formData: ", formData);
  

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* <div className="px-[16px] py-[32px] flex justify-center items-center border-b-[1px] border-gray-200 bg-white">
        <CheckoutProgress />
      </div> */}
      <div className="container py-[32px] grid grid-cols-3 gap-3">
        <div className="col-span-2">
          <CheckoutForm
            addresses={userData?.address}
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
