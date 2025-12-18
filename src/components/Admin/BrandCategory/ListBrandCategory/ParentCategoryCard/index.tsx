import { memo, useState } from "react";
import * as cateBrandLinkServices from "../../../../../services/cateBrandLinkServices";
import { useQuery } from "@tanstack/react-query";
import ChildrenCategoryCard from "../ChildrenCategoryCard";
const ParentCategoryCard = ({ brandId }: { brandId: number }) => {
  const [isCollapsed, setIsCollapsed] = useState<Record<number, boolean>>({});

  const fetchBrandsCategoriesByBrandId = async () => {
    const res = await cateBrandLinkServices.getLinksByBrandId(brandId);
    return res;
  };

  const { data: categories = [], refetch } = useQuery({
    queryKey: ["categories-by-brand", brandId],
    queryFn: fetchBrandsCategoriesByBrandId,
  });

  const toggleCollapse = (id: number) => {
    setIsCollapsed((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="px-[16px] mt-[12px]">
      {categories?.data?.parents?.map((parentCate: any, index: number) => (
        <div className="border border-gray-200 rounded-lg mb-[12px]">
          <div className="flex justify-between items-center bg-gray-100 p-[12px] hover:bg-gray-100">
            <div className="flex gap-2 items-center">
              <button
                onClick={() => toggleCollapse(index)}
                className="p-1 rounded-md hover:bg-gray-200"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="text-gray-700"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m7 10l5 5m0 0l5-5"
                  />
                </svg>
              </button>
              <div className="flex gap-2 items-center">
                <span className="text-[20px]">{parentCate?.icon_emoji}</span>
                <div>
                  <h6 className="font-bold !text-[15px]">{parentCate.name}</h6>
                  <p className="text-[12px] text-gray-500">4 mẫu sản phẩm</p>
                </div>
              </div>
            </div>
            <div className="flex gap-3 items-center">
              {/* <button className="text-[12px] px-[12px] py-[8px] bg-green-600 hover:bg-blue-700 text-white font-semibold rounded-lg">
                + Thêm mẫu
              </button> */}
              {/* <div className="flex gap-2">
                <button className="p-1 hover:bg-gray-200 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-gray-600"
                  >
                    <path
                      fill="currentColor"
                      d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"
                    />
                    <path
                      fill="currentColor"
                      d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"
                    />
                  </svg>
                </button>
                <button className="p-1 hover:bg-red-100 rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    className="text-red-500"
                  >
                    <path
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M4.687 6.213L6.8 18.976a2.5 2.5 0 0 0 2.466 2.092h3.348m6.698-14.855L17.2 18.976a2.5 2.5 0 0 1-2.466 2.092h-3.348m-1.364-9.952v5.049m3.956-5.049v5.049M2.75 6.213h18.5m-6.473 0v-1.78a1.5 1.5 0 0 0-1.5-1.5h-2.554a1.5 1.5 0 0 0-1.5 1.5v1.78z"
                    />
                  </svg>
                </button>
              </div> */}
            </div>
          </div>

          {parentCate?.children && isCollapsed[index] && (
            <div className="p-[16px]">
              <ChildrenCategoryCard
                children={parentCate.children}
                brandId={brandId}
                refetch={refetch}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
export default memo(ParentCategoryCard);
