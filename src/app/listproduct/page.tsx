"use client";
import Filter from "@/components/ListProduct/Filter";
import ListProductSection from "@/components/ListProduct/ListProductSection";
import ViewAndSortControls from "@/components/ListProduct/ViewAndSortControls";
import { memo } from "react";
import { useQuery } from "@tanstack/react-query";
import * as productServices from "../../services/productServices";
const ListProductPage = () => {
   const fetchAllProducts = async () => {
     const res = await productServices.getAllProducts();
     return res;
   };
   const { data: products = [], refetch } = useQuery({
     queryKey: ["products"],
     queryFn: fetchAllProducts,
   });
  return (
    <div className="bg-[#F9FAFC]">
      <div className="container px-[16px] py-[32px]">
        <div className="flex gap-5">
          <Filter />
          <div className="flex flex-col w-full">
            <ViewAndSortControls />
            <ListProductSection products={products}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ListProductPage);
