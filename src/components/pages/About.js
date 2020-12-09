import React, { useEffect, useState } from "react";
import "./_about.scss";

export const About = () => {

  const [textIdx, setTextIdx] = useState(0);
  const text = ["ART", "ARCHITECTURE", "TECHNOLOGY"];
  const [showMore, setShowMore] = useState(false);

  const about__description = showMore ? "about__description__show" : "about__description__hide";

  useEffect(() => {
    const interval = setInterval(() => {
      console.log(textIdx);
      if (textIdx === 2) {
        setTextIdx(0);
      } else {
        setTextIdx(textIdx + 1);
      }
    }, 1500);
    return () => clearInterval(interval);
  }, [textIdx]);

  return (
    <div className="about">
      <div className="about__intro">
        <div className="about__intro__title">
          <h1>ARVINDER</h1>
          <h1>SINGH</h1>
        </div>
        <div className="about__intro__subtitle">{text[textIdx]}</div>
        
        <div className={about__description}>
        <p>
          RAISED IN AN ARTISTIC HOUSEHOLD, MY CHILDHOOD MEMORIES REVOLVE AROUND
          DESIGN AND CREATIVITY — MY FATHER’S WOOD-SHOP, MY MOTHER’S PAINTING
          STUDIO, AND MY CITY’S UNIQUE ARCHITECTURAL DISPOSITION.
        </p>
        <p>
          THROUGHOUT MY EDUCATION, I REALIZED THAT THE ARCHITECT HOLDS A GREAT
          AGENCY IN SHAPING SOCIAL AND CULTURAL DYNAMICS. MY PASSION FOR
          PHILOSOPHY, WORLD-POLITICS, RHETORIC, AND ARCHITECTURAL PEDAGOGY
          CRITICALLY ENGAGES ME WITH THE WORK I PURSUE.
        </p>
        <p>
          I AM HIGHLY MOTIVATED THROUGH WORKING WITH OTHER CREATIVE PEOPLE, AND
          I AM ALWAYS LOOKING TO COLLABORATE WITH DESIGNERS, SO PLEASE FEEL FREE
          TO REACH OUT TO ME ON ANY OF THESE:
        </p>
        <p>
          RESUME&nbsp;
          <a href="#" target="_blank" rel="noopener noreferrer">
            PDF
          </a>
        </p>
      </div>
        
        <a className="about__more" onClick={() => setShowMore(!showMore)}>
          {showMore ? "SHOW LESS..." : "SHOW MORE..."}
        </a>
      </div>
    </div>
  );
};