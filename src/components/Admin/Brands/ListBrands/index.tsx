"use client";

import { memo } from "react";
import BrandCard from "../BrandCard";
import * as brandServices from "../../../../services/branServices";
import { useQuery } from "@tanstack/react-query";

const ListBrands = () => {
  const fetchBrands = async () => {
    const res = await brandServices.getAllBrands();
    return res;
  };

  const { data: brands = [], refetch } = useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });

  return (
    <div className="flex flex-wrap gap-4">
      {brands?.data?.map((brand: any) => (
        <BrandCard key={brand.id} brand={brand} refetch={refetch} />
      ))}
    </div>
  );
};

export default memo(ListBrands);
