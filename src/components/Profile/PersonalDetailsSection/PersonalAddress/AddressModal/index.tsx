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
  // --- Location States ---
  const [provinces, setProvinces] = useState<any[]>([]);
  const [districts, setDistricts] = useState<any[]>([]);
  const [wards, setWards] = useState<any[]>([]);

  const [selectedProvince, setSelectedProvince] = useState<string | number>("");
  const [selectedDistrict, setSelectedDistrict] = useState<string | number>("");
  const [selectedWard, setSelectedWard] = useState<string | number>("");

  // --- Fetching Logic ---

  // 1. Fetch Provinces on mount
  useEffect(() => {
    const fetchProvinces = async () => {
      try {
        const res = await fetch("https://provinces.open-api.vn/api/v2/p/");
        const data = await res.json();
        setProvinces(data);
      } catch (error) {
        console.error("Error fetching provinces:", error);
      }
    };
    fetchProvinces();
  }, []);

  // 2. Fetch Districts when Province changes
  useEffect(() => {
    if (!selectedProvince) {
      setDistricts([]);
      setWards([]);
      return;
    }

    const fetchDistricts = async () => {
      try {
        // Optimization: Fetch districts for specific province if API supports it,
        // otherwise use the provided logic of fetching all and filtering.
        // Using the provided logic:
        const res = await fetch(`https://provinces.open-api.vn/api/d/`);
        const data = await res.json();

        const filteredDistricts = data.filter(
          (d: any) => d.province_code === Number(selectedProvince)
        );

        setDistricts(filteredDistricts);
        setWards([]);
      } catch (error) {
        console.error("Error fetching districts:", error);
        setDistricts([]);
      }
    };
    fetchDistricts();
  }, [selectedProvince]);

  // 3. Fetch Wards when District changes
  useEffect(() => {
    if (!selectedDistrict) {
      setWards([]);
      return;
    }

    const fetchWards = async () => {
      try {
        const res = await fetch(
          `https://provinces.open-api.vn/api/d/${selectedDistrict}?depth=2`
        );
        const data = await res.json();
        setWards(data.wards || []);
      } catch (error) {
        console.error("Error fetching wards:", error);
        setWards([]);
      }
    };
    fetchWards();
  }, [selectedDistrict]);

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
      // Reset selection for Add New
      setSelectedProvince("");
      setSelectedDistrict("");
      setSelectedWard("");
    }
  }, [initialData, open]);
  
  useEffect(() => {
    if (initialData && provinces.length > 0 && !selectedProvince) {
      const found = provinces.find((p) => p.name === initialData.city);
      if (found) setSelectedProvince(found.code);
    }
  }, [initialData, provinces, selectedProvince]);

  useEffect(() => {
    if (initialData && districts.length > 0 && !selectedDistrict) {
      const found = districts.find((d) => d.name === initialData.district);
      if (found) setSelectedDistrict(found.code);
    }
  }, [initialData, districts, selectedDistrict]);

  useEffect(() => {
    if (initialData && wards.length > 0 && !selectedWard) {
      const found = wards.find((w) => w.name === initialData.ward);
      if (found) setSelectedWard(found.code);
    }
  }, [initialData, wards, selectedWard]);

  if (!open) return null;

  const handleProvinceChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = Number(e.target.value);
    setSelectedProvince(code);
    setSelectedDistrict("");
    setSelectedWard("");

    const provinceName = provinces.find((p) => p.code === code)?.name || "";
    setFormData((prev) => ({
      ...prev,
      city: provinceName,
      district: "",
      ward: "",
    }));
  };

  const handleDistrictChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = Number(e.target.value);
    setSelectedDistrict(code);
    setSelectedWard("");

    const districtName = districts.find((d) => d.code === code)?.name || "";
    setFormData((prev) => ({
      ...prev,
      district: districtName,
      ward: "",
    }));
  };

  const handleWardChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const code = Number(e.target.value);
    setSelectedWard(code);

    const wardName = wards.find((w) => w.code === code)?.name || "";
    setFormData((prev) => ({
      ...prev,
      ward: wardName,
    }));
  };


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
            {/* Tỉnh / Thành phố */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="city"
                className="text-sm font-medium text-gray-700"
              >
                Tỉnh / Thành phố
              </label>
              <select
                id="city"
                name="city"
                value={selectedProvince}
                onChange={handleProvinceChange}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 bg-white"
                required
              >
                <option value="">Chọn Tỉnh/Thành phố</option>
                {provinces.map((province) => (
                  <option key={province.code} value={province.code}>
                    {province.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Quận / Huyện */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="district"
                className="text-sm font-medium text-gray-700"
              >
                Quận / Huyện
              </label>
              <select
                id="district"
                name="district"
                value={selectedDistrict}
                onChange={handleDistrictChange}
                disabled={!selectedProvince}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 bg-white disabled:bg-gray-100"
                required
              >
                <option value="">Chọn Quận/Huyện</option>
                {districts.map((district) => (
                  <option key={district.code} value={district.code}>
                    {district.name}
                  </option>
                ))}
              </select>
            </div>

            {/* Phường / Xã */}
            <div className="flex flex-col gap-1">
              <label
                htmlFor="ward"
                className="text-sm font-medium text-gray-700"
              >
                Phường / Xã
              </label>
              <select
                id="ward"
                name="ward"
                value={selectedWard}
                onChange={handleWardChange}
                disabled={!selectedDistrict}
                className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-1 bg-white disabled:bg-gray-100"
                required
              >
                <option value="">Chọn Phường/Xã</option>
                {wards.map((ward) => (
                  <option key={ward.code} value={ward.code}>
                    {ward.name}
                  </option>
                ))}
              </select>
            </div>

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
