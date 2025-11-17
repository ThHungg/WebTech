import BestSellingProductsSection from "@/components/Admin/Dashboard/BestSellingProductsSection";
import RecentOrdersSection from "@/components/Admin/Dashboard/RecentOrdersSection";
import { formatMillionVND } from "@/utils/formatMillionVND";

import { memo } from "react";

const AdminDashboardPage = () => {
  const listDashboardStats = [
    {
      name: "Doanh thu tháng",
      color: "bg-blue-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="32"
          height="32"
          viewBox="0 0 16 16"
        >
          <path
            fill="currentColor"
            d="M7 2H5a3.5 3.5 0 1 0 0 7h2v3H2.5v2H7v2h2v-2h2a3.5 3.5 0 1 0 0-7H9V4h4.5V2H9V0H7zm2 7h2a1.5 1.5 0 0 1 0 3H9zM7 7H5a1.5 1.5 0 1 1 0-3h2z"
          />
        </svg>
      ),
      value: formatMillionVND(1232123130),
    },
    {
      name: "Đơn hàng",
      color: "bg-green-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            d="M5 5h17l-2 9H7L4 2H0m7 12l1 4h13m-2 5a1 1 0 1 1 0-2a1 1 0 0 1 0 2ZM9 23a1 1 0 1 1 0-2a1 1 0 0 1 0 2Z"
          />
        </svg>
      ),
      value: 1834,
    },
    {
      name: "Khách hàng",
      color: "bg-purple-600",
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
            d="M160 95.997c0 5.891-4.776 10.667-10.667 10.667s-10.666-4.776-10.666-10.667c0-5.89 4.775-10.666 10.666-10.666S160 90.106 160 95.997m42.667 0c0 29.456-23.878 53.334-53.334 53.334c-29.455 0-53.333-23.878-53.333-53.334c0-29.455 23.878-53.333 53.333-53.333c29.456 0 53.334 23.878 53.334 53.333m-117.334 160c0-23.564 19.103-42.666 42.667-42.666h42.667c5.81 0 11.348 1.161 16.396 3.264c5.749-13.776 15.508-25.461 27.817-33.598c-12.894-7.827-28.028-12.333-44.213-12.333H128c-47.128 0-85.333 38.205-85.333 85.333v64h127.989a106.3 106.3 0 0 1 36.89-17.855a74.9 74.9 0 0 1-19.027-24.811H85.333zm244.328 1.617a42.7 42.7 0 0 1 11.672-1.617H384c23.564 0 42.667 19.103 42.667 42.667v21.333h-85.323c14.641 11 26.359 25.68 33.78 42.667h94.209v-64c0-47.128-38.205-85.333-85.333-85.333h-42.667c-5.845 0-11.552.587-17.067 1.707c4.114 9.258 6.401 19.508 6.401 30.293a75 75 0 0 1-1.006 12.283m-52.328 105.05h-42.666c-23.564 0-42.667 19.103-42.667 42.667v21.333h128v-21.333c0-23.564-19.103-42.667-42.667-42.667m-42.666-42.667c-47.129 0-85.334 38.205-85.334 85.334v64h213.334v-64c0-47.129-38.205-85.334-85.334-85.334zm21.333-64c5.891 0 10.667-4.775 10.667-10.666s-4.776-10.667-10.667-10.667s-10.667 4.776-10.667 10.667s4.776 10.666 10.667 10.666m0 42.667c29.455 0 53.333-23.878 53.333-53.333S285.455 191.997 256 191.997s-53.333 23.879-53.333 53.334s23.878 53.333 53.333 53.333m117.333-160c0 5.891-4.775 10.667-10.666 10.667S352 144.555 352 138.664s4.776-10.667 10.667-10.667s10.666 4.776 10.666 10.667m42.667 0c0 29.455-23.878 53.333-53.333 53.333s-53.334-23.878-53.334-53.333s23.879-53.333 53.334-53.333S416 109.209 416 138.664"
            clipRule="evenodd"
          />
        </svg>
      ),
      value: 1834,
    },
    {
      name: "Sản phẩm",
      color: "bg-orange-600",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
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
      ),
      value: 322,
    },
  ];
  return (
    <div className="p-[32px] ">
      <h3 className="font-semibold mb-[24px]">Dashboard</h3>
      <div className="grid grid-cols-4 mb-[24px] gap-6">
        {listDashboardStats.map((item, index) => (
          <div
            key={index}
            className={`p-[24px] ${item.color} rounded-xl shadow-lg`}
          >
            <div className="flex items-center gap-2 text-white">
              {item.icon}
              <span className="whitespace-nowrap text-white text-[14px]">
                {item.name}
              </span>
            </div>
            <h5 className="font-bold mt-[12px] text-white">{item.value}</h5>
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <RecentOrdersSection />
        <BestSellingProductsSection />
      </div>
    </div>
  );
};

export default memo(AdminDashboardPage);
