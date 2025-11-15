import { memo } from "react";
import BrandCard from "../BrandCard";

const ListBrands = () => {
  return (
    <div className="flex gap-3">
      <BrandCard /> <BrandCard /> <BrandCard /> <BrandCard />{" "}
    </div>
  );
};

export default memo(ListBrands);
