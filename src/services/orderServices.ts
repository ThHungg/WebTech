import axiosInstance from "./axiosInstance";

export const createOrder = async (orderData: any) => {
    const res = await axiosInstance.post("/orders/create", orderData);
    return res.data;
}

export const getAllOrders = async (
  page: number = 1,
  limit: number = 10,
  search: string = "",
  status: string = ""
) => {
  const params: any = { page, limit, search };
  if (status) params.status = status;
  const res = await axiosInstance.get("/orders/getAll", { params });
  return res.data;
}

export const getOrdersByUser = async (
  page: number = 1,
  limit: number = 10,
) => {
    const params: any = { page, limit };
    const res = await axiosInstance.get("/orders/getOrderByUser", { params });
    return res.data;
}

export const getOrderById = async (orderId: number) => {
    const res = await axiosInstance.get(`/orders/get/${orderId}`);
    return res.data;
}

export const getStatsOrder = async () => {
    const res = await axiosInstance.get(`/orders/stats`);
    return res.data;
}

export const deleteOrder = async (orderId: number) => {
    const res = await axiosInstance.delete(`/orders/delete/${orderId}`);
    return res.data;
}

export const updateOrderStatus = async (orderId: number, status: string) => {
    const res = await axiosInstance.put(`/orders/updateStatus/${orderId}`, {status});
    return res.data;
}