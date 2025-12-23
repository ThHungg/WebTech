import { formatAddress } from "@/utils/formatAddress";
import { memo, useEffect, useState } from "react";
import AddressModal from "./AddressModal";
import * as authServices from "../../../../services/authServices";
import { toast } from "react-toastify";
import { useQueryClient } from "@tanstack/react-query";
const PersonalAddress = ({ userProfile }: { userProfile: any }) => {
    const [openAddAddressModal, setOpenAddAddressModal] = useState(false);
    const [editingAddress, setEditingAddress] = useState<any>(null);
    const sortedAddresses = [...(userProfile?.address || [])].sort(
        (a, b) => b.is_default - a.is_default
    );
    const queryClient = useQueryClient();
  const handleAddAddress = () => {
    setEditingAddress(null);
    setOpenAddAddressModal(true);
    };
    const handleEditAddress = (address: any) => {
      setEditingAddress(address);
      setOpenAddAddressModal(true);
    };
    const handleSubmit = async (data: any) => {
      if (editingAddress) {
        console.log("UPDATE", editingAddress.id, data);
         try {
           await authServices.updateAddress(editingAddress.id, data);
           toast.success("Cập nhật địa chỉ thành công!");
         } catch (error) {
           toast.error("Cập nhật địa chỉ thất bại!");
         }
      } else {
        try {
            await authServices.addAddress(data);
            toast.success("Thêm địa chỉ thành công!"); 
        } catch (error) {
            toast.error("Thêm địa chỉ thất bại!");
        }
          
      }
      setOpenAddAddressModal(false);
      queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    };
    const handleChangeDefault = async (addressId: number) => {
      try {
        await authServices.changeDefaultAddress(addressId);
        toast.success("Đặt làm địa chỉ mặc định thành công!");
      } catch (error) {
        toast.error("Đặt làm địa chỉ mặc định thất bại!");
      }
        queryClient.invalidateQueries({ queryKey: ["userProfile"] });
    };
  return (
    <div className="col-span-3 bg-white rounded-lg shadow-sm p-6">
      <div className="flex justify-between items-center border-b border-gray-200 pb-4 mb-4">
        <h5 className="font-bold text-xl">Địa chỉ của tôi</h5>
        <button
          className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700"
          onClick={handleAddAddress}
        >
          Thêm địa chỉ mới
        </button>
      </div>
      {sortedAddresses.length === 0 && (
        <p>Chưa có địa chỉ nào được thêm vào.</p>
      )}
      {sortedAddresses.map((address: any) => (
        <div
          key={address.id}
          className="my-8 space-y-2 border-b border-gray-200 pb-4
                   last:border-b-0 last:pb-0 last:mb-0"
        >
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <p className="font-medium">{userProfile?.data?.username}</p>
              <div className="mx-2 text-gray-500">|</div>
              <p className="text-gray-500">{userProfile?.data?.phone}</p>
            </div>
            <div className="flex gap-4 cursor-pointer items-center ">
              <p
                onClick={() => handleEditAddress(address)}
                className="border p-1 rounded hover:bg-gray-50 "
              >
                Cập nhập
              </p>
              {!address.is_default && <p className="bg-red-600 p-1 text-white rounded">Xóa</p>}
            </div>
          </div>
          <div className="flex justify-between items-center text-gray-500">
            <div className="">
              <p>{address?.street_address}</p>
              <p>{formatAddress(address)}</p>
            </div>
            <button
              className={`border p-1 rounded ${
                address.is_default
                  ? "cursor-not-allowed  text-red-600"
                  : "bg-orange-600 text-white hover:bg-orange-500 cursor-pointer"
              }`}
              disabled={address.is_default}
              onClick={() => handleChangeDefault(address.id)}
            >
              Thiết lập mặc định
            </button>
          </div>
          {address.is_default && (
            <span className="inline-block mt-2 px-2 py-1 text-xs font-semibold text-red-400 border border-red-400 ">
              Địa chỉ mặc định
            </span>
          )}
        </div>
      ))}
      <AddressModal
        open={openAddAddressModal}
        onClose={() => setOpenAddAddressModal(false)}
        onSubmit={handleSubmit}
        initialData={editingAddress}
      />
    </div>
  );
};

export default memo(PersonalAddress);
