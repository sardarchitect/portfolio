// IMPORT MODULES
import React from "react";
import { Link } from "react-router-dom";
// IMPORT COMPONENTS
// IMPORT DATA
import { projects } from "../../data/projectList";
// IMPORT STYLES
import "./_workgrid.scss";

export const WorkGrid = ({ selectedCategory }) => {
  return (
    <div className="Work__grid">
      {console.log(projects.filter((i) => i.category === selectedCategory))}
      {projects
        .filter((i) => i.category === selectedCategory)
        .map((item) => {
          let url = "projects/" + item.projectId;
          return (
            <div>
              <Link to={"/" + url}>
                <div className="Work__item">
                  <img src={item.thumbnailSrc} />
                  <div className="Work__item__description">
                    <p> {item.title.toUpperCase()}</p>
                    <p> {item.year} </p>
                  </div>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};
