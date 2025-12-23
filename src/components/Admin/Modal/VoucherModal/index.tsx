import { memo, use, useState } from "react";
import * as brandServices from "../../../../services/brandServices";
import * as voucherServices from "../../../../services/voucherServices";
import { QueryClient, useQuery, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";

const VoucherModal = ({ onClose }: { onClose: () => void }) => {
  const [formData, setFormData] = useState({
    code: "",
    discount_type: "fixed",
    discount_value: "",
    min_order_amount: "",
    max_discount_amount: "",
    usage_limit: "",
    start_date: "",
    end_date: "",
    brandId: "",
  });
  const queryClient = useQueryClient();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "number" ? Number(value) : value,
    }));
  };

  const handleSubmit = async () => {
    try {
      const res = await voucherServices.createVoucher(formData);
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
      queryClient.invalidateQueries({ queryKey: ["vouchers"] });
      onClose();
    } catch (e: any) {
      toast.error(e.response?.data?.message || "Tạo voucher thất bại");
    }
  };

  const fetchAllBrands = async () => {
    const res = await brandServices.getAllBrands();
    return res;
  };

  const { data: brands = [] } = useQuery({
    queryKey: ["brands"],
    queryFn: fetchAllBrands,
  });
  console.log("Brands data in VoucherModal:", brands);
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="flex justify-between p-[24px] sticky top-0 bg-white border-b">
          <h5 className="font-bold text-lg">Thêm Voucher mới</h5>
          <button
            onClick={onClose}
            className="hover:bg-gray-100 p-1 rounded-lg transition"
          >
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

        <div className="p-[24px]">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col mb-[16px]">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Mã voucher
              </label>
              <input
                type="text"
                name="code"
                value={formData.code}
                onChange={handleChange}
                placeholder="Nhập code voucher"
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Loại giảm giá */}
            <div className="flex flex-col mb-[16px]">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Loại giảm giá
              </label>
              <select
                name="discount_type"
                value={formData.discount_type}
                onChange={handleChange}
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              >
                <option value="fixed">Mức giảm cố định (đ)</option>
                <option value="percentage">Phần trăm (%)</option>
              </select>
            </div>

            {/* Giá trị giảm */}
            <div className="flex flex-col mb-[16px]">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Giá trị giảm
              </label>
              <input
                type="string"
                name="discount_value"
                value={formData.discount_value}
                onChange={handleChange}
                placeholder="Nhập giá trị giảm"
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Giảm giá tối đa */}
            <div className="flex flex-col mb-[16px]">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Giảm giá tối đa (đ)
              </label>
              <input
                type="string"
                name="max_discount_amount"
                value={formData.max_discount_amount}
                onChange={handleChange}
                placeholder="Nhập giá trị giảm tối đa"
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Đơn hàng tối thiểu */}
            <div className="flex flex-col mb-[16px]">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Đơn hàng tối thiểu (đ)
              </label>
              <input
                type="string"
                name="min_order_amount"
                value={formData.min_order_amount}
                onChange={handleChange}
                placeholder="Nhập đơn hàng tối thiểu"
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Giới hạn sử dụng */}
            <div className="flex flex-col mb-[16px]">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Số lượng voucher
              </label>
              <input
                type="string"
                name="usage_limit"
                value={formData.usage_limit}
                onChange={handleChange}
                placeholder="Nhập giới hạn sử dụng"
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Ngày bắt đầu */}
            <div className="flex flex-col mb-[16px]">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Ngày bắt đầu
              </label>
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Ngày kết thúc */}
            <div className="flex flex-col mb-[16px]">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Ngày kết thúc
              </label>
              <input
                type="date"
                name="end_date"
                value={formData.end_date}
                onChange={handleChange}
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
            </div>

            {/* Chọn thương hiệu */}
            <div className="flex flex-col mb-[16px] col-span-2">
              <label htmlFor="" className="text-[14px] font-semibold mb-[8px]">
                Thương hiệu (tuỳ chọn)
              </label>
              <select
                name="brandId"
                value={formData.brandId}
                onChange={handleChange}
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              >
                <option value="">Áp dụng cho tất cả thương hiệu</option>
                {brands?.data?.map((brand: any) => (
                  <option key={brand.id} value={brand.id}>
                    {brand.name}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex justify-end gap-2 p-[24px] sticky bottom-0 bg-white">
          <button
            onClick={onClose}
            className="px-[24px] py-[10px] bg-gray-300 text-gray-700 rounded-lg font-medium hover:bg-gray-400 transition"
          >
            Hủy
          </button>
          <button
            onClick={handleSubmit}
            className="px-[24px] py-[10px] bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition"
          >
            Tạo voucher
          </button>
        </div>
      </div>
    </div>
  );
};

export default memo(VoucherModal);
