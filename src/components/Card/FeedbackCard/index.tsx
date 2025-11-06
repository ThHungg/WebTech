import StarRating from "@/components/Common/StarRating";
import { memo } from "react";

const FeedbackCard = () => {
  return (
    <div className="p-[24px] bg-gray-100 inline-block shadow-md rounded-2xl hover:scale-103 hover:shadow-lg transition-shadow duration-300">
      <div className="flex items-center gap-5 mb-[16px]">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt=""
          className="rounded-full w-[56px] h-[56px] object-cover"
        />
        <div>
          <h6 className="font-semibold">Nguyễn Văn A</h6>
          <StarRating rating={4} />
        </div>
      </div>
      <p className="text-gray-700 mb-4 italic">
        "Sản phẩm chất lượng, giao hàng nhanh. Nhân viên tư vấn nhiệt tình. Sẽ
        ủng hộ shop lâu dài!"
      </p>
      <p className="text-sm text-gray-500 font-medium">
        Sản phẩm: Laptop Gaming ASUS ROG
      </p>
    </div>
  );
};

export default memo(FeedbackCard);
