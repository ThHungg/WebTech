import { memo } from "react";
import FavorItems from "./FavorItems";

const PersonalFavor = () => {
  const favorites = [
    {
      id: 1,
      name: "MacBook Pro 14 M3 Pro 2024",
      originalPrice: "59.990.000 ₫",
      salePrice: "52.990.000 ₫",
      inStock: true,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    },
    {
      id: 2,
      name: "iPad Pro 12.9 M2 2024",
      originalPrice: null, // Không có giá gốc
      salePrice: "32.990.000 ₫",
      inStock: true,
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    },
    {
      id: 3,
      name: "AirPods Pro 2nd Gen",
      originalPrice: "7.490.000 ₫",
      salePrice: "6.490.000 ₫",
      inStock: false, // Hết hàng -> Sẽ hiện nút màu xám
      image:
        "https://images.unsplash.com/photo-1603302576837-37561b2e2302?w=500",
    },
  ];
  return (
    <div className="col-span-3 bg-white rounded-lg shadow-sm p-6">
      <h5 className="font-bold text-xl">
        Sản phẩm yêu thích ({favorites.length})
      </h5>
      <div className="grid grid-cols-2 gap-4 mt-4">
        {favorites.map((item) => (
          <FavorItems key={item.id} product={item}/>
        ))}
      </div>
    </div>
  );
};
export default memo(PersonalFavor);
