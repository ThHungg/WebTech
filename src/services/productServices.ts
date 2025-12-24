import { getDetail } from './authServices';
import axiosInstance from "./axiosInstance";

export const createProduct = async (productData: FormData) => {
    const res = await axiosInstance.post("/products/create", productData);
    return res.data;
}

export const updateProduct = async (id: number, productData: FormData) => {
    const res = await axiosInstance.post(`/products/update/${id}`, productData);
    return res.data;
}

export const updateProductStatus = async (id: number, status: boolean) => {
    const res = await axiosInstance.put(`/products/updateStatus/${id}`, {status});
    return res.data;
}

export const getAllProducts = async ( page: number = 1,
  limit: number = 10,) => {
    const params: any = { page, limit };
    const res = await axiosInstance.get("/products/getAll", { params });
    return res.data;
}

export const deleteProduct = async (id: number) => {
    const res = await axiosInstance.delete(`/products/delete/${id}`);
    return res.data;
}

export const getDetailProduct = async (id: number) => {
    const res = await axiosInstance.get(`/products/detail/${id}`);
    return res.data;
}

export const getBySlug = async (slug: string, page: number = 1, limit: number = 12) => {
    const params: any = { page, limit };
    const res = await axiosInstance.get(`/products/getBySlug/${slug}`, { params });
    return res.data;
}