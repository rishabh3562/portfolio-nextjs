"use client";
import React from "react";

const UpperLeftSection = () => {
  const cloudAndWebtext =
    "As a certified AWS Cloud Practitioner and passionate web developer, I craft scalable web solutions, integrating cloud technologies to optimize performance and user experience.";
  const cloudAndWebtext2 =
    "I specialize in creating web solutions tailored to meet the needs of clients, leveraging the latest technologies and industry best practices.";

  return (
    <>
      <div
        className="text-3xl md:text-4xl lg:text-5xl text-slateDark font-light  leading-tight"
      >
        Creating Web Solutions Tailored for Your Needs
      </div>

    
      <p className="text-slateLight font-light">{cloudAndWebtext}</p>
    </>
  );
};

export default UpperLeftSection;
