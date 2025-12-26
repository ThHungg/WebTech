import axiosInstance from "./axiosInstance";

export const getCartSelectedByUserId = async () => {
  const res = await axiosInstance.get(`/carts/getCartSelected`);
  return res.data;
};

export const getCart = async () => {
  const res = await axiosInstance.get(`/carts/getCart`);
  return res.data;
};

export const addItemsToCart = async (
  product_variant_id: number,
  quantity: number
) => {
  const res = await axiosInstance.post(`/carts/add`, {
    product_variant_id,
    quantity,
  });
  return res.data;
};

export const updateCart = async (cartItemId: number, quantity: number) => {
  const res = await axiosInstance.put(
    `/carts/updateItemQuantity/${cartItemId}`,
    {
      quantity,
    }
  );
  return res.data;
};
// chọn 1 
export const selectCartItem = async (cartItemId: number, is_selected: boolean) => {
  const res = await axiosInstance.post(`/carts/selectItem/${cartItemId}`, {
    is_selected});
  return res.data;
};

// chọn tất cả
export const selectAllCartItems = async () => {
  const res = await axiosInstance.put(`/carts/selectAll`);
  return res.data;
};
// bỏ chọn tất cả
export const unSelectAllCartItems = async () => {
  const res = await axiosInstance.put(`/carts/unSelectAll`);
  return res.data;
};
//bỏ khỏi giỏ hàng 1 sản phẩm
export const deleteCartItem = async (cartItemId: number) => {
  const res = await axiosInstance.delete(`/carts/deleteItem/${cartItemId}`);
  return res.data;
};

// bỏ khỏi giỏ hàng nhiều sp
export const deleteCartItems = async (cartItemIds: number[]) => {
    const res  = await axiosInstance.delete("/carts/delete-multiple", {data: {cartItemIds}})
    return res.data;
}

// bỏ hết các sp đang chọn ra khỏi giỏ
export const deleteAllCartItems = async () => {
  const res = await axiosInstance.delete(`/carts/deleteItemSelected`);
  return res.data;
};
