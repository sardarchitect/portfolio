// MODULE IMPORTS
import React, { useState } from "react";
import { Link } from "react-router-dom";
// COMPONENT IMPORTS
import { Glasses } from "../pages/Glasses";
// STYLE IMPORTS
import "./_nav.scss";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Nav">
      {/* MENU */}
      <div
        id="Nav__menu"
        className={menuOpen ? "Nav__menu__open" : "Nav__menu__close"}
      >
        <div className="Nav__menu__main">
          <h1 onClick={() => setMenuOpen(false)}>
            <Link to="/"> Home </Link>
          </h1>
          <h1 onClick={() => setMenuOpen(false)}>
            <Link to="/cv"> CV </Link>
          </h1>
          <h1 onClick={() => setMenuOpen(false)}>
            <Link to="/#work"> Work </Link>
          </h1>
          <h1 onClick={() => setMenuOpen(false)}>
            <Link to="/blog"> Blog </Link>
          </h1>
        </div>
        {menuOpen ? (
          <div className="Nav__menu__footer">
            <a
              target="_blank"
              href="https://www.linkedin.com/in/sardarchitect/"
            >
              LINKEDIN
            </a>
            <a target="_blank" href="https://www.instagram.com/sardarchitect/">
              INSTAGRAM
            </a>
            <a href="mailto: sardarchitect@gmail.com">EMAIL</a>
          </div>
        ) : null}
      </div>

      {/* ICON */}
        <div
          id="nav-icon4"
          className={menuOpen ? "open" : null}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
  );
};
