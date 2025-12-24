import formatVND from "@/utils/formatVND";
import { memo } from "react";
import * as orderServices from "../../../../services/orderServices";
import { useQuery } from "@tanstack/react-query";
import { formatDate } from "@/utils/formatDate";

const OrderDetailModal = ({
  orderId,
  onClose,
}: {
  orderId: number;
  onClose: () => void;
}) => {
  const fetchOrder = async (orderId: number) => {
    const res = await orderServices.getOrderById(orderId);
    return res;
  };

  const { data: orderDetail } = useQuery({
    queryKey: ["order-detail", orderId],
    queryFn: () => fetchOrder(orderId),
    enabled: !!orderId,
  });

  const order = orderDetail?.data;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between p-[24px] sticky top-0 bg-white border-b">
          <h5 className="font-bold text-[18px]">
            Chi tiết đơn hàng {order?.order_code}
          </h5>
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 7l10 10M7 17L17 7"
              />
            </svg>
          </button>
        </div>
        <div className="p-[16px] w-full space-y-[16px]">
          <div className="flex items-start gap-2 w-full">
            <div className="bg-blue-50 p-[16px] rounded-xl w-full">
              <h6 className="!text-[16px] font-bold flex items-center gap-2 mb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="currentColor"
                    d="M12 2a5 5 0 1 0 5 5a5 5 0 0 0-5-5m0 8a3 3 0 1 1 3-3a3 3 0 0 1-3 3m9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"
                  />
                </svg>
                Thông tin khách hàng
              </h6>
              <ul className="text-[14px] text-gray-900 space-y-1.5">
                <li>
                  Tên:{" "}
                  <span className="font-semibold">{order?.recipient_name}</span>
                </li>
                <li>
                  SĐT: <span className="font-semibold">{order?.phone}</span>
                </li>
                <li>
                  Địa chỉ:{" "}
                  <span className="font-semibold">
                    {order?.shipping_address}
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-green-50 p-[16px] rounded-xl w-full">
              <h6 className="!text-[16px] font-bold flex items-center gap-1 mb-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill="currentColor"
                    d="M7 2H5a3.5 3.5 0 1 0 0 7h2v3H2.5v2H7v2h2v-2h2a3.5 3.5 0 1 0 0-7H9V4h4.5V2H9V0H7zm2 7h2a1.5 1.5 0 0 1 0 3H9zM7 7H5a1.5 1.5 0 1 1 0-3h2z"
                  />
                </svg>
                Thông tin thanh toán
              </h6>
              <ul className="text-[14px] text-gray-900 space-y-1.5">
                <li>
                  Phương thức:{" "}
                  <span className="font-semibold">
                    {order?.payment_method === "COD"
                      ? "Thanh toán khi nhận hàng"
                      : "Chuyển khoản"}
                  </span>
                </li>
                <li>
                  Trạng thái:{" "}
                  <span className="font-semibold text-green-500">
                    {order?.order_status === "pending"
                      ? "Đang chờ duyệt"
                      : order?.order_status === "confirmed"
                      ? "Đã duyệt"
                      : order?.order_status === "shipping"
                      ? "Đang vận chuyển"
                      : order?.order_status === "delivered"
                      ? "Thành công"
                      : "Đã huỷ"}
                  </span>
                </li>
                <li>
                  Ngày đặt:{" "}
                  <span className="font-semibold">
                    {formatDate(order?.createdAt)}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Danh sách sản phẩm */}
          <div className="mb-[16px]">
            <h6 className="font-bold !text-[16px] mb-[12px]">
              Danh sách sản phẩm
            </h6>
            <div className="border border-gray-200 rounded-lg overflow-x-auto">
              <table className="w-full">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr className="text-[12px]">
                    <th className="px-[16px] py-[8px] text-left text-gray-700 font-semibold">
                      Sản phẩm
                    </th>
                    <th className="px-[16px] py-[8px] text-left text-gray-700 font-semibold">
                      Số lượng
                    </th>
                    <th className="px-[16px] py-[8px] text-left text-gray-700 font-semibold">
                      Đơn giá
                    </th>
                    <th className="px-[16px] py-[8px] text-left text-gray-700 font-semibold">
                      Thành tiền
                    </th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {order?.details?.map((item: any, index: number) => (
                    <tr key={index} className="border-b border-gray-200">
                      <td className="px-[16px] py-[8px] text-left font-semibold">
                        {item.variant.product.name}
                      </td>
                      <td className="px-[16px] py-[8px] text-left text-gray-700 font-semibold">
                        {item.quantity}
                      </td>
                      <td className="px-[16px] py-[8px] text-left">
                        {formatVND(item.price)}
                      </td>
                      <td className="px-[16px] py-[8px] text-left text-blue-500 font-bold">
                        {formatVND(item.total_price)}
                      </td>
                    </tr>
                  ))}
                </tbody>
                <tfoot className="bg-blue-50">
                  <tr className="text-[13px]">
                    <td
                      colSpan={3}
                      className="text-right px-[8px] py-[8px] font-bold"
                    >
                      Tổng tiền:
                    </td>
                    <td className="px-[8px] py-[8px] font-bold text-blue-600 text-[14px]">
                      {formatVND(order?.total_amount)}
                    </td>
                  </tr>
                  {order?.discount_amount && (
                    <tr className="text-[13px]">
                      <td
                        colSpan={3}
                        className="text-right px-[8px] py-[8px] font-bold"
                      >
                        Chiết khấu:
                      </td>
                      <td className="px-[8px] py-[8px] font-bold text-red-600 text-[14px]">
                        -{formatVND(order?.discount_amount)}
                      </td>
                    </tr>
                  )}
                  <tr className="text-[13px]">
                    <td
                      colSpan={3}
                      className="text-right px-[8px] py-[8px] font-bold"
                    >
                      Thành tiền:
                    </td>
                    <td className="px-[8px] py-[8px] font-bold text-green-600 text-[14px]">
                      {formatVND(order?.final_amount)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(OrderDetailModal);
