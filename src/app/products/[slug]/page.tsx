import ImagePreview from "@/components/ProductDetail/ImagePreview";
import InforProduct from "@/components/ProductDetail/InforProduct";
import { memo } from "react";

const ProductDetailPage = () => {
  return (
    <div className="container py-[24px]">
      <div className="grid grid-cols-12">
        <div className="col-span-5">
          <ImagePreview />
        </div>
        <div className="col-span-7">
          <InforProduct />
        </div>
      </div>
    </div>
  );
};

export default memo(ProductDetailPage);
