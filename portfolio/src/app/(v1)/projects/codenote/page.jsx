// pages/index.js
import React from "react";
import ProjectCard from "@/components/v1/ProjectStrcuture";
import { CodeNote, urldata } from "@/app/(v1)/data/project";
const collabwrite = () => {
  return (
    <div className="flex flex-col items-center">
      <ProjectCard project={CodeNote} urlData={urldata.codeNote} />
    </div>
  );
};

export default collabwrite;
