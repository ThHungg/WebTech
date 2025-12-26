import React, { memo, useState, useEffect, useCallback, useRef } from "react";
import CartItemList from "../CartItemList";
import CartSummary from "../CartSummary";
import * as cartServices from "../../../services/cartServices";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

const CartCentent = ({ cartData }: { cartData: any }) => {
  const router = useRouter();
  const [localCartData, setLocalCartData] = useState(cartData);
  const [selected, setSelected] = useState<any[]>([]);
  const selectAllTimeout = useRef<any>(null);
  const itemTimeouts = useRef<any>({});
  // lấy ra danh sách đã chọn trong cart
  useEffect(() => {
    if (localCartData?.cart?.items) {
      const selectedIds = localCartData?.cart?.items
        .filter((item: any) => item?.is_selected)
        .map((item: any) => item?.id);
      setSelected(selectedIds);
    }
  }, [localCartData]);

  useEffect(() => {
    setLocalCartData(cartData);
  }, [cartData]);

  const handleUpdateQuantity = useCallback((id: any, quantity: number) => {
    setLocalCartData((prev: any) => {
      const newItems = prev?.cart?.items?.map((item: any) =>
        item.id === id ? { ...item, quantity } : item
      );
      return { ...prev, cart: { ...prev.cart, items: newItems } };
    });
  }, []);

  const cartItems = localCartData?.cart?.items || [];
  const isAllSelected =
    cartItems.length > 0 && selected.length === cartItems.length;

  const handleSelectAll = () => {
    const isSelect = !isAllSelected;
    // Optimistic update: Cập nhật UI ngay lập tức
    if (isSelect) {
      
      setSelected(cartItems.map((item: any) => item?.id));
    } else {
      setSelected([]);
    }

    // Debounce API call
    if (selectAllTimeout.current) {
      clearTimeout(selectAllTimeout.current);
    }
    selectAllTimeout.current = setTimeout(async () => {
      try {
        if (isSelect) {
          await cartServices.selectAllCartItems();
        } else {
          await cartServices.unSelectAllCartItems();
        }
      } catch (error) {
        console.error("Select all failed", error);
      }
    }, 500);
  };

  const handleSelectItem = (id: any) => {
    const isSelected = selected.includes(id);
    // Optimistic update
    if (isSelected) {
      setSelected((prev) => prev.filter((item: any) => item !== id));
    } else {
      setSelected((prev) => [...prev, id]);
    }

    // Debounce API call per item
    if (itemTimeouts.current[id]) {
      clearTimeout(itemTimeouts.current[id]);
    }
    itemTimeouts.current[id] = setTimeout(async () => {
      try {
        await cartServices.selectCartItem(id, !isSelected);
        delete itemTimeouts.current[id];
      } catch (error) {
        console.error("Select item failed", error);
      }
    }, 500);
  };
  const handleDeleteSelected = () => {
    if (selected.length === 0) {
      toast.error("Vui lòng chọn sản phẩm trước khi xóa");
      return;
    }

    toast(
      ({ closeToast }) => (
        <div className="flex flex-col items-center justify-center p-2">
          <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6 text-red-600"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0"
              />
            </svg>
          </div>
          <h3 className="font-bold text-lg text-gray-800 mb-1">Xác nhận xóa</h3>
          <p className="text-gray-600 text-center mb-5 text-base">
            Bạn có chắc muốn xóa {selected.length} sản phẩm đã chọn?
          </p>
          <div className="flex gap-3 w-full">
            <button
              onClick={closeToast}
              className="flex-1 py-2.5 px-4 text-sm font-semibold text-gray-700 bg-gray-100 rounded-xl hover:bg-gray-200 transition-colors"
            >
              Hủy
            </button>
            <button
              onClick={async () => {
                try {
                  await cartServices.deleteCartItems(selected);
                  toast.success("Xóa sản phẩm thành công");
                  setSelected([]);
                  router.refresh();
                } catch (error) {
                  console.error("Delete selected items failed", error);
                  toast.error("Xóa thất bại");
                }
                closeToast();
              }}
              className="flex-1 py-2.5 px-4 text-sm font-semibold text-white bg-red-500 rounded-xl hover:bg-red-600 shadow-sm transition-colors"
            >
              Xóa
            </button>
          </div>
        </div>
      ),
      {
        position: "top-center",
        autoClose: false,
        closeOnClick: false,
        draggable: false,
      }
    );
  };
  return (
    <div className="container grid grid-cols-12 gap-6 py-6 ">
      <div className="col-span-8">
        <CartItemList
          cartData={localCartData}
          selected={selected}
          onSelectAll={handleSelectAll}
          onSelectItem={handleSelectItem}
          onDeleteSelected={handleDeleteSelected}
          onUpdateQuantity={handleUpdateQuantity}
        />
      </div>
      <div className="col-span-4">
        <CartSummary cartData={localCartData} selected={selected}/>
      </div>
    </div>
  );
};

export default memo(CartCentent);
