// components/ArticleHeader.js
import React from "react";
import Image from "next/image";
// import {Divider} from "@/components/v1/ProjectStrcuture";
import Divider from "@/components/v1/Divider";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { CiMenuKebab } from "react-icons/ci";
import projectImage from "@/assets/bharat_chauhan_brown.jpg";

const ArticleHeader = ({
  article,
  like,
  toggleLike,
  likeCount,
  toggleDropdown,
  isDropdownVisible,
}) => (
  <header className="mb-6">
    <Image
      src={article.banner_img}
      alt="Feature image"
      width={1000}
      height={100}
      style={{ width: "100%", height: "auto" }}
      className="rounded-xl my-4 object-cover"
    />
    <h1 className="text-4xl font-bold mb-2 text-primaryColor">
      {article.title}
    </h1>
    <p className="text-lg text-tertiaryColor">{article.description}</p>

    <div className="flex flex-wrap gap-2 my-3">
      {article.tags?.map((tag, index) => (
        <span
          key={index}
          className="bg-primaryColor text-darkDark font-semibold px-3 py-1 rounded-md text-sm"
        >
          {tag}
        </span>
      ))}
    </div>

    <Divider />

    <div className="flex flex-wrap gap-3 my-3 justify-between items-center">
      <div className="ml-2 flex gap-2 items-center">
        {like ? (
          <AiFillLike
            onClick={toggleLike}
            className="cursor-pointer text-primaryColor"
            title="Unlike"
          />
        ) : (
          <AiOutlineLike
            onClick={toggleLike}
            className="cursor-pointer text-primaryColor transition-all ease-in"
            title="Like"
          />
        )}
        <span className="text-lg text-primaryColor">{likeCount}</span>
      </div>

      <div className="relative">
        <div className="flex gap-2 items-center">
          {article.githubUrl && (
            <FaGithub
              onClick={() => window.open(article.githubUrl, "_blank")}
              className="cursor-pointer text-primaryColor transition-all ease-in"
              title="GitHub"
            />
          )}
          {article.liveLink && (
            <FaExternalLinkAlt
              onClick={() => window.open(article.liveLink, "_blank")}
              className="cursor-pointer text-primaryColor transition-all ease-in"
              title="Website"
            />
          )}
          <CiMenuKebab
            onClick={toggleDropdown}
            className="cursor-pointer text-primaryColor transition-all ease-in"
            title="More Options"
          />
        </div>
        {isDropdownVisible && (
          <div className="absolute right-0 mt-2 w-52 bg-bgColor rounded-lg shadow-lg z-10">
            {/* Dropdown content */}
          </div>
        )}
      </div>
    </div>

    <Divider />
  </header>
);

export default ArticleHeader;

// components/ArticleHeader.js
// import React from "react";
// import Image from "next/image";
// import { AiOutlineHeart } from "react-icons/ai";
// import { FaRegComment } from "react-icons/fa";

// const ArticleHeader = ({ article }) => (
//   <header className="mb-8">
//
//     <div className="relative w-full h-60">
//       <Image
//         src="https://source.unsplash.com/random/1000x400" // Random image link
//         alt="Article feature image"
//         layout="fill"
//         objectFit="cover"
//         className="rounded-xl"
//       />
//     </div>

//     {/* Title and Description */}
//     <h1 className="text-5xl font-bold mt-6 mb-3 leading-tight">
//       {article.title}
//     </h1>
//     <p className="text-xl text-gray-600 mb-6">
//       {article.description}
//     </p>

//     {/* Author and Engagement Section */}
//     <div className="flex items-center justify-between text-sm text-gray-500">
//       <div className="flex items-center gap-3">
//         <Image
//           src="https://source.unsplash.com/random/100x100"
//           alt="Author profile"
//           width={40}
//           height={40}
//           className="rounded-full"
//         />
//         <div>
//           <span className="font-semibold">{article.author}</span>
//           <p>{article.date}</p>
//         </div>
//       </div>

//       {/* Engagement (Likes and Comments) */}
//       <div className="flex gap-6 items-center">
//         <div className="flex items-center gap-1">
//           <AiOutlineHeart className="text-xl" />
//           <span>{article.likes}</span>
//         </div>
//         <div className="flex items-center gap-1">
//           <FaRegComment className="text-xl" />
//           <span>{article.comments}</span>
//         </div>
//       </div>
//     </div>
//   </header>
// );

// export default ArticleHeader;
