import { memo } from "react";

interface StarRatingProps {
  rating?: number;
  maxStars?: number;
}

const StarRating = ({ rating = 5, maxStars = 5 }: StarRatingProps) => {
  // Đảm bảo rating không âm và không vượt quá maxStars
  const validRating = Math.max(0, Math.min(rating, maxStars));

  return (
    <div className="flex items-center gap-1">
      {Array.from({ length: maxStars }).map((_, index) => (
        <svg
          key={index}
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`lucide lucide-star w-4 h-4 ${
            index < validRating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-none text-gray-300"
          }`}
          aria-hidden="true"
        >
          <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
        </svg>
      ))}
    </div>
  );
};

export default memo(StarRating);
