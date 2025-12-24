"use client";
import ProductCard from "@/components/Card/ProductCard";
import { memo } from "react";
import Link from "next/link";
const ListProductSection = ({ products } : {products : any}) => {
  
  return (
    <div className="grid grid-cols-3">
      {products?.data?.map((product: any) => (
        <Link key={product.id} href={`/products/${product.id}`}>
          <ProductCard productData={product} />
        </Link>
      ))}
    </div>
  );
};

export default memo(ListProductSection);
