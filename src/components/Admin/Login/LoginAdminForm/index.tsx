"use client";
import { memo, useState } from "react";
import * as authServices from "../../../../services/authServices";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useRouter } from "next/navigation";

const LoginAdminForm = () => {
  const [showPass, setShowPass] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  const handleOnChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await authServices.login(formData.email, formData.password);
      if (res.status === "Err") {
        toast.error(res.message);
      } else {
        const token = res.access_token;
        const decoded: any = jwtDecode(token);
        if (decoded.role !== "Admin") {
          toast.error("Bạn không có quyền truy cập trang này!");
          return;
        }
        localStorage.setItem("access_token", res.access_token);

        toast.success(res.message);
        router.push("/admin/products");
      }
      return res;
    } catch (e) {}
  };
  return (
    <form onSubmit={handleLogin} action="">
      <div className="flex flex-col gap-2 mt-[24px]">
        <label
          htmlFor="username"
          className="text-[14px] font-semibold text-gray-700"
        >
          Tên đăng nhập
        </label>
        <input
          type="text"
          name="email"
          onChange={handleOnChange}
          placeholder="Nhập tên đăng nhập"
          className="px-[16px] py-[12px] border-[2px] border-gray-300 rounded-[12px] focus:outline-none focus:border-blue-500"
        />
      </div>
      <div className="flex flex-col gap-2 mt-[24px]">
        <label htmlFor="" className="text-[14px] font-semibold text-gray-700">
          Mật khẩu
        </label>
        <div className="relative w-full">
          <input
            type={showPass ? "text" : "password"}
            name="password"
            onChange={handleOnChange}
            placeholder="Nhập mật khẩu"
            className="px-[16px] py-[12px] w-full border-[2px] border-gray-300 rounded-[12px] focus:outline-none focus:border-blue-500"
          />
          {showPass ? (
            <svg
              onClick={() => setShowPass(!showPass)}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M10.94 6.08A7 7 0 0 1 12 6c3.18 0 6.17 2.29 7.91 6a15 15 0 0 1-.9 1.64a1 1 0 0 0-.16.55a1 1 0 0 0 1.86.5a16 16 0 0 0 1.21-2.3a1 1 0 0 0 0-.79C19.9 6.91 16.1 4 12 4a8 8 0 0 0-1.4.12a1 1 0 1 0 .34 2ZM3.71 2.29a1 1 0 0 0-1.42 1.42l3.1 3.09a14.6 14.6 0 0 0-3.31 4.8a1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20a9.26 9.26 0 0 0 5.05-1.54l3.24 3.25a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Zm6.36 9.19l2.45 2.45A1.8 1.8 0 0 1 12 14a2 2 0 0 1-2-2a1.8 1.8 0 0 1 .07-.52M12 18c-3.18 0-6.17-2.29-7.9-6a12.1 12.1 0 0 1 2.7-3.79L8.57 10A4 4 0 0 0 14 15.43L15.59 17A7.24 7.24 0 0 1 12 18"
              />
            </svg>
          ) : (
            <svg
              onClick={() => setShowPass(!showPass)}
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer"
            >
              <path
                fill="currentColor"
                d="M21.92 11.6C19.9 6.91 16.1 4 12 4s-7.9 2.91-9.92 7.6a1 1 0 0 0 0 .8C4.1 17.09 7.9 20 12 20s7.9-2.91 9.92-7.6a1 1 0 0 0 0-.8M12 18c-3.17 0-6.17-2.29-7.9-6C5.83 8.29 8.83 6 12 6s6.17 2.29 7.9 6c-1.73 3.71-4.73 6-7.9 6m0-10a4 4 0 1 0 4 4a4 4 0 0 0-4-4m0 6a2 2 0 1 1 2-2a2 2 0 0 1-2 2"
              />
            </svg>
          )}
        </div>
      </div>
      <button className="py-[12px] w-full bg-blue-600 text-white font-bold mt-[24px] rounded-[12px]">
        Đăng nhập
      </button>
    </form>
  );
};

export default memo(LoginAdminForm);
