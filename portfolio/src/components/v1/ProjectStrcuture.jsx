"use client";
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
  FaTimes,
  FaBars,
  FaCopy,
} from "react-icons/fa";
import { AiOutlineLike, AiFillLike } from "react-icons/ai";
// Import your images
import projectImage from "@/assets/bharat_chauhan_brown.jpg";
import headerImage from "@/assets/bharat_chauhan_brown.jpg"; // Update with the correct path
import flowImage from "@/assets/bharat_chauhan_brown.jpg"; // Update with the correct path
import Image from "next/image";
const SectionSeparator = () => <hr className="my-4 border-gray-600" />;

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
  return (
    <>
      {/* Header section with image */}
      <div className="mb-4">
        <Image
          src={headerImage}
          alt="Project Header"
          className="w-full h-60 rounded-xl mb-4 "
        />
        <h1 className="text-4xl font-bold mb-4 text-primaryColor">
          {project.title}
        </h1>

        <p className="text-primaryColor">{project.description}</p>

        {/* like,share,tags ,links as github, live links*/}

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

        {/* links */}
        <Divider />
        <div className="flex flex-wrap gap-2 my-2 justify-between items-center">
          {/* left wale links */}
          <div className="ml-2 flex gap-2">
            <IconWrapper icon={<FaGithub />} link={project.githubRepo} />
            <IconWrapper
              icon={<FaExternalLinkAlt />}
              link={project.websiteLink}
            />
            <IconWrapper
              icon={<FaExternalLinkAlt />}
              link={project.videoDemo}
            />
          </div>

          {/* right wale links */}
          <div className="mr-4 flex gap-2">
            <IconWrapper icon={<FaGithub />} link={project.githubRepo} />
            <IconWrapper
              icon={<FaExternalLinkAlt />}
              link={project.websiteLink}
            />
            <IconWrapper
              icon={<FaExternalLinkAlt />}
              link={project.videoDemo}
            />
          </div>
        </div>
        <Divider />
      </div>
    </>
  );
};
const ProjectCard = ({ project }) => {
  return (
    <div className="bg-darkDark text-white">
      <div className="mx-auto p-4 sm:w-3/4 text-white">
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
