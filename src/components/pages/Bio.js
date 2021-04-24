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

export const Bio = () => {
  return (
    <div className="Bio">
      <h1>BIO</h1>
      <div className="Bio__description">
        *TODO* Arvinder Singh is an architectural designer, with a unique focus in
        Artificial Intelligence. He got his Bachelor's from the 
        Taubman College of Architecture at the University of Michigan, and since
        then has worked at Edge Design Associates, Ann Arbor.
        <br />
        <br />
        Brought up in a unique experimental city of Chandigarh, designed by
        the famous architect Le Corbusier, Arvinder's childood has revolved 
        around design and creativity — from his father's wood-shop, to his 
        mother's art studio.
        <br />
        <br />
        Throughout his education, Arvinder realized that the architect holds a great agency in shaping
        social and cultural dynamics. My passion for philosophy, world-politics,
        rhetoric, and architectural pedagogy critically engages me with the work
        I pursue. I consider myself an open-minded, cooperative, and a highly
        motivated individual.
        <br />
        <br />
        Click <a href="#">here</a> for a PDF version.
      </div>

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
