"use client";
import { memo } from "react";

const PaymenMethod = ({ formData, setFormData }: any) => {
  const handlePaymentChange = (method: string) => {
    setFormData((prev: any) => ({
      ...prev,
      payment_method: method,
    }));
  };

  return (
    <div className="p-[16px] bg-blue-50 border border-blue-200 rounded-lg">
      <p className="text-[14px] text-blue-900 font-semibold mb-[8px] flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 32 32"
        >
          <path
            fill="currentColor"
            d="M2 9.5A4.5 4.5 0 0 1 6.5 5h19A4.5 4.5 0 0 1 30 9.5v13a4.5 4.5 0 0 1-4.5 4.5h-19A4.5 4.5 0 0 1 2 22.5zM6.5 7A2.5 2.5 0 0 0 4 9.5V11h24V9.5A2.5 2.5 0 0 0 25.5 7zM4 22.5A2.5 2.5 0 0 0 6.5 25h19a2.5 2.5 0 0 0 2.5-2.5V13H4zM21 19h3a1 1 0 1 1 0 2h-3a1 1 0 1 1 0-2"
          />
        </svg>
        Phương thức thanh toán
      </p>
      <div className="space-y-2">
        <div
          onClick={() => handlePaymentChange("COD")}
          className={`p-[16px] rounded-[10px] cursor-pointer ${
            formData.payment_method === "COD"
              ? "bg-red-50 border-[1px] border-red-500"
              : "bg-gray-50 hover:bg-gray-100"
          }`}
        >
          <div className="flex items-center gap-2">
            <input
              type="radio"
              checked={formData.payment_method === "COD"}
              onChange={() => handlePaymentChange("COD")}
            />
            <div className="p-[12px] bg-white rounded-[10px]">
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
                  strokeWidth="1.5"
                >
                  <path d="M15.75 9.163a.52.52 0 0 1-.271.457a.55.55 0 0 1-.54-.007L12 8.25L9.033 9.691a.544.544 0 0 1-.713-.207a.5.5 0 0 1-.07-.259V.75h7.5zm1.5 11.087v-6m-3 6v-1.379m-3 1.379v-5.781" />
                  <path d="M2.25.75h19.5s1.5 0 1.5 1.5v19.5s0 1.5-1.5 1.5H2.25s-1.5 0-1.5-1.5V2.25s0-1.5 1.5-1.5m12 15.676v-1.957m6 5.562v-1.379m0-2.445V14.25" />
                </g>
              </svg>
            </div>
            <div>
              <h6 className="font-semibold">Thanh toán khi nhận hàng (COD)</h6>
              <p className="text-[12px] text-gray-600">
                Thanh toán tiền mặt khi nhận hàng
              </p>
            </div>
          </div>
        </div>
        <div
          onClick={() => handlePaymentChange("BANK")}
          className={`p-[16px] rounded-[10px] cursor-pointer ${
            formData.payment_method === "BANK"
              ? "bg-red-50 border-[1px] border-red-500"
              : "bg-gray-50 hover:bg-gray-100"
          }`}
        >
          <div className="flex items-center gap-2">
            <input
              type="radio"
              checked={formData.payment_method === "BANK"}
              onChange={() => handlePaymentChange("BANK")}
            />
            <div className="p-[12px] bg-white rounded-[10px]">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M2 20h20v2H2zm2-8h2v7H4zm5 0h2v7H9zm4 0h2v7h-2zm5 0h2v7h-2zM2 7l10-5l10 5v4H2zm2 1.236V9h16v-.764l-8-4zM12 8a1 1 0 1 1 0-2a1 1 0 0 1 0 2"
                />
              </svg>
            </div>
            <div>
              <h6 className="font-semibold">Chuyển khoản ngân hàng</h6>
              <p className="text-[12px] text-gray-600">
                Chuyển khoản qua tài khoản ngân hàng
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(PaymenMethod);
