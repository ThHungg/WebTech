"use client";
import { memo } from "react";

interface PaginationProps {
  page: number;
  limit: number;
  total?: number;
  onPageChange: (page: number) => void;
  onLimitChange?: (limit: number) => void;
}

const Pagination = ({
  page,
  limit,
  total = 100,
  onPageChange,
  onLimitChange,
}: PaginationProps) => {
  const totalPages = Math.ceil(total / limit);

  const handlePrevPage = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNextPage = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  const generatePageNumbers = () => {
    const pages: (number | string)[] = [];
    const maxPagesToShow = 5;

    if (totalPages <= maxPagesToShow) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      pages.push(1);

      if (page > 3) {
        pages.push("...");
      }

      const start = Math.max(2, page - 1);
      const end = Math.min(totalPages - 1, page + 1);

      for (let i = start; i <= end; i++) {
        if (!pages.includes(i)) {
          pages.push(i);
        }
      }

      if (page < totalPages - 2) {
        pages.push("...");
      }

      if (!pages.includes(totalPages)) {
        pages.push(totalPages);
      }
    }

    return pages;
  };

  const pageNumbers = generatePageNumbers();

  return (
    <div className="p-[24px] border-t border-gray-200 flex justify-center items-center gap-4">
      <button
        onClick={handlePrevPage}
        disabled={page === 1}
        className="p-2 border-[1px] border-gray-400 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z"
          />
        </svg>
      </button>

      {pageNumbers.map((pageNum, index) =>
        pageNum === "..." ? (
          <span key={`dots-${index}`} className="px-[16px] py-[8px]">
            ...
          </span>
        ) : (
          <button
            key={pageNum}
            onClick={() => onPageChange(pageNum as number)}
            className={`px-[16px] py-[8px] rounded-lg ${
              page === pageNum
                ? "text-white bg-red-500"
                : "border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {pageNum}
          </button>
        )
      )}

      <button
        onClick={handleNextPage}
        disabled={page === totalPages}
        className="p-2 border-[1px] border-gray-400 rounded-lg hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="currentColor"
            fillRule="evenodd"
            d="m9.005 4l8 8l-8 8L7 18l6.005-6L7 6z"
          />
        </svg>
      </button>

      <span className="text-gray-600 text-sm">
        Trang {page} / {totalPages}
      </span>
    </div>
  );
};

export default memo(Pagination);
