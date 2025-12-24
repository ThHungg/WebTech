"use client";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import FeaturedCard from "../../Card/FeaturedCard";
import Link from "next/link";

const FeaturedSection = () => {
  return (
    <div className="py-[64px]">
      <div className="container px-4">
        <div className="mb-[48px] flex justify-between">
          <div>
            <h2 className="mb-[16px] font-bold">Sản Phẩm Nổi Bật</h2>
            <p className="text-gray-600 text-lg">
              Được yêu thích nhất trong tháng
            </p>
          </div>
          <Link
            href="/listproduct"
            className="group flex items-center gap-1 text-[16px] font-semibold text-red-500 hover:text-red-600 "
          >
            Xem tất cả{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
              <path
                fill="currentColor"
                d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"
              />
            </svg>
          </Link>
        </div>
        <div>
          <Swiper
            spaceBetween={0}
            slidesPerView={3}
            loop={true}
            autoplay={{ delay: 3000 }}
            breakpoints={{
              3000: { slidesPerView: 5 },
              1024: { slidesPerView: 4 },
              464: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
            <SwiperSlide>
              <FeaturedCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default memo(FeaturedSection);
