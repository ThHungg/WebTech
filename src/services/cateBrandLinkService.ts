import axiosInstance from "./axiosInstance"

export const getLinksByBrandId = async (brandId: number) => {
    const res = await axiosInstance.get(`/cate-brand-link/getByBrand/${brandId}`);
    return res.data;
}