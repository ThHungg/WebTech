import axiosInstance from "./axiosInstance"

export const getCartSelectedByUserId = async () => {
    const res = await axiosInstance.get(`/carts/getCartSelected`);
    return res.data;
}