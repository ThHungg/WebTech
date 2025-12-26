"use client";
import { memo, useEffect, useState } from "react";
import DeliveryMethod from "./DeliveryMethod";
import { useRouter } from "next/navigation";
import PaymentMethod from "./PaymentMethod";
import * as orderServices from "../../../services/orderServices";
import * as paymentServices from "../../../services/paymentServices";
import { toast } from "react-toastify";
import * as cartServices from "../../../services/cartServices";
import { formatAddress } from "@/utils/formatAddress";

const CheckoutForm = ({
  addresses,
  formData,
  setFormData,
  finalTotal,
}: any) => {
  const router = useRouter();

  const [currentAddress, setCurrentAddress] = useState<any>(null);
  const [showAddressList, setShowAddressList] = useState(false);

  const [provinces, setProvinces] = useState([]);
  const [districts, setDistricts] = useState([]);
  const [wards, setWards] = useState([]);

  const [selectedProvince, setSelectedProvince] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [selectedWard, setSelectedWard] = useState("");
  const [specificAddress, setSpecificAddress] = useState("");

  const [orderCode, setOrderCode] = useState(null);

  const handleOnChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev: any) => ({
      ...prev,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (addresses?.length > 0 && !currentAddress) {
      const defaultAddr = addresses.find((addr: any) => addr?.is_default);
      console.log("defaultAddr: ", defaultAddr);
      
      setCurrentAddress(defaultAddr || addresses[0]);
    }
  }, [addresses]);

  useEffect(() => {
    if (currentAddress) {
      const fullAddress = formatAddress(currentAddress);
      console.log("Full address", fullAddress);
      
      setFormData((prev: any) => ({
        ...prev,
        shipping_address: fullAddress,
      }));
    }
  }, [currentAddress, setFormData]);

  // // Build shipping address from selected location and specific address
  // useEffect(() => {
  //   if (!selectedProvince && !specificAddress) return;
  //   const addressParts: (string | undefined)[] = [
  //     specificAddress,
  //     (wards.find((w: any) => w.code === Number(selectedWard)) as any)?.name,
  //     (districts.find((d: any) => d.code === Number(selectedDistrict)) as any)
  //       ?.name,
  //     (provinces.find((p: any) => p.code === Number(selectedProvince)) as any)
  //       ?.name,
  //   ];
  //   const fullAddress = addressParts.filter(Boolean).join(", ");

  //   setFormData((prev: any) => ({
  //     ...prev,
  //     shipping_address: fullAddress,
  //   }));
  // }, [
  //   selectedProvince,
  //   selectedDistrict,
  //   selectedWard,
  //   specificAddress,
  //   provinces,
  //   districts,
  //   wards,
  // ]);

  // // Fetch provinces
  // useEffect(() => {
  //   const fetchProvinces = async () => {
  //     try {
  //       const res = await fetch("https://provinces.open-api.vn/api/v2/p/");
  //       const data = await res.json();
  //       setProvinces(data);
  //     } catch (error) {
  //       console.error("Error fetching provinces:", error);
  //     }
  //   };
  //   fetchProvinces();
  // }, []);

  // // Fetch districts when province changes
  // useEffect(() => {
  //   if (!selectedProvince) {
  //     setDistricts([]);
  //     setWards([]);
  //     setSelectedDistrict("");
  //     setSelectedWard("");
  //     return;
  //   }

  //   const fetchDistricts = async () => {
  //     try {
  //       const res = await fetch(`https://provinces.open-api.vn/api/d/`);
  //       const data = await res.json();

  //       const filteredDistricts = data.filter(
  //         (d: any) => d.province_code === Number(selectedProvince)
  //       );

  //       setDistricts(filteredDistricts);
  //       setWards([]);
  //       setSelectedDistrict("");
  //       setSelectedWard("");
  //     } catch (error) {
  //       console.error("Error fetching districts:", error);
  //       setDistricts([]);
  //     }
  //   };
  //   fetchDistricts();
  // }, [selectedProvince]);

  // // Fetch wards when district changes
  // useEffect(() => {
  //   if (!selectedDistrict) {
  //     setWards([]);
  //     setSelectedWard("");
  //     return;
  //   }

  //   const fetchWards = async () => {
  //     try {
  //       const res = await fetch(
  //         `https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`
  //       );
  //       const data = await res.json();
  //       setWards(data.wards || []);
  //       setSelectedWard("");
  //     } catch (error) {
  //       console.error("Error fetching wards:", error);
  //       setWards([]);
  //     }
  //   };
  //   fetchWards();
  // }, [selectedDistrict]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await orderServices.createOrder(formData);
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      }
      if (res.data.payment_method === "BANK") {
        const payment = await paymentServices.createPayment(
          finalTotal,
          res.data.order_code
        );
        if (payment.status === "Err") {
          toast.error(payment.message);
          return;
        }
        window.location.href = payment.paymentUrl;
        return;
      }
      setOrderCode(res.data.order_code);
      toast.success(res.message);
      router.push(`/checkout/${res.data.order_code}`);
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Đặt hàng thất bại");
    }
  };

  const handleBack = async () => {
    try {
      await cartServices.unSelectAllCartItems();
      router.push("/cart");
    } catch (error) {
      console.error("Lỗi khi hủy thanh toán:", error);
      router.push("/cart");
    }
  };
  return (
    <div className="p-[24px] rounded-lg w-full bg-white rounded-md border-[1px] border-gray-100 shadow-md">
      <div className="flex justify-between items-center">
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
              strokeLinejoin="round"
              strokeWidth="2"
            >
              <circle cx="12" cy="10" r="3" />
              <path d="M12 2a8 8 0 0 0-8 8c0 1.892.402 3.13 1.5 4.5L12 22l6.5-7.5c1.098-1.37 1.5-2.608 1.5-4.5a8 8 0 0 0-8-8" />
            </g>
          </svg>
          Thông tin giao hàng
        </h5>
        <div 
          className="p-2 border bg-red-500 text-white rounded-lg cursor-pointer hover:bg-red-600 transition-all"
          onClick={() => setShowAddressList(true)}
        >
          Đổi địa chỉ
        </div>
      </div>
      {showAddressList && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-100/50 bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-[600px] max-h-[80vh] overflow-y-auto shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold">Chọn địa chỉ nhận hàng</h3>
              <button
                onClick={() => setShowAddressList(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
              </button>
            </div>
            <div className="space-y-3">
              {addresses?.map((addr: any, index: number) => (
                <div
                  key={index}
                  onClick={() => {
                    setCurrentAddress(addr);
                    setShowAddressList(false);
                  }}
                  className={`p-4 border rounded-lg cursor-pointer transition-all ${
                    currentAddress === addr
                      ? "border-red-500 bg-red-50"
                      : "border-gray-200 hover:border-red-300"
                  }`}
                >
                  <div className="flex justify-between">
                    {addr.is_default && <span className="text-xs text-red-500 border border-red-500 px-2 py-0.5 rounded">Mặc định</span>}
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    {formatAddress(addr)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <div className="space-y-4 border-b border-gray-200 pb-[20px]">
          {/* Họ và tên & Số điện thoại */}
          <div className="grid grid-cols-2 gap-3">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium text-[14px]">
                Họ và tên <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="recipient_name"
                value={formData.recipient_name}
                onChange={handleOnChange}
                placeholder="Vui lòng nhập tên người nhận"
                className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium text-[14px]">
                Số điện thoại <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="phone"
                value={formData.phone}
                onChange={handleOnChange}
                placeholder="Vui lòng nhập số điện thoại người nhận"
                className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
            </div>
          </div>
          {/* Email */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium text-[14px]">
              Email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleOnChange}
              placeholder="Vui lòng nhập email của bạn"
              className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
            />
          </div>
          {/* Địa chỉ */}
          <div className="grid grid-cols-3 gap-3">
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium text-[14px]">
                Tỉnh/Thành phố <span className="text-red-500">*</span>
              </label>
              {/* <select
                value={selectedProvince}
                onChange={(e) => setSelectedProvince(e.target.value)}
                className="px-[16px] py-[8px] text-[16px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              >
                <option value="">Chọn Tỉnh/Thành phố</option>
                {provinces?.map((province: any) => (
                  <option key={province.code} value={province.code}>
                    {province.name}
                  </option>
                ))}
              </select> */}
              <input
                type="text"
                disabled
                value={currentAddress?.city || ""}
                className="px-[16px] py-[8px] text-[16px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium text-[14px]">
                Quận/Huyện <span className="text-red-500">*</span>
              </label>
              {/* <select
                value={selectedDistrict}
                onChange={(e) => setSelectedDistrict(e.target.value)}
                disabled={!selectedProvince}
                className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600 disabled:bg-gray-100"
              >
                <option value="">Chọn Quận/Huyện</option>
                {districts?.map((district: any) => (
                  <option key={district.code} value={district.code}>
                    {district.name}
                  </option>
                ))}
              </select> */}
              <input
                type="text"
                disabled
                value={currentAddress?.district || ""}
                className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-gray-700 font-medium text-[14px]">
                Phường/Xã <span className="text-red-500">*</span>
              </label>
              {/* <select
                value={selectedWard}
                onChange={(e) => setSelectedWard(e.target.value)}
                disabled={!selectedDistrict}
                className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600 disabled:bg-gray-100"
              >
                <option value="">Chọn Phường/Xã</option>
                {wards?.map((ward: any) => (
                  <option key={ward.code} value={ward.code}>
                    {ward.name}
                  </option>
                ))}
              </select> */}
              <input
                type="text"
                disabled
                value={currentAddress?.ward || ""}
                className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
              />
            </div>
          </div>
          {/* Địa chỉ cụ thể */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium text-[14px]">
              Địa chỉ cụ thể
            </label>
            <input
              type="text"
              value={currentAddress?.street_address || ""}
              placeholder="Số nhà, tên đường"
              disabled
              className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
            />
          </div>
          {/* Ghi chú */}
          <div className="flex flex-col gap-2">
            <label className="text-gray-700 font-medium text-[14px]">
              Ghi chú
            </label>
            <textarea
              name="note"
              value={formData.note}
              onChange={handleOnChange}
              rows={3}
              placeholder="Ghi chú đơn hàng"
              className="px-[16px] py-[8px] border-[1px] border-gray-300 rounded-lg focus:outline-none focus:border-red-600"
            />
          </div>
          {/* Phương thức giao hàng */}
          <DeliveryMethod />
          {/* Phương thức thanh toán */}
          <PaymentMethod formData={formData} setFormData={setFormData} />
        </div>
        <div className="flex gap-3 mt-[20px]">
          <button
            type="button"
            onClick={handleBack}
            className="py-4 bg-white text-[16px] hover:bg-gray-50 text-gray-700 w-1/3 text-center font-bold rounded-2xl border border-gray-300 transition-all"
          >
            Quay lại
          </button>
          <button
            type="submit"
            className="py-4 bg-red-500 text-[16px] hover:bg-red-600 text-white w-2/3 text-center font-bold rounded-2xl transition-all"
          >
            Xác nhận thanh toán
          </button>
        </div>
      </form>
    </div>
  );
};

export default memo(CheckoutForm);
