"use client"
import React, { useEffect, useState } from "react";
import * as authServices from "../../../../services/authServices";
import { toast } from "react-toastify";
import { formatAddress } from "@/utils/formatAddress";

const PersonalInfor = ({ userProfile }: { userProfile: any }) => {
  const [isEditing, setIsEditing] = useState(false);
  // lấy địa chỉ mặc định
  const defaultAddress =
    userProfile?.address?.find((addr: any) => addr.is_default) || null;  
   
  const [formData, setFormData] = useState({
    username: "",
    phone: "",
    email: "",
  });
  useEffect(() => {
    setFormData({
      username: userProfile?.data?.username || "",
      phone: userProfile?.data?.phone || "",
      email: userProfile?.data?.email || "",
    });
  }, [userProfile]);
  const handleInputChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSave = async () => {
    try {
      const userData = {
        username: formData.username,
        phone: formData.phone,
        email: formData.email,
      };

      await authServices.updateUser(userData);
      toast.success("Cập nhật thông tin thành công!");
      setIsEditing(false);
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Cập nhật thất bại!");
    }
  };

  return (
    <div className="col-span-3 bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center mb-4">
        <h5 className="font-bold text-xl">Thông tin cá nhân</h5>
        <div
          className={`px-4 py-2 rounded-xl text-white flex items-center gap-2 ${
            !isEditing ? "bg-red-600" : "bg-green-600"
          }`}
          onClick={() => {
            setIsEditing(!isEditing);
          }}
        >
          {isEditing ? (
            <div
              className="cursor-pointer flex items-center gap-2"
              onClick={handleSave}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 12 12"
              >
                <path
                  fill="currentColor"
                  d="M8.85 4.85a.5.5 0 0 0-.707-.707l-2.65 2.65l-1.65-1.65a.5.5 0 0 0-.707.707l2 2a.5.5 0 0 0 .707 0l3-3z"
                />
                <path
                  fill="currentColor"
                  fillRule="evenodd"
                  d="M12 6c0 3.31-2.69 6-6 6S0 9.31 0 6s2.69-6 6-6s6 2.69 6 6m-1 0c0 2.76-2.24 5-5 5S1 8.76 1 6s2.24-5 5-5s5 2.24 5 5"
                  clipRule="evenodd"
                />
              </svg>
              <span>Lưu</span>
            </div>
          ) : (
            <div className="cursor-pointer flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M16.293 2.293a1 1 0 0 1 1.414 0l4 4a1 1 0 0 1 0 1.414l-13 13A1 1 0 0 1 8 21H4a1 1 0 0 1-1-1v-4a1 1 0 0 1 .293-.707l10-10zM14 7.414l-9 9V19h2.586l9-9zm4 1.172L19.586 7L17 4.414L15.414 6z"
                />
              </svg>
              <span>Chỉnh sửa</span>
            </div>
          )}
        </div>
      </div>
      <div className="space-y-6">
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="username"
              className="text-sm font-medium text-gray-700  "
            >
              Họ và tên
            </label>
            <input
              id="username"
              name="username"
              type="text"
              value={formData.username}
              disabled={!isEditing}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1  text-lg"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-sm font-medium text-gray-700  "
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              disabled={!isEditing}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 text-lg  "
            />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-sm font-medium text-gray-700  "
            >
              Số điện thoại
            </label>
            <input
              id="phone"
              name="phone"
              type="text"
              value={formData.phone}
              disabled={!isEditing}
              onChange={handleInputChange}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 text-lg  "
            />
          </div>
          <div className="flex flex-col gap-2">
            <label
              htmlFor="dateOfBirth"
              className="text-sm font-medium text-gray-700  "
            >
              Ngày sinh
            </label>
            <input
              id="dateOfBirth"
              type="date"
              disabled={!isEditing}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 text-lg  "
            />
          </div>
        </div>

        <div className="w-full flex flex-col gap-2 ">
          <label
            htmlFor="diachi"
            className="text-sm font-medium text-gray-700 flex justify-between items-center "
          >
            Địa chỉ
          </label>
          <input
            id="diachi"
            type="text"
            value={formatAddress(defaultAddress)}
            disabled={!isEditing}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-1 text-lg  "
          />
        </div>
      </div>
      <div className="bg-orange-50 rounded-xl p-6 mt-8">
        <h5 className="font-bold  text-gray-900 mb-6">Thông tin thành viên</h5>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-sm">Hạng thành viên</span>
            <span className="font-bold text-red-600 text-lg">VIP Gold</span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-sm">Tổng chi tiêu</span>
            <span className="font-bold text-gray-900 text-lg">
              125.000.000 ₫
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-gray-500 text-sm">Ngày tham gia</span>
            <span className="font-bold text-gray-900 text-lg">01/2022</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default PersonalInfor;
