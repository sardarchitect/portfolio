// MODULE IMPORTS
import React from "react";
import { useParams } from "react-router-dom";
// STYLE IMPORT
import "./_workpage.scss";
// COMPONENT IMPORT
import { projects } from "../../data/projectList";
import { HashLink } from "react-router-hash-link";
import { IoArrowBackCircle } from "react-icons/io5";
import ImageZoom from "react-medium-image-zoom";
import ReactPlayer from "react-player";

export const WorkPage = () => {
  let { id } = useParams();
  const project = projects.find((project) => project.projectId === id);
  console.log(project);

  // Usage
  return (
    <div className="workpage">
      <div className="workpage__text">
        <div className="workpage__text__heading">
          <h2>{project.title.toUpperCase()}</h2>
          <h2>{project.year}</h2>
        </div>
        <div className="workpage__text__metadata">
          {project.studio ? (
            <p>STUDIO: {project.studio.toUpperCase()}</p>
          ) : null}
          {project.role ? <p>ROLE: {project.role.toUpperCase()}</p> : null}
          {project.site ? <p>SITE: {project.site.toUpperCase()}</p> : null}
          {project.team ? <p>TEAM: {project.team.toUpperCase()}</p> : null}
          {project.award ? <p>AWARD: {project.award.toUpperCase()}</p> : null}
        </div>
        <div className="section-breaker" />
        {project.text.map((para) => (
          <div
            dangerouslySetInnerHTML={{ __html: para }}
            className="workpage__text__content"
          />
        ))}
      </div>
      <div className="workpage__images">
        {project.images.map((image) => (
          <div className="workpage__images__item">
            {image.src == null ? (<></>) : (
            image.src.includes(".mp4") ? (
              <div className="player-wrapper">
                <ReactPlayer
                  className="react-player"
                  width="100%"
                  height="100%"
                  url={image.src}
                  muted="True"
                  playing="True"
                  loop="True"
                />
              </div>
            ) : image.src.includes("https") ? (
              <div className="player-wrapper-youtube">
                <ReactPlayer
                  className="react-player-youtube"
                  url={image.src}
                  muted="True"
                  playing="True"
                  loop="True"
                  width="100%"
                  height="100%"
                />
              </div>
            ) : (
              <ImageZoom
                image={{
                  src: image.src,
                  alt: image.caption,
                  className: "img",
                }}
                zoomImage={{
                  src: image.src,
                  alt: image.caption,
                }}
                zoomMargin={10}
              />
            ))}

            <p
            dangerouslySetInnerHTML={{ __html: image.caption }}
            className="workpage__text__content"
          />
          </div>
        ))}
      </div>
      <div className="workpage__back">
        <HashLink smooth to="/#Work">
          <IoArrowBackCircle />
        </HashLink>
      </div>
    </div>
  );
};
