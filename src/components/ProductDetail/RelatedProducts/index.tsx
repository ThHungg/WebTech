"use client";
import FeaturedCard from "@/components/Card/FeaturedCard";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const RelatedProducts = ({ productDetail }: { productDetail: any }) => {
  return (
    <div>
      <h3 className="font-bold">Sản phẩm liên quan</h3>
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
  );
};

export default memo(RelatedProducts);
