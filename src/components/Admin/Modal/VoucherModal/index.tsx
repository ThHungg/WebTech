import { memo } from "react";

const VoucherModal = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="bg-white rounded-xl max-w-screen-md  ">
        <div className="flex justify-between p-[24px] ">
          <h5 className="font-bold">Thêm Voucher mới</h5>
          <button onClick={onClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 24 24"
            >
              <path
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m7 7l10 10M7 17L17 7"
              />
            </svg>
          </button>
        </div>
        <div className=" border-b border-gray-200"></div>
        <div className="grid grid-cols-2">
          <div className="p-[18px] col-span-1"></div>
        </div>
      </div>
    </div>
  );
};

export default memo(VoucherModal);
