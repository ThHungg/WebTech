import axiosInstance from "./axiosInstance";

export const createPayment = async (amount: number, orderId: string, bankCode: string = "NCB", language: string = "vn") => {
  const params = new URLSearchParams({
    amount: amount.toString(),
    orderId: orderId,
    bankCode: bankCode,
    language: language,
  });
  
  const res = await axiosInstance.get(`/vnpay/create_payment?${params.toString()}`);
  return res.data;
};