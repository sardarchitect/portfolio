import React, { useState } from "react";

export const ResumeItem = ({ title, role, location, date, description }) => {
  const [descriptionToggle, setDescriptionToggle] = useState(false);

  return (
    <div
      className="resume__item"
      onClick={() => setDescriptionToggle(!descriptionToggle)}
    >
      <h3>{title}</h3>
      <div className="resume__item__inner">
        <p>{role}</p>
        <p>
          {location} {date ? ' | '+date : null}
        </p>
        <ul
          className={
            descriptionToggle
              ? "resume__item__description resume__item__description__show"
              : "resume__item__description resume__item__description__hidden"
          }
        >
          {description == null
            ? null
            : description.map((item) => <li>{item}</li>)}
        </ul>
        {description == null ? null : (
          <div className="resume__item__description__toggle">
            <a>{descriptionToggle ? "...READ LESS" : "...READ MORE"}</a>
          </div>
        )}
      </div>
    </div>
  );
};
