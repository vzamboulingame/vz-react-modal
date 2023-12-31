import React, { useState } from "react";
import Modal from "./libs";

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
    <div className="flex flex-col text-center items-center min-h-screen p-4">
      <p className="text-2xl text-gray-900 mx-auto">vz-react-modal</p>

      <Modal
        modalTitle="Modal title"
        modalMessage="Modal message"
        modalType="basic"
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
