"use client";
import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const IconCard = ({ icon, href, text }) => {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <div className="flex items-center justify-center">
        <p className="text-textDarkRed font-bold text-xl mr-4 items-baseline">
            {text}
            </p>
        <p className="text-white font-bold text-2xl items-baseline">
            
            {icon}
            </p>
      </div>
    </a>
  );
};
const SocialsSection = () => {
  return (
    <>
      {/* socials using react-icons twitter, linkedin, github */}
      <div className="flex  justify-center gap-6">
        <IconCard
          icon={<FaLinkedinIn />}
          href="https://www.linkedin.com/in/rishabh-dubey-000000200/"
          text="Linkedin"
        />
        <IconCard
          icon={<FaGithub />}
          href="https://github.com/rishabh-dubey-000000200"
          text="Github"
        />
        <IconCard
          icon={<FaTwitter />}
          href="https://twitter.com/rishabh_dubey_000000200"
          text="Twitter"
        />
      </div>
    </>
  );
};

export default SocialsSection;
