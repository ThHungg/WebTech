import axiosInstance from "./axiosInstance";

export const cateAttributeLinkServices = async (
  categoryId: number,
  attributeIds: number[]
) => {
  const res = await axiosInstance.post(`/cate_attribute_links/link`, {
    categoryId,
    attributeIds,
  });
  return res.data;
};

export const getAttributesByCategoryId = async (categoryId: number) => {
  const res = await axiosInstance.get(
    `/cate_attribute_links/getByCategory/${categoryId}`
  );
  return res.data;
}
