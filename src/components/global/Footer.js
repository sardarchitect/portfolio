// MODULE IMPORTS
import React from "react";
// STYLE IMPORTS
import "./_footer.scss";

export const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="contact__description">
        <p>
          THANKS FOR CHECKING OUT MY PORTFOLIO. I AM ALWAYS LOOKING FOR NEW
          PROJECTS IN ART, ARCHITECTURE, AND COMPUTER VISION TECHNOLOGIES
        </p>
        <p>
          FEEL FREE TO CHECK ME OUT ON <a target="_blank" href="https://www.linkedin.com/in/sardarchitect/">
            LINKEDIN
          </a>
          , AND <a target="_blank" href="https://www.instagram.com/sardarchitect/">
            INSTAGRAM 
          </a>
          , OR SIMPLY SEND ME AN <a href="mailto: sardarchitect@gmail.com">EMAIL</a>
        </p>
      </div>
      <div className="copyright">
        <p>ARVINDER SINGH - 2021</p>
      </div>
    </div>
  );
};
