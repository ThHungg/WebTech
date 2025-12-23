import axios from "axios";
import axiosInstance from "./axiosInstance";
import { use } from "react";

export const login = async (email: string, password: string) => {
  const res = await axiosInstance.post(
    "/users/login",
    { email, password },
    { withCredentials: true, headers: { skipAuth: true } }
  );
  return res.data;
};

export const register = async (
  username: string,
  phone: string,
  email: string,
  password: string
) => {
  const res = await axiosInstance.post(
    "/users/register",
    { username, phone, email, password },
    { withCredentials: true, headers: { skipAuth: true } }
  );
  return res.data;
};

export const refreshToken = async () => {
  const res = await axiosInstance.post(
    "/users/refresh-token",
    {},
    { withCredentials: true, headers: { skipAuth: true } }
  );
  return res.data;
};

export const logout = async () => {
  const res = await axiosInstance.post("/users/logout", {}, { withCredentials: true });
  return res.data;
}

export const getDetail = async () => {
  const res = await axiosInstance.get("/users/getUser");
  return res.data;
};

export const getAllUsers = async (
  page: number = 1,
  limit: number = 10,
  search: string = "",
  role?: string
) => {
  const params: any = { page, limit, search };
  if (role) params.role = role;
  const res = await axiosInstance.get("/users/getAll", { params });
  return res.data;
};

export const updateUser = async (data: any) => {  
    const res = await axiosInstance.post("/users/updateProfile", data);
    return res.data;
}

export const updateStatusUser = async (id: number, is_active: boolean) => {
    const res = await axiosInstance.post(`/users/update/${id}`, {is_active});
    return res.data;
}

export const deleteUser = async (id: number) => {
    const res = await axiosInstance.delete(`/users/delete/${id}`);
    return res.data;
}

export const changePassword = async (data: any) => {
    const res = await axiosInstance.post("/users/change-password", data);
    return res.data;
}

// Address
export const changeDefaultAddress = async ( addressId: number) => {
    const res = await axiosInstance.post(`/users/address/${addressId}`,{
        is_default: true
    });
    return res.data;
}

export const addAddress = async ( data: any) => {
    const res = await axiosInstance.post(`/users/address`, data);
    return res.data;
}

export const updateAddress = async ( addressId: number, data: any) => {
    const res = await axiosInstance.post(`/users/address/${addressId}`, data);
    return res.data;
}
