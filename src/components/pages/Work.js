import React, { useState } from "react";
import "./_work.scss";

import { architectureProjects } from "./projectList";
import { artProjects } from "./projectList";
import { technologyProjects } from "./projectList";
import { WorkItem } from "./WorkItem";
// import "./Demo";


import { ParallaxLayer } from "react-spring/renderprops-addons";


export const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState(architectureProjects);

  return (
    <ParallaxLayer offset={1} speed={0.1}>
    <div className='Work' id='Work'>
      <h1>WORK</h1>
      <div className="work__category">
      </div>
{/* 

      <div className="work__grid">
        {selectedCategory.map((item) => {
          return (
            <WorkItem
              id={item.projectId}
              title={item.title}
              year={item.year}
              thumbnailSrc={item.thumbnailSrc}
            />
          );
        })}
      </div> */}
    </div>
    </ParallaxLayer>
  );
};
