"use client";
import StarRating from "@/components/Common/StarRating";
import { useQuery } from "@tanstack/react-query";
import { memo, useState } from "react";
import * as reviewServices from '../../../../services/reviewServices'
import { toast } from "react-toastify";
const ProductReviews = ({productData} : {productData : any}) => {  
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState("");

  const {data : reviews = [], refetch} = useQuery({
    queryKey: ['reviews', productData?.id],
    queryFn: async () => (await reviewServices.getAllReviewsByProductId(productData?.id)),
    enabled: !!productData?.id
  });
  console.log("reviews: ", reviews);

  const handleAddReview = async () => {
    if (!content.trim()) {
      toast.warning("Vui lòng nhập nội dung đánh giá");
      return;
    }
    try {
      const res = await reviewServices.createReview(productData?.id, rating, content);
      console.log("res: ", res);
      toast.success("Thêm đánh giá thành công");
      setContent("");
      setRating(5);
      refetch();
    } catch (error) {
      toast.error("Thêm đánh giá thất bại");
      console.log("error: ", error);
    }
  };

  return (
    <div className="">
      {/* Form đánh giá */}
      <div className=" bg-gray-50 p-6 rounded-xl border border-gray-100">
        <h3 className="text-lg font-bold mb-4 text-gray-800">
          Viết đánh giá của bạn
        </h3>
        <div className="mb-4">
          <div className="flex gap-1">
            {[1, 2, 3, 4, 5].map((star) => (
              <button
                key={star}
                onClick={() => setRating(star)}
                className="focus:outline-none transition-transform hover:scale-110"
                type="button"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill={star <= rating ? "#FBBF24" : "none"}
                  stroke={star <= rating ? "#FBBF24" : "#D1D5DB"}
                  className="w-8 h-8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                </svg>
              </button>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Chia sẻ cảm nhận của bạn về sản phẩm..."
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none min-h-[100px]"
          />
        </div>
        <button
          onClick={handleAddReview}
          className="px-6 py-2.5 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-sm"
        >
          Gửi đánh giá
        </button>
      </div>

      {/* Danh sách đánh giá */}
      <div className="space-y-6 p-6  bg-white rounded-xl border border-gray-100">
        {reviews?.data && reviews?.data.length > 0 ? (
          reviews?.data.map((review: any) => (
            <div
              key={review?.id}
              className="flex gap-4 border-b border-gray-200 pb-6 last:border-0"
            >
              <img
                src={"https://i.pravatar.cc/150?img=12"}
                alt={review?.user?.username}
                className="rounded-full w-[48px] h-[48px] object-cover"
              />
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-[16px] font-bold">
                    {review?.user?.username || "Người dùng"}
                  </p>
                  <span className="bg-green-100 text-green-700 text-xs px-2 py-0.5 rounded-full font-medium flex items-center gap-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6 9 17l-5-5"></path>
                    </svg>
                    Đã mua hàng
                  </span>
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <StarRating rating={review?.rate || 5} />
                  <p className="text-[14px] text-gray-400">
                    {review?.created_at
                      ? new Date(review.created_at).toLocaleDateString("vi-VN")
                      : ""}
                  </p>
                </div>
                <p className="text-[16px] leading-[26px] text-gray-600 mt-2">
                  {review?.content}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-8 text-gray-500">
            Chưa có đánh giá nào. Hãy là người đầu tiên đánh giá sản phẩm này!
          </div>
        )}
      </div>
    </div>
  );
};

export default memo(ProductReviews);
