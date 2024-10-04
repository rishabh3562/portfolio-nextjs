"use client";
import React from "react";
import Image from "next/image";
import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaExternalLinkAlt,
} from "react-icons/fa";
import projectimage from "@/assets/bharat_chauhan_brown.jpg";
const ProjectCard = () => {
  return (
    <div className="flex justify-between items-center gap-2 p-4 rounded-lg bg-gridBlocksBackground shadow-md hover:bg-gray-800 transition duration-200">
      <div className="text-primary font-semibold">CodeNote.ai</div>
      <div className="icons flex gap-2 items-center">
        <FaGithub className="hover:cursor-pointer text-white text-xl" />
        <FaExternalLinkAlt className="hover:cursor-pointer text-white text-xl" />
        {/* Uncomment if needed */}
        {/* <FaLinkedin className='text-white' /> */}
        {/* <FaTwitter className='text-white' /> */}
      </div>
    </div>
  );
};

const Divider = () => {
  return (
    <div className="text-primary">
      <hr className="border-textSecondary border-2 rounded-full" />
    </div>
  );
};

const RightProjectSection = () => {
  return (
    <div className="text-primary">
      <h2 className="text-xl font-bold mb-4">My Projects</h2>
      <div className="flex justify-center items-center mb-4">
        {/* Image collage or any other content can go here */}
        <Image src={projectimage}/>
      </div>
      <ProjectCard />
      <Divider />
      <ProjectCard />
      <Divider />
      <ProjectCard />
      <Divider />
      <ProjectCard />
    </div>
  );
};

export default RightProjectSection;
