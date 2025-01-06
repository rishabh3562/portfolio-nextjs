"use client";
import { useState } from "react";
import Link from "next/link";
import { FaChevronDown } from "react-icons/fa";
import { urls } from "@/app/(v1)/data/myData"; // Import the urls object

const UrlsDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative">
      <button
        onClick={toggleDropdown}
        className="flex items-center space-x-2 px-4 py-3 bg-lightDark text-primaryColor font-bold rounded-full hover:bg-primaryDark transition duration-300"
      >
        <span>URLs</span>
        <FaChevronDown />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-3 w-48 bg-lightDark rounded-md shadow-xl z-50">
          <ul className="text-white p-1">
            {Object.keys(urls).map((key) => (
              <li key={key}>
                <Link
                  href={urls[key].href}
                  target="_blank"
                  className="flex items-center px-4 py-2 hover:bg-darkDark rounded-md transition text-primaryColor duration-200"
                >
                  <span className="mr-2 text-lg">{urls[key].icon}</span>
                  {urls[key].name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default UrlsDropdown;

// "use client";
// import { useState } from "react";
// import Link from "next/link";
// import {
//   FaChevronDown,
//   FaLinkedin,
//   FaGithub,
//   FaTwitter,
//   FaCalendarAlt,
// } from "react-icons/fa";
// import { PiStudentBold } from "react-icons/pi"; // Topmate icon replacement
// import { MdWorkspacesOutline } from "react-icons/md"; // Peerlist icon replacement

// const UrlsDropdown = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleDropdown = () => {
//     setIsOpen((prev) => !prev);
//   };

//   return (
//     <div className="relative">
//       <button
//         onClick={toggleDropdown}
//         className="flex items-center space-x-2 px-4 py-3 bg-primaryColor text-darkDark rounded-full hover:bg-primaryDark transition duration-300"
//       >
//         <span>URLs</span>
//         <FaChevronDown />
//       </button>

//       {isOpen && (
//         <div className="absolute right-0 mt-3 w-48 bg-lightDark rounded-md shadow-xl z-50">
//           <ul className="text-white p-1">
//             {urls.map((url, index) => (
//               <li key={index}>
//                 <Link
//                   href={url.href}
//                   target="_blank"
//                   className="flex items-center px-4 py-2 hover:bg-darkDark rounded-md transition text-primaryColor duration-200"
//                 >
//                   <span className="mr-2 text-lg">{url.icon}</span>
//                   {url.name}
//                 </Link>
//               </li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default UrlsDropdown;
