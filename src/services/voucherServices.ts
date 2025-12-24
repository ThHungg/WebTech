import axiosInstance from "./axiosInstance";

export const createVoucher = async (voucherData: any) => {
    const res = await axiosInstance.post("/vouchers/create", voucherData);
    return res.data;
}

export const getAllVouchers = async () => {
    const res = await axiosInstance.get("/vouchers/getAll");
    return res.data;
}

export const deleteVoucher = async (voucherId: number) => {
    const res = await axiosInstance.delete(`/vouchers/delete/${voucherId}`);
    return res.data;
}

export const applyVoucher = async (code: string) => {
    const res = await axiosInstance.post("/vouchers/apply", {code});
    return res.data;
}