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

export const getAllProducts = async () => {
    const res = await axiosInstance.get("/products/getAll");
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