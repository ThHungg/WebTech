"use client";
import Link from "next/link";
import { memo, useState } from "react";

const SidebarAdmin = () => {
  const [selectedMenu, setSelectedMenu] = useState("Dashboard");
  const listMenuAdmin = [
    {
      name: "Dashboard",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M8.557 2.75H4.682A1.93 1.93 0 0 0 2.75 4.682v3.875a1.94 1.94 0 0 0 1.932 1.942h3.875a1.94 1.94 0 0 0 1.942-1.942V4.682A1.94 1.94 0 0 0 8.557 2.75m10.761 0h-3.875a1.94 1.94 0 0 0-1.942 1.932v3.875a1.943 1.943 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942V4.682a1.93 1.93 0 0 0-1.932-1.932m0 10.75h-3.875a1.94 1.94 0 0 0-1.942 1.933v3.875a1.94 1.94 0 0 0 1.942 1.942h3.875a1.94 1.94 0 0 0 1.932-1.942v-3.875a1.93 1.93 0 0 0-1.932-1.932M8.557 13.5H4.682a1.943 1.943 0 0 0-1.932 1.943v3.875a1.93 1.93 0 0 0 1.932 1.932h3.875a1.94 1.94 0 0 0 1.942-1.932v-3.875a1.94 1.94 0 0 0-1.942-1.942"
          />
        </svg>
      ),
      link: "/admin/dashboard",
    },
    {
      name: "Sản phẩm",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 2048 2048"
        >
          <path
            fill="currentColor"
            d="m960 120l832 416v1040l-832 415l-832-415V536zm625 456L960 264L719 384l621 314zM960 888l238-118l-622-314l-241 120zM256 680v816l640 320v-816zm768 1136l640-320V680l-640 320z"
          />
        </svg>
      ),
      link: "/admin/products",
    },
    {
      name: "Người dùng",
      icon: (
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
      ),
      link: "/admin/users",
    },
  ];
  return (
    <div className="max-w-64 w-full border-r border-gray-200 min-h-screen relative">
      <div className="p-[24px] border-b border-gray-200 flex gap-2">
        <img
          src="https://h5m4.c19.e2-1.dev/image-video/logo/logocertapple.png"
          alt=""
          className="w-[42] h-[42px] object-cover"
        />
        <div className="">
          <h5 className="font-bold">TechShop</h5>
          <p className="text-[12px] text-gray-500">Admin Panel</p>
        </div>
      </div>
      <div className="p-[16px]">
        {listMenuAdmin.map((item, index) => (
          <Link
            href={item.link}
            className={`px-[16px] py-[12px] mb-[4px]  w-full rounded-lg flex items-center gap-2 
          ${
            selectedMenu === item.name
              ? "bg-blue-600 text-white font-medium font-semibold"
              : "text-black"
          }`}
            key={index}
            onClick={() => setSelectedMenu(item.name)}
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>
      <div className="p-[16px] border-t border-gray-200 absolute bottom-0 w-full text-center">
        <button className="text-red-500 font-semibold px-[16px] py-[12px] flex items-center gap-2 mx-auto hover:bg-red-100 rounded-lg w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h7v2H5v14h7v2zm11-4l-1.375-1.45l2.55-2.55H9v-2h8.175l-2.55-2.55L16 7l5 5z"
            />
          </svg>{" "}
          Đăng xuất
        </button>
      </div>
    </div>
  );
};

export default memo(SidebarAdmin);
