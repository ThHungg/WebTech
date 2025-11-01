import { memo } from "react";

const Banner = () => {
  return (
    <div className="bg-[linear-gradient(to_right,_#E91721_70%,_#FF6800_100%)]">
      <div className="max-w-7xl py-[64px] px-[16px] mx-auto">
        <div className="text-white">
          <div className="bg-[#F23D4E] p-2 w-auto rounded-2xl text-white inline-block mb-4 ">
            <div className="flex gap-2 items-center font-semibold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 32 32"
              >
                <path
                  fill="currentColor"
                  d="M11.61 29.92a1 1 0 0 1-.6-1.07L12.83 17H8a1 1 0 0 1-1-1.23l3-13A1 1 0 0 1 11 2h10a1 1 0 0 1 .78.37a1 1 0 0 1 .2.85L20.25 11H25a1 1 0 0 1 .9.56a1 1 0 0 1-.11 1l-13 17A1 1 0 0 1 12 30a1.1 1.1 0 0 1-.39-.08M17.75 13l2-9H11.8L9.26 15h5.91l-1.59 10.28L23 13Z"
                />
              </svg>
              <span>Flash Sale - Giảm đến 50%</span>
            </div>
          </div>
          <div className="mb-[24px]">
            <h1 className="mb-[16px]">Siêu Sale Công Nghệ 2024</h1>
            <span className="">
              Giảm giá lên đến 50% • Trả góp 0% • Freeship toàn quốc • Bảo hành
              chính hãng
            </span>
          </div>
          <div className="flex gap-5">
            <button className="bg-white p-4 text-[#E66035] font-semibold rounded-xl shadow-2xl hover:scale-105 transition-transform">
              Khám phá ngay
            </button>
            <button className="border-1  p-4 font-semibold rounded-xl shadow-2xl hover:scale-105 transition-transform">
              Xem ưu đãi
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(Banner);
