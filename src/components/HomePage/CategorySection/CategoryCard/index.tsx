import { memo } from "react";

const CategoryCard = () => {
  return (
    <div className="group m-4">
      <div className="bg-white rounded-3xl shadow-md transition-transform duration-200 group-hover:scale-105 group-hover:shadow-lg overflow-hidden mb-8 mt-5">
        <div className="aspect-[4/3] w-full">
          <img
            src="https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?w=400"
            alt=""
            className="object-cover w-full h-full rounded-t-3xl group-hover:opacity-90"
          />
        </div>
        <div className="p-6">
          <h4 className="mb-[8px] font-bold group-hover:text-[#E7000B]">
            Laptop
          </h4>
          <p className="mb-[16px] group-hover:text-gray-500">
            Gaming, văn phòng, đồ họa
          </p>
          <div className="flex items-center text-red-600 group-hover:text-[#E7000B]">
            <span className="font-medium">Khám phá ngay</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className="mt-0.5 group-hover:translate-x-2 transition-transform"
            >
              <path
                fill="currentColor"
                d="M8.025 22L6.25 20.225L14.475 12L6.25 3.775L8.025 2l10 10z"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(CategoryCard);
