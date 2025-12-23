import DetailTabsSection from "@/components/ProductDetail/DetailTabsSection";
import ImagePreview from "@/components/ProductDetail/ImagePreview";
import InforProduct from "@/components/ProductDetail/InforProduct";
import RelatedProducts from "@/components/ProductDetail/RelatedProducts";
import { memo, use } from "react";
import * as productServices from "../../../services/productServices";
import { useQuery } from "@tanstack/react-query";
import ProductDetailClient from "@/components/ProductDetail/ProductDetailClient";



const ProductDetailPage = async ({ params }: {params : Promise<{ productId: string }> }) => {
  const productId = Number((await params).productId);
  console.log("productId", productId);

  
  return (
    // <div className="container py-[24px] overflow-visible">
    //   <div className="grid grid-cols-12 gap-x-[24px]">
    //     <div className="col-span-5">
    //       <div className="sticky top-[169px]">
    //         <ImagePreview />
    //       </div>
    //     </div>

    //     <div className="col-span-7">
    //       <InforProduct />
    //     </div>
    //   </div>
    //   <div className="mt-[24px]">
    //     <DetailTabsSection />
    //   </div>
    //   <div className="mt-[24px]">
    //     <RelatedProducts />
    //   </div>
    // </div>
    <ProductDetailClient productId={String(productId)} />
  );
};

export default memo(ProductDetailPage);
