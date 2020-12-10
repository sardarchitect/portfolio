import React from "react";
import { Link } from "react-router-dom";

export const WorkItem = (props) => {
  return (
    <div className="work__item">
      <h2>{props.title}</h2>
      <div className="work__image"></div>
      <p className="work__date">{props.year}</p>
      <Link to='projects/1'>Link</Link>
    </div>
  );
};
