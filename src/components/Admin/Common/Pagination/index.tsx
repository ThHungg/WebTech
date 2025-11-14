import { memo } from "react";

const Pagination = () => {
  return (
    <div className="p-[24px] border-t border-gray-200">
      <div className="flex justify-between items-center">
        <p className="text-[14px] text-gray-500">Số bản ghi: 100</p>
        <div className="flex gap-2 items-center text-[14px]">
          <button className="p-2 border-[1px] border-gray-400 rounded-lg hover:bg-gray-100">
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
          <button className="px-[16px] py-[8px] rounded-lg text-white bg-blue-500">
            1
          </button>
          <button className="px-[16px] py-[8px] rounded-lg hover:bg-gray-100">
            ...
          </button>
          <button className="px-[16px] py-[8px] rounded-lg hover:bg-gray-100">
            2
          </button>
          <button className="px-[16px] py-[8px] rounded-lg hover:bg-gray-100">
            3
          </button>
          <button className="p-2 border-[1px] border-gray-400 rounded-lg hover:bg-gray-100">
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
        </div>
      </div>
    </div>
  );
};

export default memo(Pagination);
