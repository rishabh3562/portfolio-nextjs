// pages/index.js
"use client";
import ProjectCard from "@/components/v1/ProjectStrcuture";
import { oneStream, urldata } from "@/app/(v1)/data/project";
const onestream = () => {
  return (
    <div className="flex flex-col items-center">
      <ProjectCard project={oneStream} urlData={urldata.oneStream} />
    </div>
  );
};

export default onestream;
