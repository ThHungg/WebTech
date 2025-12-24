import { memo } from "react";

const OrderItems = ({order }:{order: any}) => {
    type StatusConfig = {
      [key: string]: { title: string; color: string };
    };
    const orderStatus: StatusConfig = {
      pending: { title: "Đang xử lý", color: "text-yellow-500 bg-yellow-100" },
      shipped: { title: "Đang giao", color: "text-blue-500 bg-blue-100" },
      delivered: { title: "Đã giao", color: "text-green-500 bg-green-100" },
      cancelled: { title: "Đã hủy", color: "text-red-500 bg-red-100" },
    };

    const currentStatus = orderStatus[order.status] || orderStatus["pending"];
  return (
    <div className="px-4 py-2 border-gray-200 rounded-lg border mt-4">
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
          alt=""
          className="w-24 h-24 object-center  rounded-lg"
        />
        <div className="space-y-1">
          <h5 className="font-bold ">Đơn hàng {order.id}</h5>
          <p className="text-sm text-gray-600">Ngày đặt: {order.date}</p>
          <p className="text-sm text-gray-600">{order.items} sản phẩm</p>
          <p className="font-bold text-red-600">Tổng tiền: {order.total}</p>
        </div>
        <div className="ml-auto flex flex-col gap-4 items-end">
          <span
            className={`px-3 py-1 rounded-full text-sm font-medium ${currentStatus.color}`}
          >
            {currentStatus.title}
          </span>
          <div className="flex gap-4">
            <button className="px-4 py-2 border border-gray-300 rounded-lg text-sm  font-semibold hover:bg-gray-50">
              Xem chi tiết
            </button>
            {(currentStatus.title === "Đã giao" ||
              currentStatus.title === "Đã hủy") && (
              <button className="px-4 py-2 rounded-lg bg-red-600 hover:bg-red-700 text-white text-sm font-semibold">
                Mua lại
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(OrderItems); ;