import React from "react";
import "./_footer.scss";

export const Footer = () => {
  
  return (
    <footer id="contact">
      <div className="footer__bg"></div>
      <div className="contact__description">
        <p>
        I GET MOTIVATED THROUGH COLLABORATING WITH OTHER CREATIVE PEOPLE, AND
        I AM ALWAYS LOOKING TO COLLABORATE WITH ARCHITECTS, DESIGNERS, AND THE TECH WORLD
        </p>
        <p>
          PLEASE FEEL FREE TO CHECK ME OUT ON <a target="_blank" href="https://www.linkedin.com/in/sardarchitect/">LINKEDIN</a>, AND <a target="_blank" href="https://www.instagram.com/sardarchitect/">INSTAGRAM</a> OR SIMPLY SEND ME AN <a href="mailto: sardarchitect@gmail.com">EMAIL</a>
        </p>
      </div>
      <div className="copyright">
        <p>©2020 - ALL RIGHTS RESERVED - ARVINDER SINGH</p>
      </div>
    </footer>
  );
};