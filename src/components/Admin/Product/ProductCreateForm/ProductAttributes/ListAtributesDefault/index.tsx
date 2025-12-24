import { memo } from "react";

const ListAtributesDefault = () => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl max-w-lg w-full max-h-[90vh] overflow-hidden flex flex-col">
        <div className="flex justify-between p-[24px] sticky top-0 bg-white border-b border-gray-200">
          ListAtributesDefault
        </div>
      </div>
    </div>
  );
};

export default memo(ListAtributesDefault);
