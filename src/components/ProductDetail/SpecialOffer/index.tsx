import { memo } from "react";

const SpecialOffer = () => {
  const listOffer = [
    "Balo ASUS ROG cao cấp (trị giá 1.500.000đ)",
    "Chuột gaming ASUS ROG Gladius III (trị giá 2.000.000đ)",
    "Phiếu mua hàng 500.000đ",
    "Miễn phí giao hàng toàn quốc",
  ];
  return (
    <div className="bg-white p-[20px] rounded-2xl shadow-md mt-[20px] border-[1px] border-gray-200">
      <h5 className="font-bold text-gray-900 mb-3 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          className="text-red-500"
        >
          <g
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          >
            <path d="M3 9a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm9-1v13" />
            <path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7m2.5-4a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5a2.5 2.5 0 0 1 0 5" />
          </g>
        </svg>
        Ưu đãi đặc biệt
      </h5>
      {listOffer.map((offer, index) => (
        <div
          key={index}
          className="bg-red-50 p-2 rounded-xl border-[1px] mb-[10px] border-red-200 flex items-center gap-2 white"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 16 16"
            className="text-red-500"
          >
            <polyline
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="1.5"
              points="2.75 8.75 6.25 12.25 13.25 4.75"
            />
          </svg>
          <p className="text-gray-500 font-semibold">{offer}</p>
        </div>
      ))}
    </div>
  );
};

export default memo(SpecialOffer);
