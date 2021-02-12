// IMPORT MODULES
import React, { useEffect, useState } from "react";
import { Glasses } from "./Glasses";
// IMPORT COMPONENTS
// IMPORT STYLES
import "./_about.scss";

export const About = () => {
  // TEXT ANIMATION
  // const [textIdx, setTextIdx] = useState(0);
  // const text = ["ARCHITECTURE", "ART", "TECHNOLOGY"];
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     if (textIdx === 2) {
  //       setTextIdx(0);
  //     } else {
  //       setTextIdx(textIdx + 1);
  //     }
  //   }, 1500);
  //   return () => clearInterval(interval);
  // }, [textIdx]);

  return (
    <div className="About">
      {/* GRAPHIC */}
      {/* TITLE */}
      <div className="About__title">
        <h1>ARCHITECTURE</h1>
        <h1>+</h1>
        <h1>ARTIFICIAL</h1>
        <h1>INTELLIGENCE</h1>
      </div>
      {/* SUBTITLE */}
      <div className="About__subtitle">
        <h2>PORTFOLIO OF ARVINDER SINGH</h2>
        <h2>2021</h2>
        {/* <h2>{text[textIdx]}</h2> */}
      </div>
      <Glasses />
      </div>
  );
};
