import { memo } from "react";
import * as orderServices from "../../../services/orderServices";
import { useQuery } from "@tanstack/react-query";

const StatisticsSection = () => {
  const fetchUserOrders = async () => {
    const res = await orderServices.getOrdersByUser(1, 10);
    return res;
  };

  const { data: userOrders = [] } = useQuery({
    queryKey: ["userOrders"],
    queryFn: fetchUserOrders,
  });
  return (
    <div className="border-b border-gray-200">
      <div className="max-w-7xl px-[16px] py-[24px] mx-auto">
        <div className="grid grid-cols-4">
          <div className="p-[12px] flex items-center gap-3 hover:bg-gray-100 rounded-xl group ">
            <div className="p-3 rounded-lg bg-blue-100 inline-block group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-blue-600"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12" />
                  <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15" />
                </g>
              </svg>
            </div>
            <div>
              <p className="font-bold text-2xl text-gray-800">{userOrders?.data?.length}</p>
              <p className="text-sm text-gray-500">Đơn hàng</p>
            </div>
          </div>
          <div className="p-[12px] flex items-center gap-3 hover:bg-gray-100 rounded-xl group ">
            <div className="p-3 rounded-lg bg-red-100 inline-block group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-red-600"
              >
                <path
                  fill="currentColor"
                  d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675t1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025t2.45 2.675T12 18.3m0-6.825"
                />
              </svg>
            </div>
            <div>
              <p className="font-bold text-2xl text-gray-800">15</p>
              <p className="text-sm text-gray-500">Yêu thích</p>
            </div>
          </div>
          <div className="p-[12px] flex items-center gap-3 hover:bg-gray-100 rounded-xl group ">
            <div className="p-3 rounded-lg bg-yellow-100 inline-block hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-award w-6 h-6 text-yellow-600"
                aria-hidden="true"
              >
                <path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path>
                <circle cx="12" cy="8" r="6"></circle>
              </svg>
            </div>
            <div>
              <p className="font-bold text-2xl text-gray-800">1250</p>
              <p className="text-sm text-purple-500">Điểm tích lũy</p>
            </div>
          </div>
          <div className="p-[12px] flex items-center gap-3 hover:bg-gray-100 rounded-xl group ">
            <div className="p-3 rounded-lg bg-green-100 inline-block hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="lucide lucide-gift w-6 h-6 text-green-600"
                aria-hidden="true"
              >
                <rect x="3" y="8" width="18" height="4" rx="1"></rect>
                <path d="M12 8v13"></path>
                <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path>
                <path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path>
              </svg>
            </div>
            <div>
              <p className="font-bold text-2xl text-gray-800">8</p>
              <p className="text-sm text-gray-500">Ưu đãi</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(StatisticsSection);
