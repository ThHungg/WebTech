import { memo } from "react";

const CheckoutConfirm = () => {
  return (
    <div className="p-[24px] rounded-lg w-full bg-white rounded-md border-[1px] border-gray-100 shadow-md">
      <h5 className="flex items-center gap-2 font-bold mb-[12px]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          className="text-red-500"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="2"
          >
            <path d="M15 2.458A10 10 0 0 0 12 2C6.477 2 2 6.477 2 12s4.477 10 10 10s10-4.477 10-10a10 10 0 0 0-.458-3" />
            <path strokeLinejoin="round" d="M8.5 9.5L12 13l9-10" />
          </g>
        </svg>
        Xác nhận đơn hàng
      </h5>
      <div className="p-[16px] mb-[12px] bg-gray-50 rounded-lg">
        <h6 className="font-medium text-gray-900 mb-3 font-semibold !text-[16px]">
          Thông tin giao hàng
        </h6>
        <div className="space-y-1">
          <p className="flex items-center gap-2 text-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 26 26"
            >
              <path
                fill="currentColor"
                d="M16.563 15.9c-.159-.052-1.164-.505-.536-2.414h-.009c1.637-1.686 2.888-4.399 2.888-7.07c0-4.107-2.731-6.26-5.905-6.26c-3.176 0-5.892 2.152-5.892 6.26c0 2.682 1.244 5.406 2.891 7.088c.642 1.684-.506 2.309-.746 2.397c-3.324 1.202-7.224 3.393-7.224 5.556v.811c0 2.947 5.714 3.617 11.002 3.617c5.296 0 10.938-.67 10.938-3.617v-.811c0-2.228-3.919-4.402-7.407-5.557"
              />
            </svg>
            <span className="font-semibold"> Họ và tên: </span>
            Đặng Thành Hưng
          </p>
          <p className="flex items-center gap-2 text-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="m20 8l-8 5l-8-5V6l8 5l8-5m0-2H4c-1.11 0-2 .89-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2"
              />
            </svg>
            <span className="font-semibold"> Email: </span>
            1@gmail.com
          </p>
          <p className="flex items-center gap-2 text-[14px]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 512 512"
            >
              <path
                fill="currentColor"
                d="M160.2 25c-7.9-18.9-28.5-28.9-48.1-23.6l-5.5 1.5C42 20.5-13.2 83.1 2.9 159.3C40 334.3 177.7 472 352.7 509.1C429 525.3 491.5 470 509.1 405.4l1.5-5.5c5.4-19.7-4.7-40.3-23.5-48.1l-97.3-40.5c-16.5-6.9-35.6-2.1-47 11.8l-38.6 47.2c-70.3-34.9-126.9-93.3-159.4-165l44.2-36c13.9-11.3 18.6-30.4 11.8-47z"
              />
            </svg>
            <span className="font-semibold"> Số điện thoại: </span>
            0348910968
          </p>
        </div>
      </div>
      <div className="p-[16px] mb-[12px] bg-gray-50 rounded-lg">
        <h6 className="font-medium text-gray-900 mb-3 font-semibold !text-[16px]">
          Phương thức giao hàng
        </h6>
        <p className="flex items-center gap-2 text-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M.75.75h22.5v22.5H.75zm2.5 2.5v17.5h17.5V3.25H15.5v8.25L12 9l-3.5 2.5V3.25zM14 18.75h4.5v-2.5H14z"
              clipRule="evenodd"
            />
          </svg>
          Giao hàng tiêu chuẩn
        </p>
      </div>
      <div className="p-[16px] mb-[12px] bg-gray-50 rounded-lg">
        <h6 className="font-medium text-gray-900 mb-3 font-semibold !text-[16px]">
          Phương thức thanh toán
        </h6>
        <p className="flex items-center gap-2 text-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6.5 15H6m12-6h-.5M3 6.5c7 2 11-2 18 0v11c-7-2-11 2-18 0zm8.47 3.106l.098-.02a2.451 2.451 0 0 1 .961 4.808l-.097.02a2.452 2.452 0 0 1-.961-4.808Z"
            />
          </svg>
          Thanh toán khi nhận hàng (COD)
        </p>
      </div>
      <div className="p-[16px] mb-[12px] bg-gray-50 rounded-lg">
        <h6 className="font-medium text-gray-900 mb-3 font-semibold !text-[16px]">
          Ghi chú
        </h6>
        <p className="flex items-center gap-2 text-[14px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M7 17h2.1l6-5.95l-2.15-2.15L7 14.85zm8.8-6.65l1.05-1.1Q17 9.1 17 8.9t-.15-.35l-1.4-1.4Q15.3 7 15.1 7t-.35.15l-1.1 1.05zM5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v14q0 .825-.587 1.413T19 21zm0-2h14V5H5zm7-14.75q.325 0 .538-.213t.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212M5 19V5z"
            />
          </svg>
          Thanh toán khi nhận hàng (COD) giao hàng nhanh chóng
        </p>
      </div>
      <div className="p-[12px] mb-[12px] bg-yellow-100 rounded-lg">
        <p className="text-sm text-yellow-800">
          <strong>Lưu ý:</strong> Vui lòng kiểm tra kỹ thông tin trước khi xác
          nhận đơn hàng. Sau khi đặt hàng thành công, chúng tôi sẽ liên hệ với
          bạn để xác nhận.
        </p>
      </div>
      <div className="flex gap-2">
        <button className="whitespace-nowrap px-3 bg-white inline-flex text-black py-3 rounded-lg font-semibold hover:shadow-lg border-[1px] border-gray-300 transition-all items-center justify-center gap-2">
          Quay lại
        </button>
        <button className="w-full bg-gradient-to-r from-red-600 to-orange-500 text-white py-3 rounded-lg font-bold hover:shadow-lg transition-all flex items-center justify-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 48 48"
          >
            <path
              fill="currentColor"
              d="M4 15.25A6.25 6.25 0 0 1 10.25 9h27.5A6.25 6.25 0 0 1 44 15.25v17.5A6.25 6.25 0 0 1 37.75 39h-27.5A6.25 6.25 0 0 1 4 32.75zm6.25-3.75a3.75 3.75 0 0 0-3.75 3.75v3.25h35v-3.25a3.75 3.75 0 0 0-3.75-3.75zM6.5 32.75a3.75 3.75 0 0 0 3.75 3.75h27.5a3.75 3.75 0 0 0 3.75-3.75V21h-35zm24.75-3.25a1.25 1.25 0 1 0 0 2.5h5.5a1.25 1.25 0 1 0 0-2.5z"
            />
          </svg>
          Xác nhận thanh toán
        </button>
      </div>
    </div>
  );
};

export default memo(CheckoutConfirm);
