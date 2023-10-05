import { useEffect, useRef } from "react";

interface ModalProps {
  title: string;
  message: string;
  type: "basic" | "info" | "success" | "warning" | "error";
  isOpen: boolean;
  handleClose: () => void;
}

/**
 * Renders a modal component with the provided title, message, type, isOpen, and handleClose props.
 *
 * @param {ModalProps} {
 *   title, // The title of the modal
 *   message, // The message to be displayed in the modal
 *   type, // The type of the modal (basic, info, success, warning, error)
 *   isOpen, // A boolean indicating whether the modal is open or not
 *   handleClose // A function to handle the close event of the modal
 * } - The props for the modal component
 * @return {JSX.Element} The rendered modal component
 */
export default function Modal({
  title,
  message,
  type,
  isOpen,
  handleClose
}: ModalProps): JSX.Element {
  const dialogClassName = "w-80 text-center rounded";
  const titleColorStyles = {
    basic: "bg-neutral-950",
    info: "bg-blue-600",
    success: "bg-green-600",
    warning: "bg-amber-500",
    error: "bg-red-600"
  };
  const titleClassName = `w-full text-xl font-bold p-4 py-2 text-white ${titleColorStyles[type]}`;
  const messageClassName =
    "flex flex-col justify-center items-center p-4 text-gray-800 text-lg text-center";
  const buttonColorStyles = {
    basic: "bg-neutral-950 hover:bg-neutral-700",
    info: "bg-blue-600 hover:bg-blue-400",
    success: "bg-green-600 hover:bg-green-400",
    warning: "bg-amber-500 hover:bg-amber-300",
    error: "bg-red-600 hover:bg-red-400"
  };
  const buttonClassName = `${buttonColorStyles[type]} text-center text-white font-bold py-2 px-4 my-4 rounded transition-colors duration-200`;

  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    const dialog = dialogRef.current;
    if (isOpen && !dialogRef.current?.open) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  }, [isOpen]);

  return (
    <>
      <dialog ref={dialogRef} onClose={handleClose} className={dialogClassName}>
        <div className={titleClassName}>{title}</div>
        <div className={messageClassName}>{message}</div>
        <button
          type="button"
          onClick={handleClick}
          title="Close Modal"
          aria-label="Close Modal"
          className={buttonClassName}
        >
          Close
        </button>
      </dialog>
    </>
  );
}
