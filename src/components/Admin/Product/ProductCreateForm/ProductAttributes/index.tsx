import { memo, useState } from "react";

const ProductAttributes = () => {
  const [productInfo, setProductInfo] = useState([
    { value: "", info: "" },
    { value: "", info: "" },
    { value: "", info: "" },
    { value: "", info: "" },
  ]);

  const [inputIndexes, setInputIndexes] = useState<Set<number>>(
    new Set<number>()
  );

  const handleAddInfo = () => {
    setProductInfo([...productInfo, { value: "", info: "" }]);
  };

  const handleOnChange = (
    index: number,
    field: "value" | "info",
    value: string
  ) => {
    const updated = [...productInfo];
    updated[index][field] = value;
    setProductInfo(updated);
  };

  const handleSelectChange = (index: number, value: string) => {
    if (value === "new") {
      setInputIndexes((prev) => new Set([...prev, index]));
    } else {
      setInputIndexes((prev) => {
        const updated = new Set(prev);
        updated.delete(index);
        return updated;
      });
      handleOnChange(index, "value", value);
    }
  };

  const handleRemoveInfo = (index: number) => {
    setProductInfo(productInfo.filter((_, i) => i !== index));
    setInputIndexes((prev) => {
      const updated = new Set(prev);
      updated.delete(index);
      return updated;
    });
  };
  return (
    <div className="flex flex-col mb-[16px] bg-gray-50 p-4 rounded-2xl border border-gray-200 shadow-xs">
      <div className="flex justify-between items-center">
        <label className="text-[16px] font-semibold mb-[8px]">
          Thông số kỹ thuật
        </label>
        <button
          className="p-1 hover:bg-blue-100 rounded-lg"
          onClick={handleAddInfo}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 48 48"
            className="text-blue-500"
          >
            <g
              fill="none"
              stroke="currentColor"
              strokeLinejoin="round"
              strokeWidth="4"
            >
              <rect width="36" height="36" x="6" y="6" rx="3" />
              <path strokeLinecap="round" d="M24 16v16m-8-8h16" />
            </g>
          </svg>
        </button>
      </div>
      <div className="max-h-[30vh] h-full overflow-y-auto pr-2">
        {productInfo.map((info, index) => (
          <div key={index} className="flex gap-2 mt-[8px]">
            <div className="w-full flex gap-2">
              {/* Nếu index này trong Set → hiển thị input, không thì hiển thị select */}
              {inputIndexes.has(index) ? (
                <input
                  type="text"
                  placeholder="Nhập tên thông số mới"
                  value={info.value}
                  onChange={(e) =>
                    handleOnChange(index, "value", e.target.value)
                  }
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                />
              ) : (
                <select
                  value={info.value}
                  onChange={(e) => handleSelectChange(index, e.target.value)}
                  className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
                >
                  <option value="">Chọn thông số</option>
                  <option value="Ram">Ram</option>
                  <option value="Chip">Chip</option>
                  <option value="Card">Card</option>
                  <option value="new">+ Thông số mới</option>
                </select>
              )}

              <input
                type="text"
                placeholder="Nhập giá trị"
                value={info.info}
                onChange={(e) => handleOnChange(index, "info", e.target.value)}
                className="border-[1px] border-gray-200 rounded-lg px-[16px] py-[8px] focus:outline-none focus:border-blue-500 w-full"
              />
              <button
                onClick={() => handleRemoveInfo(index)}
                className="w-10 h-10 flex items-center justify-center hover:bg-red-100 rounded-lg"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="-2 -5 24 24"
                  className="text-red-500"
                >
                  <path
                    fill="currentColor"
                    d="M7.828 0H18a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H7.828a2 2 0 0 1-1.414-.586L.707 7.707a1 1 0 0 1 0-1.414L6.414.586A2 2 0 0 1 7.828 0m0 12H18V2H7.828l-5 5zm6.586-5l1.414 1.414a1 1 0 0 1-1.414 1.414L13 8.414l-1.414 1.414a1 1 0 1 1-1.414-1.414L11.586 7l-1.414-1.414a1 1 0 1 1 1.414-1.414L13 5.586l1.414-1.414a1 1 0 1 1 1.414 1.414z"
                  />
                </svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default memo(ProductAttributes);
