import React from "react";
import { Link, useLocation } from "react-router-dom";

import "../../stylesheets/_nav.scss";

export const Nav = () => {
  const location = useLocation();

  if (location.pathname.includes("cv")) {
    return (
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/blog">BLOG</Link>
        <a href="#contact">CONTACT</a>
      </nav>
    );
  }

  if (location.pathname.includes("projects")) {
    return (
      <nav>
        <Link to="/">HOME</Link>
        <a href="#work">OTHER WORK</a>
        <Link to="/cv">CV</Link>
        <a href="#contact">CONTACT</a>
      </nav>
    );
  }

  if (location.pathname.includes("blog")) {
    return (
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/cv">CV</Link>
        <a href="#contact">CONTACT</a>
      </nav>
    );
  }


  return (
    <nav>
      <a href="#work">WORK</a>
      <Link to="/cv">CV</Link>
      <Link to="/blog">BLOG</Link>
      <a href="#contact">CONTACT</a>
    </nav>
  );
};
