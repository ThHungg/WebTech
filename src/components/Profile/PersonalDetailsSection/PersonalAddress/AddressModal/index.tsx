"use client";
import React, { useEffect, useState } from "react";

interface AddressModalProps {
  open: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
  initialData?: any;
}

const AddressModal = ({
  open,
  onClose,
  onSubmit,
  initialData,
}: AddressModalProps) => {
  const [formData, setFormData] = useState({
    city: "",
    district: "",
    ward: "",
    street_address: "",
    is_default: false,
  });

  // Khi mở modal hoặc đổi dữ liệu edit
  useEffect(() => {
    if (initialData) {
      setFormData({
        city: initialData.city || "",
        district: initialData.district || "",
        ward: initialData.ward || "",
        street_address: initialData.street_address || "",
        is_default: initialData.is_default || false,
      });
    } else {
      setFormData({
        city: "",
        district: "",
        ward: "",
        street_address: "",
        is_default: false,
      });
    }
  }, [initialData, open]);

  if (!open) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
      onClick={onClose}
    >
      {/* Modal box */}
      <div
        className="bg-white rounded-xl w-[500px] p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()} // chặn click lan ra ngoài
      >
        <form onSubmit={handleSubmit}>
          <h4 className="font-bold text-lg mb-4">
            {initialData ? "Chỉnh sửa địa chỉ" : "Thêm địa chỉ mới"}
          </h4>

          <div className="space-y-4">
            {/* Số nhà, tên đường */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="street_address"
                className="text-sm font-medium text-gray-700"
              >
                Số nhà, tên đường
              </label>
              <input
                id="street_address"
                name="street_address"
                value={formData.street_address}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1"
                required
              />
            </div>

            {/* Phường / Xã */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="ward"
                className="text-sm font-medium text-gray-700"
              >
                Phường / Xã
              </label>
              <input
                id="ward"
                name="ward"
                value={formData.ward}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1"
                required
              />
            </div>

            {/* Quận / Huyện */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="district"
                className="text-sm font-medium text-gray-700"
              >
                Quận / Huyện
              </label>
              <input
                id="district"
                name="district"
                value={formData.district}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1"
                required
              />
            </div>

            {/* Tỉnh / Thành phố */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-700"
              >
                Tỉnh / Thành phố
              </label>
              <input
                id="city"
                name="city"
                value={formData.city}
                onChange={handleChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1"
                required
              />
            </div>
            {/* Default checkbox */}
            {!initialData && (
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  name="is_default"
                  checked={formData.is_default}
                  onChange={handleChange}
                  className="accent-red-600"
                />
                <span className="text-sm">Đặt làm địa chỉ mặc định</span>
              </label>
            )}
          </div>

          <div className="flex justify-end gap-3 mt-6">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border rounded-lg hover:bg-gray-50"
            >
              Hủy
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Lưu
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddressModal;
