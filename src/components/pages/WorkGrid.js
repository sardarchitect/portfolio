import { logDOM } from "@testing-library/react";
import React from "react";
import "./_workgrid.scss";
import { Link } from "react-router-dom";
import { projects } from "../../data/projectList";

export const WorkGrid = ({ selectedCategory }) => {
  return (
    <div className="Work__grid">
      {console.log(projects.filter((i) => i.category == selectedCategory))}
      {projects
        .filter((i) => i.category == selectedCategory)
        .map((item) => {
          let url = "projects/" + item.id;
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
