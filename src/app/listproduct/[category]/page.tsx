"use client"
import Filter from "@/components/ListProduct/Filter";
import ListProductSection from "@/components/ListProduct/ListProductSection";
import ViewAndSortControls from "@/components/ListProduct/ViewAndSortControls";
import { memo, use } from "react";
import * as productServices from "../../../services/productServices";
import { useQuery } from "@tanstack/react-query";
const ListProductPage = ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = use(params);
  console.log("category", category);
  const { data: products = [], refetch} = useQuery({
    queryKey: ["products"],
    queryFn: () => productServices.getBySlug(category),
  });
  return (
    <div className="bg-[#F9FAFC]">
      <div className="container px-[16px] py-[32px]">
        <div className="flex gap-5">
          <Filter />
          <div className="flex flex-col w-full">
            <ViewAndSortControls />
            <ListProductSection products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ListProductPage);
