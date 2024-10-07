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

const urlData = {
  portfolioUrl: "https://rishabhdubey108.vercel.app/home",
  postLink: "https://rishabhdubey108.vercel.app/home/projects/onestream",
  shareText: "Hey, I wanted to share something cool with you!",
  websiteUrl: "https://rishabhdubey108.vercel.app/home",
  githubUrl: "https://github.com/rishabhdubey108",
  liveLink: "https://collaboration-tool.vercel.app/",
};

const SectionSeparator = () => <hr className="my-4 border-gray-600" />;

const handleCopy = (text) => {
  navigator.clipboard.writeText(text);
  alert("Link copied to clipboard!");
};

const handleShare = (platform, text) => {
  const shareMessage = Object.entries(urlData)
    .filter(([_, value]) => value)
    .map(([key, value]) => {
      switch (key) {
        case "postLink":
          return `Check out this post: ${value}\n`;
        case "websiteUrl":
          return `Explore my website: ${value}`;
        case "githubUrl":
          return `View my code on GitHub: ${value}`;
        case "liveLink":
          return `Check out this live project: ${value}`;
        default:
          return "";
      }
    })
    .join("\n");

  const message = encodeURIComponent(`${text}\n\n${shareMessage}`);
  const shareUrl =
    platform === "telegram"
      ? `https://t.me/share/url?url=${encodeURIComponent(
          urlData.postLink
        )}&text=${message}`
      : `https://api.whatsapp.com/send?text=${message}`;

  window.open(shareUrl, "_blank");
};

const FeatureList = () => (
  <ul>
    <li
      className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-primaryColor hover:text-darkDark text-primaryColor"
      onClick={() => handleCopy(urlData.websiteUrl)}
    >
      <FaCopy /> Copy Website Link
    </li>
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
      <FaWhatsapp /> Share on WhatsApp
    </li>
    <li
      className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-primaryColor hover:text-darkDark text-primaryColor"
      onClick={() => handleCopy(urlData.postLink)}
    >
      <GoLink /> Copy Post Link
    </li>
  </ul>
);

const DynamicSection = ({ title, children }) => (
  <>
    <h2 className="text-2xl font-semibold text-primaryColor">{title}</h2>
    {children}
  </>
);

const HeaderSection = ({ project }) => {
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
    <div className="mb-4">
      <Image
        src={projectImage}
        alt="Project Header"
        className="w-full h-60 rounded-xl mb-4"
      />
      <h1 className="text-4xl font-bold mb-4 text-primaryColor">
        {project.title}
      </h1>
      <p className="text-primaryColor">{project.description}</p>
      <div className="flex flex-wrap gap-2 my-2">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="bg-primaryColor text-white px-2 py-1 rounded-md"
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 my-2 justify-between items-center">
        <div className="ml-2 flex gap-2 items-center">
          {like ? (
            <AiFillLike
              onClick={toggleLike}
              className="cursor-pointer"
              title="Unlike"
            />
          ) : (
            <AiOutlineLike
              onClick={toggleLike}
              className="cursor-pointer"
              title="Like"
            />
          )}
          <span>{likeCount}</span>
        </div>
        <div className="relative">
          <div className="flex gap-2 items-center">
            <FaGithub className="cursor-pointer" title="GitHub" />
            <FaExternalLinkAlt className="cursor-pointer" title="Website" />
            <CiMenuKebab
              onClick={toggleDropdown}
              className="cursor-pointer"
              title="More Options"
            />
          </div>
          {isDropdownVisible && (
            <div className="absolute right-0 mt-2 w-48 bg-bgColor rounded-lg shadow-lg">
              <FeatureList />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project }) => {
  return (
    <div className="bg-darkDark text-white">
      <div className="mx-auto p-4 md:w-3/4 lg:w-2/3 xl:w-1/2 text-white">
        <HeaderSection project={project} />
        {project.introduction && (
          <>
            <DynamicSection title="Introduction">
              <p>{project.introduction}</p>
              <p>
                We are excited to introduce a seamless and intuitive way for you
                to unleash your creativity and communicate your ideas visually.{" "}
                {project.description}
              </p>
            </DynamicSection>
            <SectionSeparator />
          </>
        )}
        {project.techStack?.length > 0 && (
          <>
            <DynamicSection title="Tech Stack">
              <ul className="list-disc list-inside">
                {project.techStack.map((tech, index) => (
                  <li key={index}>
                    <a
                      href={tech.link}
                      className="text-blue-600 hover:underline"
                    >
                      {tech.name}
                    </a>
                  </li>
                ))}
              </ul>
            </DynamicSection>
            <SectionSeparator />
          </>
        )}
        {project.features?.length > 0 && (
          <>
            <DynamicSection title="Features">
              <ul className="list-disc list-inside">
                {project.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </DynamicSection>
            <SectionSeparator />
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
