// MODULE IMPORTS
import React from "react";
import { useParams } from "react-router-dom";
// STYLE IMPORT
import "./_Workpage.scss";
// COMPONENT IMPORT
import { projects } from "../../data/projectList";
import { HashLink } from "react-router-hash-link";
import { IoArrowBackCircle } from "react-icons/io5";

export const WorkPage = () => {
  let { id } = useParams();
  const project = projects.find((project) => project.projectId === id);
  console.log(project);

  return (
    <div className="workpage">
      <div className="workpage__images">
        {project.images.map((image) => (
          <div className="workpage__images__item">
            <img src={image.src} alt={image.caption} />
            <p>{image.caption}</p>
          </div>
        ))}
      </div>

      <div className="workpage__text">
        <h2>
          {project.title} | {project.year}
        </h2>

        <div className="workpage__text__metadata">
          {project.studio ? <p>Studio: {project.studio}</p> : null}
          {project.site ? <p>Site: {project.site}</p> : null}
          {project.team ? <p>Team: {project.team}</p> : null}
          {project.award ? <p>Award: {project.award}</p> : null}
        </div>
        {project.text.map((para) => (
          <p className="workpage__text__content">{para}</p>
        ))}
      </div>

      <div className="workpage__back">
        <HashLink smooth to="/#Work">
          <IoArrowBackCircle size="50px" />
        </HashLink>
      </div>
    </div>
  );
};

/*
category
projectId
title
year
-studio
-site
-team
-award
text
images
thumbnailSrc
*/
