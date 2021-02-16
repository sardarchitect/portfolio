import React, { useState } from "react";

export const ResumeItem = ({ title, role, location, date, description }) => {
  return (
    <div className="resume__item">
      <div className="resume__item__header">
        <h3>{title.toUpperCase()}</h3>
      </div>
      <div className="resume__item__inner">
        <p className="resume__role">{role}</p>
        <p>
          {location ? location + " | " : null} {date ? date : null}
        </p>
        <div className="resume__item__description">
          {description == null
            ? null
            : description.map((item) => <p>{item}</p>)}
        </div>
      </div>
    </div>
  );
};
