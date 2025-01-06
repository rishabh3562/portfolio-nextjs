"use client"
import ProjectCard from "@/components/v1/ProjectCard";
import { uniHub, oneStream,CollabWrite, CodeNote } from "@/app/(v1)/data/project";
import Mylayout from "@/components/v1/Mylayout";

import "@/app/(v1)/style.css";
import collabwrite from "./codenote/page";
const ProjectsPage = () => {
  const projects = [uniHub, oneStream, CollabWrite,CodeNote]; // Array of project objects

  return (
    <>
      <Mylayout type="projects">
        <div className="bg-darkDark">
          <div className="container mx-auto p-6 grid grid-cols-1 lg:grid-cols-2 gap-8 ">
            {projects.map((project, idx) => (
              <ProjectCard key={idx} project={project} />
            ))}
          </div>
        </div>
      </Mylayout>
    </>
  );
};

export default ProjectsPage;

// import React from "react";

// const UniHubCard = ({ project }) => {
//   return (
//     <div className="bg-white shadow-lg rounded-lg overflow-hidden">
//       {/* Header with the title and main image */}
//       <div className="relative">
//         <img
//           src={project.mainUrl || "default-image-url"}
//           alt={project.title}
//           className="w-full h-64 object-cover"
//         />
//         <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black to-transparent w-full">
//           <h2 className="text-white text-3xl font-semibold">{project.title}</h2>
//         </div>
//       </div>

//       {/* Card body with details */}
//       <div className="p-6">
//         <p className="text-gray-700 text-lg mb-4">{project.introduction}</p>
//         <p className="text-gray-600 text-sm mb-4">{project.description}</p>

//         {/* Tags */}
//         <div className="flex flex-wrap mb-4">
//           {project.tags.map((tag, idx) => (
//             <span
//               key={idx}
//               className="text-sm text-white bg-blue-500 rounded-full px-3 py-1 mr-2 mb-2"
//             >
//               {tag}
//             </span>
//           ))}
//         </div>

//         {/* Features */}
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-2">Key Features</h3>
//           {project.features.map((feature, idx) => (
//             <div key={idx} className="mb-3">
//               <h4 className="font-semibold text-lg">{feature.title}</h4>
//               <p className="text-gray-600">{feature.description}</p>
//             </div>
//           ))}
//         </div>

//         {/* Tech Stack */}
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-2">Tech Stack</h3>
//           <ul className="list-disc pl-5">
//             {project.techStack.map((tech, idx) => (
//               <li key={idx} className="text-gray-600">
//                 <a
//                   href={tech.link}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="text-blue-500 hover:underline"
//                 >
//                   {tech.name}: {tech.description}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Installation steps */}
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-2">Installation Steps</h3>
//           <ol className="list-decimal pl-5">
//             {project.installation.map((step, idx) => (
//               <li key={idx} className="text-gray-600">
//                 {step.step}: {step.description}
//               </li>
//             ))}
//           </ol>
//         </div>

//         {/* Action buttons */}
//         <div className="flex justify-between items-center">
//           {project.websiteLink && (
//             <a
//               href={project.websiteLink}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-blue-500 text-white px-6 py-2 rounded-lg text-sm hover:bg-blue-600 transition"
//             >
//               Visit Website
//             </a>
//           )}
//           {project.githubRepo && (
//             <a
//               href={project.githubRepo}
//               target="_blank"
//               rel="noopener noreferrer"
//               className="bg-gray-800 text-white px-6 py-2 rounded-lg text-sm hover:bg-gray-700 transition"
//             >
//               View on GitHub
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default function UniHubDisplay() {
//   const uniHubData = {
//     mainUrl: "your-image-url",
//     title: "UniHub",
//     introduction:
//       "UniHub is a comprehensive college platform designed to enhance the student experience...",
//     description: "UniHub is a one-stop solution for college students...",
//     tags: [
//       "UniHub",
//       "React.js",
//       "DaisyUI",
//       "Firebase",
//       "React Query",
//       "Tailwind CSS",
//     ],
//     techStack: [
//       {
//         name: "React.js",
//         link: "https://reactjs.org/",
//         description: "A JavaScript library for building user interfaces.",
//       },
//       {
//         name: "DaisyUI",
//         link: "https://daisyui.com/",
//         description: "A component library for Tailwind CSS.",
//       },
//       {
//         name: "Firebase",
//         link: "https://firebase.google.com/",
//         description: "A platform for building web and mobile applications.",
//       },
//       {
//         name: "React Query",
//         link: "https://react-query.tanstack.com/",
//         description:
//           "A library for managing server state in React applications.",
//       },
//       {
//         name: "Tailwind CSS",
//         link: "https://tailwindcss.com/",
//         description: "A utility-first CSS framework for rapid UI development.",
//       },
//     ],
//     features: [
//       {
//         title: "Internship Opportunities",
//         description:
//           "Explore a range of internship opportunities tailored to your skill set and interests.",
//       },
//       {
//         title: "Alumni Connections",
//         description:
//           "Connect with alumni from your college for guidance, mentorship, and networking.",
//       },
//       {
//         title: "Academic Tests",
//         description:
//           "Access a wide array of academic tests and resources to help you excel in your studies.",
//       },
//       {
//         title: "Social Connections",
//         description:
//           "Build friendships and connect with fellow students through interactive features.",
//       },
//       {
//         title: "User-Friendly Interface",
//         description:
//           "Navigate effortlessly through a clean and intuitive interface designed for students.",
//       },
//     ],
//     installation: [
//       {
//         step: "Clone Repository",
//         description: "Clone the repository from GitHub to your local machine.",
//       },
//       {
//         step: "Install Dependencies",
//         description: "Run npm install to install required packages.",
//       },
//       {
//         step: "Firebase Configuration",
//         description:
//           "Set up Firebase and configure necessary settings for the app.",
//       },
//       {
//         step: "Environment Variables",
//         description:
//           "Add required environment variables for Firebase and other services.",
//       },
//       {
//         step: "Launch Application",
//         description:
//           "Start the application with npm start to view it in your browser.",
//       },
//     ],
//     websiteLink: "https://uniHub.com",
//     githubRepo: "https://github.com/your-repo",
//   };

//   return (
//     <div className="max-w-4xl mx-auto mt-10">
//       <UniHubCard project={uniHubData} />
//     </div>
//   );
// }
