import React, { useState } from "react";
import { Link } from "react-router-dom";
import './_nav.scss';

export const Nav = () => {

const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="Nav">
      <div className="Nav__icons">
        <img id='logo' src="\sardarchitect_logo-horizontal.png" />
        <div id="nav-icon4" className={menuOpen ? 'open' : null} onClick={()=>setMenuOpen(!menuOpen)}><span></span><span></span><span></span></div>
      </div>
      
      <div id='Nav__menu' className={menuOpen ? "Nav__menu__open" : "Nav__menu__close"}>
        <ul>
        <div className="Nav__menu__main">
          <li><Link to='#'> About </Link> </li>
          <li><Link to='#'> CV </Link></li>
          <li><Link to='#'> Work </Link></li>
          <li><Link to='#'> Contact </Link></li>
          </div>
          <div className="Nav__menu__footer">
            <li><Link to='#'> Instagram </Link></li>
            <li><Link to='#'> LinkedIn </Link></li>
          </div>
        </ul>
      </div>
    
    </div>
  );
};
