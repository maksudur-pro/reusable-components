import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import { useRef, type MouseEvent } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const contaierRef = useRef<HTMLDivElement>(null);

  const handleOutsideClose = (e: MouseEvent) => {
    if (!contaierRef.current?.contains(e.target as Node)) {
      onClose();
    }
  };

  return createPortal(
    <div
      className={cn(
        "fixed inset-0 flex items-center justify-center bg-gray-500/70 invisible z-[999]",
        {
          visible: isOpen,
        }
      )}
      onClick={handleOutsideClose}>
      <div
        ref={contaierRef}
        className="bg-white w-full max-w-sm rounded-md p-10">
        {children}
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};

export default Modal;
