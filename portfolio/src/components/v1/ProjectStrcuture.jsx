"use client";
import React, { useState } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
  FaCopy,
  FaTelegramPlane,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
import Image from "next/image";
import { GoLink } from "react-icons/go";
import projectImage from "@/assets/bharat_chauhan_brown.jpg"; // Adjust paths if necessary
import flowImage from "@/assets/bharat_chauhan_brown.jpg"; // Update with the correct path

const SectionSeparator = () => <hr className="mt-4 mb-4 border-primaryColor opacity-65" />;

const handleCopy = (text) => {
  navigator.clipboard.writeText(text);
  alert("Link copied to clipboard!");
};

const DropDown = ({ urlData }) => (
  <ul>
    {urlData.website && (
      <li
        className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-primaryColor hover:text-darkDark text-primaryColor"
        onClick={() => handleCopy(urlData.website)}
      >
        <FaCopy /> Copy Website Link
      </li>
    )}
    <li
      className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-primaryColor hover:text-darkDark text-primaryColor"
      onClick={() => handleShare("telegram", urlData.shareText)}
    >
      <FaTelegramPlane /> Share on Telegram
    </li>
    <li
      className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-primaryColor hover:text-darkDark text-primaryColor"
      onClick={() => handleShare("whatsapp", urlData.shareText)}
    >
      <FaWhatsapp /> Send on WhatsApp
    </li>
    <li
      className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-primaryColor hover:text-darkDark text-primaryColor"
      onClick={() => handleCopy(urlData.postLink)}
    >
      <GoLink /> Copy Post Link
    </li>
  </ul>
);

const handleShare = (platform, text, urlData) => {
  const shareMessage = [
    urlData.postLink ? `Check out this post: ${urlData.postLink}` : '',
    urlData.website ? `Explore my website: ${urlData.website}` : '',
    urlData.github ? `View my code on GitHub: ${urlData.github}` : '',
    urlData.liveLink ? `Check out this live project: ${urlData.liveLink}` : '',
  ].filter(Boolean).join("\n");

  const message = encodeURIComponent(`${text}\n\n${shareMessage}`);
  const shareUrl =
    platform === "telegram"
      ? `https://t.me/share/url?url=${encodeURIComponent(urlData.postLink)}&text=${message}`
      : `https://api.whatsapp.com/send?text=${message}`;

  window.open(shareUrl, "_blank");
};

const Divider = () => <hr className="my-6 border-gray-600 opacity-50" />;

const DynamicSection = ({ title, children }) => (
  <>
    <h2 className="text-3xl mt-10 font-semibold text-primaryColor font-poppins">
      {title}
    </h2>
    <SectionSeparator />
    <div className="ml-4 text-tertiaryColor">{children}</div>
  </>
);

const FeatureItem = ({ title, description }) => (
  <div className="feature-item mb-4">
    <h3 className="text-lg font-semibold text-primaryColor">{title}</h3>
    <p className="text-tertiaryColor">{description}</p>
  </div>
);

const FeaturesList = ({ features }) => (
  <section className="features-section ">
   
    <div className="features">
      {features.map((feature, index) => (
        <FeatureItem 
          key={index} 
          title={feature.title} 
          description={feature.description} 
        />
      ))}
    </div>
  </section>
);

const HeaderSection = ({ project, urlData }) => {
  const [like, setLike] = useState(false);
  const [likeCount, setLikeCount] = useState(674);
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleLike = () => {
    setLikeCount((prev) => prev + (like ? -1 : 1));
    setLike(!like);
  };

  const toggleDropdown = () => {
    setIsDropdownVisible((prev) => !prev);
  };

  return (
    <div className="mb-6">
      <Image
        src={projectImage}
        alt="Project Header"
        className="w-full h-72 rounded-xl mb-4 object-cover"
      />
      <h1 className="text-4xl font-bold mb-2 text-primaryColor">
        {project.title}
      </h1>
      <p className="text-lg text-tertiaryColor">{project.description}</p>
      <div className="flex flex-wrap gap-2 my-3">
        {project.tags.map((tag, index) => (
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
            {urlData.github && (
              <FaGithub
                onClick={() => window.open(urlData.github, "_blank")}
                className="cursor-pointer text-primaryColor transition-all ease-in"
                title="GitHub"
              />
            )}
            {urlData.liveLink && (
              <FaExternalLinkAlt
                onClick={() => window.open(urlData.liveLink, "_blank")}
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
              <DropDown urlData={urlData} />
            </div>
          )}
        </div>
      </div>
      <Divider />
    </div>
  );
};

const ProjectCard = ({ project, urlData }) => {
  return (
    <div className="bg-darkDark w-full h-full">
   <div className="mx-auto p-6 md:w-3/4 lg:w-2/3 xl:w-1/2 text-white">
        <HeaderSection project={project} urlData={urlData} />
        {project.introduction && (
          <DynamicSection title="Introduction">
            <p className="text-lg">{project.introduction}</p>
            <p className="text-lg">{project.description}</p>
          </DynamicSection>
        )}

        {project.techStack && project.techStack.length > 0 && (
          <DynamicSection title="Tech Stack">
            <ul className="list-disc list-inside">
              {project.techStack.map((tech, index) => (
                <li key={index} className="text-lg">
                  <a href={tech.link} className="text-blue-600 hover:underline">
                    {tech.name}
                  </a>
                </li>
              ))}
            </ul>
          </DynamicSection>
        )}

        {project.features && project.features.length > 0 && (
          <DynamicSection title="Features">
            <FeaturesList features={project.features} />
          </DynamicSection>
        )}

        {project.flowImage && (
          <DynamicSection title="The general flow of the application">
            <Image
              src={flowImage}
              alt="Application Flow"
              className="w-full h-64 rounded-xl mb-4 object-cover"
            />
          </DynamicSection>
        )}
        
        {project.flowImage && (
          <>
            <DynamicSection title="The general flow of the application">
              <Image
                src={flowImage}
                alt="Application Flow"
                className="w-full h-auto mb-4"
              />
            </DynamicSection>
            <SectionSeparator />
          </>
        )}

        {project.challenges && project.challenges.length > 0 && (
          <>
            <DynamicSection title="Challenges we faced">
               <FeaturesList features={project.features} />
            </DynamicSection>
           
          </>
        )}

        {project.githubRepo && project.websiteLink && (
          <>
            <DynamicSection title="Public code repo">
              <ul className="list-disc list-inside">
                <li>
                  GitHub -{" "}
                  <a
                    href={project.githubRepo}
                    className="text-blue-600 hover:underline"
                  >
                    {project.githubRepo}
                  </a>
                </li>
                <li>
                  Website link -{" "}
                  <a
                    href={project.websiteLink}
                    className="text-blue-600 hover:underline"
                  >
                    {project.websiteLink}
                  </a>
                </li>
              </ul>
            </DynamicSection>
            <SectionSeparator />
          </>
        )}

        {project.videoDemo && (
          <>
            <DynamicSection title="Video demo">
              <p>
                Here's a speedrun:{" "}
                <a
                  href={project.videoDemo}
                  className="text-blue-600 hover:underline"
                >
                  {project.videoDemo}
                </a>
              </p>
            </DynamicSection>
            <SectionSeparator />
          </>
        )}

        {project.conclusion && (
          <>
            <DynamicSection title="Conclusion">
              <p>{project.conclusion}</p>
            </DynamicSection>
           
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;

