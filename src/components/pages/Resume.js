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
      <h1>CV</h1>
      <div className="resume__description">
        Arvinder Singh is an architectural designer, with a specialization in
        Artificial Intelligence, and Medium Design. He graduated from the
        University of Michigan's Taubman College of Architecture (2019), and
        since then has been working at Edge Design Associates, Ann Arbor.
        <br />
        <br />
        Raised in an artistic household, my childhood memories revolve around
        design and creativity — my father’s wood-shop, my mother’s painting
        studio, and my city’s unique architectural disposition. Throughout my
        education, I realized that the architect holds a great agency in shaping
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
        <h2> AFFILIATIONS </h2>
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
        <h2> AWARDS & SKILLS </h2>
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
