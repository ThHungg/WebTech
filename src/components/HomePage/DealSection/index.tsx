import { memo } from "react";

const DealSection = () => {
  return (
    <div className="py-[64px] bg-[linear-gradient(to_right,_#F05A67_10%,_#FF7A50_100%)]">
      <div className="container px-4">
        <div className="grid grid-cols-2 gap-[10px]">
          <div>
            {" "}
            <div className="bg-[#eb0e24] p-2 w-auto rounded-2xl text-white inline-block mb-4 ">
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
                <span>Chào mừng đến với TeachGear</span>
              </div>
            </div>
            <h1 className="font-bold leading-[75px] text-white mb-[24px]">
              Thiên Đường Công Nghệ
            </h1>
            <p className="text-[18px] mb-[32px] text-white/90 leading-[28px]">
              Hệ thống bán lẻ laptop, PC, linh kiện và phụ kiện công nghệ hàng
              đầu Việt Nam. Giá tốt nhất, bảo hành chính hãng, trả góp 0%.
            </p>
            <div className="flex items-center gap-[20px]">
              <button className="px-[32px] py-[16px] text-red-600 bg-white rounded-xl font-bold hover:scale-105 transition-all duration-300 hover:bg-gray-100 shadow-md">
                Khám phá ngay
              </button>
              <button className="flex items-center justify-center gap-[10px] px-[32px] py-[16px] text-white border-2 border-white rounded-xl font-bold hover:scale-105 transition-all duration-300 hover:bg-white/10 shadow-md">
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
                    strokeWidth="1.5"
                  >
                    <path d="M12 21v-9m0-5H7.95c-2.77 0-2.94-4 0-4C11.1 3 12 7 12 7m0 0h4.05c2.896 0 2.896-4 0-4C12.9 3 12 7 12 7" />
                    <path d="M20 12v7a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-7m17 0V9a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v3z" />
                  </g>
                </svg>{" "}
                Ưu đãi hot
              </button>
            </div>
          </div>
          <div>
            <div className="max-w-[620px] max-h-[420px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=800"
                alt=""
                className=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(DealSection);
