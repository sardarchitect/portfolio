// MODULE IMPORTS
import React, { useState } from "react";
import { Link } from "react-router-dom";
// STYLE IMPORTS
import "./_nav.scss";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = (e) => {
    if (menuOpen) {
    document.body.classList.remove('noscroll')
    setMenuOpen(false)
    } else {
      document.body.classList.add('noscroll')
      setMenuOpen(true)
    }
  }

  return (
    <div className="Nav">
        <div
          id="Nav__menu"
          className={menuOpen ? "Nav__menu__open" : "Nav__menu__close"}
        >
          <div className="Nav__menu__main">
            <h1 onClick={(e) => toggleMenu(e)}>
              <Link to="/"> Home </Link>
            </h1>
            <h1 onClick={(e) => toggleMenu(e)}>
              <Link to="/cv"> CV </Link>
            </h1>
            <h1 onClick={(e) => toggleMenu(e)}>
              <Link to="/#work"> Work </Link>
            </h1>
            <h1 onClick={(e) => toggleMenu(e)}>
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
              <a
                target="_blank"
                href="https://www.instagram.com/sardarchitect/"
              >
                INSTAGRAM
              </a>
              <a href="mailto: sardarchitect@gmail.com">EMAIL</a>
            </div>
          ) : null}
      </div>
      <div
        id="nav-icon4"
        className={menuOpen ? "open" : null}
        onClick={(e) => toggleMenu(e)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};
