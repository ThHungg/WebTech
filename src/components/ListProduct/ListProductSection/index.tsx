import ProductCard from "@/components/Card/ProductCard";
import { memo } from "react";

const ListProductSection = () => {
  return (
    <div className="grid grid-cols-3">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};

export default memo(ListProductSection);
