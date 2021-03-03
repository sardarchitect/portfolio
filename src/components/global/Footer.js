// MODULE IMPORTS
import React from "react";
// STYLE IMPORTS
import "./_footer.scss";

export const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="contact__description">
        <h2>
          THANKS FOR CHECKING OUT MY PORTFOLIO. I AM CURRENTLY LOOKING FOR WORK AND COLLABORATIONS WITHIN ARCHITECTURE AND AI
        </h2>
        <h2>
          FEEL FREE TO CHECK OUT MY <a target="_blank" href="https://www.linkedin.com/in/sardarchitect/" rel="noreferrer">
            LINKEDIN
          </a>
          , AND <a target="_blank" href="https://www.instagram.com/sardarchitect/" rel="noreferrer">
            INSTAGRAM
          </a>
          , OR SIMPLY REACH ME VIA <a href="mailto: sardarchitect@gmail.com">EMAIL</a>
        </h2>
      </div>
      <div className="copyright">
        <p>ARVINDER SINGH - 2021</p>
      </div>
    </div>
  );
};
