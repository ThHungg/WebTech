import StarRating from "@/components/Common/StarRating";
import { formatPercentage } from "@/utils/formatPercentage";
import formatVND from "@/utils/formatVND";
import getFullImg from "@/utils/getFullImg";
import { memo } from "react";
import * as  cartServices from "../../../services/cartServices";
import { toast } from "react-toastify";

const FeaturedCard = ({dataProduct}: {dataProduct: any}) => {
  console.log("data", dataProduct);
  if (!dataProduct) {
    return null;
  }
  const addToCart = async (e : any) => {
      e.preventDefault();
      console.log("add to cart");
      try {
        const res = await cartServices.addItemsToCart(dataProduct?.variants[0]?.id, 1);
        toast.success("Thêm vào giỏ hàng thành công");
      } catch (error) {
        console.log(error);
        toast.error("Thêm vào giỏ hàng thất bại");
      }
    }
  return (
    <div className="group my-3 mx-2 cursor-pointer">
      <div className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-103 hover:-translate-y-1">
        <div className="aspect-square overflow-hidden relative">
          <img
            src={getFullImg(dataProduct?.images?.[0]?.image)}
            alt=""
            className="w-full h-full object-cover hover:scale-110 transform transition-transform duration-300"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            className="w-8 h-8 p-2 bg-white rounded-full text-red-500 opacity-0 group-hover:opacity-100 absolute top-2 right-2 cursor-pointer transition-all duration-200 hover:scale-110 hover:shadow-lg hover:bg-red-50 hover:text-red-600"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeDasharray="32"
              strokeDashoffset="32"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 8c0 0 0 0 -0.76 -1c-0.88 -1.16 -2.18 -2 -3.74 -2c-2.49 0 -4.5 2.01 -4.5 4.5c0 0.93 0.28 1.79 0.76 2.5c0.81 1.21 8.24 9 8.24 9M12 8c0 0 0 0 0.76 -1c0.88 -1.16 2.18 -2 3.74 -2c2.49 0 4.5 2.01 4.5 4.5c0 0.93 -0.28 1.79 -0.76 2.5c-0.81 1.21 -8.24 9 -8.24 9"
            >
              <animate
                fill="freeze"
                attributeName="stroke-dashoffset"
                dur="0.7s"
                values="32;0"
              />
            </path>
          </svg>
          <div className="absolute top-2 left-2 px-3 py-1 rounded-md bg-red-500">
            <span className="font-bold text-white text-[13px]">
              {Number(dataProduct?.variants[0]?.discount_percent) > 0
                ? `-${formatPercentage(
                    Number(dataProduct.variants[0].discount_percent)
                  )}`
                : Number(dataProduct?.variants[0]?.discount_amount) > 0
                ? `-${formatVND(
                    Number(dataProduct.variants[0].discount_amount)
                  )}`
                : ""}
            </span>
          </div>
        </div>
        <div className="p-5">
          <h6 className="mb-[8px] font-bold group-hover:text-[#E7000B] mb-[12px]  truncate">
            {dataProduct.name}
          </h6>
          {/* Đánh giá */}
          <div className="flex items-center mb-[12px]">
            <StarRating rating={dataProduct.avg_rating} />
            <span className="ml-2 text-[12px] text-gray-500">(127)</span>
          </div>
          <div className="mb-4 flex gap-2">
            <div className="px-[8px] py-[4px] bg-gray-100 rounded-md flex items-center justify-center max-w-[120px]">
              <span className="text-[12px] whitespace-nowrap overflow-hidden text-ellipsis w-[80px] ">
                {dataProduct?.attributeValues[0]?.value}
              </span>
            </div>
            <div className="px-[8px] py-[4px] bg-gray-100 rounded-md flex items-center justify-center w-fit">
              <span className="text-[12px] whitespace-nowrap overflow-hidden text-ellipsis w-[80px]">
                {dataProduct?.attributeValues[1]?.value}
              </span>
            </div>
          </div>
          <div className="mb-4">
            <p className="text-[14px] text-gray-400 line-through">
              {formatVND(dataProduct?.variants[0]?.original_price)}
            </p>
            <p className="text-[24px] font-bold text-red-600">
              {formatVND(dataProduct?.variants[0]?.price)}
            </p>
          </div>
          <button
            onClick={addToCart}
            className="py-[12px] flex items-center justify-center gap-2 text-center w-full bg-linear-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold transition-all duration-200 hover:from-red-700 hover:to-orange-600 hover:shadow-md active:scale-95"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1em"
              height="1em"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M6.01 16.136L4.141 4H3a1 1 0 0 1 0-2h1.985a1 1 0 0 1 .66.235a1 1 0 0 1 .346.627L6.319 5H14v2H6.627l1.23 8h9.399l1.5-5h2.088l-1.886 6.287A1 1 0 0 1 18 17H7.016a1 1 0 0 1-.675-.248a1 1 0 0 1-.332-.616zM10 20a2 2 0 1 1-4 0a2 2 0 0 1 4 0m9 0a2 2 0 1 1-4 0a2 2 0 0 1 4 0m0-18a1 1 0 0 1 1 1v1h1a1 1 0 1 1 0 2h-1v1a1 1 0 1 1-2 0V6h-1a1 1 0 1 1 0-2h1V3a1 1 0 0 1 1-1"
              />
            </svg>{" "}
            Thêm vào giỏ hàng
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(FeaturedCard);
