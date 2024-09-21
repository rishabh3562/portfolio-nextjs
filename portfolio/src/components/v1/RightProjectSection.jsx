"use client";
import React from 'react'
import Image from 'next/image';
import {FaGithub, FaLinkedin, FaTwitter,FaExternalLinkAlt} from 'react-icons/fa'
const ProjectCard = () => {
    return (<>

{/* wrapper */}
    <div className="flex justify-between 
    items-center gap-2 p-2 
    rounded-lg">

        <div className='text-textLightYellow'>
            CodeNote.ai
        </div>
        <div className="icons flex gap-2 items-center">
   <FaGithub className='hover:cursor-pointer text-white text-xl'/>
<FaExternalLinkAlt className='hover:cursor-pointer text-white text-xl'/>
   {/* <FaLinkedin className='text-white'/>

   <FaTwitter className='text-white'/> */}

       </div>
    


    </div>
    </>
    )
}
const Divider = () => {
    return (
        <div className='text-textLightYellow'>
            <hr className='border-textSecondary border-2 rounded-full'/>
        </div>
    )
}

const RightProjectSection = () => {


  return (<>
    <div className='text-textLightYellow'>
        My Projects

        <div 
        className='flex justify-center items-center'
        >
            image collage
        </div>
        <ProjectCard/>
        <Divider/>  
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        <ProjectCard/>
        
     
        </div>


  </>


  )
}

export default RightProjectSection