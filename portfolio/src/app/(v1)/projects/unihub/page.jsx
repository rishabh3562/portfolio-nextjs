// pages/index.js

import React from "react";
import ProjectCard from "@/components/v1/ProjectStrcuture";
import { uniHub, urldata } from "@/app/(v1)/data/project";
const unihub = () => {
  return (
    <div className="flex flex-col items-center">
      <ProjectCard project={uniHub} urlData={urldata.uniHub} />
    </div>
  );
};

export default unihub;
