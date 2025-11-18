import formatVND from "@/utils/formatVND";
import { memo } from "react";

const VoucherCard = () => {
  return (
    <div className="relative p-[24px] bg-gradient-to-bl from-red-100 to-blue-200 inline-block rounded-xl min-w-[400px] hover:scale-103 hover:shadow-lg transition-transform">
      <span className="absolute top-4 right-4 px-3 py-1 bg-green-100 inline-block rounded-full text-green-500 text-xs font-medium">
        Hoạt động
      </span>
      <div className="flex justify-between items-center mb-[8px]">
        <div className="">
          <p className="text-sm mb-[8px]">Mã giảm giá</p>
          <h4 className="font-semibold text-blue-500 px-2 py-2 bg-white rounded-lg border border-blue-500">
            SALE50
          </h4>
        </div>
      </div>
      <div>
        <h5 className="font-bold">Giảm 15%</h5>
        <p className="text-sm">
          <span className="font-semibold">Mã giảm giá</span>:{" "}
          <span>{formatVND(1000000)}</span>
        </p>
        <p className="text-sm">
          <span className="font-semibold">Giảm giá tối đa</span>:{" "}
          <span>{formatVND(1000000)}</span>
        </p>
        <p className="text-sm">
          <span className="font-semibold">Hạn sử dụng</span>:{" "}
          <span>23-12-2025</span>
          <span className="text-red-500"> đến</span> <span>25-12-2025</span>
        </p>
        <p className="text-sm mb-[8px]">
          <span className="font-semibold">Đã sử dụng</span>:{" "}
          <span>12/200</span>
        </p>
      </div>
      <div className="border-t-[1px] border-gray-400 mt-[16px]"></div>
      <div className="mt-[12px] flex gap-2">
        <button className="flex gap-2 items-center justify-center py-2 bg-white border-[2px] text-blue-600 border-blue-500 w-full rounded-2xl">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
            >
              <path d="M19.09 14.441v4.44a2.37 2.37 0 0 1-2.369 2.369H5.12a2.37 2.37 0 0 1-2.369-2.383V7.279a2.356 2.356 0 0 1 2.37-2.37H9.56" />
              <path d="M6.835 15.803v-2.165c.002-.357.144-.7.395-.953l9.532-9.532a1.36 1.36 0 0 1 1.934 0l2.151 2.151a1.36 1.36 0 0 1 0 1.934l-9.532 9.532a1.36 1.36 0 0 1-.953.395H8.197a1.36 1.36 0 0 1-1.362-1.362M19.09 8.995l-4.085-4.086" />
            </g>
          </svg>
          Sửa
        </button>
        <button className="flex gap-2 items-center justify-center py-2 bg-red-500 w-full rounded-2xl text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 1024 1024"
          >
            <path
              fill="currentColor"
              d="M160 256H96a32 32 0 0 1 0-64h256V95.936a32 32 0 0 1 32-32h256a32 32 0 0 1 32 32V192h256a32 32 0 1 1 0 64h-64v672a32 32 0 0 1-32 32H192a32 32 0 0 1-32-32zm448-64v-64H416v64zM224 896h576V256H224zm192-128a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32m192 0a32 32 0 0 1-32-32V416a32 32 0 0 1 64 0v320a32 32 0 0 1-32 32"
            />
          </svg>
          Xóa
        </button>
      </div>
    </div>
  );
};

export default memo(VoucherCard);
