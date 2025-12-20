import { memo } from "react";
import OrderItems from "./OrderItems";

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

  return (
    <div className="col-span-3 bg-white rounded-lg shadow-sm p-6">
      <h5 className="font-bold text-xl">Đơn hàng của tôi</h5>
      {mockOrders.map((order) => (
        <OrderItems order={order} />
      ))}
    </div>
  );
};
export default memo(PersonalOrder);
