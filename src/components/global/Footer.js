import React from "react";
import "../../stylesheets/_footer.scss";

export const Footer = () => {
  
  return (
    <footer id="contact">
      <div className="footer__bg"></div>
      <div className="contact__description">
        <p>
        I DO MY BEST WORK WITH OTHER COLLABORATORS, AND I AM ALWAYS LOOKING 
        TO COLLABORATE WITH ARCHITECTS, DESIGNERS, AND THE AI COMMUNITY
        </p>
        <p>
          PLEASE FEEL FREE TO CHECK ME OUT ON <a target="_blank" href="https://www.linkedin.com/in/sardarchitect/">LINKEDIN</a>, AND <a target="_blank" href="https://www.instagram.com/sardarchitect/">INSTAGRAM</a>, OR SIMPLY SEND ME AN <a href="mailto: sardarchitect@gmail.com">EMAIL</a>
        </p>
      </div>
      <div className="copyright">
        <p>DESIGNED BY ARVINDER SINGH - 2021</p>
      </div>
    </footer>
  );
};