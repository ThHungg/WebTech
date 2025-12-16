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

export const getDetail = async () => {
  const res = await axiosInstance.get("/users/getUser");
  return res.data;
};
