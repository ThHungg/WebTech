import { memo } from "react";
import OrderItems from "./OrderItems";
import * as orderServices from "../../../../services/orderServices";
import { useQuery } from "@tanstack/react-query";

const PersonalOrder = () => {
  const fetchUserOrders = async () => {
    const res = await orderServices.getOrdersByUser(1, 10);
    return res;
  };

  const { data: userOrders = [] } = useQuery({
    queryKey: ["userOrders"],
    queryFn: fetchUserOrders,
  });

  console.log("userOrders", userOrders);

  return (
    <div className="col-span-3 bg-white rounded-lg shadow-sm p-6">
      <h5 className="font-bold text-xl">Đơn hàng của tôi</h5>
      {userOrders?.data?.map((order: any) => (
        <OrderItems key={order.id} order={order} />
      ))}
    </div>
  );
};
export default memo(PersonalOrder);
