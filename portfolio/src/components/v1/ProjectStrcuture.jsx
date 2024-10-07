"use client";
import React ,{useState}from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
  FaTimes,
  FaBars,
  FaCopy,FaTelegramPlane ,FaWhatsapp
} from "react-icons/fa";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
import { CiMenuKebab } from "react-icons/ci";
// Import your images
import projectImage from "@/assets/bharat_chauhan_brown.jpg";
import headerImage from "@/assets/bharat_chauhan_brown.jpg"; // Update with the correct path
import flowImage from "@/assets/bharat_chauhan_brown.jpg"; // Update with the correct path
import Image from "next/image";
import { GoLink } from "react-icons/go";
const SectionSeparator = () => <hr className="my-4 border-gray-600" />;


const handleCopy = (text) => {
  navigator.clipboard.writeText(text);
  alert("Link copied to clipboard!");
};

const handleShare = (platform, url, text) => {
  const urlData = {
    portfolioUrl: "https://rishabhdubey108.vercel.app/home",
    postLink: "https://rishabhdubey108.vercel.app/home/projects/onestream",
    shareText: "Hey, I wanted to share something cool with you!",
    websiteUrl: "https://rishabhdubey108.vercel.app/home",
    githubUrl: "https://github.com/rishabhdubey108",
    livelink: 'https://collaboration-tool.vercel.app/'
  };

  // Construct share message dynamically based on available links
  const shareMessage = Object.entries(urlData)
    .filter(([key, value]) => value) // Filter only existing links
    .map(([key, value]) => {
      // Add the associated text for each link
      switch (key) {
          case 'postLink':
            return `Check out this post: ${value}\n`;
     
        case 'websiteUrl':
          return `Explore my website: ${value}`;
        case 'githubUrl':
          return `View my code on GitHub: ${value}`;
        case 'livelink':
          return `Check out this live project: ${value}`;
        default:
          return '';
      }
    })
    .join('\n'); // Join the messages with new lines

  const message = encodeURIComponent(`${text}\n\n${shareMessage}`);

  let shareUrl = "";
  if (platform === "telegram") {
    shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${message}`;
  } else if (platform === "whatsapp") {
    shareUrl = `https://api.whatsapp.com/send?text=${message}`;
  }
  
  window.open(shareUrl, "_blank");
};

const FeatureList = () => {
  const urlData = {
    portfolioUrl: "https://rishabhdubey108.vercel.app/home",
    postLink: "https://rishabhdubey108.vercel.app/home/projects/onestream",
    shareText: "Hey, I wanted to share something cool with you!",
    websiteUrl: "https://rishabhdubey108.vercel.app/home",
    githubUrl: "https://github.com/rishabhdubey108",
    livelink: 'https://collaboration-tool.vercel.app/'
  };

  return (
    <ul>
      <li className="px-4 py-2 flex items-center justify-start gap-2 hover:bg-primaryColor hover:text-darkDark cursor-pointer text-primaryColor">
        <FaGithub /> <p>View Code</p>
      </li>
      <li className="px-4 py-2 flex items-center justify-start gap-2 hover:bg-primaryColor hover:text-darkDark cursor-pointer text-primaryColor">
        <FaExternalLinkAlt /> <p>Visit Website</p>
      </li>
      <li
        className="px-4 py-2 flex items-center justify-start gap-2 hover:bg-primaryColor hover:text-darkDark cursor-pointer text-primaryColor"
        onClick={() => handleCopy(urlData.websiteUrl)}
      >
        <FaCopy /> Copy Website Link
      </li>
      <li
        className="px-4 py-2 flex items-center justify-start gap-2 hover:bg-primaryColor hover:text-darkDark cursor-pointer text-primaryColor"
        onClick={() => handleShare("telegram", urlData.postLink, urlData.shareText)}
      >
        <FaLinkedin /> <p>Share on Telegram</p>
      </li>
      <li
        className="px-4 py-2 flex items-center justify-start gap-2 hover:bg-primaryColor hover:text-darkDark cursor-pointer text-primaryColor"
        onClick={() => handleShare("whatsapp", urlData.postLink, urlData.shareText)}
      >
        <FaWhatsapp /> <p>Share on WhatsApp</p>
      </li>
      <li
        className="px-4 py-2 flex items-center justify-start gap-2 hover:bg-primaryColor hover:text-darkDark cursor-pointer text-primaryColor"
        onClick={() => handleCopy(urlData.postLink)}
      >
        <GoLink /> <p>Copy post link</p>
      </li>
    </ul>
  );
};
  
const DynamicSection = ({ title, children }) => (
  <>
    <h2 className="text-2xl font-semibold text-primaryColor font-poppins">
      {title}
    </h2>
    {children}
  </>
);
const Divider = () => <hr className="my-4 border-gray-600 opacity-50" />;
const IconWrapper = ({ icon, link }) => (
  <a href={link} target="_blank" rel="noopener noreferrer">
    {icon}
  </a>
);

const HeaderSection = ({ project }) => {
    const [like, setLike] = useState(false);
    const [likeCount, setLikeCount] = useState(674);
    const [isDropdownVisible, setIsDropdownVisible] = useState(false); // State to control dropdown visibility
  
    const toggleLike = () => {
      if (like) {
        setLikeCount(likeCount - 1);
      } else {
        setLikeCount(likeCount + 1);
      }
      setLike(!like);
    };
  
    const toggleDropdown = () => {
      setIsDropdownVisible(!isDropdownVisible); // Toggle dropdown visibility
    };
  
    return (
      <div className="mb-4">
        {/* Header section with image */}
        <Image
          src={projectImage}
          alt="Project Header"
          className="w-full h-60 rounded-xl mb-4"
        />
        <h1 className="text-4xl font-bold mb-4 text-primaryColor">
          {project.title}
        </h1>
  
        <p className="text-primaryColor">{project.description}</p>
  
        {/* tags */}
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
  
        {/* like button and icons */}
        <div className="flex flex-wrap gap-2 my-2 justify-between items-center">
          <div className="ml-2 flex gap-2 items-center">
            {like ? (
              <AiFillLike onClick={toggleLike} className="cursor-pointer" title="Unlike" />
            ) : (
              <AiOutlineLike onClick={toggleLike} className="cursor-pointer" title="Like" />
            )}
            <span>{likeCount}</span>
          </div>
  
          <div className="relative">
            <CiMenuKebab onClick={toggleDropdown} className="cursor-pointer" title="More Options" />
            <FaGithub className="cursor-pointer" title="GitHub"/>
            <FaExternalLinkAlt/>
            {/* Dropdown menu */}
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

        {project.techStack && project.techStack.length > 0 && (
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

        {project.features && project.features.length > 0 && (
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
              <ul className="list-disc list-inside">
                {project.challenges.map((challenge, index) => (
                  <li key={index}>{challenge}</li>
                ))}
              </ul>
            </DynamicSection>
            <SectionSeparator />
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
            <SectionSeparator />
          </>
        )}

        {/* Additional styling for the post header */}
        <div className="mt-8">
          <h2 className="text-3xl font-bold text-primaryColor mb-4">
            9 Naming Tricks Every Developer Should Know to Avoid Headache
          </h2>
          <p className="text-gray-400">
            Published in JavaScript in Plain English - 4 min read
          </p>
        </div>

        {/* Highlighted text section */}
        <div className="mt-6 bg-gray-800 p-4 rounded-lg">
          <p className="text-lg">
            Code with poor naming is difficult to read, and hard-to-read code is
            like a ticking time bomb. Sooner or later, you’ll have to revisit it
            to fix bugs or add new features. When that moment arrives, you’ll
            likely face three frustrating scenarios:
          </p>
          <ol className="list-decimal list-inside mt-2">
            <li>
              Refactor everything: This increases the scope and complexity of
              the task, requires extra testing, and might introduce new bugs.
            </li>
            <li>
              Use a workaround: Instead of refactoring, you patch things up.
              This leads to more complicated code and greater maintenance
              headaches.
            </li>
            <li>
              Cut corners: With tight deadlines, you might just slap on whatever
              works, ignoring edge cases and testing gaps.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
