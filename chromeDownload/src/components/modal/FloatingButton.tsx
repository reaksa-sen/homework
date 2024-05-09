import React from "react";
import { GrUpdate } from "react-icons/gr";
import { FaPlus } from "react-icons/fa";

interface PropsType {
  buttonIcon: boolean;
  handleShowPopup: (isPopup: boolean) => void;
}

export default function FloatingButton({ handleShowPopup , buttonIcon}: PropsType) {
  return (
    <button
      className="bg-blue-600 w-12 py-2 rounded-xl flex justify-center items-center absolute bottom-10 right-10 hover:bg-blue-500 transition-all duration-150"
      onClick={() => handleShowPopup(true)}
    >
      { buttonIcon ? (
        <GrUpdate size={25} className="text-white" />
      ) : (
        <FaPlus  size={30} className="text-white" />
      )}
    </button>
  );
}

