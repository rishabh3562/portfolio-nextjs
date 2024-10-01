// components/v1/BottomRightSection.js

import React from "react";

const BottomRightSection = () => (
  <div className="p-4">
    <h2 className="text-2xl font-bold mb-4">Skills</h2>
    <div className="flex flex-wrap gap-2">
      {["C", "C++", "Python", "HTML5", "CSS3", "JS", "TS", "React", "Node", "MongoDB", "Tailwind", "Firebase", "AWS", "Git", "Docker"].map(skill => (
        <span key={skill} className="bg-gray-700 rounded-full px-3 py-1 text-sm">
          {skill}
        </span>
      ))}
    </div>
  </div>
);

export default BottomRightSection;
