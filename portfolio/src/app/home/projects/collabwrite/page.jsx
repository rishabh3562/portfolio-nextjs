// pages/index.js
import React from 'react';
import ProjectCard from '@/components/v1/ProjectStrcuture';
import {CollabWrite,urldata} from '@/app/home/projects/data'
const collabwrite = () => {


  return (
    <div className="flex flex-col items-center">
      <ProjectCard project={CollabWrite} urlData={urldata.collabwrite} />
    </div>
  );
};

export default collabwrite;
