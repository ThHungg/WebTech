"use client";
import AboutBenefits from "@/components/Header/AboutBenefits";
import Banner from "@/components/Header/Banner";
import Link from "next/link";
import { memo, useState } from "react";
import { usePathname } from "next/navigation";
import CartSidebar from "@/components/CartSidebar";

const Header = () => {
  const [isOpenCartSidebar, setIsOpenCartSidebar] = useState(false);
  const pathname = usePathname();
  const hiddenBanner = ["/products/", "/cart", "/checkout"];
  const isHideBanner = hiddenBanner.some((url) => pathname.startsWith(url));
  const menuList = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            d="M4 6h16v10H4m16 2a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H4c-1.11 0-2 .89-2 2v10a2 2 0 0 0 2 2H0v2h24v-2z"
          />
        </svg>
      ),
      title: "Laptop",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9 20h3m3 0h-3m0 0v-3m0 0h7a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2z"
          />
        </svg>
      ),
      title: "PC Desktop",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none" fillRule="evenodd">
            <path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
            <path
              fill="currentColor"
              d="M15 2a1 1 0 0 1 1 1v1h1a3 3 0 0 1 3 3v1h1a1 1 0 1 1 0 2h-1v4h1a1 1 0 1 1 0 2h-1v1a3 3 0 0 1-3 3h-1v1a1 1 0 1 1-2 0v-1h-4v1a1 1 0 1 1-2 0v-1H7a3 3 0 0 1-3-3v-1H3a1 1 0 1 1 0-2h1v-4H3a1 1 0 0 1 0-2h1V7a3 3 0 0 1 3-3h1V3a1 1 0 0 1 2 0v1h4V3a1 1 0 0 1 1-1m2 4H7a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1m-3 2a2 2 0 0 1 1.995 1.85L16 10v4a2 2 0 0 1-1.85 1.995L14 16h-4a2 2 0 0 1-1.995-1.85L8 14v-4a2 2 0 0 1 1.85-1.995L10 8zm0 2h-4v4h4z"
            />
          </g>
        </svg>
      ),
      title: "Phụ kiện",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeWidth="1.5"
              d="M19 17v1m-2.5-1v1M14 17v1m-2.5-1v1"
              opacity=".4"
            />
            <path
              fill="currentColor"
              d="m19 5.118l.72-.21l-.002-.007l-.003-.009zm-14 0l-.715-.226l-.003.009l-.002.008zM2.889 20.643l.433-.612zm-.552-.584l.634-.4zm19.326 0l-.634-.4zm-.552.584l-.433-.612zm0-6.698l-.433.612zm.552.584l-.634.4zm-18.774-.584l.433.612zm-.552.584l.634.4zM7.5 3.75h9v-1.5h-9zm9 0c.428 0 .753.1 1.016.305c.269.21.549.59.769 1.288l1.43-.45c-.28-.89-.698-1.57-1.277-2.021c-.587-.457-1.261-.622-1.938-.622zm-9-1.5c-.676 0-1.351.165-1.938.622c-.58.451-.997 1.13-1.277 2.02l1.43.45c.22-.697.5-1.077.77-1.287c.262-.205.587-.305 1.015-.305zm10.78 3.076l2.851 9.839l1.44-.418l-2.85-9.838zm-14-.417l-2.852 9.838l1.44.418L5.72 5.326zm1.22 9.43h13v-1.5h-13zm13 5.911h-13v1.5h13zm-13 0c-.719 0-1.198-.001-1.563-.04c-.35-.038-.509-.104-.615-.18l-.866 1.225c.398.282.842.395 1.32.446c.464.05 1.038.049 1.724.049zm-4.25-2.956c0 .729 0 1.329.046 1.812c.047.493.15.945.407 1.353l1.268-.8c-.08-.126-.145-.313-.182-.697c-.038-.394-.039-.91-.039-1.668zm2.072 2.737a1.3 1.3 0 0 1-.35-.372l-1.27.8c.198.313.453.584.754.796zm17.928-2.737c0 .758 0 1.274-.039 1.668c-.037.384-.103.57-.182.697l1.268.8c.258-.408.36-.86.407-1.353c.047-.483.046-1.083.046-1.812zM18.5 21.75c.686 0 1.26.001 1.723-.049c.479-.052.923-.164 1.321-.446l-.866-1.224c-.106.075-.265.141-.615.179c-.365.039-.844.04-1.563.04zm2.529-2.091a1.3 1.3 0 0 1-.351.372l.866 1.224c.3-.212.556-.483.753-.796zm-2.529-5.32c.719 0 1.198 0 1.563.04c.35.037.509.103.615.178l.866-1.224c-.398-.282-.842-.394-1.32-.446c-.464-.05-1.038-.049-1.724-.049zm4.25 2.955c0-.729 0-1.329-.046-1.811c-.047-.494-.15-.946-.407-1.354l-1.268.8c.08.127.145.313.182.697c.038.394.039.91.039 1.668zm-2.072-2.737c.136.097.256.223.35.373l1.27-.8a2.8 2.8 0 0 0-.754-.797zM5.5 12.838c-.686 0-1.26 0-1.723.05c-.479.05-.923.163-1.321.445l.866 1.224c.106-.075.265-.14.615-.178c.365-.04.844-.04 1.563-.04zm-2.75 4.456c0-.758 0-1.274.039-1.668c.037-.384.103-.57.182-.696l-1.268-.8c-.258.407-.36.86-.407 1.353c-.047.482-.046 1.082-.046 1.811zm-.294-3.961c-.3.212-.556.484-.753.796l1.268.8a1.3 1.3 0 0 1 .351-.372z"
            />
          </g>
        </svg>
      ),
      title: "Ổ cứng",
    },
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 48 48"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="3"
            d="M8.16 17.365c-2.504.137-4.516 1.93-4.762 4.425C3.186 23.94 3 26.973 3 31s.186 7.061.398 9.21c.246 2.495 2.258 4.288 4.763 4.425C11.382 44.812 16.562 45 24 45s12.618-.188 15.84-.365c2.504-.137 4.516-1.93 4.762-4.425c.212-2.149.398-5.183.398-9.21s-.186-7.061-.398-9.21c-.246-2.495-2.258-4.288-4.763-4.425C36.618 17.188 31.438 17 24 17s-12.618.188-15.84.365M18 39h12M11 24.5h2m-2 7h2m6-7h2m-2 7h2m6-7h2m-2 7h2m6-7h2m-2 7h2M24 16v-2.568a4 4 0 0 1 3.392-3.954l6.216-.956A4 4 0 0 0 37 4.568V3"
          />
        </svg>
      ),
      title: "Phụ kiện",
    },
  ];
  return (
    <>
      <div className="bg-[#E7000B] py-[8px]">
        <div className="max-w-7xl mx-auto flex items-center">
          <div className="flex justify-between w-full">
            <div className="flex gap-2 text-white items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="text-white"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M15.6 14.522c-2.395 2.52-8.504-3.534-6.1-6.064c1.468-1.545-.19-3.31-1.108-4.609c-1.723-2.435-5.504.927-5.39 3.066c.363 6.746 7.66 14.74 14.726 14.042c2.21-.218 4.75-4.21 2.215-5.669c-1.268-.73-3.009-2.17-4.343-.767"
                />
              </svg>
              <span className="text-[14px]">Hotline: 0123456.789</span>
            </div>
            <div className="flex gap-5">
              <div className="flex items-center gap-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                  >
                    <path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12" />
                    <path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15" />
                  </g>
                </svg>
                <span className="text-[14px]">Tra cứu đơn hàng</span>
              </div>
              <div className="flex items-center gap-2 text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <g
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                  >
                    <path d="M16.61 17.66L15.5 22l2.5-1l2.5 1l-1-4.401M21 15a3 3 0 1 1-6 0a3 3 0 0 1 6 0" />
                    <path d="M20 10c0-3.771 0-5.657-1.172-6.828S15.771 2 12 2h-1C7.23 2 5.343 2 4.172 3.172S3 6.229 3 10v4c0 3.771 0 5.657 1.172 6.828S7.229 22 11 22h2M7.5 7h8m-8 5H12" />
                  </g>
                </svg>
                <span className="text-[14px]">Tra cứu đơn hàng</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className="sticky top-0 z-40 shadow-md bg-white">
        <div>
          <div className="max-w-7xl mx-auto px-[16px]">
            <div className="flex justify-between items-center">
              {/* Logo */}
              <div className="flex items-center gap-3 py-4">
                <Link href="/">
                  {" "}
                  <img
                    src="https://png.pngtree.com/png-clipart/20250309/original/pngtree-logos-are-prohibited-red-logo-ban-vector-png-image_20615554.png"
                    alt=""
                    className="w-[32px] h-[32px]"
                  />
                </Link>
                <div>
                  <h3 className="bg-clip-text text-transparent bg-linear-to-r from-[#E80007] to-[#FF985E] font-bold">
                    TechWeb
                  </h3>
                  <p className=" text-gray-500 hidden md:block">
                    Build Your Dream Setup
                  </p>
                </div>
              </div>
              {/* Search */}
              <div className="mx-[32px]">
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Nhập sản phẩm cần tìm kiếm"
                    className=" min-w-[400px] pl-[16px] py-[12px] pr-[48px] border-[1px] border-gray-400 rounded-2xl focus:border-2 hover:border-[#E7000B] focus:border-[#E7000B] focus:outline-none"
                  />

                  <button className="absolute right-0 top-1/2 transform -translate-y-1/2 mr-4 text-white p-2 bg-[#E7000B] rounded-[12px]">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="currentColor"
                        d="M21.71 20.29L18 16.61A9 9 0 1 0 16.61 18l3.68 3.68a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.39M11 18a7 7 0 1 1 7-7a7 7 0 0 1-7 7"
                      />
                    </svg>
                  </button>
                </div>
              </div>
              {/* Card & Login */}
              <div className="flex items-center gap-6">
                <Link
                  href="/auth"
                  className="flex items-center gap-2 bg-[#E7000B] px-[16px] py-[8px] rounded-[8px] text-white font-medium"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 21v-2h7V5h-7V3h7q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm-2-4l-1.375-1.45l2.55-2.55H3v-2h8.175l-2.55-2.55L10 7l5 5z"
                    />
                  </svg>
                  Đăng nhập
                </Link>
                <button
                  onClick={() => setIsOpenCartSidebar(true)}
                  className="p-2"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 32 32"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                    >
                      <path d="M6 6h24l-3 13H9m18 4H10L5 2H2" />
                      <circle cx="25" cy="27" r="2" />
                      <circle cx="12" cy="27" r="2" />
                    </g>
                  </svg>
                </button>
              </div>
            </div>
          </div>
          <div className="h-[1px] bg-gray-200 w-full"></div>
        </div>
        <div className="max-w-7xl mx-auto px-[16px]">
          <div className="py-[8px] flex justify-between">
            <ul className="flex gap-2 text-sm font-medium">
              {menuList.map((item, index) => (
                <li
                  key={index}
                  className="flex text-[15px] text-[#5E5C6E] font-semibold items-center gap-2 hover:bg-[#F3F4F6] p-2 rounded-md"
                >
                  {item.icon}
                  {item.title}
                </li>
              ))}
            </ul>
            <div className="flex items-center gap-5">
              <Link
                href="/"
                className="text-[14px] text-[#E7000B] font-semibold"
              >
                % Khuyến mãi hot
              </Link>
              <Link
                href="/"
                className="text-[14px] text-[#5E5C6E] font-semibold gap-1 flex items-center"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2 6s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1zm10 0s1.5-2 5-2s5 2 5 2v14s-1.5-1-5-1s-5 1-5 1z"
                  />
                </svg>
                Tin tức
              </Link>
            </div>
          </div>
        </div>
      </header>
      {!isHideBanner && <Banner />}
      {!isHideBanner && <AboutBenefits />}
      {isOpenCartSidebar && (
        <CartSidebar
          isOpen={isOpenCartSidebar}
          onClose={() => setIsOpenCartSidebar(false)}
        />
      )}
    </>
  );
};

export default memo(Header);
