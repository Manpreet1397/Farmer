import React from 'react'
import ProjectsCard from "./ProjectsCard";

const Pricing = () => {
  return (
    <div>
       <div id="projects" className="mx-auto bg-black text-white flex flex-col justify-center gap-10 py-12 px-12 md:px-32 text-center md:text-left">
            <div className="flex flex-col gap-2 ">
               
                <p className="text-5xl font-bold">Pricing</p>
                <p className="text-base text-gray-400">Single payment plas to go unlimited are here.</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ProjectsCard image1="p1.png" image2="./pr11.webp" image3="./pr111.webp" title="" details="One Time Payment" />
                <ProjectsCard image1="p2.png" image2="./pr22.webp" image3="./pr222.webp" title="" details="One Time Payment" />
                
            </div>
        </div>
    
    </div>
  )
}

export default Pricing
