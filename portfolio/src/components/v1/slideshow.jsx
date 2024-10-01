"use client";
import { useState, useEffect } from 'react';
import Image from 'next/image';

const projects = [
  {
    title: 'E-Commerce Platform',
    imgSrc: '/projects/ecommerce.png', // Replace with your actual image path
  },
  {
    title: 'Portfolio Website',
    imgSrc: '/projects/portfolio.png',
  },
  {
    title: 'Cloud Dashboard',
    imgSrc: '/projects/cloud-dashboard.png',
  },
];

const Slideshow = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 3000); // Change every 3 seconds
    return () => clearInterval(intervalId); // Clean up on unmount
  }, []);

  return (
    <div className="slideshow-container relative w-full h-[300px] md:h-[400px] overflow-hidden rounded-lg">
      {projects.map((project, index) => (
        <div
          key={index}
          className={`absolute w-full h-full transition-opacity duration-1000 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Image
            src={project.imgSrc}
            alt={project.title}
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
          <div className="absolute bottom-4 left-4 bg-black/70 text-white p-2 rounded-md">
            {project.title}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Slideshow;
