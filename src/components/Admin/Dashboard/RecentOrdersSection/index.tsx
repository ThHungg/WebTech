import { formatMillionVND } from "@/utils/formatMillionVND";
import { memo } from "react";

const RecentOrdersSection = () => {
  return (
    <div className="p-[24px] w-full border border-gray-100 shadow-lg rounded-2xl">
      <h5 className="font-bold flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="m12 21l8.131-4.208c.316-.164.474-.245.589-.366a1 1 0 0 0 .226-.373c.054-.159.054-.336.054-.692V7.533M12 21l-8.131-4.208c-.316-.164-.474-.245-.589-.366a1 1 0 0 1-.226-.373C3 15.894 3 15.716 3 15.359V7.533M12 21v-9.063m9-4.404l-9 4.404m9-4.404l-4.5-2.33M3 7.534l8.269-4.28c.268-.138.401-.208.542-.235a1 1 0 0 1 .378 0c.14.027.274.097.541.235l3.77 1.95M3 7.534l4.5 2.202m4.5 2.202L7.5 9.735m0 0l9-4.531m-9 4.531v2.202"
          />
        </svg>
        Đơn hàng gần đây
      </h5>
      <div className="">
        <div className="bg-gray-100 hover:bg-gray-200 rounded-lg flex justify-between p-[16px] mb-[12px] hover:translate-x-2 transform transition-all duration-300">
          <div className="">
            <h6 className="font-semibold">#ORD-0123</h6>
            <p className="text-[14px] text-gray-500">Đặng Thành Hưng</p>
            <p className="text-[12px] text-gray-500">17/11/2025 - 10:00 AM</p>
          </div>
          <div className="">
            <p className="font-semibold text-[16px]">
              {formatMillionVND(2500000)}
            </p>
            <p className="px-3 py-1 rounded-full bg-green-100 text-green-600 inline-flex gap-2 items-center font-medium text-[12px]">
              Hoàn thành
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(RecentOrdersSection);
