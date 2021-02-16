// MODULE IMPORTS
import React from "react";
import { Link, useParams } from "react-router-dom";
// STYLE IMPORT
import "./_workpage.scss";
// COMPONENT IMPORT
import { projects } from "../../data/projectList"

export const WorkPage = () => {
  let { id } = useParams();
  const project = projects.find((project) => project.projectId === id);
  console.log(project);

  return (
    <div className="work__page">
      <h1>{project.title}</h1>
      <h2>{project.year}</h2>

      <div className="work__page__content">
        <div className="work__images">
          {project.images.map((item) => <img src={item} className="temp_images" />)}
        </div>
        <div className="work__text">{

          project.text.map(para => (
            para.includes('Studio:') || para.includes('Site:') || para.includes('Team:') ? 
            (<p><b>{para}</b></p>) : (<p>{para}</p>)
          ))
        
        }</div>

      </div>

      <div className="back__button">
        <Link to='/#Work'>...Back to Projects</Link>
      </div>
    </div>
  );
};
