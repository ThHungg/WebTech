"use client";
import { memo, useState } from "react";
import SearchWithFilterOrder from "../../Common/SearchWithFilterOrder";
import formatVND from "@/utils/formatVND";
import Pagination from "../../Common/Pagination";
import OverviewOrder from "../../Order/OverviewOrder";
import OrderDetailModal from "../../Modal/OrderDetailModal";
import * as orderServices from "../../../../services/orderServices";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";
import { formatDate } from "@/utils/formatDate";

const OrderTable = () => {
  const [openDetailModal, setOpenDetailModal] = useState(false);
  const [selectedOrderId, setSelectedOrderId] = useState<number>(0);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const fetchAllOrders = async () => {
    const res = await orderServices.getAllOrders(page, limit, search, status);
    return res;
  };

  const { data: ordersData = {}, refetch } = useQuery({
    queryKey: ["orders", page, limit, search, status],
    queryFn: fetchAllOrders,
    refetchOnWindowFocus: false,
  });

  const orders = ordersData?.data || [];
  const totalOrders = ordersData?.total || 0;
  const totalPages = Math.ceil(totalOrders / limit);

  const handleSearch = (searchValue: string) => {
    setSearch(searchValue);
    setPage(1);
  };

  const handleFilterStatus = (statusValue: string) => {
    setStatus(statusValue);
    setPage(1);
  };

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
  };

  const handleLimitChange = (newLimit: number) => {
    setLimit(newLimit);
    setPage(1);
  };

  const handleDeleteOrder = async (orderId: number) => {
    try {
      const res = await orderServices.deleteOrder(orderId);
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      refetch();
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Xoá đơn hàng thất bại");
    }
  };

  const handleStatusChange = async (orderId: number, newStatus: string) => {
    try {
      const res = await orderServices.updateOrderStatus(orderId, newStatus);
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      }
      toast.success("Cập nhật trạng thái thành công");
      refetch();
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Cập nhật trạng thái thất bại");
    }
  };

  return (
    <>
      <OverviewOrder />
      <div className="bg-white rounded-xl shadow-md border-[1px] border-gray-200">
        <SearchWithFilterOrder
          onSearch={handleSearch}
          onFilterStatus={handleFilterStatus}
        />
        <div className="">
          <table className="w-full">
            <thead className="bg-gray-100">
              <tr className="uppercase">
                <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                  Mã đơn
                </th>
                <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                  Khách hàng
                </th>
                <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                  Sản phẩm
                </th>
                <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                  Tổng tiền
                </th>
                <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                  Ngày đặt
                </th>
                <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                  Thanh toán
                </th>
                <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                  Trạng thái
                </th>
                <th className=" py-[16px] text-left text-[14px] text-gray-600 font-semibold pl-[24px]">
                  Thao tác
                </th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order: any) => (
                <tr
                  key={order.id}
                  className="border-b border-gray-200 hover:bg-gray-50"
                >
                  <th className="py-[16px] text-left px-[24px] font-semibold">
                    {order.order_code}
                  </th>
                  <th className="py-[16px] text-left px-[24px] font-medium text-gray-600">
                    <p className="whitespace-nowrap">{order.recipient_name}</p>
                    <p className="text-[12px] text-gray-500">{order.phone}</p>
                  </th>
                  <th className="py-[16px] text-left px-[24px] font-semibold">
                    <div className="text-[13px] max-w-[200px] line-clamp-2">
                      {order.details.map((item: any, index: number) => (
                        <span key={index}>
                          {item.variant.product.name}
                          {index < order.details.length - 1 ? ", " : ""}
                        </span>
                      ))}
                    </div>
                  </th>
                  <th className="py-[16px] whitespace-nowrap text-left px-[24px] font-semibold">
                    {formatVND(order.total_amount)}
                  </th>
                  <th className="px-[24px] py-[16px] text-left font-medium text-gray-600">
                    {formatDate(order.createdAt)}
                  </th>
                  {order.payment_method === "COD" ? (
                    <th className="px-[24px] py-[16px] whitespace-nowrap text-left font-medium text-gray-600">
                      Thanh toán khi nhận hàng
                    </th>
                  ) : (
                    <th className="px-[24px] py-[16px] text-left whitespace-nowrap font-medium text-gray-600">
                      Chuyển khoản
                    </th>
                  )}
                  <th className="px-[24px] py-[16px] text-left font-light">
                    <select
                      value={order.order_status}
                      onChange={(e) =>
                        handleStatusChange(order.id, e.target.value)
                      }
                      className={`px-3 py-2 rounded-lg text-white text-[14px] font-semibold border-0 cursor-pointer transition-all ${
                        order.order_status === "pending"
                          ? "bg-yellow-500 hover:bg-yellow-600"
                          : order.order_status === "confirmed"
                          ? "bg-blue-500 hover:bg-blue-600"
                          : order.order_status === "shipping"
                          ? "bg-purple-500 hover:bg-purple-600"
                          : order.order_status === "delivered"
                          ? "bg-green-500 hover:bg-green-600"
                          : order.order_status === "cancelled"
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-gray-500 hover:bg-gray-600"
                      }`}
                    >
                      <option value="pending" className="bg-yellow-500">
                        Đang chờ duyệt
                      </option>
                      <option value="confirmed" className="bg-blue-500">
                        Đã duyệt
                      </option>
                      <option value="shipping" className="bg-purple-500">
                        Đang vận chuyển
                      </option>
                      <option value="delivered" className="bg-green-500">
                        Thành công
                      </option>
                      <option value="cancelled" className="bg-red-500">
                        Đã huỷ
                      </option>
                    </select>
                  </th>
                  <th className="px-[24px] py-[16px] text-left font-light">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelectedOrderId(order.id);
                          setOpenDetailModal(true);
                        }}
                        className="p-2 hover:bg-blue-100 rounded-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="mx-auto text-blue-500"
                        >
                          <path
                            fill="currentColor"
                            d="M12 9a3 3 0 0 0-3 3a3 3 0 0 0 3 3a3 3 0 0 0 3-3a3 3 0 0 0-3-3m0 8a5 5 0 0 1-5-5a5 5 0 0 1 5-5a5 5 0 0 1 5 5a5 5 0 0 1-5 5m0-12.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5"
                          />
                        </svg>
                      </button>
                      <button
                        onClick={() => handleDeleteOrder(order.id)}
                        className="p-2 hover:bg-red-100 rounded-lg"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          className="mx-auto text-red-500"
                        >
                          <path
                            fill="currentColor"
                            d="M18 19a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3V7H4V4h4.5l1-1h4l1 1H19v3h-1zM6 7v12a2 2 0 0 0 2 2h7a2 2 0 0 0 2-2V7zm12-1V5h-4l-1-1h-3L9 5H5v1zM8 9h1v10H8zm6 0h1v10h-1z"
                          />
                        </svg>
                      </button>
                    </div>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <Pagination
          page={page}
          limit={limit}
          total={totalOrders}
          onPageChange={handlePageChange}
          onLimitChange={handleLimitChange}
        />
        {openDetailModal && (
          <OrderDetailModal
            orderId={selectedOrderId}
            onClose={() => setOpenDetailModal(false)}
          />
        )}
      </div>
    </>
  );
};

export default memo(OrderTable);
