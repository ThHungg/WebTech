import { memo } from "react";
import BrandCard from "./BrandCard";

const BrandSection = () => {
  return (
    <div className="bg-gray-50 py-[64px]">
      <div className="container mx-4">
        <div className="text-center mb-[48px]">
          <h2 className="mb-[16px] font-bold">Thương Hiệu Nổi Bật</h2>
          <p className="text-gray-600 text-lg">
            Đối tác chính thức của các hãng hàng đầu thế giới
          </p>
        </div>
        <div className="flex gap-2 w-full">
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
          <BrandCard />
        </div>
      </div>
    </div>
  );
};

export default memo(BrandSection);
