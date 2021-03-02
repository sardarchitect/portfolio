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
                  {/* <img src={item.thumbnailSrc} /> */}
                  <p> {item.title}</p>
                  <p> {item.year} </p>
                </div>
              </Link>
            </div>
          );
        })}
    </div>
  );
};
