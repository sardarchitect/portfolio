// IMPORT MODULES
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// IMPORT COMPONENTS
// IMPORT STYLES
import "./_about.scss";

export const About = () => {
  return (
    <div className="About">
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
      </div>
      <div className="About__description">
        <p>
          Artificial Intelligence and Architecture are seeing an interplay akin
          to the advancements of computer modeling in the 80s. We are currently
          at an early stage but this time, the technology is moving at
          neck-breaking speeds. AI's role in architecture is inevitable, and my
          current research deals with how to make sure architects are the ones
          steering this revolution.
        </p>
        <p>
          Please feel free to check out my <Link to="/cv"> CV </Link> to know
          more.
        </p>
      </div>
    </div>
  );
};
