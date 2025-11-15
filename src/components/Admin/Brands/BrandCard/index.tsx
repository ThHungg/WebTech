"use client";
import { memo, useState } from "react";
import ToggleSwitch from "../../Common/ToggleSwitch";

const BrandCard = () => {
  const [isOn, setIsOn] = useState(false);

  const toggleSwitch = () => {
    setIsOn((prev) => !prev);
  };

  return (
    <div className="p-2 bg-white rounded-lg shadow-md inline-block">
      <div className="relative">
        <img
          src="https://www.freepnglogos.com/uploads/original-samsung-logo-10.png"
          alt=""
          className="w-[200px] h-[200px]"
        />
        <div className="absolute top-2 right-0">
          <div className="flex">
            <button className="p-1 hover:bg-blue-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="text-blue-500"
              >
                <path
                  fill="currentColor"
                  d="m7 17.013l4.413-.015l9.632-9.54c.378-.378.586-.88.586-1.414s-.208-1.036-.586-1.414l-1.586-1.586c-.756-.756-2.075-.752-2.825-.003L7 12.583zM18.045 4.458l1.589 1.583l-1.597 1.582l-1.586-1.585zM9 13.417l6.03-5.973l1.586 1.586l-6.029 5.971L9 15.006z"
                />
                <path
                  fill="currentColor"
                  d="M5 21h14c1.103 0 2-.897 2-2v-8.668l-2 2V19H8.158c-.026 0-.053.01-.079.01c-.033 0-.066-.009-.1-.01H5V5h6.847l2-2H5c-1.103 0-2 .897-2 2v14c0 1.103.897 2 2 2"
                />
              </svg>
            </button>
            <button className="p-1 hover:bg-red-100 rounded-lg">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                className="text-red-500"
              >
                <path
                  fill="currentColor"
                  d="M7 21q-.825 0-1.412-.587T5 19V6q-.425 0-.712-.288T4 5t.288-.712T5 4h4q0-.425.288-.712T10 3h4q.425 0 .713.288T15 4h4q.425 0 .713.288T20 5t-.288.713T19 6v13q0 .825-.587 1.413T17 21zM17 6H7v13h10zm-7 11q.425 0 .713-.288T11 16V9q0-.425-.288-.712T10 8t-.712.288T9 9v7q0 .425.288.713T10 17m4 0q.425 0 .713-.288T15 16V9q0-.425-.288-.712T14 8t-.712.288T13 9v7q0 .425.288.713T14 17M7 6v13z"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center border-t border-gray-300  mt-[12px] pt-[12px] px-[12px]">
        <h5 className="font-semibold">Sam sung</h5>
        <ToggleSwitch isOn={isOn} onToggle={toggleSwitch} />
      </div>
    </div>
  );
};

export default memo(BrandCard);
