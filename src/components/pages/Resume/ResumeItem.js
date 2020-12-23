import React, { useState } from "react";

export const ResumeItem = ({ title, role, location, date, description }) => {
  
  const [descriptionToggle, setDescriptionToggle] = useState(false);
  
  return (
    <div className="resume__item">
      <h3>{title}</h3>
      <div className="resume__item__inner">
      <p>{role}</p>
      <p>
        {location} | {date}
      </p>
      <ul className={descriptionToggle ? "resume__description__list resume__description__list__show" : "resume__description__list resume__description__list__hidden"}>
        {description==null ? null : description.map(item => (<li>{item}</li>))}
      </ul>
      {
        description==null ? null : (<div className="resume__description__toggle" onClick={()=> setDescriptionToggle(!descriptionToggle)}><a>^</a></div>)
      }

      </div>
    </div>
  );
};
