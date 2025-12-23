"use client";
import ProductCard from "@/components/Card/ProductCard";
import { memo } from "react";
import * as productServices from "../../../services/productServices";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
const ListProductSection = () => {
  const fetchAllProducts = async () => {
    const res = await productServices.getAllProducts();
    return res;
  };
  const { data: products = [], refetch } = useQuery({
    queryKey: ["products"],
    queryFn: fetchAllProducts,
  });
  console.log(products);
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
