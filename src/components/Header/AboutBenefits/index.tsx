import { memo } from "react";

const AboutBenefits = () => {
  return (
    <div className="border-b border-gray-200">
      <div className="max-w-7xl px-[16px] py-[24px] mx-auto">
        <div className="grid grid-cols-4">
          <div className="p-[12px] flex items-center gap-3 hover:bg-gray-100 rounded-xl group ">
            <div className="p-2 rounded-lg bg-blue-100 inline-block group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-blue-600"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M9.207 16.455C9.207 17.86 8.095 19 6.724 19s-2.483-1.14-2.483-2.546m4.966 0c0-1.405-1.112-2.545-2.483-2.545s-2.483 1.14-2.483 2.545m4.966 0h5.586m-10.552 0H3V6a1 1 0 0 1 1-1h9.793a1 1 0 0 1 1 1v2.182m5.586 8.272c0 1.406-1.111 2.546-2.482 2.546s-2.483-1.14-2.483-2.546m4.965 0c0-1.405-1.111-2.545-2.482-2.545s-2.483 1.14-2.483 2.545m4.965 0H21v-5.09l-2.515-2.579a2 2 0 0 0-1.431-.603h-2.26m.62 8.272h-.62m0 0V8.182"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-sm text-gray-900">
                Miễn phí vận chuyển
              </p>
              <p className="text-xs text-gray-500">Đơn hàng từ</p>
            </div>
          </div>
          <div className="p-[12px] flex items-center gap-3 hover:bg-gray-100 rounded-xl group ">
            <div className="p-2 rounded-lg bg-green-100 inline-block group-hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 48 48"
                className="text-green-600"
              >
                <defs>
                  <mask id="IconifyId19a3e6d0391b34aa20">
                    <g fill="none" strokeLinejoin="round" strokeWidth="4">
                      <path
                        fill="#fff"
                        stroke="#fff"
                        d="M6 9.256L24.009 4L42 9.256v10.778A26.32 26.32 0 0 1 24.003 45A26.32 26.32 0 0 1 6 20.029z"
                      />
                      <path
                        stroke="#000"
                        strokeLinecap="round"
                        d="m15 23l7 7l12-12"
                      />
                    </g>
                  </mask>
                </defs>
                <path
                  fill="currentColor"
                  d="M0 0h48v48H0z"
                  mask="url(#IconifyId19a3e6d0391b34aa20)"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-sm text-gray-900">
                Bảo hành chính hãng
              </p>
              <p className="text-xs text-gray-500">Toàn bộ sản phẩm</p>
            </div>
          </div>
          <div className="p-[12px] flex items-center gap-3 hover:bg-gray-100 rounded-xl group ">
            <div className="p-2 rounded-lg bg-orange-100 inline-block hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-orange-600"
              >
                <path
                  fill="currentColor"
                  d="M12 21a9 9 0 1 0 0-18a9 9 0 0 0 0 18m11-9c0 6.075-4.925 11-11 11S1 18.075 1 12S5.925 1 12 1s11 4.925 11 11m-8 4.414l-4-4V5.5h2v6.086L16.414 15z"
                />
              </svg>
            </div>
            <div>
              <p className="font-medium text-sm text-gray-900">
                Giao hàng nhanh
              </p>
              <p className="text-xs text-purple-500">Trong 24h</p>
            </div>
          </div>
          <div className="p-[12px] flex items-center gap-3 hover:bg-gray-100 rounded-xl group ">
            <div className="p-2 rounded-lg bg-blue-100 inline-block hover:scale-110 transition-transform">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                className="text-purple-600"
              >
                <g fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z" />
                  <path strokeLinecap="round" d="M10 16H6m8 0h-1.5M2 10h20" />
                </g>
              </svg>
            </div>
            <div>
              <p className="font-medium text-sm text-gray-900">Trả góp 0%</p>
              <p className="text-xs text-gray-500">Duyệt nhanh online</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutBenefits);
