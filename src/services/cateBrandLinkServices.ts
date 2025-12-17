import axiosInstance from "./axiosInstance"

export const createCateBrandLink = async (categoryId: number, brandId: number) => {
    const res = await axiosInstance.post("/cate_brand_links/link", 
      {categoryId, brandId}
    );
    return res.data;
}

export const getLinksByBrandId = async (brandId: number) => {
    const res = await axiosInstance.get(`/cate_brand_links/getByBrand/${brandId}`);
    return res.data;
}

export const getAllLinks = async () => {
    const res = await axiosInstance.get(`/cate_brand_links/getAll`);
    return res.data;
}

// export const getLinksByBrandId = async (brandId: number) => {
//     const res = await axiosInstance.get(`/cate_brand_links/getByBrand/${brandId}`);
//     return res.data;
// }