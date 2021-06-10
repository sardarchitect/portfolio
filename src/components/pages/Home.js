// MODULE IMPORTS
import React from "react";
import { Link } from "react-router-dom";
// STYLE IMPORTS
import "./_Home.scss";

export const Home = () => {
  return (
    <div className="Home" id="Home">
      <div className="Home__title">
        <h1>ARCHITECTURE</h1>
        <h1>+</h1>
        <h1>ARTIFICIAL INTELLIGENCE</h1>
      </div>
      <div className="Home__subtitle">
        <h2>ARVINDER SINGH - 2021</h2>
      </div>
      <div className="Home__text">
        ARCHITECTURE AND ARTIFICIAL INTELLIGENCE ARE SEEING AN INTERPLAY AKIN TO
        THE ADVANCEMENTS OF COMPUTER-AIDED DESIGN IN THE 80s. AI'S ROLE IN ARCHITECTURE IS INEVITABLE, AND MY CURRENT EDUCATION
        CONCERNS HOW TO ENSURE ARCHITECTS ARE THE ONES STEERING THIS
        REVOLUTION. PLEASE FEEL FREE TO CHECK OUT MY <Link to="/projects/computer-vision">CURRENT RESEARCH</Link> AND 
        MY <a target="_blank" rel="noreferrer" href="singh_resume_21.pdf">RESUME</a> TO KNOW MORE.
      </div>
    </div>
  );
};
