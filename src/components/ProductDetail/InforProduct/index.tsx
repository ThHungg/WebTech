"use client";
import AddToCart from "@/components/Common/AddToCart";
import BuyNow from "@/components/Common/BuyNow";
import Quantity from "@/components/Common/Quantity";
import StarRating from "@/components/Common/StarRating";
import WarrantySection from "@/components/Common/WarrantySection";
import formatVND from "@/utils/formatVND";
import { memo, useState } from "react";
import SpecialOffer from "../SpecialOffer";
import { formatPercentage } from "@/utils/formatPercentage";

const InforProduct = ({ productDetail }: { productDetail: any }) => {
  const [selectVersion, setSelectVersion] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const specifications = [
    "Intel Core i9-13980HX (24 nhân, 32 luồng)",
    "NVIDIA RTX 4070 8GB GDDR6",
    "32GB DDR5 4800MHz",
    "1TB SSD NVMe Gen4",
    '16" QHD 240Hz IPS',
    "Windows 11 Home",
  ];
  return (
    <div className="p-[24px] rounded-xl shadow-lg w-full bg-white border-[1px] border-gray-200">
      {/* Thong tin san pham */}
      <div className="mb-[16px]">
        <div className="flex items-center justify-between mb-[12px]">
          <p className="flex items-center gap-2 text-gray-600 text-[14px]">
            {" "}
            Thương hiệu:
            <span className="!text-red-500 font-semibold">
              {" "}
              {productDetail?.brand?.name}
            </span>
            <span>|</span>
            SKU: ASUS-ROG-G16-001
          </p>
          <div className="px-[8px] py-[4px] bg-[#DBFCE7] text-green-700 flex items-center rounded-xl w-max text-xs font-medium gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 16 16"
            >
              <polyline
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                points="2.75 8.75 6.25 12.25 13.25 4.75"
              />
            </svg>
            Chính hãng
          </div>
        </div>
        <h2 className="mb-[12px] font-bold">
          {productDetail?.name}{" "}
          <span className="font-semibold text-2xl">({productDetail?.variants[selectVersion]?.name})</span>
        </h2>
        <div className="flex gap-3">
          <div className="flex items-center gap-3 font-semibold">
            <StarRating rating={productDetail?.avg_rating} />{" "}
            {productDetail?.avg_rating}
          </div>
          <span className="text-gray-300">|</span>
          <p className="text-gray-600">127 đánh giá</p>
          <span className="text-gray-300">|</span>
          <p className="text-gray-600 flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 32 32"
              className="text-green-700 font-bold"
            >
              <path
                fill="currentColor"
                stroke="currentColor"
                strokeWidth="2"
                d="M20 8v2h6.586L18 18.586l-4.293-4.293a1 1 0 0 0-1.414 0L2 24.586L3.414 26L13 16.414l4.293 4.293a1 1 0 0 0 1.414 0L28 11.414V18h2V8Z"
              />
            </svg>
            {productDetail?.total_sold} đã bán
          </p>
        </div>
      </div>
      {/* Giá sản phẩm */}
      <div className="bg-red-50 p-[20px] rounded-xl border-[1px] border-red-300 mb-[24px]">
        <p className="text-[28px] font-black text-red-500 inline-flex items-baseline gap-2 mb-[8px]">
          {formatVND(productDetail?.variants[0]?.price)}
          <span className="text-[18px] text-gray-500 line-through">
            {formatVND(productDetail?.variants[0]?.original_price)}
          </span>

          <span className="flex items-center justify-center self-center ml-2 px-2 py-2 rounded-2xl bg-red-500 text-white text-[13px] font-bold leading-none">
            {Number(productDetail?.data?.variants[0]?.discount_percent) > 0
              ? `-${formatPercentage(
                  Number(productDetail?.data?.variants[0]?.discount_percent)
                )}`
              : Number(productDetail?.data?.variants[0]?.discount_amount) > 0
              ? `-${formatVND(
                  Number(productDetail?.data?.variants[0]?.discount_amount)
                )}`
              : ""}
          </span>
        </p>
        <div className="flex items-center gap-2 text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="22"
            viewBox="0 0 24 24"
            className=""
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m12 3l8 4.5v9L12 21l-8-4.5v-9zm0 9l8-4.5M12 12v9m0-9L4 7.5m12-2.25l-8 4.5"
            />
          </svg>
          <p className="">
            Còn{" "}
            <span className="!text-green-500 font-bold">
              {productDetail?.total_stock}
            </span>{" "}
            sản phẩm
          </p>
        </div>
      </div>
      {/*Chọn phiên bản sản phẩm */}
      <div className="mb-[24px]">
        <h5 className="flex items-center gap-2 font-bold mb-[12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z" />
              <circle cx="7.5" cy="7.5" r=".5" fill="currentColor" />
            </g>
          </svg>
          Chọn phiên bản sản phẩm
        </h5>
        <div className="space-y-2">
          <button
            onClick={() => setSelectVersion(0)}
            className={`p-[16px] border-[2px] border-gray-300 rounded-lg w-full ${
              selectVersion === 0 ? "border-red-300 bg-red-50" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-start">
                <p className="text-[18px] font-semibold">Cấu hình tiêu chuẩn</p>
                <p className="text-[16px] font-bold text-red-500">
                  {formatVND(46000000)}
                </p>
              </div>
              {selectVersion === 0 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="text-red-500"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    points="2.75 8.75 6.25 12.25 13.25 4.75"
                  />
                </svg>
              )}
            </div>
          </button>
          <button
            onClick={() => setSelectVersion(1)}
            className={`p-[16px] border-[2px] border-gray-300 rounded-lg w-full ${
              selectVersion === 1 ? "border-red-300 bg-red-50" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-start">
                <p className="text-[18px] font-semibold">Cấu hình 2</p>
                <p className="text-[16px] font-bold text-red-500">
                  {formatVND(46000000)}
                </p>
              </div>
              {selectVersion === 1 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="text-red-500"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    points="2.75 8.75 6.25 12.25 13.25 4.75"
                  />
                </svg>
              )}
            </div>
          </button>
          <button
            onClick={() => setSelectVersion(2)}
            className={`p-[16px] border-[2px] border-gray-300 rounded-lg w-full ${
              selectVersion === 2 ? "border-red-300 bg-red-50" : ""
            }`}
          >
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-start">
                <p className="text-[18px] font-semibold">Cấu hình 3</p>
                <p className="text-[16px] font-bold text-red-500">
                  {formatVND(46000000)}
                </p>
              </div>
              {selectVersion === 2 && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1em"
                  height="1em"
                  viewBox="0 0 16 16"
                  className="text-red-500"
                >
                  <polyline
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    points="2.75 8.75 6.25 12.25 13.25 4.75"
                  />
                </svg>
              )}
            </div>
          </button>
        </div>
      </div>
      {/* Thông tin nổi bật */}
      <div className="mb-[24px]">
        <h5 className="flex items-center gap-2 font-bold mb-[12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M10.825 22q-.675 0-1.162-.45t-.588-1.1L8.85 18.8q-.325-.125-.612-.3t-.563-.375l-1.55.65q-.625.275-1.25.05t-.975-.8l-1.175-2.05q-.35-.575-.2-1.225t.675-1.075l1.325-1Q4.5 12.5 4.5 12.337v-.675q0-.162.025-.337l-1.325-1Q2.675 9.9 2.525 9.25t.2-1.225L3.9 5.975q.35-.575.975-.8t1.25.05l1.55.65q.275-.2.575-.375t.6-.3l.225-1.65q.1-.65.588-1.1T10.825 2h2.35q.675 0 1.163.45t.587 1.1l.225 1.65q.325.125.613.3t.562.375l1.55-.65q.625-.275 1.25-.05t.975.8l1.175 2.05q.35.575.2 1.225t-.675 1.075l-1.325 1q.025.175.025.338v.674q0 .163-.05.338l1.325 1q.525.425.675 1.075t-.2 1.225l-1.2 2.05q-.35.575-.975.8t-1.25-.05l-1.5-.65q-.275.2-.575.375t-.6.3l-.225 1.65q-.1.65-.587 1.1t-1.163.45zM11 20h1.975l.35-2.65q.775-.2 1.438-.587t1.212-.938l2.475 1.025l.975-1.7l-2.15-1.625q.125-.35.175-.737T17.5 12t-.05-.787t-.175-.738l2.15-1.625l-.975-1.7l-2.475 1.05q-.55-.575-1.212-.962t-1.438-.588L13 4h-1.975l-.35 2.65q-.775.2-1.437.588t-1.213.937L5.55 7.15l-.975 1.7l2.15 1.6q-.125.375-.175.75t-.05.8q0 .4.05.775t.175.75l-2.15 1.625l.975 1.7l2.475-1.05q.55.575 1.213.963t1.437.587zm1.05-4.5q1.45 0 2.475-1.025T15.55 12t-1.025-2.475T12.05 8.5q-1.475 0-2.487 1.025T8.55 12t1.013 2.475T12.05 15.5M12 12"
            />
          </svg>
          Thông số sản phẩm
        </h5>
        <div className="flex flex-col w-full gap-3">
          {productDetail?.attributeValues?.slice(0, 6).map((att: any) => (
            <div
              key={att.id}
              className="p-[8px] bg-gray-50 flex items-center rounded-xl"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 16 16"
                className="text-green-500"
              >
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  points="2.75 8.75 6.25 12.25 13.25 4.75"
                />
              </svg>
              <p className="ml-2 text-gray-700">{att.value}</p>
            </div>
          ))}
        </div>
      </div>
      {/* Số lượng */}
      <div className="mb-[24px]">
        <h5 className="flex items-center gap-2 font-bold mb-[12px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 48 48"
          >
            <g fill="none" stroke="currentColor" strokeWidth="4">
              <path
                strokeLinejoin="round"
                d="M6 15h36l-2 27H8z"
                clipRule="evenodd"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 19V6h16v13"
              />
              <path strokeLinecap="round" d="M16 34h16" />
            </g>
          </svg>
          Số lượng
        </h5>
        <Quantity initial={1} min={1} max={10} onChange={setQuantity} />
      </div>
      {/* Thêm vào giỏ hàng & Mua ngay */}
      <div className="mb-[24px] space-y-3">
        <AddToCart />
        <BuyNow />
      </div>
      {/* Chính sách bảo hành */}
      <div className="">
        <WarrantySection />
      </div>
    </div>
  );
};

export default memo(InforProduct);
