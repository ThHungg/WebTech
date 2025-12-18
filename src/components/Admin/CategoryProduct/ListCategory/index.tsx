import { memo } from "react";
import * as categoryServices from "../../../../services/categoryServices";
import { useQuery } from "@tanstack/react-query";
import CategoryCard from "../CategoryCard";

const ListCategory = () => {
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
        <CategoryCard key={category.id} category={category} refetch={refetch} />
      ))}
    </div>
  );
};

export default memo(ListCategory);
