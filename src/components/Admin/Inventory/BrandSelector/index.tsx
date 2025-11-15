import BrandCard from "@/components/Card/BrandCard";
import { memo } from "react";

const BrandSelector = () => {
  return (
    <div className="flex gap-2">
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
      <BrandCard />
    </div>
  );
};

export default memo(BrandSelector);
