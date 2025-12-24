"use client";
import DetailTabsSection from "../DetailTabsSection";
import ImagePreview from "../ImagePreview";
import InforProduct from "../InforProduct";
import RelatedProducts from "../RelatedProducts";
import * as productServices from "../../../services/productServices";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
const ProductDetailClient = ({ productId }: { productId: string }) => {
  const [selectVersion, setSelectVersion] = useState(0);
  const fetchProductDetail = async () => {
    const res = await productServices.getDetailProduct(Number(productId));
    return res;
  };
  const { data: productDetail = [] } = useQuery({
    queryKey: ["productDetail"],
    queryFn: fetchProductDetail,
  });
  console.log("productDetail", productDetail);
  return (
    <div className="container py-[24px] overflow-visible">
      <div className="grid grid-cols-12 gap-x-[24px]">
        <div className="col-span-5">
          <div className="sticky top-[169px]">
            <ImagePreview
              selectVersion={selectVersion}
              setSelectVersion={setSelectVersion}
              productDetail={productDetail?.data}
            />
          </div>
        </div>

        <div className="col-span-7">
          <InforProduct
            selectVersion={selectVersion}
            setSelectVersion={setSelectVersion}
            productDetail={productDetail?.data}
          />
        </div>
      </div>
      <div className="mt-[24px]">
        <DetailTabsSection productDetail={productDetail?.data} />
      </div>
      <div className="mt-[24px]">
        <RelatedProducts productDetail={productDetail?.data} />
      </div>
    </div>
  );
};

export default ProductDetailClient;
