import React from "react";
import { useRouter } from "next/navigation";
import { FaArrowLeft } from "react-icons/fa"; // Importing the left arrow icon
import "@/app/(v1)/style.css";
const BackButton = ({ style = 1 }) => {
  const router = useRouter();

  const styles = {
    // Style 1: Circular Button with Arrow Icon and custom background colors
    1: "mx-3 mt-6 absolute bg-primaryColor text-white p-2 rounded-full hover:bg-tertiaryColor flex items-center justify-center transition duration-300 ease-in-out",
    // Style 2: Border style button with color change on hover
    2: "border border-primaryColor text-primaryColor p-2 rounded hover:bg-primaryColor hover:text-white transition duration-300 ease-in-out",
    // Style 3: Text only, with underline and color change
    3: "text-tertiaryColor hover:text-primaryColor underline transition duration-300 ease-in-out",
    // Style 4: Custom background and border hover effect
    4: "p-2 text-primaryColor hover:bg-lightDark rounded transition duration-300 ease-in-out",
  };

  return (
    <button
      onClick={() => router.push("/")}
      className={`flex items-center justify-center ${styles[style]}`}
      aria-label="Go back"
    >
      {/* For style 1, we'll add the left arrow icon */}
      {style === 1 ? <FaArrowLeft className="text-lightDark text-sm " /> : "←"}
    </button>
  );
};

export default BackButton;
