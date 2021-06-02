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
        THE ADVANCEMENTS OF COMPUTER-AIDED DESIGN IN THE 80s. WE ARE CURRENTLY AT AN EARLY STAGE BUT THIS TIME, THE TECHNOLOGY IS MOVING AT NECK-BREAKING
        SPEEDS. AI'S ROLE IN ARCHITECTURE IS INEVITABLE, AND MY CURRENT EDUCATION
        DEALS WITH HOW TO MAKE SURE ARCHITECTS ARE THE ONES STEERING THIS
        REVOLUTION. PLEASE FEEL FREE TO CHECK OUT MY <a target="_blank" href="https://github.com/sardarchitect">GITHUB</a> AND 
        MY <a target="_blank" href="singh_resume_21.pdf">RESUME</a> TO KNOW MORE.
      </div>
    </div>
  );
};
