import React, { useState } from "react";
import "./_work.scss";
import { architectureProjects } from "./projectList";
import { artProjects } from "./projectList";
import { technologyProjects } from "./projectList";

import { WorkItem } from "./WorkItem";

export const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    architectureProjects
  );

  return (
    <div id="work">
      <h1>
        SELECTED <br /> WORK
      </h1>
      <div className="work__category">
        <a onClick={() => setSelectedCategory(architectureProjects)}>
          ARCHITECTURE
        </a>
        <a onClick={() => setSelectedCategory(artProjects)}>ART</a>
        <a onClick={() => setSelectedCategory(technologyProjects)}>
          TECHNOLOGY
        </a>
      </div>

      {selectedCategory.map((item) => {
        return (
          <WorkItem
            title={item.title}
            year={item.year}
            thumbnailSrc={item.thumbnailSrc}
          />
        );
      })}
    </div>
  );
};
