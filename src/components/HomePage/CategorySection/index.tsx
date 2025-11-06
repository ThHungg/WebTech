"use client";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import CategoryCard from "../../Card/CategoryCard";

const CategorySection = () => {
  return (
    <div className="py-[64px] bg-gradient-to-b from-white to-gray-50">
      <div className="container px-4">
        <div className="text-center mb-[48px]">
          <h2 className="mb-[16px] font-bold">Danh mục sản phẩm</h2>
          <p className="text-gray-600 text-lg">
            Khám phá các dòng sản phẩm công nghệ hàng đầu
          </p>
        </div>
        <div>
          <Swiper
            spaceBetween={10} // Khoảng cách giữa các slide
            slidesPerView={3} // Số lượng slide hiển thị
            loop={true} // Lặp lại carousel
            autoplay={{ delay: 3000 }} // Tự động chuyển slide
            breakpoints={{
              3000: { slidesPerView: 5 },
              1024: { slidesPerView: 3 },
              464: { slidesPerView: 2 },
              0: { slidesPerView: 1 },
            }}
          >
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
            <SwiperSlide>
              <CategoryCard />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default memo(CategorySection);
