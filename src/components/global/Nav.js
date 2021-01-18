import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./_nav.scss";

export const Nav = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Nav">
      <div
        id="Nav__menu"
        className={menuOpen ? "Nav__menu__open" : "Nav__menu__close"}
      >
        <div className="Nav__menu__main">
          <h1>
            <Link to="#"> About </Link>
          </h1>
          <h1>
            <Link to="#"> CV </Link>
          </h1>
          <h1>
            <Link to="#"> Work </Link>
          </h1>
          <h1>
            <Link to="#"> Contact </Link>
          </h1>
        </div>
        <div className="Nav__menu__footer">
          <h1>
            <Link to="#"> Instagram </Link>
          </h1>
          <h1>
            <Link to="#"> LinkedIn </Link>
          </h1>
        </div>
      </div>
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
