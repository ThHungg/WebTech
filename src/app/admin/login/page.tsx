"use client";
import LoginAdminForm from "@/components/Admin/Login/LoginAdminForm";
import { memo, useState } from "react";

const AdminLoginPage = () => {
  return (
    <div className="bg-gradient-to-r from-[#EEF5FE] to-[#EEF2FF] min-h-screen flex items-center justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="p-[32px] border-[1px] bg-white border-gray-100 shadow-lg rounded-[16px]">
          <div className="">
            <img
              src="https://png.pngtree.com/png-clipart/20250309/original/pngtree-logos-are-prohibited-red-logo-ban-vector-png-image_20615554.png"
              alt=""
              className="w-[64px] h-[64px] object-cover mx-auto mb-[12px]"
            />
            <h2 className="font-bold text-center mb-[8px]">Admin Login</h2>
            <p className="text-[16px] text-gray-400 text-center">
              Đăng nhập để quản lý hệ thống
            </p>
          </div>
          <LoginAdminForm />
        </div>
      </div>
    </div>
  );
};

export default memo(AdminLoginPage);
