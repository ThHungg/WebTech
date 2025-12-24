import { memo } from "react";

const FavorItems = ({product} : {product: any}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="shrink-0">
        <img
          src={product.image}
          alt=""
          className="w-20 h-20 object-cover rounded-lg"
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div>
          <p className="text-[16px] font-medium text-gray-900 text-sm md:text-base line-clamp-2">
            {product.name}
          </p>

          <div className="mt-1 space-y-1">
            {product.originalPrice && (
              <span className="text-gray-400 text-xs line-through block">
                {product.originalPrice}
              </span>
            )}
            <span className="text-red-600 font-bold text-lg">
              {product.salePrice}
            </span>
          </div>
        </div>

        <div className="flex gap-2 mt-3">
          {product.inStock ? (
            <button className="flex-1 bg-red-600 hover:bg-red-700 text-white text-sm font-bold py-2 rounded-lg transition-colors">
              Thêm vào giỏ
            </button>
          ) : (
            <button
              disabled
              className="flex-1 bg-gray-300 text-white text-sm font-bold py-2 rounded-lg cursor-not-allowed"
            >
              Hết hàng
            </button>
          )}

          <div className="w-10 h-10 flex items-center justify-center border border-gray-200 rounded-lg text-red-600 hover:bg-red-50 transition-colors">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-6 h-6"
            >
              <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
export default memo(FavorItems);