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
        {selectedCategory === "architectureProjects"
          ? "ARCHITECTURE"
          : selectedCategory === "artProjects"
          ? "ART"
          : "TECHNOLOGY"}
      </h2>
      <div className="Work__category">
        <button>
          <RiBuilding3Line
            className={
              selectedCategory === "architectureProjects" ? "active" : null
            }
            onClick={() => setSelectedCategory("architectureProjects")}
          />
        </button>
        <button>
          <GiComputing
            className={
              selectedCategory === "technologyProjects" ? "active" : null
            }
            onClick={() => setSelectedCategory("technologyProjects")}
          />
        </button>
        <button>
          <GiPaintBrush
            className={selectedCategory === "artProjects" ? "active" : null}
            onClick={() => setSelectedCategory("artProjects")}
          />
        </button>
      </div>
      <WorkGrid selectedCategory={selectedCategory} />
    </div>
  );
};
