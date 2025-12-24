import { formatDate } from "@/utils/formatDate";
import formatVND from "@/utils/formatVND";
import getFullImg from "@/utils/getFullImg";
import { memo, useState } from "react";

const OrderItems = ({ order }: { order: any }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  type StatusConfig = {
    [key: string]: { title: string; color: string };
  };
  const orderStatus: StatusConfig = {
    pending: { title: "Đang xử lý", color: "text-yellow-500 bg-yellow-100" },
    confirmed: { title: "Đã xác nhận", color: "text-blue-500 bg-blue-100" },
    shipping: { title: "Đang giao", color: "text-blue-500 bg-blue-100" },
    delivered: { title: "Đã giao", color: "text-green-500 bg-green-100" },
    cancelled: { title: "Đã hủy", color: "text-red-500 bg-red-100" },
  };

  const currentStatus =
    orderStatus[order.order_status] || orderStatus["pending"];
  const firstItem = order?.details?.[0];
  const remainingItems = order?.details?.slice(1) || [];
  const hasMultipleItems = remainingItems.length > 0;

  const renderProduct = (item: any) => (
    <div key={item.id} className="flex items-center gap-3">
      <img
        src={getFullImg(item.variant.product.images[0]?.image)}
        alt={item.variant.product.name}
        className="w-20 h-20 object-cover rounded-lg"
      />
      <div className="flex-1 min-w-0">
        <p className="text-sm font-medium text-gray-800 truncate">
          {item.variant.product.name}
          {item.variant.name !== "Default" && ` - ${item.variant.name}`}
        </p>
        <p className="text-xs text-gray-500">SL: {item.quantity}</p>
        <p className="text-sm font-semibold text-red-600">
          {formatVND(item.total_price)}
        </p>
      </div>
      {(currentStatus.title === "Đã giao" ||
        currentStatus.title === "Đã hủy") && (
        <button className="px-3 py-1 bg-red-600 hover:bg-red-700 text-white text-xs font-semibold rounded whitespace-nowrap">
          Mua lại
        </button>
      )}
    </div>
  );

  return (
    <div className="border border-gray-200 rounded-lg overflow-hidden mb-3">
      <div className="bg-gray-50 px-4 py-3 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h5 className="font-semibold text-gray-800">{order.order_code}</h5>
          <span
            className={`px-2 py-1 rounded-full text-xs font-medium ${currentStatus.color}`}
          >
            {currentStatus.title}
          </span>
        </div>
        <div className="flex items-center justify-between text-sm text-gray-600">
          <p>{formatDate(order.createdAt)}</p>
          <p className="font-semibold text-red-600">
            {formatVND(order.final_amount)}
          </p>
        </div>
      </div>

      <div className="p-4 space-y-3">
        {firstItem && renderProduct(firstItem)}

        {isExpanded && hasMultipleItems && (
          <div className="space-y-3 pt-3 border-t border-gray-200">
            {remainingItems.map((item: any) => renderProduct(item))}
          </div>
        )}

        {hasMultipleItems && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full py-2 text-sm text-red-600 hover:text-red-700 font-medium border border-gray-200 rounded hover:bg-gray-50 transition"
          >
            {isExpanded
              ? `▲ Ẩn ${remainingItems.length} sản phẩm`
              : `▼ Xem thêm ${remainingItems.length} sản phẩm`}
          </button>
        )}
      </div>
    </div>
  );
};
export default memo(OrderItems);
