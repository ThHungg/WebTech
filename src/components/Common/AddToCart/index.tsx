import { memo } from "react";

const AddToCart = ({ onChange }: { onChange?: () => void }) => {
  return (
    <button onClick={onChange} className="py-[12px] flex items-center justify-center gap-2 text-center w-full bg-gradient-to-r from-red-600 to-orange-500 text-white rounded-lg font-semibold transition-all duration-200 hover:from-red-700 hover:to-orange-600 hover:shadow-md active:scale-95">
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
  );
};

export default memo(AddToCart);
