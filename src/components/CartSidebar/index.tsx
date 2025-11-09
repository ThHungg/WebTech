import { memo } from "react";

const CartSidebar = ({
  onClose,
  isOpen,
}: {
  onClose: () => void;
  isOpen: boolean;
}) => {
  return (
    <div onClick={onClose} className="fixed inset-0 bg-black/80 z-[50]">
      <div
        className={`fixed top-0 right-0 h-screen w-1/3 bg-white z-[51] shadow-lg transform transition-transform duration-500 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        123
      </div>
    </div>
  );
};

export default memo(CartSidebar);
