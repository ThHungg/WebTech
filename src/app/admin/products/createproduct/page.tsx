import ProductCreateForm from "@/components/Admin/Product/ProductCreateForm";
import { memo } from "react";

const CreateProductPage = () => {
  return (
    <div className="p-[32px] ">
      <div className="flex justify-between items-center">
        <h3 className="font-bold mb-[24px]">Thêm sản phảm mới</h3>
        <button className="py-[8px] px-[16px] bg-blue-600 rounded-lg text-white font-semibold">
          + Thêm sản phẩm
        </button>
      </div>
      <ProductCreateForm />
    </div>
  );
};

export default memo(CreateProductPage);
