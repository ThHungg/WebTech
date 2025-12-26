import { memo } from "react";

const BrandCard = ({brandData}: any) => {
  return (
    <div className="bg-white inline-flex gap-2 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center group cursor-pointer">
      <img
        src="https://www.svgrepo.com/show/303479/asus-rog-1-logo.svg"
        alt=""
        className="w-[40px] h-[40px]"
      />
      <div className="text-center">
        <div className="text-2xl font-bold text-gray-400 group-hover:text-gray-900 transition-colors">
          ASUS
        </div>
      </div>
    </div>
  );
};

export default memo(BrandCard);
