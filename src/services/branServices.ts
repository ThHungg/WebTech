import axiosInstance from "./axiosInstance";

export const createBrand = async (formDataSend: FormData) => {
  const res = await axiosInstance.post("/brands/create", 
    formDataSend,
  );
  return res.data;
};

export const getAllBrands = async () => {
    const res = await axiosInstance.get("/brands/getAll");
    return res.data;
}

export const deleteBrand = async (id: number) => {
    const res = await axiosInstance.delete(`/brands/delete/${id}`);
    return res.data;
}

export const updateStatusBrand = async (id: number, is_active: boolean) => {
    const res = await axiosInstance.post(`/brands/update/${id}`, {is_active});
    return res.data;
}

export const updateBrand = async (id: number, formDataSend: FormData) => {
    console.log("FormData contents:");
    for (const pair of formDataSend.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }
    
    const res = await axiosInstance.post(`/brands/update/${id}`, formDataSend);
    return res.data;
}