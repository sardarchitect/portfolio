// IMPORT MODULES
import React, { useEffect, useState } from "react";
import { ParallaxLayer } from "react-spring/renderprops-addons";
// IMPORT COMPONENTS
import { Glasses } from "./Glasses";
// IMPORT STYLES
import "./_about.scss";

export const About = () => {
  // TEXT ANIMATION
  const [textIdx, setTextIdx] = useState(0);
  const text = ["ARCHITECTURE", "ART", "TECHNOLOGY"];
  useEffect(() => {
    const interval = setInterval(() => {
      if (textIdx === 2) {
        setTextIdx(0);
      } else {
        setTextIdx(textIdx + 1);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [textIdx]);

  return (
    <div className="About">
      {/* TITLE */}
      <ParallaxLayer offset={0.35} speed={0} className="About">
        <div className="About__title">
          <h1>ARVINDER</h1>
          <h1>SINGH</h1>
          <h2>PORTFOLIO '21</h2>
        </div>
      </ParallaxLayer>
      {/* SUBTITLE */}
      <ParallaxLayer offset={0.25} speed={-0.75}>
        <div className="About__subtitle">
          <h2>{text[textIdx]}</h2>
        </div>
      </ParallaxLayer>
      {/* GRAPHIC */}
      {/* <ParallaxLayer
        offset={0}
        speed={0}
      ><Glasses /></ParallaxLayer> */}
    </div>
  );
};
