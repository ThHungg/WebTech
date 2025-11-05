import { memo } from "react";

const CTASection = () => {
  return (
    <div className="py-[64px] bg-[linear-gradient(to_right,_#E7000A_10%,_#FF6800_100%)]">
      <div className="container px-4">
        <div className="flex flex-col items-center justify-center">
          <h1 className="font-bold leading-[75px] text-white mb-[24px]">
            Sẵn Sàng Nâng Cấp Setup Của Bạn?
          </h1>
          <p className="text-[18px] mb-[32px] text-white/90 leading-[28px]">
            Tham gia cộng đồng 10,000+ game thủ và dân công nghệ đã tin tưởng
            TechGear
          </p>
          <div className="flex items-center gap-[20px]">
            <button className="px-[32px] py-[16px] text-red-600 bg-white rounded-xl font-bold hover:scale-105 transition-all duration-300 hover:bg-gray-100 shadow-md">
              Mua sắm ngay
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
      </div>
    </div>
  );
};

export default memo(CTASection);
