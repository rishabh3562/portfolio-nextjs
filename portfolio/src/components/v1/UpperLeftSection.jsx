"use client";
import React from "react";
import Image from "next/image"; // Import the Image component
import circle from "@/assets/circle_two.png"; // Correctly import the image

const UpperLeftSection = () => {
  const cloudAndWebtext =
    "As a certified AWS Cloud Practitioner and passionate web developer, I craft scalable web solutions, integrating cloud technologies to optimize performance and user experience.";
  const cloudAndWebtext2 =
    "I specialize in creating web solutions tailored to meet the needs of clients, leveraging the latest technologies and industry best practices.";

  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center justify-end relative top-2 right-2">
        <Image src={circle} alt="circle image" className="w-24 h-24" />
      </div>

      <div className="flex flex-col mb-2 md:mb-16 mt-8 xs:mt-8 sm:mt-14 md:mt-20 lg:mt-32">
        <div className="text-left">
          <div className="text-base xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-slateDark font-light leading-tight">
            Creating Web Solutions Tailored for Your Needs
          </div>
          {/* Uncomment to add the second paragraph */}
          {/* <p className="text-slateLight font-light leading-5 ml-2 self-end">
            {cloudAndWebtext}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default UpperLeftSection;
