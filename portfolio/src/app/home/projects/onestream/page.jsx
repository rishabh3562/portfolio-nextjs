// pages/index.js
"use client";
import ProjectCard from '@/components/v1/ProjectStrcuture';
import {oneStream} from '@/app/home/projects/data'
const onestream = () => {



  return (
    <div className="flex flex-col items-center">
      <ProjectCard project={oneStream} />
    </div>
  );
};

export default onestream;
