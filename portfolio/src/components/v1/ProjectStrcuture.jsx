"use client";
import React from "react";

const SectionSeparator = () => (
  <hr className="my-4 border-[#d0bca0]" />
);

const ProjectTitle = ({ title }) => (
  <h1 className="text-4xl font-bold mb-4 text-[#d0bca0]">{title}</h1>
);

const ProjectIntroduction = ({ introduction, description }) => (
  <>
    <h2 className="text-2xl font-semibold text-[#d0bca0]">Introduction</h2>
    <p>{introduction}</p>
    <p>We are excited to introduce a seamless and intuitive way for you to unleash your creativity and communicate your ideas visually. {description}</p>
  </>
);

const ProjectTechStack = ({ techStack }) => (
  <>
    <h2 className="text-2xl font-semibold text-[#d0bca0]">Tech Stack</h2>
    <ul className="list-disc list-inside">
      {techStack.map((tech, index) => (
        <li key={index}>
          <a href={tech.link} className="text-blue-600 hover:underline">{tech.name}</a>
        </li>
      ))}
    </ul>
  </>
);

const ProjectChallenges = ({ challenges }) => (
  <>
    <h2 className="text-2xl font-semibold text-[#d0bca0]">Challenges we faced</h2>
    <ul className="list-disc list-inside">
      {challenges.map((challenge, index) => (
        <li key={index}>{challenge}</li>
      ))}
    </ul>
  </>
);

const ProjectLinks = ({ githubRepo, websiteLink }) => (
  <>
    <h2 className="text-2xl font-semibold text-[#d0bca0]">Public code repo</h2>
    <ul className="list-disc list-inside">
      <li>
        GitHub - <a href={githubRepo} className="text-blue-600 hover:underline">{githubRepo}</a>
      </li>
      <li>
        Website link - <a href={websiteLink} className="text-blue-600 hover:underline">{websiteLink}</a>
      </li>
    </ul>
  </>
);

const ProjectCard = ({ project }) => {
  return (
    <div className="max-w-4xl mx-auto p-4 bg-[#1e201e] text-white">
      <ProjectTitle title={project.title} />
      <SectionSeparator />
      <ProjectIntroduction introduction={project.introduction} description={project.description} />
      <SectionSeparator />
      <ProjectTechStack techStack={project.techStack} />
      <SectionSeparator />
      <h2 className="text-2xl font-semibold text-[#d0bca0]">Features</h2>
      <ul className="list-disc list-inside">
        {project.features.map((feature, index) => (
          <li key={index}>{feature}</li>
        ))}
      </ul>
      <SectionSeparator />
      <h2 className="text-2xl font-semibold text-[#d0bca0]">Video demo</h2>
      <p>Here's a speedrun: <a href={project.videoDemo} className="text-blue-600 hover:underline">{project.videoDemo}</a></p>
      <SectionSeparator />
      <ProjectChallenges challenges={project.challenges} />
      <SectionSeparator />
      <ProjectLinks githubRepo={project.githubRepo} websiteLink={project.websiteLink} />
      <SectionSeparator />
      <h2 className="text-2xl font-semibold text-[#d0bca0]">Conclusion</h2>
      <p>{project.conclusion}</p>
    </div>
  );
};

export default ProjectCard;
