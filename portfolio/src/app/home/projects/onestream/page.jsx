// pages/index.js
import React from 'react';
import ProjectCard from '@/components/v1/ProjectStrcuture';
import {oneStream} from '@/app/home/projects/_data'
const onestream = () => {



  return (
    <div className="flex flex-col items-center">
      <ProjectCard project={oneStream} />
    </div>
  );
};

export default onestream;
