"use client";
import { memo, useState } from "react";
import ProductDescription from "./ProductDescription";
import ProductSpecs from "./ProductSpecs";
import ProductReviews from "./ProductReviews";

const DetailTabsSection = ({ productDetail }: { productDetail: any }) => {
  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="border-b border-gray-200 bg-gray-50">
        <div className="bg-gray-50 flex items-center">
          <button
            onClick={() => setActiveTab("description")}
            className={
              activeTab === "description"
                ? "flex items-center gap-2 text-[16px] px-[24px] py-[16px] font-semibold text-red-600 bg-white border-b-[5px] border-red-500"
                : "flex items-center gap-2 text-[16px] px-[24px] py-[16px] font-semibold"
            }
          >
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
                strokeWidth="2"
                d="M3 19a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6a9 9 0 0 1 9 0a9 9 0 0 1 9 0M3 6v13m9-13v13m9-13v13"
              />
            </svg>
            Mô tả sản phẩm
          </button>
          <button
            onClick={() => setActiveTab("specifications")}
            className={
              activeTab === "specifications"
                ? "flex items-center gap-2 text-[16px] px-[24px] py-[16px] font-semibold text-red-600 bg-white border-b-[5px] border-red-500"
                : "flex items-center gap-2 text-[16px] px-[24px] py-[16px] font-semibold"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 16 16"
            >
              <path
                fill="currentColor"
                fillRule="evenodd"
                d="M7.5 11.508L7.468 8H6.25V7h2.401l.03 3.508H9.8v1zm-.25-6.202a.83.83 0 0 1 .207-.577q.206-.23.59-.229q.384 0 .594.23q.21.229.209.576q0 .342-.21.568t-.593.226t-.59-.226a.8.8 0 0 1-.207-.568M8 13A5 5 0 1 0 8 3a5 5 0 0 0 0 10m0 1A6 6 0 1 1 8 2a6 6 0 0 1 0 12"
              />
            </svg>
            Thông tin sản phẩm
          </button>
          <button
            onClick={() => setActiveTab("reviews")}
            className={
              activeTab === "reviews"
                ? "flex items-center gap-2 text-[16px] px-[24px] py-[16px] font-semibold text-red-600 bg-white border-b-[5px] border-red-500"
                : "flex items-center gap-2 text-[16px] px-[24px] py-[16px] font-semibold"
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M12.86 10.44L11 6.06l-1.86 4.39l-4.75.41L8 14l-1.08 4.63L11 16.17l4.09 2.46L14 14l3.61-3.14zm3.73 10.26L11 17.34L5.42 20.7l1.46-6.35l-4.92-4.28l6.49-.57l2.55-6l2.55 6l6.49.57l-4.92 4.27z"
              />
            </svg>
            Đánh giá (123)
          </button>
        </div>
      </div>
      {activeTab === "description" && (
        <ProductDescription description={productDetail?.description} />
      )}
      {activeTab === "specifications" && (
        <ProductSpecs
          attributes={productDetail?.attributes}
          attributeValues={productDetail?.attributeValues}
        />
      )}
      {activeTab === "reviews" && <ProductReviews />}
    </div>
  );
};

export default memo(DetailTabsSection);
