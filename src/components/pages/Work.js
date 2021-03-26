// MODULE IMPORTS
import React, { useState } from "react";
// STYLE IMPORTS
import "./_work.scss";
// ICONS IMPORTS
import { RiBuilding3Line } from "react-icons/ri";
import { GiComputing } from "react-icons/gi";
import { BiPencil } from "react-icons/bi";
import { WorkGrid } from "./WorkGrid";

export const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "architectureProjects"
  );

  return (
    <div className="Work" id="work">
      <h1>SELECTED WORK</h1>
      <h2>
        {selectedCategory === "architectureProjects"
          ? "ARCHITECTURE"
          : selectedCategory === "artProjects"
          ? "ART"
          : "TECHNOLOGY"}
      </h2>
      <div className="Work__category">
        <div>
          <RiBuilding3Line
            className={
              selectedCategory === "architectureProjects" ? "active" : null
            }
            onClick={() => setSelectedCategory("architectureProjects")}
          />
        </div>
        <div>
          <GiComputing
            className={
              selectedCategory === "technologyProjects" ? "active" : null
            }
            onClick={() => setSelectedCategory("technologyProjects")}
          />
        </div>
        <div>
          <BiPencil
            className={selectedCategory === "artProjects" ? "active" : null}
            onClick={() => setSelectedCategory("artProjects")}
          />
        </div>
      </div>
      <WorkGrid selectedCategory={selectedCategory} />
    </div>
  );
};
