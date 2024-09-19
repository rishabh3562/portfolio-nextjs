"use client";
import React from "react";

const page = () => {
  return (
    <div className="min-h-screen h-screen bg-gridBackground text-white p-2 md:p-4">
      <div className="grid grid-cols-12 grid-rows-8 gap-4 h-full ">
        {/* Top Navbar */}
        <div className="col-span-12 row-span-1 bg-gridBlocksBackground p-4 md:p-6 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-textLightYellow">NavBar</h1>
        </div>

        {/* Main Content: Left & Image Section */}
        <div className="grid grid-cols-8 grid-rows-1 col-span-8 row-span-4 gap-4">
          {/* Left Section */}
          <div className="col-span-5 bg-gridBlocksBackground p-4 md:p-6 rounded-lg">
            <h1 className="text-2xl md:text-4xl font-bold text-textLightYellow">Left Section</h1>
          </div>
          {/* Image Section */}
          <div className="col-span-3 bg-gridBlocksBackground p-4 md:p-6 rounded-lg">
            Image
          </div>
        </div>

        {/* Right Section */}
        <div className="col-span-4 row-span-6 bg-gridBlocksBackground p-4 md:p-6 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-textLightYellow">Right Section</h1>
        </div>

        {/* Bottom Sections */}
        <div className="col-span-4 row-span-3 bg-gridBlocksBackground p-4 md:p-6 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-textLightYellow">Bottom Section</h1>
        </div>
        <div className="col-span-4 row-span-3 bg-gridBlocksBackground p-4 md:p-6 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-textLightYellow">Bottom Section</h1>
        </div>
        <div className="col-span-4 row-span-1 bg-gridBlocksBackground p-4 md:p-6 rounded-lg">
          <h1 className="text-2xl md:text-4xl font-bold text-textLightYellow">Footer</h1>
        </div>
      </div>
    </div>
  );
};

export default page;
