// MODULE IMPORTS
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ParallaxLayer } from "react-spring/renderprops-addons";
// STYLE IMPORTS
import "./_work.scss";
// DATA IMPORTS
import { architectureProjects } from "./projectList";
import { artProjects } from "./projectList";
import { technologyProjects } from "./projectList";
// ICONS IMPORTS
import { RiBuilding3Line } from "react-icons/ri";
import { GiPaintBrush, GiComputing } from "react-icons/gi";
export const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    architectureProjects
  );

  return (
    <ParallaxLayer offset={1} speed={0.1}>
      <div className="Work" id="Work">
        <h1>WORK</h1>
        <h2>{selectedCategory==architectureProjects ? "ARCHITECTURE" : selectedCategory==artProjects ? "ART" : "TECHNOLOGY"}</h2>
        <div className="Work__category">
          <RiBuilding3Line
            className={
              selectedCategory == architectureProjects ? "active" : null
            }
            onClick={() => setSelectedCategory(architectureProjects)}
          />
          <GiPaintBrush
            className={selectedCategory == artProjects ? "active" : null}
            onClick={() => setSelectedCategory(artProjects)}
          />
          <GiComputing
            className={selectedCategory == technologyProjects ? "active" : null}
            onClick={() => setSelectedCategory(technologyProjects)}
          />
        </div>
        <div className="Work__grid">
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
    </ParallaxLayer>
  );
};

export const WorkItem = (props) => {
  let url = "projects/" + props.id;

  return (
    <Link to={"/" + url}>
      <div className="Work__item">
        <img src={props.thumbnailSrc} />
        <p> {props.title}</p>
        {/* <p> {props.year} </p> */}
      </div>
    </Link>
  );
};
