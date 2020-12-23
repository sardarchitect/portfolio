import React, { useState } from "react";
import "../../../stylesheets/_work.scss";

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
      <h1 className="title_text">SELECTED</h1>
      <h1 className="title_text">WORK</h1>

      <div className="work__category">
        <a onClick={() => setSelectedCategory(architectureProjects)}>
          <p
            className={
              selectedCategory == architectureProjects ? "activeOption" : ""
            }
          >
            ARCHITECTURE
          </p>
        </a>
        <a onClick={() => setSelectedCategory(artProjects)}>
          <p className={selectedCategory == artProjects ? "activeOption" : ""}>
            ART
          </p>
        </a>
        <a onClick={() => setSelectedCategory(technologyProjects)}>
          <p
            className={
              selectedCategory == technologyProjects ? "activeOption" : ""
            }
          >
            TECHNOLOGY
          </p>
        </a>
      </div>

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
      </div>
    </div>
  );
};
