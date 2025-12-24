import { memo } from "react";
import OrderItems from "./OrderItems";
import * as orderServices from "../../../../services/orderServices";
import { useQuery } from "@tanstack/react-query";

const PersonalOrder = () => {
  const mockOrders = [
    {
      id: "#DH99210",
      productName: "MacBook Pro M2 2023",
      date: "16/11/2025",
      items: 1,
      total: "45.990.000 ₫",
      status: "pending", // Đang xử lý (Vàng)
    },
    {
      id: "#DH88123",
      productName: "Bàn phím cơ Keychron K2",
      date: "14/11/2025",
      items: 2,
      total: "3.450.000 ₫",
      status: "shipped", // Đang giao (Xanh dương)
    },
    {
      id: "#DH77001",
      productName: "Sony WH-1000XM5",
      date: "10/11/2025",
      items: 1,
      total: "8.290.000 ₫",
      status: "delivered", // Đã giao (Xanh lá) -> Sẽ hiện nút Mua lại
    },
    {
      id: "#DH66554",
      productName: "Chuột Logitech MX Master 3S",
      date: "01/11/2025",
      items: 3,
      total: "2.100.000 ₫",
      status: "cancelled", // Đã hủy (Đỏ)
    },
  ];

  const fetchUserOrders = async () => {
    const res = await orderServices.getOrdersByUser(1, 10);
    return res;
  };

  const { data: userOrders = [] } = useQuery({
    queryKey: ["userOrders"],
    queryFn: fetchUserOrders,
  });

  console.log("userOrders", userOrders);

  return (
    <div className="col-span-3 bg-white rounded-lg shadow-sm p-6">
      <h5 className="font-bold text-xl">Đơn hàng của tôi</h5>
      {userOrders?.data?.map((order: any) => (
        <OrderItems key={order.id} order={order} />
      ))}
    </div>
  );
};
export default memo(PersonalOrder);
