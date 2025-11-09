import StarRating from "@/components/Common/StarRating";
import { memo } from "react";

const ProductReviews = () => {
  return (
    <div className="p-[32px]">
      <div className="flex gap-4 mb-[16px] border-b border-gray-200 flex-1 pb-4">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt=""
          className="rounded-full w-[48px] h-[48px]"
        />
        <div className="">
          <div className="flex items-center gap-2">
            <p className="text-[16px] font-bold">Nguyễn Văn A</p>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Đã mua hàng
            </span>
          </div>
          <div className="flex items-center gap-2">
            <StarRating rating={5} />
            <p className="text-[14px] text-gray-400">09/11/2025</p>
          </div>
          <p className="text-[16px] leading-[26px] text-gray-600">
            Máy rất mạnh, chiến game mượt mà. Thiết kế đẹp, chất lượng tốt. Đáng
            đồng tiền bát gạo! Tản nhiệt cũng rất tốt, chơi game nặng vẫn mát.
            Rất hài lòng với sản phẩm này.
          </p>
          <div className="flex items-center gap-2">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=200"
              alt=""
              className="w-[80px] h-[80px] rounded-xl mt-[12px]"
            />
            <img
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=200"
              alt=""
              className="w-[80px] h-[80px] rounded-xl mt-[12px]"
            />
          </div>
        </div>
      </div>
      <div className="flex gap-4 mb-[16px] border-b border-gray-200 flex-1 pb-4">
        <img
          src="https://i.pravatar.cc/150?img=12"
          alt=""
          className="rounded-full w-[48px] h-[48px]"
        />
        <div className="">
          <div className="flex items-center gap-2">
            <p className="text-[16px] font-bold">Nguyễn Văn B</p>
            <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6 9 17l-5-5"></path>
              </svg>
              Đã mua hàng
            </span>
          </div>
          <div className="flex items-center gap-2">
            <StarRating rating={5} />
            <p className="text-[14px] text-gray-400">09/11/2025</p>
          </div>
          <p className="text-[16px] leading-[26px] text-gray-600">
            Máy rất mạnh, chiến game mượt mà. Thiết kế đẹp, chất lượng tốt. Đáng
            đồng tiền bát gạo! Tản nhiệt cũng rất tốt, chơi game nặng vẫn mát.
            Rất hài lòng với sản phẩm này.
          </p>
          <div className="flex items-center gap-2">
            {" "}
            <img
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=200"
              alt=""
              className="w-[80px] h-[80px] rounded-xl mt-[12px]"
            />
            <img
              src="https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=200"
              alt=""
              className="w-[80px] h-[80px] rounded-xl mt-[12px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductReviews);
