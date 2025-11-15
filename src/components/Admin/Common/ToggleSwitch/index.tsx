import { memo } from "react";

const ToggleSwitch = ({
  isOn,
  onToggle,
}: {
  isOn: boolean;
  onToggle: () => void;
}) => {
  return (
    <label className="relative inline-flex items-center cursor-pointer">
      <input
        type="checkbox"
        className="sr-only peer"
        checked={isOn}
        onChange={onToggle}
      />
      <div
        className={`w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 transition-all ${
          isOn ? "peer-checked:bg-green-500" : ""
        }`}
      ></div>
      <div
        className={`absolute top-0.5 left-[2px] w-5 h-5 bg-white rounded-full transition-transform ${
          isOn ? "translate-x-full" : ""
        }`}
      ></div>
    </label>
  );
};

export default memo(ToggleSwitch);
