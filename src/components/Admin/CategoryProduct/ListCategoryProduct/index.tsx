import { memo } from "react";
import CategoryProductCard from "../CategoryProductCard";
import * as categoryServices from "../../../../services/categoryServices";
import { useQuery } from "@tanstack/react-query";

const ListCategoryProduct = () => {
  const fetchAllCategories = async () => {
    const res = await categoryServices.getAllCategories();
    return res;
  };

  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categories"],
    queryFn: fetchAllCategories,
  });

  return (
    <div className="flex flex-wrap gap-4 grid grid-cols-4">
      {categories?.data?.map((category: any) => (
        <CategoryProductCard
          key={category.id}
          category={category}
          refetch={refetch}
        />
      ))}
    </div>
  );
};

export default memo(ListCategoryProduct);
