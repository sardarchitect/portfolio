// MODULE IMPORTS
import React from "react";
// import { useLocation } from "react-router";
// COMPONENT IMPORTS
// STYLE IMPORTS
import "./_Nav.scss";

export const Nav = () => {
  // const location = useLocation();

  return (
    <nav>
      <div className="nav__header">
        <a className="nav_title" target="_blank" rel="noreferrer" href="/singh_resume_21.pdf">
          RÉSUMÉ
        </a>
      </div>
    </nav>
  );
};
