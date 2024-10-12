import { IoIosCloseCircleOutline } from "react-icons/io";

const CustomToast = ({ message, show, onClose }) => {
  return show ? (
    <div className="fixed top-5 right-5 bg-darkDark text-white p-4 rounded-md shadow-lg z-50 flex items-center animate-slideIn">
      <div className="toast-message mr-2 text-primaryColor font-poppins">
        {message}
      </div>
      <button className="toast-close text-lg" onClick={onClose}>
        <IoIosCloseCircleOutline className="text-primaryColor" />
      </button>
      <div className="absolute bottom-0 left-0 w-full h-1 bg-primaryColor"></div>{" "}
      {/* Bottom color line */}
    </div>
  ) : null;
};

export default CustomToast;
