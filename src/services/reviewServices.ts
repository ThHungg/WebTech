import axiosInstance from "./axiosInstance";

export const createReview = async (product_id: number, rate: number, content: string) => {
    const res = await axiosInstance.post("/reviews/create", {
      product_id,
      rate,
      content,
    });
    return res.data;
}

export const getAllReviewsByProductId = async (productId: number) => {
    const res = await axiosInstance.get(`/reviews/getByProduct/${productId}`);
    return res.data;
}