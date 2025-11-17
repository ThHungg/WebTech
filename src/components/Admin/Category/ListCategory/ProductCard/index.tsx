import { memo } from "react";

const ProductCard = () => {
  return (
    <div className="p-[12px]">
      <div className="flex justify-between items-center bg-gray-50 p-[12px] hover:bg-gray-100 rounded-lg">
        <div className="flex gap-2 items-center">
          <img
            src="https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500"
            alt=""
            className="w-[48px] h-[48px] object-cover rounded-lg"
          />
          <div>
            <h6 className="font-bold">Asus Gaming</h6>
            <p className="text-[12px] text-gray-500">4 mẫu sản phẩm</p>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <div className="flex gap-2">
            <button className="p-1 hover:bg-gray-200 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="text-gray-600"
              >
                <path
                  fill="currentColor"
                  d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"
                />
                <path
                  fill="currentColor"
                  d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"
                />
              </svg>
            </button>
            <button className="p-1 hover:bg-red-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="18"
                height="18"
                viewBox="0 0 24 24"
                className="text-red-500"
              >
                <path
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M4.687 6.213L6.8 18.976a2.5 2.5 0 0 0 2.466 2.092h3.348m6.698-14.855L17.2 18.976a2.5 2.5 0 0 1-2.466 2.092h-3.348m-1.364-9.952v5.049m3.956-5.049v5.049M2.75 6.213h18.5m-6.473 0v-1.78a1.5 1.5 0 0 0-1.5-1.5h-2.554a1.5 1.5 0 0 0-1.5 1.5v1.78z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCard);
