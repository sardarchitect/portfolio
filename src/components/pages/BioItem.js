// MODULE IMPORTS
import React from "react";

export const BioItem = ({ title, role, location, date, description }) => {
  return (
    <div className="Bio__item">
      <div className="Bio__item__header">
        <p>{title.toUpperCase()}</p>
      </div>
      <div className="Bio__item__inner">
        <p className="Bio__role">{role}</p>
        <p className="Bio__location">
          {location ? location + " | " : null} {date ? date : null}
        </p>
        <div className="Bio__item__description">
          {description === null
            ? null
            : description.map((item) => <p>{item}</p>)}
        </div>
      </div>
    </div>
  );
};
