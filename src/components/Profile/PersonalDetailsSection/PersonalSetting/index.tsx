"use client";
import { useState } from "react";
import * as authServices from "../../../../services/authServices";
import { toast } from "react-toastify";

const PersonalSetting = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showOldPass, setShowOldPass] = useState(false);
  const [showNewPass, setShowNewPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const handleShowOldPass = () => {
    setShowOldPass(!showOldPass);
  };
  
  const handleShowNewPass = () => {
    setShowNewPass(!showNewPass);
  };
  const handleShowConfirmPass = () => {
    setShowConfirmPass(!showConfirmPass);
  };

  const handleChangePassword = async (e: React.FormEvent) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      toast.error("Mật khẩu mới không khớp!");
      return;
    }
    try {
      const res = await authServices.changePassword({
        oldPassword,
        newPassword,
      });
      toast.success(res?.message || "Đổi mật khẩu thành công!");
      setOldPassword("");
      setNewPassword("");
      setConfirmPassword("");
    } catch (error: any) {
      toast.error(error?.message || "Đổi mật khẩu thất bại!");
    }
  };
  
  return (
    <div className="col-span-3 bg-white rounded-lg shadow-sm p-6">
      <h5 className="font-bold text-xl mb-4">Đổi mật khẩu</h5>
      <form onSubmit={handleChangePassword}>
        <div className="mb-4">
          <label
            htmlFor="oldPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Mật khẩu cũ
          </label>
          <div className="relative">
            <input
              type={showOldPass ? "text" : "password"}
              id="oldPassword"
              value={oldPassword}
              placeholder="*********"
              onChange={(e) => setOldPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            <svg
              onClick={handleShowOldPass}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 text-gray-400 cursor-pointer"
            >
              {showOldPass ? (
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path d="m2.75 21.25l18.5-18.5" />
                  <path
                    fill="currentColor"
                    d="M14.625 12a2.625 2.625 0 0 1-4.481 1.856l3.712-3.712c.475.475.769 1.131.769 1.856Z"
                  />
                  <path d="M6.924 17.076c1.364.993 3.057 1.734 5.076 1.734c4.813 0 7.771-4.199 8.82-6.002a1.6 1.6 0 0 0-.001-1.615c-.609-1.046-1.86-2.898-3.742-4.27m-2.81-1.409A8 8 0 0 0 12 5.19c-4.808 0-7.768 4.197-8.818 6.001a1.6 1.6 0 0 0 0 1.617c.326.56.836 1.35 1.528 2.173" />
                </g>
              ) : (
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M3.182 12.808C4.233 14.613 7.195 18.81 12 18.81c4.813 0 7.77-4.199 8.82-6.002a1.6 1.6 0 0 0-.001-1.615C19.769 9.389 16.809 5.19 12 5.19s-7.768 4.197-8.818 6.001a1.6 1.6 0 0 0 0 1.617Z" />
                  <path d="M12 14.625a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25Z" />
                </g>
              )}
            </svg>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="newPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Mật khẩu mới
          </label>
          <div className="relative">
            <input
              type={showNewPass ? "text" : "password"}
              id="newPassword"
              value={newPassword}
              placeholder="*********"
              onChange={(e) => setNewPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            <svg
              onClick={handleShowNewPass}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 text-gray-400 cursor-pointer"
            >
              {showNewPass ? (
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path d="m2.75 21.25l18.5-18.5" />
                  <path
                    fill="currentColor"
                    d="M14.625 12a2.625 2.625 0 0 1-4.481 1.856l3.712-3.712c.475.475.769 1.131.769 1.856Z"
                  />
                  <path d="M6.924 17.076c1.364.993 3.057 1.734 5.076 1.734c4.813 0 7.771-4.199 8.82-6.002a1.6 1.6 0 0 0-.001-1.615c-.609-1.046-1.86-2.898-3.742-4.27m-2.81-1.409A8 8 0 0 0 12 5.19c-4.808 0-7.768 4.197-8.818 6.001a1.6 1.6 0 0 0 0 1.617c.326.56.836 1.35 1.528 2.173" />
                </g>
              ) : (
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M3.182 12.808C4.233 14.613 7.195 18.81 12 18.81c4.813 0 7.77-4.199 8.82-6.002a1.6 1.6 0 0 0-.001-1.615C19.769 9.389 16.809 5.19 12 5.19s-7.768 4.197-8.818 6.001a1.6 1.6 0 0 0 0 1.617Z" />
                  <path d="M12 14.625a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25Z" />
                </g>
              )}
            </svg>
          </div>
        </div>
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Xác nhận mật khẩu mới
          </label>
          <div className="relative">
            <input
              type={showConfirmPass ? "text" : "password"}
              id="confirmPassword"
              value={confirmPassword}
              placeholder="*********"
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              required
            />
            <svg
              onClick={handleShowConfirmPass}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 text-gray-400 cursor-pointer"
            >
              {showConfirmPass ? (
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.5"
                >
                  <path d="m2.75 21.25l18.5-18.5" />
                  <path
                    fill="currentColor"
                    d="M14.625 12a2.625 2.625 0 0 1-4.481 1.856l3.712-3.712c.475.475.769 1.131.769 1.856Z"
                  />
                  <path d="M6.924 17.076c1.364.993 3.057 1.734 5.076 1.734c4.813 0 7.771-4.199 8.82-6.002a1.6 1.6 0 0 0-.001-1.615c-.609-1.046-1.86-2.898-3.742-4.27m-2.81-1.409A8 8 0 0 0 12 5.19c-4.808 0-7.768 4.197-8.818 6.001a1.6 1.6 0 0 0 0 1.617c.326.56.836 1.35 1.528 2.173" />
                </g>
              ) : (
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                >
                  <path d="M3.182 12.808C4.233 14.613 7.195 18.81 12 18.81c4.813 0 7.77-4.199 8.82-6.002a1.6 1.6 0 0 0-.001-1.615C19.769 9.389 16.809 5.19 12 5.19s-7.768 4.197-8.818 6.001a1.6 1.6 0 0 0 0 1.617Z" />
                  <path d="M12 14.625a2.625 2.625 0 1 0 0-5.25a2.625 2.625 0 0 0 0 5.25Z" />
                </g>
              )}
            </svg>
          </div>
        </div>
        <button
          type="submit"
          className="w-full flex justify-center py-2 px-4 my-8 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Đổi mật khẩu
        </button>
      </form>
    </div>
  );
};
export default PersonalSetting;