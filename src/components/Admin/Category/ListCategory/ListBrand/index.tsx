import { memo } from "react";
import BrandCard from "../BrandCard";

const ListBrand = () => {
  return (
    <div className="px-[16px] mt-[12px]">
      <BrandCard />
      <BrandCard />
      <BrandCard />
    </div>
  );
};
export default memo(ListBrand);
