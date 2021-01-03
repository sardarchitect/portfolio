import React from "react";
import "../../stylesheets/_nav.scss";
import { Link, useLocation } from "react-router-dom";

export const Nav = () => {
  const location = useLocation();
  console.log(location.pathname);

  if (location.pathname.includes("cv")) {
    return (
      <nav>
        <Link to="/">HOME</Link>
        <a href="#cv">CV</a>
        <Link to="/blog">BLOG</Link>
        <a href="#contact">CONTACT</a>
      </nav>
    );
  }

  if (location.pathname.includes("projects")) {
    return (
      <nav>
        <Link to="/">HOME</Link>
        <a href="#work">SELECTED WORK</a>
        <Link to="/blog">BLOG</Link>
        <a href="#contact">CONTACT</a>
      </nav>
    );
  }

  if (location.pathname.includes("blog")) {
    return (
      <nav>
        <Link to="/">HOME</Link>
        <Link to="/#work">SELECTED WORK</Link>
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
