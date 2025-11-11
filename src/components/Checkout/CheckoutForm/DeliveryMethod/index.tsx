"use client";
import { memo, useState } from "react";

const DeliveryMethod = () => {
  const [selectedMethod, setSelectedMethod] = useState("standard");
  return (
    <div className="p-[16px] bg-blue-50 border border-blue-200 rounded-lg">
      <p className="text-[14px] text-blue-900 font-semibold mb-[8px]">
        Phương thức giao hàng
      </p>
      {/* Giao hàng tiêu chuẩn */}
      <button
        type="button"
        onClick={() => setSelectedMethod("standard")}
        className={`shadow-xs rounded-xl mb-[12px] w-full ${
          selectedMethod === "standard"
            ? "bg-white border-[2px] border-red-500 "
            : "bg-blue-50 border-[1px] border-blue-200 hover:bg-white hover:shadow-md"
        }`}
      >
        <div className="flex items-center gap-3 p-3 justify-between">
          <div className="flex items-center gap-3 ">
            <input
              type="radio"
              name="delivery"
              checked={selectedMethod === "standard"}
              onChange={() => setSelectedMethod("standard")}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-gray-500"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M4.25 3.25A2.25 2.25 0 0 0 2 5.5V16a2.25 2.25 0 0 0 2.25 2.25h.052a3.066 3.066 0 0 0 6.026 0h3.724a3.066 3.066 0 0 0 6.026 0H22a.75.75 0 0 0 0-1.5v-4.345c0-.45-.134-.889-.386-1.26l-2.547-3.766a2.25 2.25 0 0 0-1.863-.989H15.75V5.5a2.25 2.25 0 0 0-2.25-2.25zm3.065 11.37a3.07 3.07 0 0 0-2.92 2.13H4.25A.75.75 0 0 1 3.5 16V5.5a.75.75 0 0 1 .75-.75h9.25a.75.75 0 0 1 .75.75v10.97q-.06.137-.105.28h-3.91a3.07 3.07 0 0 0-2.92-2.13m9.75 0c-.47 0-.917.106-1.315.296v-2.221h4.75v4.055h-.515a3.07 3.07 0 0 0-2.92-2.13m2.772-3.425H15.75V7.89h1.454a.75.75 0 0 1 .62.33zm-4.337 6.49a1.565 1.565 0 1 1 3.13 0a1.565 1.565 0 0 1-3.13 0m-9.75 0a1.565 1.565 0 1 1 3.13 0a1.565 1.565 0 0 1-3.13 0"
                clipRule="evenodd"
              />
            </svg>
            <div className="">
              <h6 className="font-semibold mb-[4px]">Giao hàng tiêu chuẩn</h6>{" "}
              <p className="text-gray-600 flex items-center gap-1 text-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12" />
                    <path
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeWidth="2"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeWidth="2"
                      d="M12 6.5V12l3 3"
                    />
                  </g>
                </svg>
                3-5 ngày
              </p>
            </div>
          </div>
          <div className="text-red-500 font-bold text-[14px]">Miễn phí</div>
        </div>
      </button>
      {/* Giao hàng nhanh */}
      <button
        type="button"
        onClick={() => setSelectedMethod("fast")}
        className={`shadow-xs rounded-xl mb-[12px] w-full ${
          selectedMethod === "fast"
            ? "bg-white border-[2px] border-red-500 "
            : "bg-blue-50 border-[1px] border-blue-200 hover:bg-white hover:shadow-md"
        }`}
      >
        <div className="flex items-center gap-3 p-3 justify-between">
          <div className="flex items-center gap-3 ">
            <input
              type="radio"
              name="delivery"
              checked={selectedMethod === "fast"}
              onChange={() => setSelectedMethod("fast")}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="text-gray-500"
            >
              <path
                fill="currentColor"
                d="M7 20q-1.25 0-2.125-.875T4 17H1.5l.45-2h2.825q.425-.475 1-.737T7 14t1.225.263t1 .737H13.4l2.1-9H4.55l.1-.425q.15-.7.687-1.137T6.6 4H18l-.925 4H20l3 4l-1 5h-2q0 1.25-.875 2.125T17 20t-2.125-.875T14 17h-4q0 1.25-.875 2.125T7 20m8.925-7h4.825l.1-.525L19 10h-2.375zm-.475-6.825L15.5 6l-2.1 9l.05-.175l.85-3.65zM.5 13.325l.5-2h5.5l-.5 2zm2-3.65l.5-2h6.5l-.5 2zM7 18q.425 0 .713-.288T8 17t-.288-.712T7 16t-.712.288T6 17t.288.713T7 18m10 0q.425 0 .713-.288T18 17t-.288-.712T17 16t-.712.288T16 17t.288.713T17 18"
              />
            </svg>
            <div className="">
              <h6 className="font-semibold mb-[4px]">Giao hàng nhanh</h6>{" "}
              <p className="text-gray-600 flex items-center gap-1 text-[12px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                >
                  <g fill="none">
                    <path d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12" />
                    <path
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeWidth="2"
                      d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12Z"
                    />
                    <path
                      stroke="currentColor"
                      strokeLinecap="square"
                      strokeWidth="2"
                      d="M12 6.5V12l3 3"
                    />
                  </g>
                </svg>
                1-2 ngày
              </p>
            </div>
          </div>
          <div className="text-red-500 font-bold text-[14px]">Miễn phí</div>
        </div>
      </button>
    </div>
  );
};

export default memo(DeliveryMethod);
