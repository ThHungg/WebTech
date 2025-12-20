import axiosInstance from "./axiosInstance";

export const createCategory = async (name: string, parent_id: string | null, icon_emoji: string) => {
    const res = await axiosInstance.post("/categories/create", 
      {name, parent_id, icon_emoji}
    );
    return res.data;
}

export const updateCategory = async (categoryId: number, name: string, parent_id: string | null, icon_emoji: string) => {
    const res = await axiosInstance.post(`/categories/update/${categoryId}`, 
      {name, parent_id, icon_emoji}
    );
    return res.data;
}

export const getAllCategories = async () => {
    const res = await axiosInstance.get(`/categories/getAll`);
    return res.data;
}

export const getAllParent = async () => {
    const res = await axiosInstance.get(`/categories/getAllParent`);
    return res.data;
}

export const getAllChildren = async () => {
    const res = await axiosInstance.get(`/categories/getAllChildren`);
    return res.data;
}

export const deleteCategory = async (id: number) => {
    const res = await axiosInstance.delete(`/categories/delete/${id}`);
    return res.data;
}