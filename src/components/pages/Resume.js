// MODULE IMPORTS
import React from "react";
// STYLES IMPORT
import "./_resume.scss";
// COMPONENT IMPORTS
import { ResumeItem } from "./ResumeItem";
// DATA IMPORTS
import {
  educationList,
  experienceList,
  affiliationsList,
  awardsSkillsList,
} from "../../data/ResumeList";

export const Resume = () => {
  return (
    <div className="resume" id="cv">
      <h1>BIO</h1>
      <div className="resume__description">
        Arvinder Singh is an architectural designer, with a unique focus in
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
      </div>

      <div className="resume__section">
        <h2> EDUCATION </h2>

        <div className="resume__section__list">
          {educationList.map((item) => {
            return (
              <ResumeItem
                title={item.title}
                location={item.location}
                date={item.date}
                role={item.role}
              />
            );
          })}
        </div>
      </div>

      <div className="resume__section">
        <h2> EXPERIENCE </h2>

        <div className="resume__section__list">
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
      </div>

      <div className="resume__section">
        <h2> AFFILIATIONS AND AWARDS </h2>
        <div className="resume__section__list">
          {affiliationsList.map((item) => {
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
      </div>

      <div className="resume__section">
        <h2> SKILLS </h2>
        <div className="resume__section__list">
          {awardsSkillsList.map((item) => {
            return (
              <ResumeItem
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
