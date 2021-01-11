import React from "react";
import { Link } from "react-router-dom";

export const WorkItem = (props) => {
  let url = "projects/" + props.id;

  return (
    <Link to={'/'+url}>
      <div className="work__item">
        <img src={props.thumbnailSrc} />
        <p> {props.title}</p>
      </div>
    </Link>
  );
};