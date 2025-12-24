"use client";
import { memo, useState } from "react";
import PersonalInfor from "./PersonalInfor";
import PersonalOrder from "./PersonalOrder";
import PersonalFavor from "./PersonalFavor";
import PersonalSetting from "./PersonalSetting";
import PersonalAddress from "./PersonalAddress";
import * as authServices from "../../../services/authServices";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
const PersonalDetailsSection = ({ userProfile }: { userProfile: any }) => {
  const [activeTab, setActiveTab] = useState("personalInfo");
  const router = useRouter();
  const handleLogout = async () => {
    try {
      const res = await authServices.logout();
      toast.success(res?.message || "Đăng xuất thành công!");
      router.push("/");
      localStorage.removeItem("access_token");
    } catch (error) {
      toast.error("Đăng xuất thất bại!");
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-4 gap-6">
        <div className="col-span-1 rounded-lg bg-white shadow-md overflow-hidden hover:bg-gray-50 h-fit">
          <button
            className={`w-full px-4 py-3 flex items-center gap-3 
          ${
            activeTab === "personalInfo"
              ? "bg-red-50 text-red-600 border-red-600 border-l-4 font-semibold"
              : ""
          }`}
            onClick={() => setActiveTab("personalInfo")}
          >
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
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </g>
            </svg>
            <span className="font-medium">Thông tin cá nhân</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="ml-auto"
            >
              <path
                fill="currentColor"
                d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
              />
            </svg>
          </button>
          <button
            className={`w-full px-4 py-3 flex items-center gap-3 
          ${
            activeTab === "addressInfo"
              ? "bg-red-50 text-red-600 border-red-600 border-l-4 font-semibold"
              : ""
          }`}
            onClick={() => setActiveTab("addressInfo")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 20 20"
            >
              <path
                fill="currentColor"
                d="m19.799 5.165l-2.375-1.83a2 2 0 0 0-.521-.237A2 2 0 0 0 16.336 3H9.5l.801 5h6.035c.164 0 .369-.037.566-.098s.387-.145.521-.236l2.375-1.832c.135-.091.202-.212.202-.334s-.067-.243-.201-.335M8.5 1h-1a.5.5 0 0 0-.5.5V5H3.664c-.166 0-.37.037-.567.099c-.198.06-.387.143-.521.236L.201 7.165C.066 7.256 0 7.378 0 7.5c0 .121.066.242.201.335l2.375 1.832c.134.091.323.175.521.235c.197.061.401.098.567.098H7v8.5a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5"
              />
            </svg>
            <span className="font-medium">Địa chỉ</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="ml-auto"
            >
              <path
                fill="currentColor"
                d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
              />
            </svg>
          </button>
          <button
            className={`w-full px-4 py-3 flex items-center gap-3 ${
              activeTab === "order"
                ? "bg-red-50 text-red-600 border-red-600 border-l-4 font-semibold"
                : ""
            }`}
            onClick={() => setActiveTab("order")}
          >
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
            <span className="font-medium">Đơn hàng của tôi</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="ml-auto"
            >
              <path
                fill="currentColor"
                d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
              />
            </svg>
          </button>
          <button
            className={`w-full px-4 py-3 flex items-center gap-3 ${
              activeTab === "favorites"
                ? "bg-red-50 text-red-600 border-red-600 border-l-4 font-semibold"
                : ""
            }`}
            onClick={() => setActiveTab("favorites")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812T2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412t-2.625 2.963T13.45 19.7zm0-2.7q2.4-2.15 3.95-3.687t2.45-2.675t1.25-2.026T20 8.15q0-1.5-1-2.5t-2.5-1q-1.175 0-2.175.662T12.95 7h-1.9q-.375-1.025-1.375-1.687T7.5 4.65q-1.5 0-2.5 1t-1 2.5q0 .875.35 1.763t1.25 2.025t2.45 2.675T12 18.3m0-6.825"
              />
            </svg>
            <span className="font-medium">Sản phẩm yêu thích</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="ml-auto"
            >
              <path
                fill="currentColor"
                d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
              />
            </svg>
          </button>
          <button
            className={`w-full px-4 py-3 flex items-center gap-3 ${
              activeTab === "settings"
                ? "bg-red-50 text-red-600 border-red-600 border-l-4 font-semibold"
                : ""
            }`}
            onClick={() => setActiveTab("settings")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M19.9 12.66a1 1 0 0 1 0-1.32l1.28-1.44a1 1 0 0 0 .12-1.17l-2-3.46a1 1 0 0 0-1.07-.48l-1.88.38a1 1 0 0 1-1.15-.66l-.61-1.83a1 1 0 0 0-.95-.68h-4a1 1 0 0 0-1 .68l-.56 1.83a1 1 0 0 1-1.15.66L5 4.79a1 1 0 0 0-1 .48L2 8.73a1 1 0 0 0 .1 1.17l1.27 1.44a1 1 0 0 1 0 1.32L2.1 14.1a1 1 0 0 0-.1 1.17l2 3.46a1 1 0 0 0 1.07.48l1.88-.38a1 1 0 0 1 1.15.66l.61 1.83a1 1 0 0 0 1 .68h4a1 1 0 0 0 .95-.68l.61-1.83a1 1 0 0 1 1.15-.66l1.88.38a1 1 0 0 0 1.07-.48l2-3.46a1 1 0 0 0-.12-1.17ZM18.41 14l.8.9l-1.28 2.22l-1.18-.24a3 3 0 0 0-3.45 2L12.92 20h-2.56L10 18.86a3 3 0 0 0-3.45-2l-1.18.24l-1.3-2.21l.8-.9a3 3 0 0 0 0-4l-.8-.9l1.28-2.2l1.18.24a3 3 0 0 0 3.45-2L10.36 4h2.56l.38 1.14a3 3 0 0 0 3.45 2l1.18-.24l1.28 2.22l-.8.9a3 3 0 0 0 0 3.98m-6.77-6a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
              />
            </svg>
            <span className="font-medium">Cài đặt</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="ml-auto"
            >
              <path
                fill="currentColor"
                d="m14.475 12l-7.35-7.35q-.375-.375-.363-.888t.388-.887t.888-.375t.887.375l7.675 7.7q.3.3.45.675t.15.75t-.15.75t-.45.675l-7.7 7.7q-.375.375-.875.363T7.15 21.1t-.375-.888t.375-.887z"
              />
            </svg>
          </button>
          <hr className="my-2 border-gray-200 " />
          <button className="w-full px-4 py-3 flex items-center gap-3 justify-center bg-red-600 text-gray-900 hover:bg-red-500 cursor-pointer rounded-b-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m17 7l-1.41 1.41L18.17 11H8v2h10.17l-2.58 2.58L17 17l5-5M4 5h8V3H4c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h8v-2H4z"
              />
            </svg>
            <span className="font-medium text-white" onClick={handleLogout}>
              Đăng xuất
            </span>
          </button>
        </div>
        {activeTab === "personalInfo" && (
          <PersonalInfor userProfile={userProfile} />
        )}
        {activeTab === "addressInfo" && (
          <PersonalAddress userProfile={userProfile} />
        )}
        {activeTab === "order" && <PersonalOrder />}
        {activeTab === "favorites" && <PersonalFavor />}
        {activeTab === "settings" && <PersonalSetting />}
      </div>
    </div>
  );
};

export default memo(PersonalDetailsSection);
