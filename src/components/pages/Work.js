import React from "react";
import "./_work.scss";
import { WorkItem } from "./WorkItem";

export const Work = () => {
  return (
    <div id="work">
      <h1> SELECTED <br /> WORK </h1>
      <WorkItem />
      <WorkItem />
      <WorkItem />
      <WorkItem />
    </div>
  );
};
