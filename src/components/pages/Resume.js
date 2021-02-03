import React from "react";
import "./_resume.scss";

import { ResumeItem } from "./ResumeItem";
import { educationList, experienceList, affiliationsList, awardsList, skillsList } from "./ResumeList";

export const Resume = () => {
  return (
    <div className="resume" id="cv">
      <h1>CV</h1>
      <p>
        Arvinder Singh is an architectural designer, with a specialization in Artificial Intelligence, and Medium Design. 
        He graduated from the University of Michigan's Taubman College of Architecture (2019), and since then has been working
        at Edge Design Associates, Ann Arbor.
        <br/><br/>
        Arvinder focuses on.................
      </p>

      <div className="resume__section">
        <h2> EDUCATION </h2>
        
        {educationList.map((item) => {
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
 
        <div className="resume__section">
          <h2> TOOLSET </h2>
          <div className="resume__section__grid">

          
          {skillsList.map((item) => {
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
    </div>
  );
};
