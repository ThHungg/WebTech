import axiosInstance from "./axiosInstance";

export const createAttributes = async (attributes : any[]) => {
    const res = await axiosInstance.post("/attributes/create", {attributes});
    return res.data;
}