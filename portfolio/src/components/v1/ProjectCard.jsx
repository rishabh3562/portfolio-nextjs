import React, { useState } from "react";
import {
  FaGithub,
  FaGlobe,
  FaVideo,
  FaChevronRight,
  FaBookmark,
  FaShare,
  FaHeart,
  FaExpandAlt,
  FaBookReader,
} from "react-icons/fa";

const ProjectCard = ({ project }) => {
  // State for interactive elements
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [showAllTags, setShowAllTags] = useState(false);
  const [showAllFeatures, setShowAllFeatures] = useState(false);

  // Display logic for tags
  const visibleTags = showAllTags ? project.tags : project.tags.slice(0, 4);
  const remainingTags = !showAllTags ? project.tags.length - 4 : 0;

  // Display logic for features
  const visibleFeatures = showAllFeatures
    ? project.features
    : project.features.slice(0, 3);

  // Share functionality
  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: project.title,
          text: project.introduction,
          url: project.websiteLink || window.location.href,
        });
      } catch (error) {
        console.log("Error sharing:", error);
      }
    } else {
      // Fallback copy to clipboard
      navigator.clipboard.writeText(window.location.href);
      // You might want to add a toast notification here
    }
  };

  return (
    <>
      <div className="flex justify-center items-start ">
        <div className="group relative w-full max-w-xl overflow-hidden rounded-lg border border-primaryColor shadow-sm transition-all duration-300 hover:shadow-lg">
          {/* Quick Action Buttons - Appear on hover */}
          <div className="absolute right-2 top-2 z-10 flex gap-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {/* <button
              onClick={() => setIsBookmarked(!isBookmarked)}
              className={`rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-50
            ${isBookmarked ? "text-blue-500" : "text-gray-600"}`}
              aria-label="Bookmark project"
            >
              <FaBookmark className="h-4 w-4" />
            </button> */}
            <button
              onClick={handleShare}
              className="rounded-full bg-white p-2 text-gray-600 shadow-md transition-colors hover:bg-gray-50"
              aria-label="Share project"
            >
              <FaShare className="h-4 w-4" />
            </button>
            {/* <button
              onClick={() => setIsLiked(!isLiked)}
              className={`rounded-full bg-white p-2 shadow-md transition-colors hover:bg-gray-50
            ${isLiked ? "text-red-500" : "text-gray-600"}`}
              aria-label="Like project"
            >
              <FaHeart className="h-4 w-4" />
            </button> */}
          </div>

          {/* asli wala */}
          {/* Project Image Section with Overlay */}
          <div className="relative h-64 w-full overflow-hidden">
            {project.mainUrl ? (
              <img
                src={project.mainUrl}
                alt={project.title}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-gradient-to-r from-darkDark to-lightDark p-6">
                <h1 className="font-beathney text-heading-xl text-primaryColor">
                  {project.title}
                </h1>
              </div>
            )}
            {/* Image Overlay with Quick Preview Button */}
            {/* <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-0 transition-all duration-300 group-hover:bg-opacity-30"> */}
            <div className="absolute inset-0 flex items-center justify-center  transition-all duration-300 group-hover:bg-opacity-30">
              {/* <button className="scale-0 transform rounded-full bg-white p-3 text-gray-800 shadow-lg transition-transform duration-300 hover:bg-gray-100 group-hover:scale-100">
                <FaExpandAlt className="h-5 w-5" />
              </button> */}
            </div>
          </div>

          {/* Content Section */}
          <div className="p-4 bg-darkDark">
            {/* Title and Introduction with Tech Level Badge */}
            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between">
                <h2 className="text-2xl font-bold text-primaryColor">
                  {project.title}
                </h2>
                <span className="rounded-full bg-lightDark px-3 py-1 text-xs font-medium text-primaryColor">
                  {project.techStack?.length || 0} Technologies
                </span>
              </div>
              <p className="text-sm text-tertiaryColor font-semibold">
                {project.introduction}
                {/* {project.introduction.slice(0, 300)+"...."} */}
              </p>
            </div>

            {/* Tags Section with Toggle */}
            <div className="mb-4">
              <div className="flex flex-wrap gap-2">
                {visibleTags.map((tag, index) => (
                  <span
                    key={index}
                    className="rounded-full bg-primaryColor px-3 py-1 text-sm font-medium text-darkDark transition-colors hover:opacity-95"
                  >
                    {tag}
                  </span>
                ))}
                {remainingTags > 0 && (
                  <button
                    onClick={() => setShowAllTags(true)}
                    className="rounded-full bg-lightDark px-3 py-1 text-sm font-medium text-primaryColor hover:opacity-95"
                  >
                    +{remainingTags} more
                  </button>
                )}
              </div>
            </div>

            {/* Key Features Section with Expand/Collapse */}
            <div className="mb-4">
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold text-primaryColor">
                  Key Features
                </h3>
                <button
                  onClick={() => setShowAllFeatures(!showAllFeatures)}
                  className="text-sm text-primaryColor hover:opacity-90"
                >
                  {showAllFeatures ? "Show Less" : "Show All"}
                </button>
              </div>
              <div className="space-y-1">
                {visibleFeatures.map((feature, index) => (
                  <div
                    key={index}
                    className="text-sm text-tertiaryColor font-semibold"
                  >
                    • {feature.title}
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mb-4 flex justify-around border-y border-primaryColor py-3">
              <div className="text-center">
                <div className="text-lg font-bold text-primaryColor">
                  {project.techStack?.length || 0}
                </div>
                <div className="text-xs text-tertiaryColor font-bold">
                  Technologies
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primaryColor">
                  {project.features?.length || 0}
                </div>
                <div className="text-xs text-tertiaryColor font-bold">
                  Features
                </div>
              </div>
              <div className="text-center">
                <div className="text-lg font-bold text-primaryColor">
                  {project.installation?.length || 0}
                </div>
                <div className="text-xs text-tertiaryColor font-bold">
                  Steps
                </div>
              </div>
            </div>

            {/* Links Section with Enhanced Styling */}
            <div className="mb-4 flex flex-wrap gap-4">
              {project.githubRepo && (
                <a
                  href={project.githubRepo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md bg-lightDark px-3 py-2 text-sm text-primaryColor transition-colors hover:opacity-90"
                >
                  <FaGithub className="h-4 w-4" />
                  <span>Repository</span>
                </a>
              )}
              {project.websiteLink && (
                <a
                  href={project.websiteLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md bg-lightDark px-3 py-2 text-sm text-primaryColor transition-colors hover:opacity-90"
                >
                  <FaGlobe className="h-4 w-4" />
                  <span>Live Demo</span>
                </a>
              )}
              {project.videoDemo && (
                <a
                  href={project.videoDemo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 rounded-md bg-lightDark px-3 py-2 text-sm text-primaryColor transition-colors hover:opacity-90"
                >
                  <FaVideo className="h-4 w-4" />
                  <span>Video Demo</span>
                </a>
              )}
            </div>

            {/* Primary and Secondary CTAs */}
            <div className="flex gap-2">
              <a
                href={`/projects/${project.title.toLowerCase()}`}
                className="flex flex-1 items-center justify-center gap-2 rounded-md bg-lightDark px-4 py-2 text-sm font-medium text-primaryColor transition-colors hover:opacity-90"
              >
                View Details
                <FaChevronRight className="h-3 w-3" />
              </a>
              {/* <a
                href={`/projects/${project.title.toLowerCase()}/docs`}
                className="flex items-center gap-2 rounded-md bg-gray-100 px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-200"
              >
                <FaBookReader className="h-4 w-4" />
                <span>Docs</span>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;

// //   {
// //     /* Header Section */
// //   }
// {
//   /* Header Section */
// }
// {/* <div className="relative h-64 overflow-hidden">
//   {project.mainUrl ? (
//     <img
//       src={project.mainUrl}
//       alt={project.title}
//       className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
//     />
//   ) : (
//     <div className="flex h-full items-center justify-center bg-gradient-to-r from-darkDark to-lightDark p-6">
//       <h1 className="font-beathney text-heading-xl text-primaryColor">
//         {project.title}
//       </h1>
//     </div>
//   )}

//   {/* Overlay Gradient */}
//   <div className="absolute inset-0 bg-gradient-to-t from-darkDark via-transparent to-transparent" />

//   {/* Project Title */}
//   <div className="absolute bottom-0 w-full p-6">
//     <h2 className="font-playfair text-heading-lg tracking-heading text-primaryColor">
//       {project.title}
//     </h2>
//     <p className="mt-2 text-body text-tertiaryColor">{project.introduction}</p>
//   </div>
// </div>; */}
