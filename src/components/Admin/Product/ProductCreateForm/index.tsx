"use client";
import { memo, useEffect, useState } from "react";
import ProductVariants from "./ProductVariants";
import ProductAttributes from "./ProductAttributes";
import * as brandServices from "../../../../services/brandServices";
import * as cateBrandLinkServices from "../../../../services/cateBrandLinkServices";
import * as categoryServices from "../../../../services/categoryServices";
import * as productServices from "../../../../services/productServices";
import { useQuery } from "@tanstack/react-query";
import { toast } from "react-toastify";

const ProductCreateForm = () => {
  const [prodcutName, setProductName] = useState<string>("");
  const [selectedBrand, setSelectedBrand] = useState<number | null>(null);
  const [selectedChildren, setSelectedChildren] = useState<number | null>(null);
  const [description, setDescription] = useState<string>("");
  const [images, setImages] = useState<FileList | null>(null);

  const [originalPrice, setOriginalPrice] = useState<string>("");
  const [price, setPrice] = useState<string>("");
  const [discountAmount, setDiscountAmount] = useState<string>("");
  const [discountPercent, setDiscountPercent] = useState<string>("");
  const [stock, setStock] = useState<string>("");

  const [attributesData, setAttributesData] = useState<any[]>([]);
  const [variantsData, setVariantsData] = useState<any[]>([]);

  const [selectedParentCategory, setSelectedParentCategory] = useState<
    number | null
  >(null);
  const [parentCategories, setParentCategories] = useState<any[]>([]);
  const [childrenCategories, setChildrenCategories] = useState<any[]>([]);
  const [selectedDiscountType, setSelectedDiscountType] = useState<
    "percent" | "fixed"
  >("percent");

  const handleDiscountValueChange = (value: string) => {
    if (selectedDiscountType === "percent") {
      setDiscountPercent(value);
      setDiscountAmount("0");
    } else {
      setDiscountAmount(value);
      setDiscountPercent("0");
    }
  };

  const calculatePrice = (
    original_price: string,
    discount_type: string,
    discount_value: string
  ) => {
    if (!original_price || !discount_value) return original_price;

    const priceNum = parseFloat(original_price);
    const discountNum = parseFloat(discount_value);

    if (discount_type === "percent") {
      return (priceNum - (priceNum * discountNum) / 100).toFixed(0);
    } else if (discount_type === "fixed") {
      return (priceNum - discountNum).toFixed(0);
    }
    return original_price;
  };

  const fetchBrands = async () => {
    const res = await brandServices.getAllBrands();
    return res;
  };

  const { data: brands } = useQuery({
    queryKey: ["brands"],
    queryFn: fetchBrands,
  });

  const handleBrandChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedBrand(null);
    const brandId = e.target.value;
    setSelectedBrand(Number(brandId));
    setSelectedParentCategory(null);
    if (brandId) {
      const res = await cateBrandLinkServices.getParentCategoriesByBrandId(
        Number(brandId)
      );
      setParentCategories(res.data);
      setChildrenCategories([]);
    } else {
      setParentCategories([]);
      setChildrenCategories([]);
    }
  };

  const handleParentCategoryChange = async (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    const parentCategoryId = e.target.value;
    setSelectedParentCategory(Number(parentCategoryId));
    if (parentCategoryId) {
      const res = await cateBrandLinkServices.getChildCategoriesByParentId(
        Number(parentCategoryId),
        Number(selectedBrand)
      );
      setChildrenCategories(res.data);
    }
  };

  const handleSubmit = async () => {
    try {
      const formData = new FormData();
      const defaultVariant = {
        name: "Default",
        original_price: originalPrice,
        price: price,
        discount_amount: discountAmount,
        discount_percent: discountPercent,
        stock: stock,
      };

      const allVariants = [defaultVariant, ...variantsData];
      formData.append("name", prodcutName);
      formData.append("description", description);
      formData.append("variants", JSON.stringify(allVariants));
      formData.append("attributes", JSON.stringify(attributesData));
      if (images) {
        Array.from(images).forEach((image) => {
          formData.append("productImages", image);
        });
      }
      formData.append("category_id", String(selectedChildren));
      formData.append("brand_id", String(selectedBrand));
      formData.append("parent_category_id", String(selectedParentCategory));
      const res = await productServices.createProduct(formData);
      if (res.status === "Err") {
        toast.error(res.message);
        return;
      }
      toast.success(res.message);
    } catch (e: any) {
      toast.error(
        e.response?.data?.message || "Có lỗi xảy ra, vui lòng thử lại!"
      );
    }
  };

  useEffect(() => {
    const calculatedPrice = calculatePrice(
      originalPrice,
      selectedDiscountType,
      selectedDiscountType === "percent" ? discountPercent : discountAmount
    );
    setPrice(calculatedPrice);
  }, [originalPrice, selectedDiscountType, discountPercent, discountAmount]);

  return (
    <div>
      <div className="bg-white rounded-lg shadow-md border-[1px] border-gray-200 p-2">
        <div className="grid grid-cols-2">
          <div className="p-[18px] col-span-1">
            <div className="flex flex-col mb-[8px]">
              <label htmlFor="" className="text-[16px] font-semibold mb-[8px]">
                Tên sản phẩm
              </label>
              <input
                type="text"
                placeholder="Nhập tên sản phẩm"
                value={prodcutName}
                onChange={(e) => setProductName(e.target.value)}
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            <div className="flex gap-4 w-full">
              <div className="flex flex-col mb-[8px] w-1/2">
                <label
                  htmlFor=""
                  className="text-[16px] font-semibold mb-[8px]"
                >
                  Thương hiệu
                </label>
                <select
                  name=""
                  id=""
                  value={selectedBrand || ""}
                  onChange={handleBrandChange}
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] w-full"
                >
                  <option value="">Chọn thương hiệu</option>
                  {brands &&
                    brands?.data?.map((brand: any) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.name}
                      </option>
                    ))}
                </select>
              </div>
              <div className="flex flex-col mb-[8px] w-1/2">
                <label
                  htmlFor=""
                  className="text-[16px] font-semibold mb-[8px]"
                >
                  Danh mục cấp 1
                </label>
                <select
                  name=""
                  id=""
                  value={selectedParentCategory || ""}
                  onChange={handleParentCategoryChange}
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] w-full"
                >
                  <option value="">Chọn danh mục</option>
                  {parentCategories.map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="flex flex-col mb-[8px]">
              <label htmlFor="" className="text-[16px] font-semibold mb-[8px]">
                Danh mục cấp 2
              </label>
              <select
                name=""
                id=""
                value={selectedChildren || ""}
                onChange={(e) => setSelectedChildren(Number(e.target.value))}
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] w-full"
              >
                <option value="">Chọn model</option>
                {childrenCategories.map((category) => (
                  <option key={category.id} value={category.id}>
                    {category.name}
                  </option>
                ))}
              </select>
            </div>
            {/* Giá và tồn kho */}
            <div className="flex gap-4">
              {/* <div className="flex flex-col mb-[16px] w-full">
                <label
                  htmlFor=""
                  className="text-[16px] font-semibold mb-[8px]"
                >
                  Số lượng
                </label>
                <input
                  type="text"
                  placeholder="Nhập số lượng tồn kho"
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              </div> */}
              <div className="flex flex-col mb-[16px] w-full">
                <label
                  htmlFor=""
                  className="text-[16px] font-semibold mb-[8px]"
                >
                  Giá
                </label>
                <input
                  type="text"
                  name="originalPrice"
                  onChange={(e) => setOriginalPrice(e.target.value)}
                  placeholder="Nhập số giá sản phẩm"
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              </div>
              <div className="flex gap-2 w-full">
                <div className="flex flex-col mb-[16px] w-full">
                  <label
                    htmlFor=""
                    className="text-[16px] font-semibold mb-[8px]"
                  >
                    Giảm giá
                  </label>
                  <select
                    value={selectedDiscountType}
                    onChange={(e) => {
                      setSelectedDiscountType(
                        e.target.value as "percent" | "fixed"
                      );
                      setDiscountAmount("");
                      setDiscountPercent("");
                    }}
                    className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                  >
                    <option value="percent">Phần trăm (%)</option>
                    <option value="fixed">Mức giảm (đ)</option>
                  </select>
                </div>
                <div className="flex flex-col mb-[16px] w-full">
                  <label
                    htmlFor=""
                    className="text-[16px] font-semibold mb-[8px]"
                  >
                    Giá trị
                  </label>
                  <input
                    type="text"
                    name="discountValue"
                    value={
                      selectedDiscountType === "percent"
                        ? discountPercent
                        : discountAmount
                    }
                    onChange={(e) => handleDiscountValueChange(e.target.value)}
                    // onChange={(e) => setDiscountValue(e.target.value)}
                    placeholder="Nhập giá trị giảm"
                    className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                  />
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col mb-[16px] w-full">
                <label
                  htmlFor=""
                  className="text-[16px] font-semibold mb-[8px]"
                >
                  Giá bán
                </label>
                <input
                  readOnly
                  type="text"
                  onChange={(e) => setPrice(e.target.value)}
                  value={calculatePrice(
                    originalPrice,
                    selectedDiscountType,
                    selectedDiscountType === "percent"
                      ? discountPercent
                      : discountAmount
                  )}
                  className="border-[1px] bg-gray-50 border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              </div>
              <div className="flex flex-col mb-[16px] w-full">
                <label
                  htmlFor=""
                  className="text-[16px] font-semibold mb-[8px]"
                >
                  Số lượng
                </label>
                <input
                  type="text"
                  name="stock"
                  onChange={(e) => setStock(e.target.value)}
                  placeholder="Nhập số lượng tồn kho"
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              </div>
            </div>
            <div className="flex mb-[16px] flex-col w-full">
              <label htmlFor="" className="text-[16px] font-semibold mb-[8px]">
                Ảnh sản phẩm
              </label>
              <input
                type="file"
                multiple
                onChange={(e) => setImages(e.target.files)}
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
            </div>
            {/* Mô tả sản phẩm */}
            <div className="flex flex-col">
              <label htmlFor="" className="text-[16px] font-semibold mb-[8px]">
                Mô tả
              </label>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                rows={4}
                placeholder="Nhập mô tả sản phẩm"
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              ></textarea>
            </div>
          </div>

          {/* Thông số kỹ thuật */}
          <div className="p-[18px] col-span-1">
            {/* Thông số kỹ thuật */}
            <ProductAttributes
              setAttributesData={setAttributesData}
              categoryId={selectedParentCategory}
            />

            {/* Biến thể sản phẩm */}
            <ProductVariants setVariantsData={setVariantsData} />
          </div>
        </div>
        <div className="px-[12px] pb-[12px] flex justify-end">
          <div className="flex gap-2">
            <button
              onClick={handleSubmit}
              className="px-[24px] py-[10px] flex items-center gap-2 bg-blue-500 text-white border-[2px] border-gray-200 rounded-lg font-medium hover:scale-105 transition transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M11 13H5v-2h6V5h2v6h6v2h-6v6h-2z"
                />
              </svg>{" "}
              Thêm mới
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ProductCreateForm);
