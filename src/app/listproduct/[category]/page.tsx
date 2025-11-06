import Filter from "@/components/ListProduct/Filter";
import ListProductSection from "@/components/ListProduct/ListProductSection";
import ViewAndSortControls from "@/components/ListProduct/ViewAndSortControls";
import { memo } from "react";

const ListProductPage = async ({
  params,
}: {
  params: Promise<{ category: string }>;
}) => {
  const { category } = await params;

  return (
    <div className="bg-[#F9FAFC]">
      <div className="container px-[16px] py-[32px] ">
        <div className="flex gap-5">
          <Filter />
          <div className="flex flex-col w-full">
            <ViewAndSortControls />
            <ListProductSection />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ListProductPage);
