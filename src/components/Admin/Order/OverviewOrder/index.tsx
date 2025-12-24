import { memo } from "react";
import * as orderServices from "../../../../services/orderServices";
import { useQuery } from "@tanstack/react-query";

const OverviewOrder = () => {
  const fetchStatsOrder = async () => {
    const res = await orderServices.getStatsOrder();
    return res;
  };
  const { data: statsOrderResponse } = useQuery({
    queryKey: ["stats-order"],
    queryFn: fetchStatsOrder,
  });

  const statsOrder = statsOrderResponse?.data || {};

  const listOverviewOrder = [
    {
      name: "Chờ xử lý",
      color: "bg-yellow-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12q0-2.1.775-3.912T4.9 4.9L12 12V2q2.075 0 3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
          />
        </svg>
      ),
      value: statsOrder.pending || 0,
      key: "pending",
    },
    {
      name: "Đã duyệt",
      color: "bg-blue-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M9 16.17L4.83 12l-1.42 1.41L9 19L21 7l-1.41-1.41L9 16.17z"
          />
        </svg>
      ),
      value: statsOrder.confirmed || 0,
      key: "confirmed",
    },
    {
      name: "Đang vận chuyển",
      color: "bg-purple-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M18 18.5a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5m1.5-9l1.96 2.5H17V9.5m-11 9a1.5 1.5 0 0 1-1.5-1.5a1.5 1.5 0 0 1 1.5-1.5a1.5 1.5 0 0 1 1.5 1.5a1.5 1.5 0 0 1-1.5 1.5M3 6h15v7H3zm15-3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
          />
        </svg>
      ),
      value: statsOrder.shipped || 0,
      key: "shipped",
    },
    {
      name: "Hoàn thành",
      color: "bg-green-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="M256 42.667C138.18 42.667 42.667 138.18 42.667 256S138.18 469.334 256 469.334S469.334 373.82 469.334 256S373.821 42.667 256 42.667m80.336 137.114l30.167 30.167l-131.836 132.388l-79.083-79.083l30.166-30.167l48.917 48.917z"
          />
        </svg>
      ),
      value: statsOrder.delivered || 0,
      key: "delivered",
    },
    {
      name: "Đã hủy",
      color: "bg-red-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 512 512"
        >
          <path
            fill="currentColor"
            d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240s240-107.45 240-240S388.55 16 256 16m0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256S156.59 76 256 76m-80.625 60c-.97-.005-2.006.112-3.063.313v-.032c-18.297 3.436-45.264 34.743-33.375 46.626l73.157 73.125l-73.156 73.126c-14.63 14.625 29.275 58.534 43.906 43.906L256 299.906l73.156 73.156c14.63 14.628 58.537-29.28 43.906-43.906l-73.156-73.125l73.156-73.124c14.63-14.625-29.275-58.5-43.906-43.875L256 212.157l-73.156-73.125c-2.06-2.046-4.56-3.015-7.47-3.03z"
          />
        </svg>
      ),
      value: statsOrder.cancelled || 0,
      key: "cancelled",
    },
  ];
  return (
    <div className="grid grid-cols-5 gap-3 mb-[24px]">
      {listOverviewOrder.map((item, index) => (
        <div
          key={index}
          className={`p-[24px] ${item.color} rounded-xl shadow-lg hover:scale-105 transform transition-all duration-300`}
        >
          <div className="flex items-center gap-2 text-white">
            {item.icon}
            <span className="whitespace-nowrap text-white text-[16px] font-semibold">
              {item.name}
            </span>
          </div>
          <h4 className="font-bold mt-[12px] text-white">{item.value}</h4>
        </div>
      ))}
    </div>
  );
};

export default memo(OverviewOrder);
