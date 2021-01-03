import React from "react";
import "../../stylesheets/_nav.scss";
import { useLocation } from "react-router-dom";

export const Nav = () => {
  const location = useLocation();
  console.log(location.pathname);

  if (location.pathname.includes("cv")) {
    return (
      <nav>
        <a href="/">HOME</a>
        <a href="#cv">CV</a>
        <a href="/blog">BLOG</a>
        <a href="#contact">CONTACT</a>
      </nav>
    );
  }

  if (location.pathname.includes("projects")) {
    return (
      <nav>
        <a href="/">HOME</a>
        <a href="#work">SELECTED WORK</a>
        <a href="/blog">BLOG</a>
        <a href="#contact">CONTACT</a>
      </nav>
    );
  }

  if (location.pathname.includes("blog")) {
    return (
      <nav>
        <a href="/">HOME</a>
        <a href="/#work">SELECTED WORK</a>
        <a href="/cv">CV</a>
        <a href="#contact">CONTACT</a>
      </nav>
    );
  }


  return (
    <nav>
      <a href="#work">WORK</a>
      <a href="/cv">CV</a>
      <a href="/blog">BLOG</a>
      <a href="#contact">CONTACT</a>
    </nav>
  );
};
