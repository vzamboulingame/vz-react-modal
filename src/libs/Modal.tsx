import { useEffect, useRef } from "react";
import { ModalProps, buttonColorStyles, titleColorStyles } from "./Modal.types";

/**
 * Renders a modal component with the provided title, message, type, isOpen, and handleClose props.
 *
 * @param {ModalProps} {
 *   modalTitle, // The title of the modal
 *   modalMessage, // The message to be displayed in the modal
 *   modalType, // The type of the modal (basic, info, success, warning, error)
 *   isOpen, // A boolean indicating whether the modal is open or not
 *   handleClose // A function to handle the close event of the modal
 * } - The props for the modal component
 * @return {JSX.Element} The rendered modal component
 */
export default function Modal({
  modalTitle,
  modalMessage,
  modalType,
  isOpen,
  handleClose
}: ModalProps): JSX.Element {
  const dialogClassName = "w-80 text-center rounded";

  const titleClassName = `w-full text-xl font-bold p-4 py-2 text-white ${titleColorStyles[modalType]}`;
  const messageClassName =
    "flex flex-col justify-center items-center p-4 text-gray-800 text-lg text-center";

  const buttonClassName = `${buttonColorStyles[modalType]} text-center text-white font-bold py-2 px-4 my-4 rounded transition-colors duration-200`;

  const dialogRef = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    dialogRef.current?.close();
  };

  useEffect(() => {
    const dialog = dialogRef.current;

    if (isOpen && !dialog?.open) {
      dialog?.showModal();
    } else {
      dialog?.close();
    }
  }, [isOpen]);

  return (
    <>
      <dialog ref={dialogRef} onClose={handleClose} className={dialogClassName}>
        <div className={titleClassName}>{modalTitle}</div>
        <div className={messageClassName}>{modalMessage}</div>
        <button
          onClick={handleClick}
          aria-label="Close Modal"
          className={buttonClassName}
        >
          Close
        </button>
      </dialog>
    </>
  );
}
