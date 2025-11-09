import { memo } from "react";

const ProductSpecs = () => {
  const specifications = [
    { label: "Model", value: "ASUS ROG Strix G16 (2024)" },
    { label: "CPU", value: "Intel Core i9-13980HX" },
    { label: "GPU", value: "NVIDIA GeForce RTX 4070" },
    { label: "RAM", value: "32GB DDR5" },
    { label: "Storage", value: "1TB NVMe SSD" },
    { label: "Display", value: "16-inch QHD, 240Hz" },
    { label: "Operating System", value: "Windows 11 Home" },
  ];
  return (
    <div className="p-[32px]">
      <div className="flex items-center mb-[12px]">
        <div className="bg-red-500 w-[4px] self-stretch rounded-full"></div>
        <h5 className="font-semibold pl-2">Thông số kỹ thuật</h5>
      </div>

      <div className="border border-gray-200 rounded-xl overflow-hidden">
        {specifications.map((spec, index) => (
          <div key={index}>
            <div
              className={
                index % 2 === 0
                  ? "bg-gray-50 p-4 grid grid-cols-3 gap-4"
                  : "p-4 grid grid-cols-3 gap-4"
              }
            >
              <span className="font-semibold text-gray-700">{spec.label}</span>
              <span className="text-gray-900 col-span-2">{spec.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ProductSpecs);
