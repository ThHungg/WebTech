"use client";
import { memo, useState } from "react";
import LoginGoogle from "../LoginGoogle";

const LoginForm = () => {
  const [showPass, setShowPass] = useState(false);
  const handleShowPass = () => {
    setShowPass(!showPass);
  };
  return (
    <>
      <form className="mb-[16px]">
        {/* Email */}
        <div className="mb-[16px]">
          <label
            htmlFor="email"
            className="text-[15px] mb-[8px] block font-medium"
          >
            Email
          </label>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-3 text-gray-400"
            >
              <path
                fill="currentColor"
                d="M2 6a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2zm3.519 0L12 11.671L18.481 6zM20 7.329l-7.341 6.424a1 1 0 0 1-1.318 0L4 7.329V18h16z"
              />
            </svg>
            <input
              type="email"
              placeholder="Vui lòng nhập email của bạn"
              className="w-full py-[13px] pl-[40px] pr-[16px] rounded-lg border-2 border-gray-300 focus:border-2 focus:border-[#E7000B] focus:outline-none"
            />
          </div>
        </div>
        {/* Mật khẩu */}
        <div className="mb-[16px]">
          <label
            htmlFor="password"
            className="text-[15px] mb-[8px] block font-medium"
          >
            Mật khẩu
          </label>
          <div className="relative">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="absolute left-0 top-1/2 transform -translate-y-1/2 ml-3 text-gray-400"
            >
              <g fill="none" stroke="currentColor">
                <path
                  strokeWidth="1.5"
                  d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z"
                />
                <path
                  strokeLinecap="round"
                  strokeWidth="1.5"
                  d="M6 10V8a6 6 0 0 1 11.811-1.5"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16h.009m3.982 0H12m3.991 0H16"
                />
              </g>
            </svg>
            <input
              type={showPass ? "text" : "password"}
              placeholder="Vui lòng nhập mật khẩu của bạn"
              className="w-full py-[13px] pl-[40px] pr-[16px] rounded-lg border-2 border-gray-300 focus:border-2 focus:border-[#E7000B] focus:outline-none"
            />
            <svg
              onClick={handleShowPass}
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-3 text-gray-400 cursor-pointer"
            >
              {showPass ? (
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
        {/* Ghi nhớ mật khẩu & Quên mật khẩu */}
        <div className="flex items-center justify-between mb-[16px]">
          <label className="flex items-center">
            <input
              className="rounded border-gray-300 text-red-600 focus:ring-red-600"
              type="checkbox"
            />
            <span className="ml-2 text-sm">Ghi nhớ mật khẩu</span>
          </label>
          <a href="#" className="text-sm text-red-600 hover:underline">
            Quên mật khẩu?
          </a>
        </div>
        <button className="flex items-center justify-center gap-2 w-full bg-[#E7000B] py-[12px] text-white font-semibold rounded-xl hover:bg-red-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"
            />
          </svg>{" "}
          Đăng nhập
        </button>
      </form>
      <LoginGoogle />
    </>
  );
};

export default memo(LoginForm);
