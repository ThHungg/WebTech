import { memo } from "react";
import * as categoryServices from "../../../../services/categoryServices";
import { toast } from "react-toastify";

const CategoryProductCard = ({
  category,
  refetch,
}: {
  category: any;
  refetch: () => void;
}) => {
  console.log("category", category);

  const handleDeleteCategory = async (categoryId: number) => {
    try {
      const res = await categoryServices.deleteCategory(categoryId);
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      }
      refetch();
      toast.success(res.message);
    } catch (e: any) {
      toast.error(e.response.data.message || "Xoá danh mục thất bại!");
    }
  };

  return (
    <div className="bg-gradient-to-br from-white to-gray-50 p-[16px] rounded-[16px] w-full shadow-md hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-blue-200">
      <div className="w-full">
        {/* Header với icon và tên */}
        <div className="flex items-center justify-between gap-3 mb-[12px] pb-[12px] border-b border-gray-200">
          <div className="flex items-center gap-3 flex-1">
            <span className="text-[28px]">{category.icon_emoji}</span>
            <h5 className="font-bold text-gray-800 text-[14px] line-clamp-2">
              {category.name}
            </h5>
          </div>
          <div className="flex gap-1">
            {/* Edit Button */}
            <button className="p-2 hover:bg-blue-100 rounded-lg transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="text-blue-600"
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
            {/* Delete Button */}
            <button
              onClick={() => handleDeleteCategory(category.id)}
              className="p-2 hover:bg-red-100 rounded-lg transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
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
          </div>
        </div>

        {/* Danh mục con */}
        <div className="space-y-[8px]">
          {category?.children?.length > 0 ? (
            category.children.map((children: any) => (
              <div
                key={children.id}
                className="text-sm px-3 py-[8px] bg-gradient-to-r from-blue-50 to-blue-100 rounded-[8px] shadow-sm hover:shadow-md hover:from-blue-100 hover:to-blue-200 transition-all duration-200 border border-blue-200/50 flex items-center justify-between gap-2"
              >
                <div className="flex items-center gap-2 flex-1">
                  <span className="text-[16px]">{children.icon_emoji}</span>
                  <span className="text-gray-700 font-medium line-clamp-1">
                    {children.name}
                  </span>
                </div>
                <div className="flex gap-1">
                  {/* Edit Child */}
                  <button className="p-1 hover:bg-blue-200 rounded transition">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="text-blue-600"
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
                  {/* Delete Child */}
                  <button
                    onClick={() => handleDeleteCategory(children.id)}
                    className="p-1 hover:bg-red-200 rounded transition"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
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
                </div>
              </div>
            ))
          ) : (
            <div className="text-sm text-gray-400 text-center py-[16px]">
              <div className="flex justify-center mb-[8px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  className="opacity-50"
                >
                  <path
                    fill="currentColor"
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z"
                  />
                </svg>
              </div>
              <p>Chưa có danh mục con</p>
            </div>
          )}
        </div>

        {/* Footer - Số lượng danh mục con */}
        {category?.children?.length > 0 && (
          <div className="mt-[12px] pt-[12px] border-t border-gray-200">
            <p className="text-xs text-gray-500 font-semibold">
              {category.children.length} danh mục con
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(CategoryProductCard);
