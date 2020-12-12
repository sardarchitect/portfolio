import React from "react";
import "./_nav.scss";
import { useLocation } from "react-router-dom";

export const Nav = () => {

  const location = useLocation();
  console.log(location.pathname);

  if (!location.pathname.includes("projects")) {
    return (
      <nav>
        <a href="#about">ABOUT</a>
        <a href="#work">SELECTED WORK</a>
        <a href="#contact">CONTACT</a>
      </nav>
    );
  }

  return (
    <nav>
      <a href="/">HOME</a>
      <a href="#work">SELECTED WORK</a>
      <a href="#contact">CONTACT</a>
    </nav>
  );
};
