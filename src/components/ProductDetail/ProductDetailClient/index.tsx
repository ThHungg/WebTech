"use client";
import DetailTabsSection from "../DetailTabsSection";
import ImagePreview from "../ImagePreview";
import InforProduct from "../InforProduct";
import RelatedProducts from "../RelatedProducts";
import * as productServices from "../../../services/productServices";
import { useQuery } from "@tanstack/react-query";
const ProductDetailClient = ({ productId }: { productId: string }) => {
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
            <ImagePreview productDetail={productDetail} />
          </div>
        </div>

        <div className="col-span-7">
          <InforProduct productDetail={productDetail?.data} />
        </div>
      </div>
      <div className="mt-[24px]">
        <DetailTabsSection productDetail={productDetail} />
      </div>
      <div className="mt-[24px]">
        <RelatedProducts productDetail={productDetail} />
      </div>
    </div>
  );
};

export default ProductDetailClient;
