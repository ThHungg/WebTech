"use client";
import LoginForm from "@/components/Auth/LoginForm";
import RegisterForm from "@/components/Auth/RegisterForm";
import { memo, useState } from "react";

const LoginPage = () => {
  const infor = [
    { title: "100%", description: "Sản phẩm chính hãng" },
    { title: "500K +", description: "Khách hàng tin dùng" },
    { title: "50+", description: "Cửa hàng toàn quốc" },
    { title: "4.8", description: "Đánh giá tích cực" },
  ];

  const [activeTab, setActiveTab] = useState("login");
  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };
  return (
    <div className="p-[16px] min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 flex items-center justify-center">
      <div className="w-full max-w-6xl grid grid-cols-2 gap-8 items-center">
        <div className="w-full flex items-center flex-col text-center">
          <img
            src="https://png.pngtree.com/png-clipart/20250309/original/pngtree-logos-are-prohibited-red-logo-ban-vector-png-image_20615554.png"
            alt=""
            className="w-[96px] h-[96px] mx-auto mb-[24px]"
          />
          <h2 className="whitespace-nowrap mb-[16px]">
            Chào mừng đến với TechGear
          </h2>
          <p className="text-[18px] leading-[28px] mb-[32px]">
            Hệ thống bán lẻ công nghệ hàng đầu Việt Nam
          </p>
          <div className="mx-[56px] w-full grid grid-cols-2 gap-4">
            {infor.map((item, index) => (
              <div key={index} className="bg-white shadow-lg p-4 rounded-xl">
                <div className="text-3xl font-bold text-red-600 mb-1">
                  {item.title}
                </div>
                <div className="text-sm text-gray-600">{item.description}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full max-w-md mx-auto">
          <div className="p-[32px] bg-white shadow-lg rounded-lg">
            <div className="flex rounded-lg bg-gray-100 p-1 mb-6">
              <button
                className={`flex-1 p-2 rounded-lg ${
                  activeTab === "login"
                    ? "bg-white text-[#E80007] font-semibold shadow"
                    : ""
                }`}
                onClick={() => handleTabChange("login")}
              >
                Đăng nhập
              </button>
              <button
                className={`flex-1 p-2 rounded-lg ${
                  activeTab === "register"
                    ? "bg-white text-[#E80007] font-semibold shadow"
                    : ""
                }`}
                onClick={() => handleTabChange("register")}
              >
                Đăng ký
              </button>
            </div>
            {activeTab === "login" && <LoginForm />}
            {activeTab === "register" && <RegisterForm />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(LoginPage);
