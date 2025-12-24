"use client";
import Filter from "@/components/ListProduct/Filter";
import ListProductSection from "@/components/ListProduct/ListProductSection";
import ViewAndSortControls from "@/components/ListProduct/ViewAndSortControls";
import { memo, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import * as productServices from "../../services/productServices";

const ListProductPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(12);

  const { data: products = {} } = useQuery({
    queryKey: ["products", page, limit],
    queryFn: () => productServices.getAllProducts(page, limit),
  });

  return (
    <div className="bg-[#F9FAFC]">
      <div className="container px-[16px] py-[32px]">
        <div className="flex gap-5">
          <Filter />
          <div className="flex flex-col w-full">
            <ViewAndSortControls />
            <ListProductSection
              products={products}
              page={page}
              limit={limit}
              setPage={setPage}
              setLimit={setLimit}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ListProductPage);
