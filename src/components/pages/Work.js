// MODULE IMPORTS
import React, { useState } from "react";
// STYLE IMPORTS
import "./_work.scss";
// ICONS IMPORTS
import { RiBuilding3Line } from "react-icons/ri";
import { GiPaintBrush, GiComputing } from "react-icons/gi";
import { WorkGrid } from "./WorkGrid";

export const Work = () => {
  const [selectedCategory, setSelectedCategory] = useState(
    "architectureProjects"
  );

  return (
    <div className="Work" id="Work">
      <h1>SELECTED WORK</h1>
      <h2>
        {selectedCategory == "architectureProjects"
          ? "ARCHITECTURE"
          : selectedCategory == "artProjects"
          ? "ART"
          : "TECHNOLOGY"}
      </h2>
      <div className="Work__category">
        <a>
          <RiBuilding3Line
            className={
              selectedCategory == "architectureProjects" ? "active" : null
            }
            onClick={() => setSelectedCategory("architectureProjects")}
          />
        </a>
        <a>
          <GiComputing
            className={
              selectedCategory == "technologyProjects" ? "active" : null
            }
            onClick={() => setSelectedCategory("technologyProjects")}
          />
        </a>
        <a>
          <GiPaintBrush
            className={selectedCategory == "artProjects" ? "active" : null}
            onClick={() => setSelectedCategory("artProjects")}
          />
        </a>
      </div>
      <WorkGrid selectedCategory={selectedCategory} />
    </div>
  );
};
