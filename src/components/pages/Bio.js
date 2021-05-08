// MODULE IMPORTS
import React from "react";
// STYLES IMPORT
import "./_Bio.scss";
// COMPONENT IMPORTS
import { BioItem } from "./BioItem";
// DATA IMPORTS
import {
  educationList,
  experienceList,
  affiliationsList,
  awardsSkillsList,
} from "../../data/ResumeList";
import {  IoArrowUpCircle } from "react-icons/io5";
import { HashLink } from "react-router-hash-link";

export const Bio = () => {
  return (
    <div className="Bio" id="Bio">
      <h1>BIO</h1>
      <div className="ScrollToTop__Bio">
        <HashLink smooth to="/bio/#Bio">
          <IoArrowUpCircle size="50px" />
        </HashLink>
      </div>
      <div className="Bio__description__wrapper">
      <div className="Bio__img">
        <img alt="profile" src='/singh.jpeg'/>
      </div>
      <div className="Bio__description">
        Arvinder Singh is an architectural designer, with a unique focus in
        Artificial Intelligence. He recieved his undergraduate in architecture from the 
        Taubman College of Architecture at the University of Michigan, and is planning to 
        pursue his Masters in Data Science.
        <br />
        <br />
        Since graduating, Arvinder worked at a local architecture firm in Ann Arbor, where
        he had the opportunity to work on multiple large-scale projects, such as the new urban 
        campus building of Baker College at Royal Oak, Michigan. During his time at the firm, 
        Arvinder helped automatize redundant tasks within Revit and AutoCAD.
        <br />
        <br />
        Brought up in a unique experimental city of Chandigarh, designed by
        the famous modernist architect Le Corbusier, Arvinder's childood has revolved 
        around design and creativity — from his father's wood-shop, to his mother's art studio.
        <br />
        <br />
        Throughout his education, Arvinder realized that the architect holds a great agency in shaping
        social and cultural dynamics. His passion for philosophy, world-politics,
        rhetoric, and architectural pedagogy critically engages him with the work
        he pursues. Arvinder considers himself as an open-minded, cooperative, 
        and a highly motivated individual.
        <br />
        <br />
        Click <a href="/">here</a> for a PDF version of Arvinder's resume.
      </div>
      </div>

      {/* <div className="section-breaker"/> */}

      <div className="Bio__section">
        <h2> EDUCATION </h2>

        <div className="Bio__section__list">
          {educationList.map((item) => {
            return (
              <BioItem
                title={item.title}
                location={item.location}
                date={item.date}
                role={item.role}
              />
            );
          })}
        </div>
      </div>

      <div className="Bio__section">
        <h2> EXPERIENCE </h2>

        <div className="Bio__section__list">
          {experienceList.map((item) => {
            return (
              <BioItem
                title={item.title}
                role={item.role}
                location={item.location}
                date={item.date}
                description={item.description}
              />
            );
          })}
        </div>
      </div>

      <div className="Bio__section">
        <h2> AFFILIATIONS AND AWARDS </h2>
        <div className="Bio__section__list">
          {affiliationsList.map((item) => {
            return (
              <BioItem
                title={item.title}
                role={item.role}
                location={item.location}
                date={item.date}
              />
            );
          })}
        </div>
      </div>

      <div className="Bio__section">
        <h2> SKILLS </h2>
        <div className="Bio__section__list">
          {awardsSkillsList.map((item) => {
            return (
              <BioItem
                title={item.title}
                role={item.role}
                date={item.date}
                description={item.description}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};
