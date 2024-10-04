"use client";
import React from "react";
import RightProjectSection from "@/components/v1/RightProjectSection";
import UpperLeftSection from "@/components/v1/UpperLeftSection";
import SocialsSection from "@/components/v1/SocialsSection";
import Image from "next/image";
import { useMediaQuery } from "react-responsive";
import MobileImage from "@/assets/ecell2.jpg";
import tableImage from "@/assets/ecell2.jpg";
import BottomLeftSection from "@/components/v1/BottomLeftSection";
import BottomRightSection from "@/components/v1/BottomRightSection";

const Page = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  const isTablet = useMediaQuery({
    query: "(min-width: 641px) and (max-width: 1024px)",
  });

  // Set image path dynamically based on screen size
  const imageSrc = isMobile ? MobileImage : tableImage;

  return (
    <div className="min-h-screen h-screen bg-[#151515] text-white p-4 overflow-hidden">
      <div className="grid grid-cols-12 grid-rows-8 gap-4 h-full">
        {/* Top Navbar */}
        <div className="col-span-12 row-span-1 flex items-center bg-gridBlocksBackground p-4 rounded-lg shadow-md">
          <h1 className="text-2xl font-breathney md:text-4xl font-bold text-[#9B8D78]">
            Rishabh Dubey
          </h1>
        </div>

        {/* Main Content: Left & Image Section */}
        <div className="grid grid-cols-8 col-span-8 row-span-4 gap-4">
          {/* Left Section */}
          <div className="col-span-5 bg-beige p-4 rounded-lg shadow-md">
            <UpperLeftSection />
          </div>

          {/* Image Section */}
          <div className="col-span-3 bg-gridBlocksBackground rounded-lg shadow-lg transition-transform transform hover:scale-105 h-full">
            <div className="relative w-full h-full">
              <Image
                src={imageSrc}
                alt="Rishabh Dubey"
                className="rounded-lg object-cover object-center"
                layout="fill"
                sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 25vw"
              />
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-4 row-span-6 bg-gridBlocksBackground p-4 rounded-lg shadow-md">
          <RightProjectSection />
        </div>

        {/* Bottom Sections */}
        <div className="col-span-4 row-span-3 bg-gridBlocksBackground p-4 rounded-lg shadow-md">
          <BottomLeftSection />
        </div>
        <div className="col-span-4 row-span-3 bg-gridBlocksBackground p-4 rounded-lg shadow-md">
          <BottomRightSection />
        </div>
        <div className="col-span-4 row-span-1 bg-gridBlocksBackground p-4 rounded-lg shadow-md">
          <SocialsSection />
        </div>
      </div>
    </div>
  );
};

export default Page;
