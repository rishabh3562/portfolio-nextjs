"use client";
import React, { useState, useRef, useEffect } from "react";
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
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Divider from "@/components/v1/Divider";
import Navbar from "@/components/v1/Navbar";
import Layout from "./Mylayout";
import Breadcrumb from "./Breadcrumb";
const SectionSeparator = () => (
  <hr className="mt-4 mb-4 border-primaryColor opacity-65" />
);

const handleCopy = (text) => {
  navigator.clipboard.writeText(text);
};

const DropDown = ({ urlData }) => (
  <ul>
    {urlData.liveLink && (
      <li
        className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-primaryColor hover:text-darkDark text-primaryColor"
        onClick={() => handleCopy(urlData.liveLink)}
      >
        <FaCopy /> Copy Website Link
      </li>
    )}
    <li
      className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-primaryColor hover:text-darkDark text-primaryColor"
      onClick={() => handleShare("telegram", urlData)}
    >
      <FaTelegramPlane /> Share on Telegram
    </li>
    <li
      className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-primaryColor hover:text-darkDark text-primaryColor"
      onClick={() => handleShare("whatsapp", urlData)}
    >
      <FaWhatsapp /> Send on WhatsApp
    </li>
    <li
      className="px-4 py-2 flex items-center gap-2 cursor-pointer hover:bg-primaryColor hover:text-darkDark text-primaryColor"
      onClick={() => handleCopy(urlData.liveLink)}
    >
      <GoLink /> Copy Post Link
    </li>
  </ul>
);

 export const handleShare = (platform, urlData) => {
  const text = urlData?.shareText || "Check out this post:";

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
          urlData.liveLink
        )}&text=${message}`
      : `https://api.whatsapp.com/send?text=${message}`; // WhatsApp URL

  window.open(shareUrl, "_blank");
};

const DynamicSection = ({ title, children }) => (
  <>
    <h2 className="text-3xl mt-10 font-semibold text-primaryColor font-poppins">
      {title}
    </h2>
    <SectionSeparator />
    <div className="ml-4 text-tertiaryColor">{children}</div>
  </>
);

const FeatureItem = ({ title, description, url }) => (
  <div className="feature-item mb-4">
    <h3 className="text-lg font-semibold text-primaryColor">{title}</h3>

    {url.link && (
      <Image
        src={url.link}
        alt="Feature image"
        width={1000}
        height={100}
        style={{ width: "100%", height: "auto" }}
        className="rounded-xl my-4 object-cover"
      />
    )}
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
          url={
            feature.image
              ? feature.image
              : { link: "", description: "", width: 1000, height: 1000 }
          }
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
        className="w-full h-72 rounded-xl mb-4 object-cover object-top"
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
            {urlData.githubUrl && (
              <FaGithub
                onClick={() => window.open(urlData.githubUrl, "_blank")}
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
  const projectRef = useRef(null);
  const breadcrumbItems = [
    { label: "Home", href: "/" },
    { label: "Projects", href: "/projects" },
    {
      label: project.title,
      href: `/projects/${project.title.replace(/\s+/g, "-").toLowerCase()}`,
    }, // Dynamic link for project
  ];
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        projectRef.current,
        { opacity: 0, y: 50 }, // Initial state
        {
          opacity: 1,
          y: 0,
          scrollTrigger: {
            trigger: projectRef.current,
            start: "top 80%", // Trigger animation when the element reaches 80% from the top
            toggleActions: "play none none reverse", // Play animation on scroll
          },
        }
      );
    }, projectRef); // Scoping to this component

    return () => ctx.revert(); // Cleanup on unmount
  }, []);

  return (
    <Layout type="projects" breadcrumbItems={breadcrumbItems}>
      <div className="bg-darkDark w-full h-full">
        <div
          ref={projectRef}
          className="mx-auto p-6 md:w-3/4 lg:w-3/4 xl:w-3/4 text-white"
        >
          <Breadcrumb items={breadcrumbItems} />
          <HeaderSection project={project} urlData={urlData} />
          {project.introduction && (
            <DynamicSection title="Introduction">
              {project.mainUrl && (
                <Image
                  src={project.mainUrl}
                  width={1000}
                  height={100}
                  alt="Project Header"
                  className="w-full h-72 rounded-xl mb-4 object-fill"
                />
              )}
              <p className="text-lg">{project.introduction}</p>
            </DynamicSection>
          )}

          {project.techStack && project.techStack.length > 0 && (
            <DynamicSection title="Tech Stack">
              <ul className="list-disc list-inside">
                {project.techStack.map((tech, index) => (
                  <li key={index} className="text-lg">
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
                <FeaturesList features={project.challenges} />
              </DynamicSection>
            </>
          )}
          {project.usage && project.usage.length > 0 && (
            <>
              <DynamicSection title="Usage">
                <FeaturesList features={project.usage} />
              </DynamicSection>
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

          {(project.conclusion ||
            project.license ||
            project.contributionGuidelines) && (
            <>
              <DynamicSection title="Conclusion">
                <ul className="list-disc list-inside">
                  {project.contributionGuidelines && (
                    <li>
                      <>{project.contributionGuidelines}</>
                    </li>
                  )}
                  {project.conclusion && (
                    <li>
                      <>{project.conclusion}</>
                    </li>
                  )}
                  {project.license && (
                    <li>
                      <>{project.license}</>
                    </li>
                  )}
                </ul>
              </DynamicSection>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default ProjectCard;
