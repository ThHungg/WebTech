"use client";
import { memo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import SpecialOffer from "../SpecialOffer";

const ImagePreview = ({ productDetail }: { productDetail: any }) => {
  const swiperBreakpoints = {
    640: { slidesPerView: 3, slidesPerGroup: 3 },
    1024: { slidesPerView: 4, slidesPerGroup: 4 },
  };
  return (
    <div>
      <div className="p-[16px] bg-white rounded-xl shadow-md w-full border-[1px] border-gray-200">
        <div className="aspect-square mb-[12px] rounded-xl overflow-hidden relative">
          <img
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800"
            alt=""
            className="w-full h-full"
          />
          <div className="absolute top-2 left-2 px-3 py-1 rounded-md bg-red-500">
            <span className="font-bold text-white text-[13px]">-80 %</span>
          </div>
        </div>
        <div className="flex items-center justify-center py-2">
          <Swiper
            spaceBetween={2}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper"
            breakpoints={swiperBreakpoints}
          >
            {[...Array(9)].map((_, i) => (
              <SwiperSlide key={i}>
                <button className="w-[90px] h-[90px] p-1 overflow-hidden mr-[8px]">
                  <img
                    src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800"
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-200 hover:scale-105 rounded-2xl"
                  />
                </button>
              </SwiperSlide>
            ))}
          </Swiper>
          {/* <button className="w-[90px] h-[90px] p-1 overflow-hidden mr-[8px]">
          <img
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800"
            alt=""
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105 rounded-2xl"
          />
        </button>
        <button className="w-[90px] h-[90px] p-1 overflow-hidden mr-[8px]">
          <img
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800"
            alt=""
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105 rounded-2xl"
          />
        </button>
        <button className="w-[90px] h-[90px] p-1 overflow-hidden mr-[8px]">
          <img
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800"
            alt=""
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105 rounded-2xl"
          />
        </button>
        <button className="w-[90px] h-[90px] p-1 overflow-hidden mr-[8px]">
          <img
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800"
            alt=""
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105 rounded-2xl"
          />
        </button>
        <button className="w-[90px] h-[90px] p-1 overflow-hidden mr-[8px]">
          <img
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=800"
            alt=""
            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105 rounded-2xl"
          />
        </button> */}
        </div>
        <div className="grid grid-cols-2 gap-4 mt-4">
          <button className="border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-center gap-2">
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
                d="M7.75 3.5C5.127 3.5 3 5.76 3 8.547C3 14.125 12 20.5 12 20.5s9-6.375 9-11.953C21 5.094 18.873 3.5 16.25 3.5c-1.86 0-3.47 1.136-4.25 2.79c-.78-1.654-2.39-2.79-4.25-2.79"
              />
            </svg>
            Yêu thích
          </button>
          <button className="border border-gray-300 rounded-lg px-4 py-2 flex items-center justify-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M16.61 21q-.994 0-1.687-.695q-.692-.696-.692-1.69q0-.15.132-.757l-7.197-4.273q-.324.374-.793.587t-1.007.213q-.986 0-1.676-.702T3 12t.69-1.683t1.676-.702q.537 0 1.007.213t.793.588l7.198-4.255q-.07-.194-.101-.385q-.032-.192-.032-.392q0-.993.697-1.689Q15.625 3 16.62 3t1.688.697T19 5.389t-.695 1.688t-1.69.692q-.542 0-1-.222t-.78-.597l-7.199 4.273q.07.194.101.386q.032.191.032.391t-.032.391t-.1.386l7.198 4.273q.323-.375.78-.597q.458-.222 1-.222q.994 0 1.69.696q.695.698.695 1.693t-.697 1.688t-1.692.692"
              />
            </svg>
            Liên hệ tư vấn
          </button>
        </div>
      </div>
      <SpecialOffer />
    </div>
  );
};

export default memo(ImagePreview);
