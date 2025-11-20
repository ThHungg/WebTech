import { memo } from "react";

const UserDetailModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-lg  w-full">
        <div className="flex justify-between p-[24px] ">
          {" "}
          <h5 className="font-bold"> Thông tin người dùng</h5>
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
        <div className=" border-b border-gray-200"></div>
        <div className="p-[16px]">
          <div className="flex gap-3 mb-[12px]">
            <div className="w-[80px] h-[80px] bg-blue-600 rounded-lg text-center p-2 flex justify-center items-center">
              <h3 className="font-bold text-white">Đ</h3>
            </div>
            <div className="flexflex-col">
              <h4 className="font-semibold">Đặng Thành Hưng</h4>
              <div className="flex justify-start gap-2 mt-2">
                <span className="bg-blue-100 rounded-2xl font-semibold px-3 py-1 text-[12px] text-blue-500">
                  Nhân viên
                </span>
                <span className="bg-green-100 rounded-2xl font-semibold px-3 py-1 text-[12px] text-green-600">
                  Hoạt động
                </span>
              </div>
            </div>
             
          </div>
          {/* Email */}
          <div className="p-[12px] bg-gray-50 rounded-xl flex items-center gap-3 mb-[12px] shadow-md hover:shadow-lg hover:scale-102 border border-gray-100 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M5 5h13a3 3 0 0 1 3 3v9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V8a3 3 0 0 1 3-3m0 1c-.5 0-.94.17-1.28.47l7.78 5.03l7.78-5.03C18.94 6.17 18.5 6 18 6zm6.5 6.71L3.13 7.28C3.05 7.5 3 7.75 3 8v9a2 2 0 0 0 2 2h13a2 2 0 0 0 2-2V8c0-.25-.05-.5-.13-.72z"
              />
            </svg>
            <div className="">
              <h6 className="text-gray-600 !text-[12px]">Email</h6>
              <p className="font-semibold">hungthanhdang05@gmail.com</p>
            </div>
          </div>
          {/* SĐT */}
          <div className="p-[12px] bg-gray-50 rounded-xl flex items-center gap-3 mb-[12px] shadow-md hover:shadow-lg hover:scale-102 border border-gray-100 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.44 13c-.22 0-.45-.07-.67-.12a9.4 9.4 0 0 1-1.31-.39a2 2 0 0 0-2.48 1l-.22.45a12.2 12.2 0 0 1-2.66-2a12.2 12.2 0 0 1-2-2.66l.42-.28a2 2 0 0 0 1-2.48a10 10 0 0 1-.39-1.31c-.05-.22-.09-.45-.12-.68a3 3 0 0 0-3-2.49h-3a3 3 0 0 0-3 3.41a19 19 0 0 0 16.52 16.46h.38a3 3 0 0 0 2-.76a3 3 0 0 0 1-2.25v-3a3 3 0 0 0-2.47-2.9m.5 6a1 1 0 0 1-.34.75a1.05 1.05 0 0 1-.82.25A17 17 0 0 1 4.07 5.22a1.1 1.1 0 0 1 .25-.82a1 1 0 0 1 .75-.34h3a1 1 0 0 1 1 .79q.06.41.15.81a11 11 0 0 0 .46 1.55l-1.4.65a1 1 0 0 0-.49 1.33a14.5 14.5 0 0 0 7 7a1 1 0 0 0 .76 0a1 1 0 0 0 .57-.52l.62-1.4a14 14 0 0 0 1.58.46q.4.09.81.15a1 1 0 0 1 .79 1Z"
              />
            </svg>
            <div className="">
              <h6 className="text-gray-600 !text-[12px]">Số điện thoại</h6>
              <p className="font-semibold">0348910968</p>
            </div>
          </div>
          {/* Địa chỉ */}
          <div className="p-[12px] bg-gray-50 rounded-xl flex items-center gap-3 mb-[12px] shadow-md hover:shadow-lg hover:scale-102 border border-gray-100 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 32 32"
            >
              <g
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
              >
                <circle cx="16" cy="11" r="4" />
                <path d="M24 15c-3 7-8 15-8 15s-5-8-8-15s2-13 8-13s11 6 8 13" />
              </g>
            </svg>
            <div className="">
              <h6 className="text-gray-600 !text-[12px]">Địa chỉ</h6>
              <p className="font-semibold">123 Nguyễn Xiển</p>
            </div>
          </div>
          {/* Ngày tham gia */}
          <div className="p-[12px] bg-gray-50 rounded-xl flex items-center gap-3 mb-[12px] shadow-md hover:shadow-lg hover:scale-102 border border-gray-100 transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19 19H5V8h14m-3-7v2H8V1H6v2H5c-1.11 0-2 .89-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2h-1V1m-1 11h-5v5h5z"
              />
            </svg>
            <div className="">
              <h6 className="text-gray-600 !text-[12px]">Ngày tham gia</h6>
                <p className="font-semibold">20/11/2025</p>
                </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(UserDetailModal);
