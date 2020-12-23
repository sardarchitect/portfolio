import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../../stylesheets/_about.scss";

export const About = () => {
  
  const [textIdx, setTextIdx] = useState(0);
  const text = ["ART", "ARCHITECTURE", "TECHNOLOGY"];
  const [showMore, setShowMore] = useState(false);

  const about__description = showMore
    ? "about__description about__description__show"
    : "about__description about__description__hide";

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
    <div className="about">
      <div className="about__intro">
        <div className="about__intro__title">
          <h1 className="title_text">ARVINDER</h1>
          <h1 className="title_text">SINGH</h1>
        </div>
        <h2 className="about__intro__subtitle">{text[textIdx]}</h2>
      </div>

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
          FIND MY &nbsp;
          <Link to="/cv">
            FULL CV HERE
          </Link>
        </p>
      </div>

      <div className="about__more">
        <a onClick={() => setShowMore(!showMore)}>
          {showMore ? "...SHOW LESS" : "...SHOW MORE"}
        </a>
      </div>
    </div>
  );
};
