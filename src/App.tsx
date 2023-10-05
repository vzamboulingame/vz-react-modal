import Modal from "./libs";
import { useState } from "react";

/**
 * Renders the main App component.
 *
 * @return {JSX.Element} The rendered App component.
 */
export default function App(): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = () => {
    setIsOpen(false);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  return (
    <div className="flex flex-col tex-center items-center min-h-screen p-4">
      <p className="text-2xl text-gray-900 mx-auto">vz-react-modal</p>

      <Modal
        title="Modal title"
        message="Modal message"
        type="basic"
        isOpen={isOpen}
        handleClose={handleClose}
      />

      <button
        className="bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700 rounded my-8"
        onClick={handleClick}
      >
        Open Modal
      </button>
    </div>
  );
}
