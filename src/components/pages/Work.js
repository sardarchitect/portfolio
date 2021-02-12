// MODULE IMPORTS
import React, { useState } from "react";
import { Link } from "react-router-dom";
// STYLE IMPORTS
import "./_work.scss";
// DATA IMPORTS
import { architectureProjects } from "../../data/projectList";
import { artProjects } from "../../data/projectList"
import { technologyProjects } from "../../data/projectList"
// ICONS IMPORTS
import { RiBuilding3Line } from "react-icons/ri";
import { GiPaintBrush, GiComputing } from "react-icons/gi";
export const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    architectureProjects
  );

  return (
      <div className="Work" id="Work">
        <h1>WORK</h1>
        <h2>{selectedCategory==architectureProjects ? "ARCHITECTURE" : selectedCategory==artProjects ? "ART" : "TECHNOLOGY"}</h2>
        <div className="Work__category">
          <a><RiBuilding3Line
            className={
              selectedCategory == architectureProjects ? "active" : null
            }
            onClick={() => setSelectedCategory(architectureProjects)}
          /></a>
          <a><GiPaintBrush
            className={selectedCategory == artProjects ? "active" : null}
            onClick={() => setSelectedCategory(artProjects)}
          /></a>
          <a><GiComputing
            className={selectedCategory == technologyProjects ? "active" : null}
            onClick={() => setSelectedCategory(technologyProjects)}
          /></a>
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
  );
};

export const WorkItem = (props) => {
  let url = "projects/" + props.id;

  return (
    <Link to={"/" + url}>
      <div className="Work__item">
        <img src={props.thumbnailSrc} />
        <p> {props.title}</p>
        <p> {props.year} </p>
      </div>
    </Link>
  );
};
