import React from "react";
import "./_workpage.scss";

import { useParams } from "react-router-dom";

import { architectureProjects } from "./projectList";
import { artProjects } from "./projectList";
import { technologyProjects } from "./projectList";

export const WorkPage = () => {
  let { id } = useParams();
  const combinedProjects = architectureProjects
    .concat(artProjects)
    .concat(technologyProjects);
  const project = combinedProjects.find((project) => project.projectId === id);
  console.log(project);

  return (
    <div className="work__page">
      <h1>{project.title}</h1>
      <h2>{project.year}</h2>

      <div className="work__page__content">
        <div className="work__text">{project.text}</div>
        <div className="work__images">
          <div className="temp_images"></div>
          <div className="temp_images"></div>
          <div className="temp_images"></div>
          <div className="temp_images"></div>
        </div>
      </div>
      <div className="work__page__other__work"></div>
    </div>
  );
};
