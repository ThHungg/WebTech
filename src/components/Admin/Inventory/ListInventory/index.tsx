import BrandCard from "@/components/Card/BrandCard";
import { memo } from "react";
import BrandSelector from "../BrandSelector";

const ListInventory = () => {
  return (
    <div className="p-[24px] border-b border-gray-200 bg-white rounded-xl shadow-md">
      <BrandSelector />
      <div className="">
        
      </div>
    </div>
  );
};

export default memo(ListInventory);
