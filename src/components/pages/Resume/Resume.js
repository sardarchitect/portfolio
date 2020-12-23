import React from "react";
import "../../../stylesheets/_resume.scss";
import { ResumeItem } from "./ResumeItem";
import { experienceList, affilationsList, awardsList } from "./ResumeList";

export const Resume = () => {
  return (
    <div className="resume" id="cv">
      <h1>BIO</h1>
      <p>
        Raised in an artistic household, my childhood memories revolve around
        design and creativity — my father’s wood-shop, my mother’s painting
        studio, and my city’s unique architectural disposition.
      </p>
      <p>
        Throughout my education, I realized that the architect holds a great
        agency in shaping social and cultural dynamics. My passion for
        philosophy, world-politics, rhetoric, and architectural pedagogy
        critically engages me with the work I pursue. I consider myself an
        open-minded, cooperative, and a highly motivated individual.
      </p>

      <div className="resume__section">
        <h2> EDUCATION </h2>

        <div className="resume__item">
          <h3>Bachelor of Science, Architecture</h3>
          <p>Taubman College - University of Michigan</p>
          <p>Ann Arbor MI | 2019</p>
        </div>

        <div className="resume__item">
          <h3>Associate of Arts</h3>
          <p>Grand Rapids Community College</p>
          <p>Grand Rapids MI | 2017</p>
        </div>
      </div>

      <div className="resume__section">
        <h2> EXPERIENCE </h2>

        {experienceList.map((item) => {
          return (
            <ResumeItem
              title={item.title}
              role={item.role}
              location={item.location}
              date={item.date}
              description={item.description}
            />
          );
        })}
      </div>

      <div className="resume__section__grid">
        <div className="resume__section">
          <h2> AFFILIATIONS </h2>
          {affilationsList.map((item) => {
            return (
              <ResumeItem
                title={item.title}
                role={item.role}
                location={item.location}
                date={item.date}
              />
            );
          })}
        </div>

        <div className="resume__section">
          <h2> AWARDS </h2>
          {awardsList.map((item) => {
            return (
              <ResumeItem
                title={item.title}
                role={item.role}
                date={item.date}
              />
            );
          })}
        </div>
      </div>

      <div className="resume__section__grid">
        <div className="resume__section">
          <h2> LANGUAGES </h2>
          <div className="resume__item">
            <h3>Proficient </h3>
            <p> English</p>
            <p> Hindi</p>
            <p> Punjabi</p>
          </div>
          <div className="resume__item">
            <h3>Elementary </h3>
            <p> French</p>
          </div>
        </div>

        <div className="resume__section">
          <h2> SOFTWARE </h2>
          <div className="resume__item">
            <h3>Proficient</h3>
            <p>
              Rhinocerous3D, AutoCAD, SketchUp, Photoshop, Illustrator,
              InDesign, Excel, Word.
            </p>

            <h3>Intermediate</h3>
            <p>Revit, Unreal Engine 4, After Effects, Premiere, ArcGIS Pro. </p>

            <h3>Starting-out</h3>
            <p>Grasshopper, C++, HTML, CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};
